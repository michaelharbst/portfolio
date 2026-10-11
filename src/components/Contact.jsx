import './contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-heading">
          <p className="section-label">Get in touch</p>
          <h2>Contact</h2>

          <p>
            If you want to know more you can reach me via email or connect with me on LinkedIn. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <address className="contact-details">
          <div className="contact-item">
            <h3>Email</h3>

            <a href="mailto:michael.harbst@gmail.com" target="_blank" rel="noopener noreferrer">
              michael.harbst@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <h3>LinkedIn</h3>|

            <a
              href="https://www.linkedin.com/in/michael-harbst/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn profile
            </a>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>

            <a
              href="https://github.com/michaelharbst"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/michaelharbst
            </a>
          </div>

          <div className="contact-item">
            <h3>Location</h3>
            <p>Bjärred, Skåne, Sweden</p>
          </div>
        </address>
      </div>
    </section>
  )
}

export default Contact