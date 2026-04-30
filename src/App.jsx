import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

// Code splitting: cada página se descarga solo cuando se navega a ella
const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

// Prefetch en segundo plano tras la carga inicial para evitar el spinner al navegar
function prefetchPages() {
  const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 200));
  idle(() => {
    import('./pages/ProjectsPage');
    import('./pages/TechnologiesPage');
    import('./pages/ContactPage');
    import('./pages/ProjectDetails');
  });
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    prefetchPages();
  }, []); // solo una vez al montar

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
