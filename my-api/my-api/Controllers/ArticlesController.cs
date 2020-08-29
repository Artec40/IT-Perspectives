using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using my_api.Databases;

namespace my_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticlesController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public ArticlesController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var articlesQuery = from article in Context.Articles
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
            var articles = articlesQuery.ToArray();
            return Ok(articles);
        }
    }
}
