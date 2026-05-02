import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
