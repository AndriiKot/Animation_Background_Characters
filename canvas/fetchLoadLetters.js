'use strict';

let alphabet = [];

function loadLetters(path) {
  return fetch(path)
    .then((response) => response.json())
    .then((data) => {
      alphabet = data;
    })
    .catch((error) => console.error("Ошибка при загрузке JSON:", error));
}

export default loadLetters;
