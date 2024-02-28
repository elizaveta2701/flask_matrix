// Выбираем DOM элемент с классом 'matrix'
const matrix = document.querySelector('.matrix');

// Вычисляем количество столбцов, основываясь на ширине окна браузера
const columns = Math.floor(window.innerWidth / 10);

// Создаем массив случайных значений, определяющих начальное положение каждого "потока" символов
const streams = [...Array(columns)].map(() => Math.floor(Math.random() * window.innerHeight));

// Функция для отрисовки матрицы
function drawMatrix() {
  // Очищаем содержимое элемента с классом 'matrix'
  matrix.innerHTML = '';

  // Проходимся по каждому потоку
  streams.forEach((stream, i) => {
    // Генерируем случайное количество случайных чисел, которые будут символами потока
    const codes = [...Array(Math.floor(Math.random() * 20) + 5)].map(() => Math.floor(Math.random() * 10));

    // Создаем элемент для потока
    const streamElement = document.createElement('div');
    streamElement.classList.add('stream');

    // Устанавливаем положение потока
    streamElement.style.left = (i * 10) + 'px';
    streamElement.style.top = stream + 'px';

    // Добавляем каждый символ потока в элемент потока
    codes.forEach((code, j) => {
      const charElement = document.createElement('span');
      charElement.textContent = code;

      // Устанавливаем задержку анимации для каждого символа
      charElement.style.animationDelay = (j * 0.1) + 's';
      streamElement.appendChild(charElement);
    });

    // Добавляем элемент потока в контейнер матрицы
    matrix.appendChild(streamElement);
  });
}

// Вызываем функцию отрисовки матрицы
drawMatrix();

// Устанавливаем интервал для периодического обновления отрисовки матрицы
setInterval(drawMatrix, 150);
