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
                                     teammateArticlesCount = teammate.ArticlesCount,
                                 };
            var response = teammateQuery.Single();
            return Ok(response);
        }
    }
}
