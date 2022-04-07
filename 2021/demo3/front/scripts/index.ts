import { ApiAccess } from "./api-access";
import { Auth } from "./auth";

console.log('hoge')

const auth = new Auth();

auth.loginRedirect();

const apiAccess = new ApiAccess(auth);

const orgelement = document.getElementById('org-api-access');
if (orgelement) {
    orgelement.onclick = () => {
        apiAccess.getApiData();
    };
}