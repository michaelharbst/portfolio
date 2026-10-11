import './Header.css'
import { useState } from 'react'


function Header() {
  
  const [menuOpen, setIsMenuOpen] = useState(false)
  
  function toggleMenu() {
    setIsMenuOpen(!menuOpen)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }


  return (
    <header className="site-header">
      <div className="header-content">
        <a className="site-name" href="#home" onClick={closeMenu}>
          Michael Harbst
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? 'navigation-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>

            <li>
              <a href="#cv" onClick={closeMenu}>CV</a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
 
}

export default Header