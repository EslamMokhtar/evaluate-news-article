import submitHandler from "./js/submitHandler";

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn-submit");

  button.addEventListener("click", () => {
    submitHandler();
  });
});
export { submitHandler };
