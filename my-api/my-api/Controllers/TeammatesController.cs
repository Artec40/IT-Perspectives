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
    public class TeammatesController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public TeammatesController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var teammatesQuery = from teammate in Context.Teammates
                                 select new
                                 {
                                     teammateId = teammate.Id,
                                     teammatePhoto = teammate.Photo,
                                     teammateShortName = teammate.ShortName,
                                     teammateFullName = teammate.FullName,
                                     teammateCompany = teammate.Company,
                                     teammateArticlesCount = teammate.ArticlesCount,
                                 };
            var teammates = teammatesQuery.ToArray();
            return Ok(teammates);
        }

        [HttpGet("{teammateId}")]
        public ActionResult<string> Get(int teammateId)
        {
            var teammateQuery = from teammate in Context.Teammates
                                where teammate.Id == teammateId
                                select new
                                {
                                    teammateId = teammate.Id,
                                    teammatePhoto = teammate.Photo,
                                    teammateShortName = teammate.ShortName,
                                    teammateFullName = teammate.FullName,
                                    teammateCompany = teammate.Company,
                                    teammateLocation = teammate.Location,
                                    teammateWebsite = teammate.Website,
                                    teammatePhone = teammate.Phone,
                                    teammateArticlesCount = teammate.ArticlesCount,
                                    teammatePersonalInfo = teammate.PersonalInfo,
                                };
            var response = teammateQuery.SingleOrDefault(); 
            if (response == null)
                return NotFound();
            return Ok(response);
        }
        [HttpPut("{id}")]
        public ActionResult Put([FromRoute][Required] int id, [FromBody][Required] TeammatePutRequestBody request)
        {
            var teammateById = from teammate in Context.Teammates
                               where teammate.Id == id
                               select teammate;
            var curTeammate = teammateById.SingleOrDefault();
            if (curTeammate == null) return NotFound();
            curTeammate.ShortName = request.ShortName;
            curTeammate.FullName = request.FullName;
            curTeammate.Company = request.Company;
            curTeammate.Location = request.Location;
            curTeammate.Website = request.Website;
            curTeammate.Phone = request.Phone;
            curTeammate.ArticlesCount = request.ArticlesCount;
            curTeammate.PersonalInfo = request.PersonalInfo;
            Context.SaveChanges();
            return Ok();
        }
    }
}
