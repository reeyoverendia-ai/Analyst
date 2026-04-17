import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume'; // Import the new component
import Videos from './components/Videos'; {/* Add it right here */}

function App() {
  const [view, setView] = useState('home'); // 'home' or 'resume'

return (
    /* We add flex flex-col to ensure sections stack vertically and never overlap */
    <main className="relative w-full bg-[#FFFBF7] flex flex-col min-h-screen">
      
      {/* Navbar logic stays the same */}
      {view === 'home' && <Navbar setView={setView} />}

      {view === 'home' ? (
        /* We wrap these in a div with a gap for extra safety */
        <div className="flex flex-col">
          <Hero />
          <Skills />
          <Videos />
          <Contact />
        </div>
      ) : (
        <Resume setView={setView} />
      )}
    </main>
  );
}

export default App;