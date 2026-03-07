import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemsSection from './components/ProblemsSection';
import SolutionsSection from './components/SolutionsSection';
import AuthoritySection from './components/AuthoritySection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemsSection />
        <SolutionsSection />
        <AuthoritySection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
