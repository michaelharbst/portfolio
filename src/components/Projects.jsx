import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal CV Website',
      description:
        'A responsive online CV presenting my professional experience, education, skills and certifications.',
      technologies: [
        'HTML',
        'CSS',
        'Flexbox',
        'CSS Grid',
        'GitHub Pages',
      ],
      repositoryUrl: 'https://github.com/michaelharbst/CV',
      liveUrl: 'https://michaelharbst.github.io/CV/',
    },
    {
      id: 2,
      title: 'Bjärreds Brödhus',
      description:
        'A responsive business website for a fictional local bakery, including products, gallery, contact information and opening hours.',
      technologies: [
        'HTML',
        'CSS',
        'Flexbox',
        'CSS Grid',
        'GitHub Pages',
      ],
      repositoryUrl:
        'https://github.com/michaelharbst/bakery-website',
      liveUrl:
        'https://michaelharbst.github.io/bakery-website/',
    },
     {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website to showcase my projects and skills.',
      technologies: [
        'HTML',
        'CSS',
        'Flexbox',
        'CSS Grid',
        'React',
        'Vite',
        'GitHub Pages',
      ],
      repositoryUrl:
        'https://github.com/michaelharbst/portfolio',
      liveUrl:
        'https://michaelharbst.github.io/portfolio/',
    },
       {
      id: 3,
      title: 'bank accounting app',
      description:
        'Console application to keep track of expenses and income',
      technologies: [
        'C#',
      ],
      repositoryUrl:
        'https://github.com/michaelharbst/bank-account' },
              {
      id: 3,
      title: 'Asset tracking app',
      description:
        'Console application to keep track of a companies assets',
      technologies: [
        'C#',
      ],
      repositoryUrl:
        'https://github.com/michaelharbst/Asset-tracking' },

    {
      id: 3,
      title: 'web/mobile bank account',
      description:
        'A responsive dashboard for bankaccount to showcase my projects and skills.',
      technologies: [
        'HTML',
        'CSS',
        'Bootstrap',
        'React',
        'Vite',
        'LocalStorage',
        'GitHub Pages',
      ],
      repositoryUrl:
        'https://github.com/michaelharbst/webbank-account',
      liveUrl:
        'https://michaelharbst.github.io/webbank-account/',
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <div className="projects-heading">
          <p className="section-label">Selected work</p>
          <h2>Projects</h2>

          <p>
            A selection of projects created while refreshing and
            expanding my practical development skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              repositoryUrl={project.repositoryUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects