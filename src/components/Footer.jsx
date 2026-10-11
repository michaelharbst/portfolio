import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          &copy; {currentYear} Michael Harbst
        </p>

        <a href="#home">
          Home
        </a>
      </div>
    </footer>
  )
}

export default Footer