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
    public class ValuesController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public ValuesController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet("teammates")]
        public ActionResult<IEnumerable<string>> Get()
        {
            var teammatesQuery = from teammate in Context.Teammates
                                 select teammate;
            var teammates = teammatesQuery.ToArray();
            return Ok(teammates);
        }
    }
}
