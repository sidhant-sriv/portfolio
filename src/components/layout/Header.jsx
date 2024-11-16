// src/components/layout/Header.jsx
import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className="fixed w-full bg-black text-lilac z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <a href="/">Sidhant Srivastava</a>
        </div>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Projects', 'Skills'].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-white transition-colors"
            >
              {section}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <a
            href="https://github.com/sidhant-sriv"
            className="hidden md:inline-block mx-2 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sidhant-srivastava"
            className="hidden md:inline-block mx-2 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
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
        <div className="md:hidden bg-black text-lilac">
          <nav className="flex flex-col items-center space-y-6 py-6">
            {['Home', 'About', 'Projects', 'Skills'].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white text-xl"
                onClick={() => setNavOpen(false)}
              >
                {section}
              </Link>
            ))}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/sidhant-sriv"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/sidhant-srivastava"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:sidhant.sriv@gmail.com"
                className="hover:text-white transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header