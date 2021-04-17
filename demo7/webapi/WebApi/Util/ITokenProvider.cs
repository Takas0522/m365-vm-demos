using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Util
{
    public interface ITokenProvider
    {
        Task<string> GetTokenOnBeHalfOfFlowAsync(IEnumerable<string> scopes);
    }
}