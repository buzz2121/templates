import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Technology from '../components/Technology';
import FAQ from '../components/FAQ';
import CaseStudies from '../components/CaseStudies';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Technology />
      <Services />
      <CaseStudies />
      <Testimonials />
      <FAQ />
    </>
  );
}
