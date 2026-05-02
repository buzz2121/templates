import Portfolio from '../components/Portfolio';
import PageHero from '../components/PageHero';

export default function PortfolioPage() {
  return (
    <div className="bg-luxury-cream">
      <PageHero 
        title="Curated"
        subtitle="Our Portfolio"
        italicWord="Masterpieces"
        image="/images/img_43.jpg"
      />
      <Portfolio />
    </div>
  );
}
