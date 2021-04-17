import { Auth } from "./auth";

const auth = new Auth()

auth.login();

const orgelement = document.getElementById('org-api-access');
if (orgelement) {
    orgelement.onclick = () => {
      auth.aquireToken(['api://8bb05568-f8b9-460b-bc0a-e4f1f4e3131d/access']).then(t => {
          console.log(t);
      });
    };
}
