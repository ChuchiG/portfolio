import { Mail, MapPin, Phone } from 'lucide-react';

export const contactInfo = [
    {
        id: 'email',
        title: 'Email',
        value: 'chuchigajate@hotmail.com',
        icon: Mail,
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-600'
    },
    {
        id: 'location',
        title: 'Ubicación',
        value: 'Salamanca, España',
        icon: MapPin,
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-600'
    },
    {
        id: 'phone',
        title: 'Teléfono',
        value: '+34 691 058 309',
        icon: Phone,
        bgColor: 'bg-green-100',
        textColor: 'text-green-600'
    }
];

export const cvPath = '/documents/cvJesusGajate.pdf';
