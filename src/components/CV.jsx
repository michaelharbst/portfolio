import './CV.css'

function CvSection() {
  return (
    <section id="cv" className="cv-section">
      <div className="cv-content">
        <div>
          <p className="section-label">Experience and education</p>
          <h2>View my CV</h2>

          <p className="cv-description">
            My online CV provides a detailed overview of my experience
            in software development, agile delivery and cross-team
            coordination, together with my education and certifications.
          </p>
        </div>

        <a
          className="cv-button"
          href="https://michaelharbst.github.io/CV/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open online CV
        </a>
      </div>
    </section>
  )
}

export default CvSection