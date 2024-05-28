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