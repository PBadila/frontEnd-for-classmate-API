// fetch(`https://api-nba-v1.p.rapidapi.com/players?name=${lastName}`, options)
// .then(response => response.json())

// .then(data=>{
//    console.log(data.response)
//    for(let i = 0; i < data.response.length; i++){

//         if(data.response[i].firstname.toLowerCase() === firstName){
//         //clear out prev data
//         cardTitle.innerText=""
//         liPID.innerText="ID: "
//         liDOB.innerText="DOB: "
//         liHeight.innerText="HEIGHT: "
//         liWeight.innerText="WEIGHT: "

let ul = document.getElementById('gameList')
fetch('http://127.0.0.1:3000/games')
.then(response => response.json())
.then(data=>{
    console.log(data)
    data.forEach(game => {
        let li = document.createElement('li')
        li.setAttribute('class','listText')
        ul.appendChild(li)
        li.textContent=game.title
        let button = document.createElement('button')
        li.appendChild(button)
        button.setAttribute('id',game.id)
        button.innerText = "Add"
        button.style.margin = "15px"
        console.log(button)
        let btnStr = `button${game.id}`
        console.log(btnStr)
      

    });
})

console.log(button1)
button1.addEventListener('click',()=>{
    console.log('clicked')
})

