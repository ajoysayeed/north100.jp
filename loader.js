document.addEventListener("DOMContentLoaded", function() {
    // ЗАМЕНИ ЭТУ ССЫЛКУ на свою прямую ссылку из GitHub Pages (см. инструкцию ниже)
    const url = 'https://north100.jp/table.html';

    const container = document.getElementById('affiliate-table-container');
    if (container) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
            })
            .catch(error => console.error('Error loading table:', error));
    }

});
