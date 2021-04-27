using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Util;

namespace WebApi.Controllers
{
    public class ResultModels
    {
        public string Message { get; set; }
        public string Token { get; set; }
    }


    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class DemoController : ControllerBase
    {
        private readonly ITokenProvider _tokenProvider;


        public DemoController(ITokenProvider tokenProvider)
        {
            _tokenProvider = tokenProvider;
        }

        [HttpGet]
        public async Task<ResultModels> Get()
        {
            var apiToken = await _tokenProvider.GetTokenOnBeHalfOfFlowAsync(new List<string> { "api://5d952390-207d-468a-b727-fc9bf9ac3341/access" });
            return new ResultModels { Message = "Return WebAPI Result", Token = apiToken };
        }
    }
}
