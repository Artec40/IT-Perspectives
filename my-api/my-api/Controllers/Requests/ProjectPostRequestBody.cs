using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_api.Controllers.Requests
{
    public class ProjectPostRequestBody
    {
        public string Photo { get; set; }
        public string Name { get; set; }        
        public string Description { get; set; }
        public string[] TechnologyImages { get; set; }
        public IEnumerable<KillerFeatureRequest> KillerFeatures { get; set; }
        public int[] TeammatesId { get; set; }
    }
}
