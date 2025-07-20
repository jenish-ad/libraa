import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-sm">
            We are a platform dedicated to helping users with modern tools and clean design.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm space-y-1">
            <li>Email: support@example.com</li>
            <li>Phone: +977 9800000000</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Socials</h3>
          <ul className="text-sm space-y-1">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>

        {/* Location & Privacy */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-sm">Kathmandu, Nepal</p>

          <div className="mt-4">
            <Link to="/privacyPolicy"className="text-sm underline hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Jenish Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
