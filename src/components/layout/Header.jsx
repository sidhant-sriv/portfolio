// src/components/layout/Header.jsx
import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="glass mx-auto flex justify-between items-center px-6 py-3 rounded-b-2xl max-w-6xl">
        <div className="text-xl font-semibold tracking-tight">
          <a href="/" className="hover:opacity-80 transition-opacity">Sidhant Srivastava</a>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {['Home', 'About', 'Projects', 'Skills'].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              {section}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <a
            href="https://github.com/sidhant-sriv"
            className="hidden md:inline-block mx-2 hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sidhant-srivastava"
            className="hidden md:inline-block mx-2 hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:sidhant.sriv@gmail.com"
            className="hidden md:inline-block mx-2 hover:opacity-80 transition-opacity"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="tel:+1234567890"
            className="hidden md:inline-block mx-2 hover:opacity-80 transition-opacity"
          >
            <FaPhone size={20} />
          </a>
          <button
            className="md:hidden ml-4"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden glass mx-4 rounded-2xl mt-2">
          <nav className="flex flex-col items-center space-y-6 py-6">
            {['Home', 'About', 'Projects', 'Skills'].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:opacity-80 text-xl"
                onClick={() => setNavOpen(false)}
              >
                {section}
              </Link>
            ))}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/sidhant-sriv"
                className="hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/sidhant-srivastava"
                className="hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:sidhant.sriv@gmail.com"
                className="hover:opacity-80 transition-opacity"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="tel:+916366017002"
                className="hover:opacity-80 transition-opacity"
              >
                <FaPhone size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header