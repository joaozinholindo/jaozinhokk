// public/script.js
document.querySelector('form').addEventListener('submit', function (e) {
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    if (!data || !hora) {
        alert('Por favor, selecione uma data e hora!');
        e.preventDefault();
    }
});