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
    public class TeammatesController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public TeammatesController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet]
        [EnableCors("AnotherPolicy")]
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
    }
}
