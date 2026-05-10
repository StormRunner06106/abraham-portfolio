import React from "react";
import Link from "next/link";
import { FaGithub, FaHeart, FaWhatsapp } from "react-icons/fa";
import { ButtonLink } from "./Scroller";
import { SiGmail } from "react-icons/si";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12 mt-20 footer-b">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="animated-gradient">Max</span>
            </div>
            <p className="text-gray-300 mb-4">
              Senior Full-Stack Developer passionate about building exceptional
              web experiences and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/happy-code-vector"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </Link>
              <Link
                href="https://wa.me/16725376407"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={28} />
              </Link>
              <Link
                href="mailto:petroworkermail@gmail.com"
                className="hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <SiGmail size={28} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <ButtonLink
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                  buttonText="Home"
                  elementId="hero"
                />
              </li>
              <li>
                <ButtonLink
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                  buttonText="About"
                  elementId="about"
                />
              </li>
              <li>
                <ButtonLink
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                  buttonText="Experience"
                  elementId="experience"
                />
              </li>
              <li>
                <ButtonLink
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                  buttonText="Projects"
                  elementId="previouswork"
                />
              </li>
              <li>
                <ButtonLink
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                  buttonText="Contact"
                  elementId="contact"
                />
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="mailto:petroworkermail@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  Gmail: petroworkermail@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/16725376407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  WhatsApp: +16725376407
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/happy-code-vector"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  GitHub: happy-code-vector
                </a>
              </li>
              <li>
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Available for opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p className="mb-4 md:mb-0">
              © {currentYear} Max. All rights reserved.
            </p>
            <p className="flex items-center">
              Made with <FaHeart className="text-red-500 mx-2" size={14} />{" "}
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
