using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_api.Controllers.Requests
{
    public class ArticlePutRequestBody
    {
        public string ImageLink { get; set; }
        public string Title { get; set; }        
        public string Description { get; set; }
        public DateTime Date { get; set; }
    }
}
