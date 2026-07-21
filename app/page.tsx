import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Impact from '../components/sections/Impact';
import Vault from '../components/sections/Vault';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Impact />
      <Vault />
      <Contact />
      <Footer />
    </main>
  );
}
