using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using my_api.Controllers.Requests;
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
                join techImage in Context.TechnologyImages on project.Id equals techImage.ProjectId
                select new
                {
                    projectId = project.Id,
                    projectPhoto = project.Photo,
                    projectName = project.Name,
                    projectDescription = project.Description,
                    projectTechnologyImages = techImage.TechnologyImagePath
                };
            var projects = projectsQuery.ToArray();
            if (projects.Any())
                return Ok(projects);
            return NotFound();
        }

        [HttpGet("{projectId}")]
        public ActionResult<string> Get(int projectId)
        {
            var projectQuery = from project in Context.Projects
                join techImage in Context.TechnologyImages on project.Id equals techImage.ProjectId
                where project.Id == projectId
                select new
                {
                    projectId = project.Id,
                    projectPhoto = project.Photo,
                    projectName = project.Name,
                    projectDescription = project.Description,
                    projectTechnologyImages = techImage.TechnologyImagePath
                };
            var response = projectQuery.Single();
            if (response == null)
                return NotFound();
            return Ok(response);
        }

        [HttpPost]
        public ActionResult Post([FromBody] [Required] ProjectPostRequestBody request)
        {
            var projectNames = (from pr in Context.Projects
                select pr.Name).ToArray();

            if (request == null || projectNames.Contains(request.Name))
                return BadRequest();

            var newProjectId = (from project in Context.Projects
                select project.Id).Max() + 1;

            Context.Projects.Add(new Project
            {
                Id = newProjectId,
                Description = request.Description,
                Name = request.Name,
                Photo = request.Photo
            });

            foreach (KillerFeatureRequest kf in request.KillerFeatures)
            {
                Context.KillerFeatures.Add(new KillerFeature
                {
                    Description = kf.Description,
                    Name = kf.Name,
                    ImageLink = kf.ImageLink,
                    ProjectId = newProjectId
                });
            }

            foreach (string ti in request.TechnologyImages)
            {
                Context.TechnologyImages.Add(new TechnologyImage
                {
                    TechnologyImagePath = ti,
                    ProjectId = newProjectId
                });
            }

            foreach (int t in request.TeammatesId)
            {
                Context.TeammateProjects.Add(new TeammateProject
                {
                    ProjectId = newProjectId,
                    TeammateId = t
                });
            }

            Context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult Put([FromRoute] [Required] int id,
            [FromBody] [Required] ProjectPutRequestBody editedProject)
        {
            var projectById = from project in Context.Projects
                where project.Id == id
                select project;
            var curProject = projectById.SingleOrDefault();
            if (curProject == null) return NotFound();
            curProject.Name = editedProject.Name;
            curProject.Description = editedProject.Description;
            curProject.Photo = editedProject.Photo;
            Context.SaveChanges();
            return Ok();
        }
    }
}