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
    [Route("[controller]")]
    public class ProjectKillerFeaturesController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public ProjectKillerFeaturesController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }
     
        [HttpGet("{projectId}")]
        [EnableCors("AnotherPolicy")]
        public ActionResult<string> Get(int projectId)
        {
            var killerFeaturesQuery = from killerFeature in Context.KillerFeatures
                                     where killerFeature.ProjectId == projectId
                                     select new
                                      {
                                          killerFeatureId = killerFeature.Id,
                                          killerFeatureName = killerFeature.Name,
                                          killerFeatureDescription = killerFeature.Description,
                                          killerFeatureImage = killerFeature.ImageLink
                                      };
            var response = killerFeaturesQuery.ToArray();
            return Ok(response);
        }
    }
}
