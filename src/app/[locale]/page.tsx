import Navbar from '@/widgets/Navbar/Navbar';
import Home from '@/features/OnePage/Home';
import AboutUs from '@/features/OnePage/AboutUs';
import Pricing from '@/features/OnePage/Pricing';
import Contact from '@/features/OnePage/Contact';
import Footer from '@/widgets/Footer/Footer';

const LandingParts = [Navbar, Home, AboutUs, Pricing, Contact, Footer];

export default function HomePage() {
  return (
    <>
      {LandingParts.map((Component, idx) => (
        <Component key={idx} />
      ))}

    </>
  );
};


