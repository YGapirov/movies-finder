import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: silver;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Стилізація скрола */
/* Додаємо стилі для всіх скролбарів */
::-webkit-scrollbar {
  width: 10px; /* Ширина скролбара */
}

/* Стилізуємо фон скролбара */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* Фон */
}

/* Стилізуємо "ручку" скролбара */
::-webkit-scrollbar-thumb {
  background: #888; /* Колір "ручки" */
}

/* Стилізуємо кнопки скролбара */
::-webkit-scrollbar-button {
  display: none; /* Ховаємо кнопки */
}

/* Стилізуємо кутовий елемент скролбара */
::-webkit-scrollbar-corner {
  background: transparent; /* Фон */
}

`;
