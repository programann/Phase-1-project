document.addEventListener("DOMContentLoaded",()=>{
    let getButton = document.querySelector('button')
    let url = 'http://api.nbp.pl/api/cenyzlota/last/30/?format=json'

    fetch(url)
    .then(res => res.json())
    .then(data =>
        data.forEach(data=>addDate(data.data)));

    getButton.addEventListener('click',(e)=>{
        e.preventDefault()
    })

    function addDate(value){
        let div = document.querySelector('apicontent')
        let p = document.createElement('p')
        p.textContent = value
        div.append(p)
    }

})