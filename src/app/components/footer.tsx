// components/Footer.js
export default function Footer () {
    return (
      <footer className="bg-gray-950 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
