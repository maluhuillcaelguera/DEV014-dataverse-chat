// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

// Define una función llamada communicateWithOpenAI que acepta un array de mensajes y un ID (o un array de IDs)
export const communicateWithOpenAI = (messages, id) => {
  // Inicializa un array para almacenar las promesas de las solicitudes a la API
  const promises = [];

  // Verifica si el ID es un array, lo cual indica múltiples IDs para solicitudes separadas
  if (Array.isArray(id)) {
    // Si es un array, itera sobre cada ID para hacer una solicitud por cada uno
    for (let i = 0; i < id.length; i++) {
      // Realiza la solicitud y guarda la promesa en el array de promesas
      const result = makeRequest(messages, id[i]);
      promises.push(result);
    }
  } else {
    // Si el ID no es un array, hace una sola solicitud y guarda la promesa
    const result = makeRequest(messages, id);
    promises.push(result);
  }

  // Función interna para realizar la solicitud a la API de OpenAI
  function makeRequest(messages, id) {
    // Obtiene la API KEY desde el archivo apiKey.js
    const OPENAI_API_KEY = getApiKey();
    // Configura los datos para la solicitud a la API
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: `${messages}` },
        {
          role: "system",
          content: `Responde en primera persona como si fuera este personaje: ${id}`,
        },
      ],
      temperature: 0.7,
    };

    // Realiza la solicitud POST a la API de OpenAI
    return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
    // Procesa la respuesta
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to communicate with OpenAI');
      }
      return response.json();
    })
    // Extrae las opciones de respuesta de la IA
    .then((data) => {
      return data.choices;
    })
    // Maneja cualquier error
    .catch((error) => {
      throw error;
    });
  }

  // Devuelve una promesa que resuelve todas las promesas de las solicitudes a la API
  return Promise.all(promises)
    .then((results) => {
      return results;
    })
    // Maneja cualquier error que ocurra durante las solicitudes
    .catch((error) => {
      throw error;
    });
};
