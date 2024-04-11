// document.addEventListener("DOMContentLoaded", () => {
    let dateButton = document.querySelector('#date-get');
    let url = 'http://api.nbp.pl/api/cenyzlota/last/30/?format=json';

    function mydata(){

//   fetch ( fetch(url)
        // .then(res => res.json())
        // .then(data => {
        //     dateButton.addEventListener('click', () => {
        //         displayData(data);
        //     });
        // });

        let request = async () => {
            let newrequest = await fetch(url)
            let data = await newrequest.json()

            dateButton.addEventListener('click', () => {
                displayData(data);
            });

        }
        request()
    }
    mydata();

    function displayData(data) {
        let div = document.querySelector('#apicontent');
        div.innerHTML = ''; // Clear previous data

        data.forEach(item => {
            let container = document.createElement('div');
            container.classList.add('data-container');

            let dateParagraph = document.createElement('p');
            dateParagraph.innerText = item.data;
            container.appendChild(dateParagraph);

            let cenaParagraph = document.createElement('p');
            cenaParagraph.style.display = 'none'; // Initially hide cena
            cenaParagraph.innerText =`value of gold in dollars: ${item.cena}`;
            container.appendChild(cenaParagraph);

            container.addEventListener('mouseover', () => {
                cenaParagraph.style.display = 'block'; // Show cena on mouseover
            });

            container.addEventListener('mouseout', () => {
                cenaParagraph.style.display = 'none'; // Hide cena on mouseout
            });

            div.appendChild(container);
        });
    }
// });
