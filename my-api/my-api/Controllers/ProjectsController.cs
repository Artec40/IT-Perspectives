using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using my_api.Databases;

namespace my_api.Controllers
{
    [ApiController]
    [EnableCors("AnotherPolicy")]
    [Route("[controller]")]
    public class ProjectsController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public ProjectsController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var projectsQuery = from project in Context.Projects
                                select new
                                {
                                    projectId = project.Id,
                                    projectPhoto = project.Photo,
                                    projectName = project.Name,
                                    projectDescription = project.Description,
                                    projectTechnologyImage = project.TechnologyImage
                                };
            var projects = projectsQuery.ToArray();
            return Ok(projects);
        }

        [HttpGet("{projectId}")]
        public ActionResult<string> Get(int projectId)
        {
            var projectQuery = from project in Context.Projects
                               where project.Id == projectId
                                select new
                                {
                                    projectId = project.Id,
                                    projectPhoto = project.Photo,
                                    projectName = project.Name,
                                    projectDescription = project.Description,
                                    projectTechnologyImage = project.TechnologyImage
                                };
            var response = projectQuery.Single();
            return Ok(response);
        }
    }
}
