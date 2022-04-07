using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class Demo4WeApi1Controller : ControllerBase
    {
        private readonly ILogger<Demo4WeApi1Controller> _logger;

        public Demo4WeApi1Controller(ILogger<Demo4WeApi1Controller> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ResultData Get()
        {
            var userName = User.Claims.Where(w => w.Type == "name").FirstOrDefault().Value;
            return new ResultData
            {
                Message = $"Demo4 WebApi1 Login User = {userName}"
            };
        }
    }
    public class ResultData
    {
        public string Message { get; set; }
    }
}
