import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10">
      <div className="max-w-screen-3xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* About */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p>
            We are a platform dedicated to helping users with modern tools and
            clean design.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li>Email: support@example.com</li>
            <li>Phone: +977 9800000000</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Our Socials</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Location & Privacy */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p>Kathmandu, Nepal</p>
          <div className="mt-4">
            <Link to="/privacyPolicy" className="underline hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Careers - NEW SECTION */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Careers</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/careers" className="hover:underline">
                Join Us
              </Link>
            </li>
            <li>
              <Link to="/careers/internships" className="hover:underline">
                Internships
              </Link>
            </li>
            <li>
              <Link to="/careers/open-roles" className="hover:underline">
                Open Roles
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Libraa Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
