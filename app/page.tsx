import Nav from '../components/sections/Nav';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Impact from '../components/sections/Impact';
import HowIThink from '../components/sections/HowIThink';
import Vault from '../components/sections/Vault';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Impact />
      <HowIThink />
      <Vault />
      <Contact />
      <Footer />
    </main>
  );
}
