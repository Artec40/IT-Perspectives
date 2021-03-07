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
    public class AccountsController : ControllerBase
    {
        protected readonly ITPerspectivesContext Context;

        public AccountsController(ITPerspectivesContext context)
        {
            Context = context;
            Context.Database.EnsureCreated();
        }
        
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            var accountsQuery = from account in Context.Accounts
                                 select new
                                 {
                                     accountId = account.Id,
                                     accountName = account.Name,
                                     accountPassword = account.Password
                                 };
            var accounts = accountsQuery.ToArray();
                return Ok(accounts);
        }
    }
}
