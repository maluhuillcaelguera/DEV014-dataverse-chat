/* global describe, it, expect */
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';
describe('getApiKey', () => {

  // Prueba unitaria para verificar si getApiKey devuelve el valor de la API Key correctamente
  it('debería devolver el valor de la API Key', () => {
    // Establece un valor de API Key en Local Storage
    const apiKeyValue = 'miAPIKey';
    localStorage.setItem('apiKey', apiKeyValue);

    // Llama a la función getApiKey y verifica si devuelve el valor esperado
    expect(getApiKey()).toBe(apiKeyValue);
  });
});

// Describe el conjunto de pruebas para la función setApiKey
describe('setApiKey', () => {

  // Prueba unitaria para verificar si setApiKey establece correctamente la API Key en Local Storage
  it('debería establecer correctamente la API Key', () => {
    // Establece un valor de API Key utilizando setApiKey
    const apiKeyValue = 'miAPIKey';
    setApiKey(apiKeyValue);

    // Verifica si el valor de API Key en Local Storage es igual al valor establecido
    expect(localStorage.getItem('apiKey')).toBe(apiKeyValue);
  });
});
