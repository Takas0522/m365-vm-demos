using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class Demo4WebApi2Controller : ControllerBase
    {

        private readonly ILogger<Demo4WebApi2Controller> _logger;

        public Demo4WebApi2Controller(ILogger<Demo4WebApi2Controller> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ResultData Get()
        {
            var userName = User.Claims.Where(w => w.Type == "name").FirstOrDefault().Value;
            return new ResultData {
                Message = $"Demo4 WebApi2 Login User = {userName}"
            };
        }
    }

    public class ResultData
    {
        public string Message { get; set; }
    }

}
