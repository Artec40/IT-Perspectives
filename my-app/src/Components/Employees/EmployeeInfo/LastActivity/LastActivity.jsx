import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'

const LastActivity = ({projects}) => {

    let employeeProjects = projects.map(p => <ProjectCard image={p.projectPhoto}
                                                          description={p.projectDescription}
                                                          title={p.projectName}/>)

    return <div>
        <h3>Последняя активность</h3>
        {employeeProjects}
    </div>
}

export default LastActivity