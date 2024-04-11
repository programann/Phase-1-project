document.addEventListener("DOMContentLoaded", () => {
    let dateButton = document.querySelector('#date-get');
    let url = 'http://api.nbp.pl/api/cenyzlota/last/30/?format=json';
    // Fetching the url
    fetch(url)
        .then(res => res.json())
        .then(data => {
            dateButton.addEventListener('click', () => {
                displayData(data);
            });
        });
    // creating a function which displays the dates and value of gold
    function displayData(data) {
        // This is where all the dates and values of gold will be displayed
        let div = document.querySelector('#apicontent');
        div.textContent = ''; // Clear previous data
        // Iterating over every every object in the array.
        data.forEach(item => {
            let container = document.createElement('div');
            container.classList.add('data-container');
            // creating an element p which the dates will come in.
            let dateParagraph = document.createElement('p');
            dateParagraph.innerText = item.data;
            container.appendChild(dateParagraph);
            // creating a paragraph where the value of gold will be displayed
            let valueParagraph = document.createElement('p');
            valueParagraph.style.display = 'none'; // Initially hide value
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
