import './Skills.css'

function Skills() {
  const skillGroups = [
    {
      id: 1,
      title: 'Technical foundation',
      skills: [
        'C#',
        '.NET',
        'SQL',
        'Oracle',
        'MS SQL Server',
        'APL',
         'Unit testing',
        'Backend development',
        'Performance optimisation',
        'Test Driven Development (TDD)',
        'eXtreme Programming (XP)',
      ],
    },
    {
      id: 2,
      title: 'Current development focus',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Vite',
        'Bootstrap',
        'LocalStorage',
        'Vitest',
        'React testing library',
        'LINQ',
        'JSON',
        'Azure AI',
      ],
    },
    {
      id: 3,
      title: 'Tools and practices',
      skills: [
        'Git',
        'GitHub',
        'Visual Studio Code',
        'Visual Studio',
        'CI/CD',
        'Quality gates',
        'Automatic testing',
        'Responsive design',
        'Github Actions'
      ],
    },
    {
      id: 4,
      title: 'Agile delivery',
      skills: [
        'Scrum',
        'kanban',
        'SAFe',
        'LeSS',
        'Scrum Master',
        'Agile Delivery Lead',
        'Agile coaching',
        'Release Train Engineer',
        'Release planning',
        'Facilitation',
        'Flow metrics',
        'Dependency and risk management',
        'OKRs',
        'Change management (ADKAR)',
        'Cross-team coordination',
        'Team development',
      ],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <div className="skills-heading">
          <p className="section-label">What I work with</p>
          <h2>Skills</h2>

          <p>
            A combination of software development, technical delivery
            and experience supporting development teams.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.id}>
              <h3>{group.title}</h3>

              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills