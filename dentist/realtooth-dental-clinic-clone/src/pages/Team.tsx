import Team from '../components/Team';

export default function TeamPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary-900 py-24 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Our Expert Team</h1>
        <p className="text-primary-200">Meet the specialists behind your perfect smile.</p>
      </div>
      <Team />
    </div>
  );
}
