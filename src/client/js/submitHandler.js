import { validURL } from "./validURL";

const post = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const submitHandler = () => {
  event.preventDefault();
  const url = document.getElementById("url-input").value;

  if (validURL(url)) {

    document.getElementById("error").innerHTML = "";
    document.getElementById("text").innerHTML = "Loading...";
    document.getElementById("error").style.display = 'none'
    document.getElementById("score_tag").innerHTML = "";
    document.getElementById("agreement").innerHTML = "";
    document.getElementById("subjectivity").innerHTML = "";
    document.getElementById("confidence").innerHTML = "";
    document.getElementById("irony").innerHTML = "";
    post("http://localhost:8081/url-input", {
      url: url,
    }).then(dataBack => {


      document.getElementById("url-input").value = ''
      document.getElementById("text").innerHTML = dataBack.sentence_list[0].text;

      document.getElementById("score_tag").innerHTML =
        "Score tag: " + dataBack.score_tag;
      document.getElementById("agreement").innerHTML =
        "Agreement: " + dataBack.agreement;
      document.getElementById("subjectivity").innerHTML =
        "Subjectivity: " + dataBack.subjectivity;
      document.getElementById("confidence").innerHTML =
        "Confidence: " + dataBack.confidence;
      document.getElementById("irony").innerHTML = "Irony: " + dataBack.irony
    });
  } else {
    document.getElementById("url-input").value = ''
    document.getElementById("error").style.display = 'block'
    document.getElementById("text").innerHTML = "";
    document.getElementById("score_tag").innerHTML = "";
    document.getElementById("agreement").innerHTML = "";
    document.getElementById("subjectivity").innerHTML = "";
    document.getElementById("confidence").innerHTML = "";
    document.getElementById("irony").innerHTML = "";
    document.getElementById("error").innerHTML = "Enter valid url!";
    document.getElementById("error").classList.add('error')
    throw new Error()

  }
};


export default submitHandler;
