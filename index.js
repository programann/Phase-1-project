document.addEventListener("DOMContentLoaded", () => {
    let dateButton = document.querySelector('#date-get');
    let url = 'http://api.nbp.pl/api/cenyzlota/last/30/?format=json';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            dateButton.addEventListener('click', () => {
                displayData(data);
            });
        });

    function displayData(data) {
        let div = document.querySelector('#apicontent');
        div.textContent = ''; // Clear previous data

        data.forEach(item => {
            let container = document.createElement('div');
            container.classList.add('data-container');

            let dateParagraph = document.createElement('p');
            dateParagraph.innerText = item.data;
            container.appendChild(dateParagraph);

            let valueParagraph = document.createElement('p');
            valueParagraph.style.display = 'none'; // Initially hide cena
            valueParagraph.innerText =`value of gold in dollars: ${item.cena}`;
            container.appendChild(valueParagraph);

            container.addEventListener('click', () => {
                valueParagraph.style.display = 'block'; // Show cena on mouseover
            });

            container.addEventListener('mouseout', () => {
                valueParagraph.style.display = 'none'; // Hide cena on mouseout
            });

            div.appendChild(container);
        });
    }
});
