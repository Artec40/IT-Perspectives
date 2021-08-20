using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_api.Controllers.Requests
{
    public class ProjectPutRequestBody
    {
        public string Photo { get; set; }
        public string Name { get; set; }        
        public string Description { get; set; }
    }
}
