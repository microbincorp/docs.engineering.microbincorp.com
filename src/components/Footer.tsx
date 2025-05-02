
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t">
      <div className="container px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">MicroBin Docs</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Complete documentation for MicroBin Corporation's products, solutions, and platforms.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Hardware</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hardware/sbc" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Single Board Computers</Link></li>
              <li><Link to="/hardware/som" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">System on Modules</Link></li>
              <li><Link to="/hardware/io" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">I/O Boards</Link></li>
              <li><Link to="/hardware/devkit" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Development Kits</Link></li>
              <li><Link to="/hardware/ibc" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Infinite Board Computers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/iot-dashboard" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">IoT Dashboard</Link></li>
              <li><Link to="/platformq" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">PlatformQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {/* Changed getting-started and support links to use # instead since these routes don't exist yet */}
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Getting Started</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Support</a></li>
              <li><a href="https://microbin.io" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">MicroBin Website</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>&copy; {currentYear} MicroBin Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
