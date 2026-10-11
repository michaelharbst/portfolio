import './ProjectCard.css'

function ProjectCard({
  title,
  description,
  technologies,
  repositoryUrl,
  liveUrl,
}) {
  return (
    <article className="project-card">
      <div className="project-card-content">
        <h3>{title}</h3>

        <p className="project-description">
          {description}
        </p>

        <ul className="technology-list" aria-label="Technologies used">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View repository
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View live website
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard