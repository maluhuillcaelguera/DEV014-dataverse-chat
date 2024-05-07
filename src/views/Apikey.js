import { setApiKey } from "../lib/apiKey.js";
import { navigateTo } from "../router.js";

const ApiKey = () => {
    const containerApikey = document.createElement("div");
    containerApikey.classList.add("containerapikey");
  
    
  
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-Container");
    containerApikey.appendChild(formContainer);
  
    const titleApikey = document.createElement("h1");
    titleApikey.classList.add("title");
    titleApikey.textContent = "Api Key";
    formContainer.appendChild(titleApikey);
  
    const inputApiKeyText = document.createElement("input");
    inputApiKeyText.setAttribute("type", "text");
    inputApiKeyText.setAttribute("placeholder", "Escribe aqui tu ApiKey");
    inputApiKeyText.classList.add("message-api-key-input");
    formContainer.appendChild(inputApiKeyText);
  
    const saveButton = document.createElement("button");
    saveButton.classList.add("apiKey-save-button");
    saveButton.textContent = "Guardar";
    formContainer.appendChild(saveButton);
  
    saveButton.addEventListener("click", () => {
      if (inputApiKeyText.value === "") {
        alert("Debes ingresar una ApiKey valida");
        saveButton.disabled = true;
      } else {
        saveButton.disabled = false;
        setApiKey(inputApiKeyText.value);
        inputApiKeyText.value= "";
      }
    });

    // Crear el botón
    const backButton = document.createElement("button");
    // Crear el texto del botón
    const backButtonText = document.createTextNode("Volver");
    // Agregar el texto al botón
    backButton.appendChild(backButtonText);
    // Añadir una clase al botón (opcional)
    backButton.classList.add("back-button");
    // Añadir el botón al contenedor
    containerApikey.appendChild(backButton);
        backButton.addEventListener("click", () => {
        navigateTo("/");
        });

    return containerApikey;
  };
  
  export default ApiKey;