import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemsSection from './components/ProblemsSection';
import SolutionsSection from './components/SolutionsSection';
import AuthoritySection from './components/AuthoritySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProblemsSection />
        <SolutionsSection />
        <AuthoritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
