using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_api.Controllers.Requests
{
    public class TeammatePutRequestBody
    {
        public string ShortName { get; set; }
        public string FullName { get; set; }
        public string Company { get; set; }
        public string Location { get; set; }
        public string Website { get; set; }
        public string Phone { get; set; }
        public int ArticlesCount { get; set; }
        public string PersonalInfo { get; set; }
    }
}
