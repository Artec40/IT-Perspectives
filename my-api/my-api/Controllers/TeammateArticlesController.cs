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
    public class TeammateArticlesController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public TeammateArticlesController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet("{teammateId}")]
        public ActionResult<IEnumerable<string>> Get(int teammateId)
        {
            var teammateArticlesQuery = from article in Context.Articles
                                        where article.TeammateId == teammateId
                                        select new
                                        {
                                            articleId = article.Id,
                                            articleImageLink = article.ImageLink,
                                            articleTitle = article.Title,
                                            articleDescription = article.Description,
                                            articleDate = article.Date,
                                            authorName = article.Teammate.ShortName,
                                            authorPhoto = article.Teammate.Photo
                                        };
            var response = teammateArticlesQuery.ToArray();
            return Ok(response);
        }
    }
}
