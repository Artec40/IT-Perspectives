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
    public class TariffsController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public TariffsController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }

        [HttpGet]
        [EnableCors("AnotherPolicy")]
        public ActionResult<IEnumerable<string>> Get()
        {
            var tariffsQuery = from tariff in Context.Tariffs
                               select new
                               {
                                   tariffId = tariff.Id,
                                   tariffName = tariff.Name,
                                   tariffShortDescription = tariff.ShortDescription,
                                   tariffFullDescription = tariff.FullDescription,
                                   tariffPrice = tariff.Price
                               };
            var tariffs = tariffsQuery.ToArray();
            if (tariffs.Any())
                return Ok(tariffs);
            return NotFound();
        }
    }
}
