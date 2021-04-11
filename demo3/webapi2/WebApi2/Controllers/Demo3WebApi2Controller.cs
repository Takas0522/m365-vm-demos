using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace WebApi2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class Demo3WebApi2Controller : ControllerBase
    {

        private readonly ILogger<Demo3WebApi2Controller> _logger;

        public Demo3WebApi2Controller(ILogger<Demo3WebApi2Controller> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Get()
        {
            var userName = User.Claims.Where(w => w.Type == "name").FirstOrDefault().Value;
            return $"Demo3 WebApi2 Login User = {userName}";
        }
    }
}
