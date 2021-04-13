import { AdalAuth } from "./adal-auth";
import { ApiAccess } from "./api-access";
import { MsalAuth } from "./msal-auth";

const adalAuth = new AdalAuth()
const msalAuth = new MsalAuth();

adalAuth.login();
console.log(adalAuth.userName);
msalAuth.login(adalAuth.userName);

const apiAccess = new ApiAccess(adalAuth, msalAuth);

const orgelement = document.getElementById('org-api-access');
if (orgelement) {
    orgelement.onclick = () => {
        apiAccess.getApiDatav1();
    };
}

const orgelement2 = document.getElementById('org-api-access2');
if (orgelement2) {
    orgelement2.onclick = () => {
        apiAccess.getApiDatav2();
    };
}

