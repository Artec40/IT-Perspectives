using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using my_api.Controllers.Requests;
using my_api.Databases;

namespace my_api.Controllers
{
    [ApiController]
    [EnableCors("AnotherPolicy")]
    [Route("[controller]")]
    public class TeammateProjectsController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public TeammateProjectsController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet("{teammateId}")]
        public ActionResult<IEnumerable<string>> Get([FromRoute] [Required] int teammateId)
        {
            var teammateProjectsQuery = from project in Context.Projects
                join techImage in Context.TechnologyImages on project.Id equals techImage.ProjectId
                join tmProjects in Context.TeammateProjects on project.Id equals tmProjects.ProjectId
                where tmProjects.TeammateId == teammateId
                select new
                {
                    projectId = project.Id,
                    projectPhoto = project.Photo,
                    projectName = project.Name,
                    projectDescription = project.Description,
                    projectTechnologyImages = techImage.TechnologyImagePath
                };
            var response = teammateProjectsQuery.ToArray();
            if (response.Any())
                return Ok(response);
            return NotFound();
        }

        [HttpPost]
        public ActionResult Post([FromBody] [Required] TeammateProject teammateProject)
        {
            Context.TeammateProjects.Add(teammateProject);
            Context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] [Required] int id)
        {
            var teammateProjects = from tp in Context.TeammateProjects
                where tp.Id == id
                select tp;
            var curTeammateProjects = teammateProjects.SingleOrDefault();
            if (curTeammateProjects == null) return NotFound();
            Context.TeammateProjects.Remove(curTeammateProjects);
            Context.SaveChanges();
            return Ok();
        }
    }
}