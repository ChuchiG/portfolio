"use server";

import { Resend } from "resend";

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: {
    services?: string;
    contact?: string;
    websiteUrl?: string;
  };
  data?: {
    services: string[];
    contact: string;
    websiteUrl?: string;
    timestamp: string;
  };
}

const VALID_SERVICES = [
  "Web a Medida",
  "SEO Local / IA",
  "Consultoría Técnica",
] as const;

export async function submitDiagnosticRequest(
  payload: {
    services: string[];
    contact: string;
    websiteUrl?: string;
  }
): Promise<ContactActionResult> {
  const errors: {
    services?: string;
    contact?: string;
    websiteUrl?: string;
  } = {};

  // 1. Validación de servicios seleccionados (píldoras)
  if (!Array.isArray(payload.services) || payload.services.length === 0) {
    errors.services = "Debes seleccionar al menos un servicio técnico.";
  } else {
    const invalidServices = payload.services.filter(
      (s) => !VALID_SERVICES.includes(s as (typeof VALID_SERVICES)[number])
    );
    if (invalidServices.length > 0) {
      errors.services = "Has seleccionado un servicio no reconocido.";
    }
  }

  // 2. Validación de campo de contacto (Email o Teléfono)
  const contact = payload.contact?.trim() || "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

  if (!contact) {
    errors.contact = "Por favor, introduce tu email o teléfono de contacto.";
  } else if (!emailRegex.test(contact) && !phoneRegex.test(contact.replace(/\s+/g, ""))) {
    errors.contact = "Introduce un formato válido de email (ej: info@tuempresa.com) o teléfono móvil.";
  }

  // 3. Validación de URL opcional
  const websiteUrl = payload.websiteUrl?.trim() || "";
  if (websiteUrl) {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    if (!urlPattern.test(websiteUrl)) {
      errors.websiteUrl = "Introduce un dominio web válido (ej: miempresa.es o https://miempresa.es).";
    }
  }

  // Si hay errores de validación, retornar inmediatamente
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Existen campos que requieren corrección.",
      errors,
    };
  }

  const timestampIso = new Date().toISOString();
  const formattedDate = new Date().toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
    dateStyle: "full",
    timeStyle: "short",
  });

  const record = {
    services: payload.services,
    contact,
    websiteUrl: websiteUrl || undefined,
    timestamp: timestampIso,
  };

  console.info("[Diagnostic Lead Received]", JSON.stringify(record, null, 2));

  // 4. Envío de Notificación Transaccional en Tiempo Real con Resend
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "chuchigajate@gmail.com";
      const fromEmail = process.env.RESEND_FROM_EMAIL || "Leads Web <onboarding@resend.dev>";
      const isEmail = emailRegex.test(contact);

      const servicesBadges = payload.services
        .map(
          (s) =>
            `<span style="display:inline-block;padding:6px 14px;margin:4px 4px 4px 0;background-color:#0F172A;color:#FFFFFF;border-radius:9999px;font-size:12px;font-weight:700;">${s}</span>`
        )
        .join(" ");

      const emailHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Nuevo Lead de Diagnóstico Técnico</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background-color:#F8FAFC;margin:0;padding:32px 16px;color:#0F172A;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;background-color:#FFFFFF;border-radius:24px;border:1px solid #E2E8F0;box-shadow:0 10px 30px rgba(15,23,42,0.06);overflow:hidden;">
    <!-- Cabecera -->
    <tr>
      <td style="background-color:#0F172A;padding:32px 36px;text-align:left;">
        <span style="display:inline-block;padding:4px 12px;background-color:rgba(16,185,129,0.2);color:#10B981;border:1px solid rgba(16,185,129,0.3);border-radius:9999px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
          ⚡ Lead Entrante en Tiempo Real
        </span>
        <h1 style="color:#FFFFFF;font-size:22px;font-weight:800;margin:16px 0 0 0;letter-spacing:-0.5px;">
          Nueva solicitud de Diagnóstico Técnico
        </h1>
        <p style="color:#94A3B8;font-size:13px;margin:6px 0 0 0;">
          Recibido el ${formattedDate}
        </p>
      </td>
    </tr>

    <!-- Cuerpo -->
    <tr>
      <td style="padding:36px;">
        <!-- Servicios Solicitados -->
        <div style="margin-bottom:28px;">
          <h2 style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748B;margin:0 0 10px 0;">
            1. Servicios Requeridos por la PYME
          </h2>
          <div>
            ${servicesBadges}
          </div>
        </div>

        <!-- Contacto -->
        <div style="margin-bottom:28px;background-color:#F8FAFC;padding:20px;border-radius:16px;border:1px solid #E2E8F0;">
          <h2 style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748B;margin:0 0 8px 0;">
            2. Datos de Contacto Directo
          </h2>
          <p style="font-size:18px;font-weight:800;margin:0;color:#0F172A;">
            ${
              isEmail
                ? `<a href="mailto:${contact}" style="color:#2563EB;text-decoration:none;">${contact}</a>`
                : `<a href="tel:${contact}" style="color:#2563EB;text-decoration:none;">${contact}</a> (Teléfono / WhatsApp)`
            }
          </p>
        </div>

        <!-- Web Actual (Si se facilitó) -->
        ${
          websiteUrl
            ? `
        <div style="margin-bottom:28px;background-color:#F8FAFC;padding:20px;border-radius:16px;border:1px solid #E2E8F0;">
          <h2 style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748B;margin:0 0 8px 0;">
            3. Web Actual a Diagnosticar
          </h2>
          <p style="font-size:15px;font-weight:700;margin:0;">
            <a href="${websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`}" target="_blank" rel="noopener noreferrer" style="color:#2563EB;text-decoration:underline;">
              ${websiteUrl}
            </a>
          </p>
        </div>
        `
            : ""
        }

        <!-- Botón de Acción -->
        <div style="text-align:center;padding-top:12px;">
          <a href="${isEmail ? `mailto:${contact}?subject=Diagnóstico Técnico Web y GEO para tu empresa` : `tel:${contact}`}" style="display:inline-block;padding:14px 28px;background-color:#2563EB;color:#FFFFFF;text-decoration:none;border-radius:9999px;font-weight:700;font-size:14px;box-shadow:0 4px 14px rgba(37,99,235,0.3);">
            Responder de inmediato al cliente &rarr;
          </a>
        </div>
      </td>
    </tr>

    <!-- Pie -->
    <tr>
      <td style="background-color:#F8FAFC;padding:20px 36px;border-top:1px solid #E2E8F0;text-align:center;">
        <p style="font-size:11px;color:#94A3B8;margin:0;">
          Notificación automática enviada desde <strong>jesusgajate.dev</strong> vía Resend API.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
      `;

      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: isEmail ? contact : undefined,
        subject: `🚨 Nuevo Lead PYME: Diagnóstico Técnico (${payload.services.join(", ")})`,
        text: `Nuevo lead recibido:\n\nServicios: ${payload.services.join(", ")}\nContacto: ${contact}\nWeb actual: ${websiteUrl || "No indicada"}\nFecha: ${formattedDate}`,
        html: emailHtml,
      });

      console.info("[Resend] Transactional lead notification dispatched successfully to:", toEmail);
    } catch (resendError) {
      console.error("[Resend Error] Failed to dispatch transactional email:", resendError);
      // No interrumpimos la experiencia del usuario si el servicio externo de correo falla puntualmente.
    }
  } else {
    console.warn(
      "[Resend Notice] RESEND_API_KEY no configurada en las variables de entorno. Notificación por email omitida (modo desarrollo/preview)."
    );
  }

  return {
    success: true,
    message: "Diagnóstico solicitado con éxito. Nos pondremos en contacto en menos de 24 horas.",
    data: record,
  };
}
