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
    public class KillerFeaturesController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public KillerFeaturesController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet]
        [EnableCors("AnotherPolicy")]
        public ActionResult<IEnumerable<string>> Get()
        {
            var killerFeaturesQuery = from killerFeature in Context.KillerFeatures
                                      select new
                                      {
                                          killerFeatureId = killerFeature.Id,
                                          killerFeatureName = killerFeature.Name,
                                          killerFeatureDescription = killerFeature.Description,
                                          killerFeatureImage = killerFeature.ImageLink
                                      };
            var killerFeatures = killerFeaturesQuery.ToArray();
            return Ok(killerFeatures);
        }        
        [HttpGet("{projectId}")]
        [EnableCors("AnotherPolicy")]
        public ActionResult<string> Get(int projectId)
        {
            var killerFeatureQuery = from killerFeature in Context.KillerFeatures
                                     where killerFeature.ProjectId == projectId
                                     select new
                                      {
                                          killerFeatureId = killerFeature.Id,
                                          killerFeatureName = killerFeature.Name,
                                          killerFeatureDescription = killerFeature.Description,
                                          killerFeatureImage = killerFeature.ImageLink
                                      };
            var response = killerFeatureQuery.Single();
            return Ok(response);
        }
    }
}
