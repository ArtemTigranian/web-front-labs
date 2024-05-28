function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    let output = '';

    output = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU') + '<br>';
    output += 'Дата и время для армянской локали: ' + today.toLocaleString('hy-AM') + '<br>';
    output += 'Дата и время для ливанской локали: ' + today.toLocaleString('ar-LB') + '<br>';
    output += 'Дата и время для французской локали: ' + today.toLocaleString('fr-FR') + '<br>';
    output += 'Дата и время для сербской локали: ' + today.toLocaleString('sr-SP') + '<br>';
    output += 'Дата и время для греческой локали: ' + today.toLocaleString('el-GR');
    out.innerHTML = output;
}

function showMoreDate() {
    let info = document.getElementById('more-date');
    let today = new Date();

    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let year = today.getFullYear();
    let month = months[today.getMonth()];
    let date = today.getDate();
    let day = weekDays[today.getDay()];

    let output = '';
    output += 'Текущий год: ' + year + '<br>';
    output += 'Текущий месяц: ' + month + '<br>';
    output += 'Текущая дата: ' + date + '<br>';
    output += 'День недели: ' + day;

    info.innerHTML = output;
}