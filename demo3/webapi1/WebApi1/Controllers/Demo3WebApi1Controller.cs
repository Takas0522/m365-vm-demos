using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi1.Util;

namespace WebApi1.Controllers
{
    public class ReturnDamaModel
    {
        public string GraphResult { get; set; }
        public string ApiResult { get; set; }
    }

    [ApiController]
    [Route("[controller]")]
    public class Demo3WebApi1Controller : ControllerBase
    {

        private readonly ITokenProvider _tokenProvider;
        private readonly IWebApiAccess _webApiAccess;
        public Demo3WebApi1Controller(
            ITokenProvider tokenProvider,
            IWebApiAccess webApiAccess
        )
        {
            _tokenProvider = tokenProvider;
            _webApiAccess = webApiAccess;
        }

        [HttpGet]
        public async Task<ReturnDamaModel> Get()
        {
            var resGraph = await _tokenProvider.GetTokenOnBeHalfOfFlowAsync(new List<string> { "https://graph.microsoft.com/user.read" });
            var graphResult = await _webApiAccess.GetRequestAsync(@"https://graph.microsoft.com/v1.0/me", resGraph);

            var apiToken = await _tokenProvider.GetTokenOnBeHalfOfFlowAsync(new List<string> { "api://7cec9861-a66a-44b3-8a6d-f4339520157a/access" });
            var apiResult = await _webApiAccess.GetRequestAsync(@"https://localhost:44328/Demo3WebApi2", apiToken);

            var ret = new ReturnDamaModel {
            ApiResult = apiResult,
            GraphResult = graphResult
            };
            return ret;
        }
    }
}
