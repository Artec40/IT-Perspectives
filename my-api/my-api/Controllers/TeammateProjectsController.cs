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
    public class TeammateProjectsController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public TeammateProjectsController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet("{teammateId}")]
        public ActionResult<IEnumerable<string>> Get(int teammateId)
        {
            var teammateProjectsQuery = from project in Context.Projects
                                        where project.TeammateId == teammateId
                                        select new
                                        {
                                            projectId = project.Id,
                                            projectPhoto = project.Photo,
                                            projectName = project.Name,
                                            projectDescription = project.Description,
                                            projectTechnologyImage = project.TechnologyImage
                                        };
            var response = teammateProjectsQuery.ToArray();
            return Ok(response);
        }
    }
}
