using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo2WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class Demo2ApiController : ControllerBase
    {

        private readonly ILogger<Demo2ApiController> _logger;

        public Demo2ApiController(ILogger<Demo2ApiController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Get()
        {
            var userName = HttpContext.User.Identity.Name;
            return $"Demo2 WebAPI Calling {userName}";
        }
    }
}
