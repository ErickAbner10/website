const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const toggleColors = document.getElementById("toggle-colors");
const rootStyle = document.documentElement.style;
const colorContainer = document.getElementById('toggle-colors');

// Función para aplicar el modo oscuro o claro
function applyDarkMode(isDarkMode) {
  if (isDarkMode) {
    document.body.classList.add("dark");
    toggleIcon.src = "assets/images/sun.svg";
    toggleText.textContent = "Light Mode";
  } else {
    document.body.classList.remove("dark");
    toggleIcon.src = "assets/images/moon.svg";
    toggleText.textContent = "Dark Mode";
  }
}

// Evento de cambio de tema con persistencia en localStorage
toggleTheme.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark");

  // Actualizamos el icono y el texto en función del modo actual
  if (isDarkMode) {
    toggleIcon.src = "assets/images/sun.svg";
    toggleText.textContent = "Light Mode";
    localStorage.setItem("darkMode", "enabled"); // Guardamos la preferencia en localStorage
  } else {
    toggleIcon.src = "assets/images/moon.svg";
    toggleText.textContent = "Dark Mode";
    localStorage.setItem("darkMode", "disabled");
  }
});

// Función para aplicar el color primario
function applyColor(color) {
  rootStyle.setProperty("--primary-color", color);
}

// Función para manejar la selección de color y guardar en localStorage
function handleColorSelection(event) {
  const selectedColor = event.target.getAttribute('data-color');
  if (selectedColor) {
    // Guardar el color en localStorage
    localStorage.setItem('selectedColor', selectedColor);
    // Aplicar el color seleccionado
    applyColor(selectedColor);
  }
}

// Evento click en el contenedor de colores
if (colorContainer) {
  colorContainer.addEventListener('click', handleColorSelection);
}

// Al cargar la página, verificar el tema y color guardados en localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedDarkMode = localStorage.getItem("darkMode");
  const savedColor = localStorage.getItem('selectedColor');

  // Aplicar el modo oscuro si estaba habilitado previamente
  if (savedDarkMode === "enabled") {
    applyDarkMode(true);
  } else {
    applyDarkMode(false);
  }

  // Aplicar el color guardado si existe
  if (savedColor) {
    applyColor(savedColor);
  }
});


// Script para abrir y cerrar el pop-up
const openPopupBtn = document.querySelector('.open-popup-btn');
const closePopupBtn = document.querySelector('#close-popup-btn');
const popupOverlay = document.querySelector('#popup-overlay');

openPopupBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'flex';
});

closePopupBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});


// formulario

