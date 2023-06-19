import { AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-auto md:flex-grow md:flex-shrink-0 mb-4 md:mb-0">
            <p className="text-center text-gray-500 text-sm">
              © 1999-{new Date().getFullYear()} PayPalClone, Inc. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-auto md:flex-grow md:flex-shrink-0">
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            PayPalClone Pte. Ltd. ("3PL") has applied for a license under the Singapore Payment Services Act ("PS Act") with the Monetary Authority of Singapore. During this statutory transitional period, 3PL is operating under an exemption from holding a license and is allowed to continue to provide specific payment services.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <ul className="flex space-x-4 text">
            <li>
              <a
                href="https://github.com/nickLoza/paypal-clone-react-tailwind"
                className="text-gray-500 flex items-center gap-x-2 hover:text-gray-700 text-sm"
                target="_blank"
              >
                <AiOutlineGithub className="text-3xl"/> Repository
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
