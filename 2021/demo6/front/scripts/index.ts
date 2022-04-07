import { AdalAuth } from "./adal-auth";

const adalAuth = new AdalAuth()

adalAuth.login();

const orgelement = document.getElementById('org-api-access');
if (orgelement) {
    orgelement.onclick = () => {
        adalAuth.acquireTokenAsync('5d952390-207d-468a-b727-fc9bf9ac3341').then(res => {
            const el = document.getElementById('custom-data');
            if (el) {
                el.innerText = res;
            }
        });
    };
}
