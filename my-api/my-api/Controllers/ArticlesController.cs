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
    public class ArticlesController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public ArticlesController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet]
        [EnableCors("AnotherPolicy")]
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
            if (articles.Any())
                return Ok(articles);
            return NotFound();
        }

        [HttpPost]
        public ActionResult Post([FromBody] [Required] Article article)
        {
            Context.Articles.Add(article);
            Context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult Put([FromRoute] [Required] int id, [FromBody] [Required] ArticlePutRequestBody article)
        {
            var articleById = from art in Context.Articles
                where art.Id == id
                select art;
            var curArticle = articleById.SingleOrDefault();
            if (curArticle == null) return NotFound();
            curArticle.Title = article.Title;
            curArticle.Description = article.Description;
            curArticle.ImageLink = article.ImageLink;
            curArticle.Date = article.Date;
            Context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] [Required] int id)
        {
            var articleById = from art in Context.Articles
                where art.Id == id
                select art;
            var curArticle = articleById.SingleOrDefault();
            if (curArticle == null) return NotFound();
            Context.Articles.Remove(curArticle);
            Context.SaveChanges();
            return Ok();
        }
    }
}