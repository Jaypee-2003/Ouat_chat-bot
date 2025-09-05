import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
