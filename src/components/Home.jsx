import michaelPhoto from '../assets/Michael.jpg'
import './Home.css'

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <p className="home-label">Hello, I am</p>

          <h1>Michael Harbst</h1>

          <p className="home-title">
            Software developer with a background in agile delivery
          </p>

          <p className="home-description">
            I have a technical background in C#, .NET and SQL combined
            with several years of experience helping development teams
            deliver complex software. I am currently expanding my skills
            through projects in C#, HTML, CSS, JavaScript and React.
          </p>

          <div className="home-actions">
            <a className="primary-button" href="#projects">
              View my projects
            </a>

            <a className="secondary-button" href="#cv">
              View my CV
            </a>
          </div>
        </div>

        <div className="home-image">
          <img
            src={michaelPhoto}
            alt="Portrait of Michael Harbst"
          />
        </div>
      </div>
    </section>
  )
}

export default Home