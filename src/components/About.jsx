import './About.css'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-heading">
          {/* <p className="section-label">About me</p> */}
          <h2>Technology and teamwork</h2>
        </div>

        <div className="about-text">
          <p>
            Before moving into dedicated agile roles in 2019, I worked
            for approximately 12 years as a software developer. My
            experience includes C#, .NET, APL and SQL in financial,
            pension and insurance systems.
          </p>

          <p>
            My later roles as Scrum Master, Release Train Engineer and
            Agile Delivery Lead kept me close to software development,
            technical discussions and the challenges faced by development
            teams.
          </p>

          <p>
            I am currently refreshing and expanding my practical
            development skills through projects in C#, HTML, CSS,
            JavaScript and React, alongside studies in system development,
            application development and Azure AI.
          </p>
        </div>
      </div>

      <div className="about-highlights">
        <article className="about-highlight">
          <h3>Technical foundation</h3>
          <p>
            Experience with backend development, databases, testing,
            performance and software delivery.
          </p>
        </article>

        <article className="about-highlight">
          <h3>Delivery perspective</h3>
          <p>
            An understanding of how technology, collaboration and
            organisational conditions affect software delivery.
          </p>
        </article>

        <article className="about-highlight">
          <h3>Current focus</h3>
          <p>
            Building new applications and strengthening my skills in
            modern frontend and application development.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About