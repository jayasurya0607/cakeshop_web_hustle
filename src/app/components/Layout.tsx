import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Outlet />
      
      <footer className="bg-gradient-to-r from-amber-900 via-rose-900 to-pink-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-pink-100 text-lg mb-2">
            Made with love and sugar 
          </p>
          <p className="text-pink-200/80">
            © 2025 Sweet Moments Bakery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}