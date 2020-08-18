//Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners

eventListeners();

function eventListeners() {
  //cuando se envia el formulario
  document
    .querySelector('#formulario')
    .addEventListener('submit', agregarTweet);
}

// Funciones

// Añadir tweet del formulario
function agregarTweet(e) {
  e.preventDefault();
  // leer el valor del text area
  const tweet = document.getElementById('tweet').value;
  //Crear boton de eliminar
  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'borrar-tweet';
  botonBorrar.innerText = 'X';
  // Crear elemento y añadirle el contenido a la lista
  const li = document.createElement('li');
  li.innerText = tweet;
  // Añade el boton de borrar al tweet
  li.appendChild(botonBorrar);
  // Añade el tweet a la lista
  listaTweets.appendChild(li);
}
