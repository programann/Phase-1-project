document.addEventListener("DOMContentLoaded",()=>{
    let url = 'http://api.nbp.pl/api/cenyzlota/last/30/?format=json'

    let div = document.querySelector('#apicontent')
    let p = document.createElement('p')
    div.append(p)

    p.innerText = ''

})