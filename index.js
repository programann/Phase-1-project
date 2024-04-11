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
        div.innerHTML = ''; // Clear previous data

        data.forEach(item => {
            let p = document.createElement('p');
            p.innerText = item.data;
            div.appendChild(p);
        });
    }
});
