import { filterData, filterData2, sortData, computeStats } from "../lib/dataFunctions.js";
import { data } from '../data/dataset.js';
import { renderItems } from "../components/functions.js";
//import { navigateTo } from "../router.js";

export default function Home() {
    
    const viewEl = document.createElement('div');
    viewEl.innerHTML = `
    <main>
    <h2>¡Embárcate en la búsqueda del Anillo y descubre la Tierra Media!</h2>

    <h3>Explora el universo épico de <strong>El Señor de los Anillos</strong></h3>

    <nav class="filtros">

      <label for="select-race">Filtra tu búsqueda</label>
      <select id="select-race" name="select-race" data-testid="select-filter">
          <option value="raza">Raza</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Maia">Maia</option>
          <option value="Hombre">Hombre</option>
          <option value="Elfo">Elfo</option>
          <option value="Enano">Enano</option>
          <option value="Ent">Ent</option>
          <option value="Caballo">Caballo</option>
          <option value="Criatura">Criatura</option>
      </select>

     <label for="select-age"></label>
      <select id="select-age" name="select-age" data-testid="select-filter2">
          <option value="Edad">Edad</option>
          <option value="100">Menos de 100 años</option>
          <option value="100 999">Entre 100 y 999 años</option>
          <option value="2000">2000 años o más</option>
          <option value="Desconocida">Desconocido</option>
      </select>
      <label for="select-sort"></label>
      <select id="select-sort" name="name" itemprop="name" data-testid="select-sort">
        <option value="orden">Orden</option>
        <option value="asc" name="asc">Ascendente</option>
        <option value="desc" name="desc">Descendente</option>
      </select>

      <button id="limpiar" data-testid="button-clear">Borrar filtros</button>
      
      <a href="/ChatGroup"><button id="ChatGrupalBtn" class="ChatGrupalBtn">Chat grupal</button></a>
      <a href="/apikey"><button id="ChatGrupalBtn" class="ChatGrupalBtn">Api Key</button></a>
      
    </nav>

  <nav class="contenedor-botones">
    <button id="mostrar" class="mostrar">Mostrar Promedio de las Edades</button>
  </nav>

  

  <nav class="conten-estadisticas"></nav>

  <ul id="root">  </ul>

  <p class="texto-centrado">¡Bienvenido a nuestro santuario virtual para los amantes de la trilogía de El Señor de los Anillos!
         Nuestra página es tu guía definitiva para explorar los personajes más icónicos de la saga, desde los valientes miembros de la Comunidad del Anillo hasta los temibles señores oscuros de Mordor. </p>

  <p class="texto-centrado-peliculas">Aprende más sobre las películas</p>
  
  <nav class="peliculas">
    <img src="https://i.pinimg.com/564x/1f/90/fe/1f90feb940a015ecd3918df90e094b58.jpg" alt="Nombre de la imagen">
    <img src="https://i.pinimg.com/564x/ea/72/0f/ea720f5c160e5286df9ee3feb749e213.jpg" alt="Nombre de la imagen">
    <img src="https://i.pinimg.com/564x/df/1c/a6/df1ca6dddcc57ae659f9966d4d5f9fdf.jpg" alt="Nombre de la imagen">
  </nav>

  </main>
    `;
// Selecciona el elemento <ul> con id "root"
const container  = viewEl.querySelector('#root');

// Renderiza los elementos y los inserta en el elemento <ul>
container .innerHTML = renderItems(data).innerHTML;

window.addEventListener('load', function() {
  console.log('El DOM está completamente cargado!');

// Definimos los selectores
const selector = document.querySelector("#select-race");
const selector2 = document.querySelector("#select-age");
const selectSort = document.querySelector("#select-sort");

//Eventos de cambio para los selectores

selector.addEventListener("change", (e)=>{
  applyFilters(e)
});
selector2.addEventListener("change", (e)=>{
  applyFilters(e)
});
selectSort.addEventListener("change", (e)=>{
  applyFilters(e)
});

document.querySelector('[data-testid="button-clear"]').addEventListener('click', function() {
  selector.value = 'raza';
  selector2.value = 'Edad';
  selectSort.value = 'orden';
  filteredData = [...data]; // Restauramos los datos originales
  renderFilteredItems();
  
  // Limpiamos la información de mostrar promedio de edades
  document.querySelector('.conten-estadisticas').innerHTML = '';

});

// Renderizamos los elementos al cargar la página
renderFilteredItems();

// Lógica para la función calcular
document.querySelector('#mostrar').addEventListener('click', function() {
  document.querySelector('.conten-estadisticas').innerHTML = 'La edad promedio es: ' + computeStats(filteredData) + ' años';
  //console.log(computeStats(filteredData));
});

});

let filteredData = [...data]

function applyFilters(e) {
 const id = e.target.id;
 const value = e.target.value;
 const filters = {"select-race" : "race", "select-age": "age", "select-sort": "name"}

if(filters[id] == "race"){
  filteredData = filterData([...data], filters[id], value);
}
if(filters[id] == "age"){
  filteredData = filterData2([...data], filters[id], value);
}
if(filters[id] == "name"){
  filteredData = sortData([...data], filters[id], value);
}
 
console.log(id,value,filters[id]);
 renderFilteredItems();
}


function renderFilteredItems() {
  container.innerHTML = ''; // Limpiamos el contenedor
  if (filteredData.length === 0) {
    return mostrarEmptyState();
  }
  const itemsList = renderItems(filteredData);
  container.appendChild(itemsList);
}

// Función para mostrar un mensaje cuando no hay resultados
function mostrarEmptyState() {
  container.innerHTML = ''; // Limpiamos el contenedor
  const mensajeError = document.createElement('p');
  mensajeError.textContent = 'La Tierra Media aguarda, ningún personaje encontrado. Inténtalo nuevamente.';
  mensajeError.classList.add('empty-state');
  container.appendChild(mensajeError);
}


const goToChatGrupalBtn = viewEl.querySelector("#ChatGrupalBtn");
  goToChatGrupalBtn.addEventListener("click", () => {
    navigateTo("/ChatGrupal");
  });

    return viewEl;
    
}