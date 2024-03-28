


// Создаем массив с данными для блоков вакансий
const vacanciesData = [
  { 
    title: "Курьер", 
    salary: "5 000 - 25 000 ₽ в день 15 - 400 ₽ за наклейку", 
    description: "Залог не обязателен", 
    imageSrc: "./assets/img/vacancy/card1.png", 
    modalText: 'Должность: Курьер\nЗарплата: 5 000 - 25 000 ₽ в день\nВозможный заработок за наклейку: 15 - 400 ₽\nЗалог: не обязателен', 
    modallocation: 'Москва', 
    modalMoney: 'от 5000 рублей в день', 
    modalLimits: 'Нет возрастных ограничений', 
    modalPLus: 'Гибкий график, быстрая оплата', 
    modalMinus: 'Работа на улице в любую погоду',  
},

{ 
    title: "Расклейщик", 
    salary: "4 000 - 15 000 ₽ в день", 
    description: "Залог не обязателен", 
    imageSrc: "./assets/img/vacancy/card2.png", 
    modalText: 'Должность: Расклейщик\nЗарплата: 4 000 - 15 000 ₽ в день\nЗалог: возможен, возвращается при сдаче оборудования', 
    modallocation: 'Санкт-Петербург', 
    modalMoney: 'от 4000 рублей в день', 
    modalLimits: 'Возраст от 18 лет', 
    modalPLus: 'Работа в команде, гибкий график', 
    modalMinus: 'Требуется высокая аккуратность',  
},

{ 
    title: "Трафаретчик", 
    salary: "до 30 000 ₽ в неделю", 
    description: "Залог не обязателен", 
    imageSrc: "./assets/img/vacancy/card3.png", 
    modalText: 'Должность: Трафаретчик\nЗарплата: до 30 000 ₽ в неделю\nЗалог: 1000 рублей, возвращается при сдаче оборудования', 
    modallocation: 'Казань', 
    modalMoney: 'до 30 000 рублей в неделю', 
    modalLimits: 'Возраст от 20 до 45 лет', 
    modalPLus: 'Выплаты каждую неделю, бонусы за результат', 
    modalMinus: 'Требуется наличие смартфона с интернетом',  
},
{ 
  title: "Переводчик", 
  salary: "40 000 - 100 000 ₽ в день.- 1 500 - 10 000 ₽ за перевод", 
  description: "Депозит от 150 000 ₽", 
  imageSrc: "./assets/img/vacancy/card4.png", 
  modalText: 'Должность: Переводчик\nЗарплата: 40 000 - 100 000 ₽ в день.- 1 500 - 10 000 ₽ за перевод', 
  modallocation: 'Казань', 
  modalMoney: 'до 30 000 рублей в неделю', 
  modalLimits: 'Возраст от 20 до 45 лет', 
  modalPLus: 'Выплаты каждую неделю, бонусы за результат', 
  modalMinus: 'Требуется наличие смартфона с интернетом',  
},
{ 
  title: "Инвестор", 
  salary: "Внесенная сумма X2 спустя полгода. Х2.5 спустя год", 
  description: "Депозит от 150 000 ₽", 
  imageSrc: "./assets/img/vacancy/card5.png", 
  modalText: 'Должность: Переводчик\nЗарплата: 40 000 - 100 000 ₽ в день.- 1 500 - 10 000 ₽ за перевод', 
  modallocation: 'Казань', 
  modalMoney: 'до 30 000 рублей в неделю', 
  modalLimits: 'Возраст от 20 до 45 лет', 
  modalPLus: 'Выплаты каждую неделю, бонусы за результат', 
  modalMinus: 'Требуется наличие смартфона с интернетом',  
},
{ 
  title: "Химик", 
  salary: "1 000 000 - 6 000 000 ₽ в месяц. Зависит от кол-ва сделанной партии", 
  description: "Залог от 500 000 ₽", 
  imageSrc: "./assets/img/vacancy/card6.png", 
  modalText: 'Должность: Химик\n1 000 000 - 6 000 000 ₽ в месяц. Зависит от кол-ва сделанной партии', 
  modallocation: 'Казань', 
  modalMoney: 'до 30 000 рублей в неделю', 
  modalLimits: 'Возраст от 20 до 45 лет', 
  modalPLus: 'Выплаты каждую неделю, бонусы за результат', 
  modalMinus: 'Требуется наличие смартфона с интернетом',  
},
{ 
  title: "Перевозчик", 
  salary: "1 000 000 - 4 500 000 ₽ в месяц. Зависит от кол-ва сделанных рейсов", 
  description: "Залог от 500 000 ₽", 
  imageSrc: "./assets/img/vacancy/card7.png", 
  modalText: 'Должность: Химик\n1 000 000 - 6 000 000 ₽ в месяц. Зависит от кол-ва сделанной партии', 
  modallocation: 'Казань', 
  modalMoney: 'до 30 000 рублей в неделю', 
  modalLimits: 'Возраст от 20 до 45 лет', 
  modalPLus: 'Выплаты каждую неделю, бонусы за результат', 
  modalMinus: 'Требуется наличие смартфона с интернетом',  
},
{ 
  title: "Видео-постановщик", 
  salary: "10 000 - 50 000 ₽ в день.5 000 - 30 000 ₽ за 1 видео", 
  description: "Залог от 500 000 ₽", 
  imageSrc: "./assets/img/vacancy/card8.png", 
  modalText: 'Должность: Видео-постановщик\n10 000 - 50 000 ₽ в день.5 000 - 30 000 ₽ за 1 видео', 
  modallocation: 'Казань', 
  modalMoney: 'до 30 000 рублей в неделю', 
  modalLimits: 'Возраст от 20 до 45 лет', 
  modalPLus: 'Выплаты каждую неделю, бонусы за результат', 
  modalMinus: 'Требуется наличие смартфона с интернетом',  
},
{ 
  title: "Shorts видео монтажер", 
  salary: "2 000 - 5 000 ₽ в день. 400 - 1 000 ₽ за 1 видео ", 
  description: "Залог от 500 000 ₽", 
  imageSrc: "./assets/img/vacancy/card9.png", 
  modalText: 'Shorts видео монтажер:\n2 000 - 5 000 ₽ в день. 400 - 1 000 ₽ за 1 видео ', 
  modallocation: 'Казань', 
  modalMoney: 'до 30 000 рублей в неделю', 
  modalLimits: 'Возраст от 20 до 45 лет', 
  modalPLus: 'Выплаты каждую неделю, бонусы за результат', 
  modalMinus: 'Требуется наличие смартфона с интернетом',  
},
{ 
  title: "Френчайзи (Владелец бизнеса)", 
  salary: "100 000 - 5 000 000 ₽ в месяц. ", 
  description: "Франшиза от 150 000 ₽", 
  imageSrc: "./assets/img/vacancy/card10.png", 
  modalText: 'Френчайзи (Владелец бизнеса)\n100 000 - 5 000 000 ₽ в месяц. ', 
  modallocation: 'Казань', 
  modalMoney: 'до 30 000 рублей в неделю', 
  modalLimits: 'Возраст от 20 до 45 лет', 
  modalPLus: 'Выплаты каждую неделю, бонусы за результат', 
  modalMinus: 'Требуется наличие смартфона с интернетом',  
},


];


// Создаем блоки вакансий на основе данных из массива
vacanciesData.forEach(function(vacancy, index) {
    // Создаем элемент для блока вакансии
    const vacancyCard = document.createElement('div');
    vacancyCard.classList.add('vacancyCard');

    // Создаем уникальные идентификаторы для кнопки и модального окна
    const btnId = 'openModal_' + index;
    const modalId = 'myModal_' + index;

    // Создаем HTML-разметку для блока вакансии
    vacancyCard.innerHTML = `
        <img src="${vacancy.imageSrc}" alt="">
        <div class="card_title" id="card">
            <img src="./assets/img/vacancy/fireCard.svg" alt="">
            <p>${vacancy.title}</p>
        </div>
        <div class="card_money" id="card">
            <img src="./assets/img/vacancy/Money.svg" alt="">
            <p>${vacancy.salary}</p>
        </div>
        <div class="card_about" id="card">
            <img src="./assets/img/vacancy/zalog.svg" alt="">
            <p>${vacancy.description}</p>
        </div>
        <button class="card_btn" id="${btnId}">Подробности</button>

        <div id="${modalId}" class="modal">
        <div class="modal-content">
        <div class="modal-title">
        <h2>ВАКАНСИЯ - ${vacancy.title}</h2>
        <span class="close">&times;</span>
        
        </div>
  
       
        <div class="">
          <div class="modalBlock">
              <div class="modalText">
                  <div class="" style="display: flex; align-items: center;"><img src="./assets/img/modal/CheckSquare.svg" alt=""> <p class="p">Всего 500 листовок в день = 200 000 - 300 000 ₽ в месяц </p></div>
                 
                  <p class="">Доступные города: ${vacancy.modallocation}</p>
                  <p>Оплата: ${vacancy.modalMoney}</p>
                  <p>Лимиты: ${vacancy.modalLimits}</p>
                  <p>Содержание наклеек: Всегда разное, поскольку меняем дизайн Что рекламируем? Даркнет площадку и их магазины Расклеивать - законом не запрещено</p>
                  
              </div>
              <div class="modalVideo">
                  <div class="player-container">
                      <div class="video-container paused" data-volume-level="high">
                          <img class="thumbnail-img" src="./assets/img/img_playlist.png">
                          <img class="BG" src="./assets/img/img_playlist.png" alt="Фото для видео">
                      
                              <img class="playBtn" src="./assets/img/video/playButton.png" alt="">
                          
                          <div class="video-controls-container">
                            <div class="timeline-container">
                              <div class="timeline">
                                <img class="preview-img">
                                <div class="thumb-indicator"></div>
                              </div>
                            </div>
                            <div class="controls">
                              <button class="play-pause-btn">
                                <svg class="play-icon" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                                </svg>
                                <svg class="pause-icon" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                                </svg>
                              </button>
                              <div class="volume-container">
                                <button class="mute-btn">
                                  <svg class="volume-high-icon" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                                  </svg>
                                  <svg class="volume-low-icon" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" />
                                  </svg>
                                  <svg class="volume-muted-icon" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" />
                                  </svg>
                                </button>
                                <input class="volume-slider" type="range" min="0" max="1" step="any" value="1">
                              </div>
                              <div class="duration-container">
                                <div class="current-time">0:00</div>
                                /
                                <div class="total-time"></div>
                              </div>
                              <button class="captions-btn">
                                <svg viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z" />
                                </svg>
                              </button>
                              <button class="speed-btn wide-btn">
                                1x
                              </button>
                              <button class="mini-player-btn">
                                <svg viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/>
                                </svg>
                              </button>
                              <button class="theater-btn">
                                <svg class="tall" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>
                                </svg>
                                <svg class="wide" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/>
                                </svg>
                              </button>
                              <button class="full-screen-btn">
                                <svg class="open" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                                </svg>
                                <svg class="close" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <video src="./assets/videoplayback.mp4">
                            <track kind="captions" srclang="en" src="assets/subtitles.vtt">
                          </video>
                        </div>
                  </div>
                      
          
              </div>
          </div>
          <div class="modalWork">
              <div class="" style="margin-right: 30px;">
                  <h3>ПЛЮСЫ РАБОТЫ 👍</h3>
                  <ul>
                      <li class="plusModal"><img src="/assets/img/modal/NumberSquareOne.svg" alt=""><p>Высокая оплата</p></li>
                      <li class="plusModal"><img src="/assets/img/modal/NumberSquareTwo.svg" alt=""><p>Клеить можно в любом районе</p></li>
                      <li class="plusModal"><img src="/assets/img/modal/NumberSquareThree.svg" alt=""><p>Листовки изготавливаете самостоятельно - никуда за ними не едете</p></li>
                      <li class="plusModal"><img src="/assets/img/modal/NumberSquareFour.svg" alt=""><p>Простая должность - подходит каждому</p></li>
                  </ul>
              </div>
              <div class="">
                  <h3>МИНУСЫ РАБОТЫ 👎</h3>
                  <ul>
                      <li class="plusModal"><img src="/assets/img/modal/NumberSquareOne.svg" alt=""><p>Не всегда хватает мест на должность</p></li>
                      <li class="plusModal"><img src="/assets/img/modal/NumberSquareTwo.svg" alt=""><p>Не все могут найти 1 000 ₽ на начальную распечатку листовок</p></li>
                    
                  </ul>
              </div>
          </div>
          <p style="text-align: center;" class='notif'>⚠️ ПО УСТРОЙСТВУ НАПИШИТЕ ОПЕРАТОРУ (КОНТАКТЫ НА ГЛАВНОЙ СТРАНИЦЕ САЙТА)</p>
        </div>
      </div>
        </div>
    `;

    // Добавляем созданный блок вакансии в контейнер
    vacancyCardsContainer.appendChild(vacancyCard);

    // Получаем ссылки на кнопку и модальное окно по уникальным идентификаторам
    const openModalBtn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    const closeModalBtn = modal.querySelector('.close');
    
    // Добавляем обработчики событий
    openModalBtn.addEventListener('click', () => openModal(modal));
    closeModalBtn.addEventListener('click', () => closeModal(modal));
    document.addEventListener('click', (event) => outsideModalClick(event, modal));
});
const main = document.querySelector('.body');
// Функция для открытия модального окна
function openModal(modal) {
    modal.style.display = 'block';
    main.style.overflow = 'hidden'
}

// Функция для закрытия модального окна
function closeModal(modal) {
  main.style.overflow = 'auto'
    modal.style.display = 'none';
}

// Функция для закрытия модального окна при клике вне его области
function outsideModalClick(event, modal) {
    if (event.target === modal) {
        closeModal(modal);
    }
}



