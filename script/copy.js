const copyButton = document.querySelector('.contactInfoBtn');
const copyNotification = document.getElementById('copyNotification');

copyButton.addEventListener('click', function() {
    const textToCopy = 'Открытый чат @1234, Запасная группа @1234, Видеоблог @1234, Операторы @1234, Полезные статьи о даркнет @1234, Мы на Kraken @1234'; 

    // Создаем элемент textarea, чтобы поместить текст в него
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Выделяем текст в textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Для кросс-браузерной поддержки

    // Копируем выделенный текст в буфер обмена
    document.execCommand('copy');

    // Удаляем временный элемент textarea
    document.body.removeChild(textarea);

    // Показываем уведомление о копировании
    copyNotification.classList.remove('hidden');

    // Запускаем таймер для скрытия уведомления через несколько секунд
    setTimeout(function() {
        copyNotification.classList.add('hidden');
    }, 3000); 
});



