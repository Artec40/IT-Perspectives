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
    public class TechnologyImagesController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public TechnologyImagesController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpPost]
        public ActionResult Post([FromBody] [Required] TechnologyImage techImage)
        {
            Context.TechnologyImages.Add(techImage);
            Context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult Put([FromRoute] [Required] int id,
            [FromBody] [Required] TechnologyImagePutRequestBody techImage)
        {
            var techImageById = from ti in Context.TechnologyImages
                where ti.Id == id
                select ti;
            var curTechImage = techImageById.SingleOrDefault();
            if (curTechImage == null) return NotFound();
            curTechImage.TechnologyImagePath = techImage.TechnologyImagePath;
            Context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] [Required] int id)
        {
            var techImageById = from ti in Context.TechnologyImages
                where ti.Id == id
                select ti;
            var curTechImage = techImageById.SingleOrDefault();
            if (curTechImage == null) return NotFound();
            Context.TechnologyImages.Remove(curTechImage);
            Context.SaveChanges();
            return Ok();
        }
    }
}