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
            if (killerFeatures.Any())
                return Ok(killerFeatures);
            return NotFound();
        }

        [HttpPost]
        public ActionResult Post([FromBody] [Required] KillerFeature newKillerFeature)
        {
            Context.KillerFeatures.Add(new KillerFeature
            {
                Name = newKillerFeature.Name,
                Description = newKillerFeature.Description,
                ImageLink = newKillerFeature.ImageLink,
                ProjectId = newKillerFeature.ProjectId
            });
            Context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult Put([FromRoute] [Required] int id, [FromBody] [Required] KillerFeatureRequest killerFeature)
        {
            var killerFeatureQuery = from kf in Context.KillerFeatures
                where kf.Id == id
                select kf;
            var curKillerFeature = killerFeatureQuery.SingleOrDefault();
            if (curKillerFeature == null) return NotFound();
            curKillerFeature.Name = killerFeature.Name;
            curKillerFeature.Description = killerFeature.Description;
            curKillerFeature.ImageLink = killerFeature.ImageLink;
            Context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] [Required] int id)
        {
            var killerFeatureQuery = from kf in Context.KillerFeatures
                where kf.Id == id
                select kf;
            var curKillerFeature = killerFeatureQuery.SingleOrDefault();
            if (curKillerFeature == null) return NotFound();
            Context.KillerFeatures.Remove(curKillerFeature);
            Context.SaveChanges();
            return Ok();
        }
    }
}