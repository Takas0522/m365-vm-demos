import { ApiAccess } from "./aoi-access";
import { MsalAuth } from "./msal-auth";

const msalAuth = new MsalAuth();

msalAuth.login();

const btnel1 = document.getElementById('btn-get-token-v1');
if (btnel1) {
    btnel1.onclick = () => {
        msalAuth.aquireToken(['api://5d952390-207d-468a-b727-fc9bf9ac3341/access']).then(res => {
            const divel1 = document.getElementById('div-get-token-v1');
            if (divel1) {
                divel1.innerText = res;
            }
        });
    };
}

const btnel2 = document.getElementById('btn-get-token-v2');
if (btnel2) {
    btnel2.onclick = () => {
        msalAuth.aquireToken(['api://29b67e50-309f-4b83-810a-2b45811f26b2/access']).then(res => {
            const divel2 = document.getElementById('div-get-token-v2');
            if (divel2) {
                divel2.innerText = res;
            }
        });
    };
}

const btnel3 = document.getElementById('btn-get-token-obhf');
if (btnel3) {
    btnel3.onclick = () => {
        const ac = new ApiAccess(msalAuth);
        ac.getApiData().then(res => {
            console.log(res)
        });
    };
}