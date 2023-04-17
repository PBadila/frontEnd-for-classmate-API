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
let ulFav = document.getElementById('favUl')
let filter = document.getElementById('filter')
let cardTitle = document.querySelector('.card-title')
let cardImg = document.querySelector('.card-img-top')
let cardTxt = document.querySelector('.card-text')
let cardList = document.querySelector('.cardList')
let addGame = document.querySelector('.addGame')
let addAGame = document.getElementById('addAGame')
let actionDrop = document.getElementById('actionDrop')

cardImg.setAttribute('src', './imgs/vg1.png')


fetch('http://127.0.0.1:3000/games')
.then(response => response.json())
.then(data=>{

    console.log(data)
    
    data.forEach(game => {
        
        //creates game list that initially displays
        let li = document.createElement('li')
        li.setAttribute('class','listText')
        ul.appendChild(li)
        li.textContent=game.title
        let button = document.createElement('button')
        li.appendChild(button)
        button.setAttribute('id',`b${game.id}`)
        button.setAttribute('class','gameBtn')
        button.innerHTML = `<i class="fa-solid fa-gamepad fa-2xl" style="color: #294a90;"></i>`
        button.style.margin = "15px"
        //console.log(button)
        
        
        
    })
    //Being able to click on buttons

    //creating dom objects for each button
        //let gameIds = []
        buttons = document.querySelectorAll('.gameBtn') //yields an array of my buttons that I can now go through 
      
        for(let i = 0;i<buttons.length;i++){
            buttons[i].addEventListener('click',()=> {
                console.log(`TEST ${actionDrop.value}`)
                if(actionDrop.value == 'viewGame'){

                    //console.log(`clicked ${i}`)
                    //remove previous game's genres before adding new ones to ul
                    cardList.innerHTML = ''
                    //randomizes card picture when you click a button to choose a game
                    let randomPic = () => {
                        let num = Math.floor(Math.random()*7)
                        console.log(num)
                        switch (num){
                            case 0:
                                return './imgs/vg1.png'
                                break;
                            case 1:
                                return './imgs/vg2.png'
                                break;
                            case 2:
                                return './imgs/vg3.png'
                                break;
                            case 3:
                                return './imgs/vg4.png'
                                break;
                            case 4:
                                return './imgs/vg5.png'
                                break;
                            case 5:
                                return './imgs/vg6.png'
                                break;
                            case 6:
                                return './imgs/vg7.png'
                                break;
                            default:
                                return './imgs/vg1.png'
            
                        }
                    }
                    //customizes card based on button clicked
                    cardImg.setAttribute('src',randomPic() )
                    data.forEach(game=>{
                    if(i+1===game.id){
                            cardTitle.innerText = game.title
                            cardTxt.innerText = `Released: ${game.yearReleased}`
                            game.genre.forEach(genre =>{
                                let li = document.createElement('li')
                                cardList.appendChild(li)
                                li.innerText = genre
                            })
                            
                        }
                    })
                }
                else{
                    cardTitle.innerHTML=''
                    cardTxt.innerHTML=''
                    cardList.innerHTML='' 
                }
            })
        }


    

        //creating list of genres
        let genreList = ['all']
        data.forEach(game => {
            //console.log(game.genre)
             game.genre.forEach(oneGenre =>{
                //console.log(oneGenre)
                console.log(genreList.includes(oneGenre))
                if(genreList.includes(oneGenre)===false){
                    genreList.push(oneGenre)
                 }
            })
        })

       
       //creates drop down menu for game genres 
       genreList.forEach(genre =>{
           let dropItem = document.createElement('option')
            dropItem.setAttribute('value',`${genre}`)
            filter.append(dropItem)
            dropItem.innerText = genre
            })

        //filtering with drop down menu
        filter.addEventListener('change', ()=>{
            //clears out the list to re-list only those of correct filter
            ul.innerHTML = ''
            let output = filter.value
            console.log(output)
            //if ALL is selected for genres on filter
            if(output=== 'all'){
                data.forEach(game => {
        
                    //creates game list that initially displays
                    let li = document.createElement('li')
                    li.setAttribute('class','listText')
                    ul.appendChild(li)
                    li.textContent=game.title
                    let button = document.createElement('button')
                    li.appendChild(button)
                    button.setAttribute('id',`b${game.id}`)
                    button.setAttribute('class','gameBtn')
                    button.innerHTML = `<i class="fa-solid fa-gamepad fa-2xl" style="color: #294a90;"></i>`
                    button.style.margin = "15px"
                })
                buttons = document.querySelectorAll('.gameBtn') //yields an array of my buttons that I can now go through 
      
                for(let i = 0;i<buttons.length;i++){
                    buttons[i].addEventListener('click',()=> {
                        console.log(actionDrop.value)
                        if(actionDrop.value=='viewGame'){
                                cardList.innerHTML=''
                                addAGame.innerHTML=''
                                //randomizes card picture when you click a button to choose a game
                                let randomPic = () => {
                                    let num = Math.floor(Math.random()*7)
                                    console.log(num)
                                    switch (num){
                                        case 0:
                                            return './imgs/vg1.png'
                                            break;
                                        case 1:
                                            return './imgs/vg2.png'
                                            break;
                                        case 2:
                                            return './imgs/vg3.png'
                                            break;
                                        case 3:
                                            return './imgs/vg4.png'
                                            break;
                                        case 4:
                                            return './imgs/vg5.png'
                                            break;
                                        case 5:
                                            return './imgs/vg6.png'
                                            break;
                                        case 6:
                                            return './imgs/vg7.png'
                                            break;
                                        default:
                                            return './imgs/vg1.png'
                        
                                    }
                                }
                            //customizes card based on button clicked
                            cardImg.setAttribute('src',randomPic() )
                            data.forEach(game=>{
                                if(i+1===game.id){
                                    cardTitle.innerText = game.title
                                    cardTxt.innerText = `Released: ${game.yearReleased}`
                                    game.genre.forEach(genre =>{
                                        let li = document.createElement('li')
                                        cardList.appendChild(li)
                                        li.innerText = genre
                                    })
                                        
                                }
                            })
                        }
                    })
                }
            }//end of if for actionDrop = view card when ALL is the genre

            // else for actionDrop when a genre has been selected
            else{
                console.log(`test here: ${actionDrop.value}`)
                
                    //addAGame.innerHTML=''
                    let buttons2 = []
                    data.forEach(game =>{
                        
                        //sooooo I just realized I could have just used the /games/g/:genre here, but I did this first, so I'm just going to go with it
                        if(game.genre.includes(output)){
                            console.log(game)
                            let li = document.createElement('li')
                            li.setAttribute('class','listText')
                            ul.appendChild(li)
                            li.textContent=game.title
                            let button = document.createElement('button')
                            li.appendChild(button)
                            button.setAttribute('id',`b${game.id}`)
                            button.setAttribute('class','gameBtn')
                            button.innerHTML = `<i class="fa-solid fa-gamepad fa-2xl" style="color: #294a90;"></i>`
                            button.style.margin = "15px"
                            //holds ids in array so that correct ids can be assigned when they are filtered and no longer in order
                            buttons2.push(game.id)
                            console.log(buttons2)
                        }
                        buttons = document.querySelectorAll('.gameBtn') //yields an array of my buttons that I can now go through 
                        console.log(`test buttons here for id : ${buttons}`)
                        
                        for(let i = 0;i<buttons.length;i++){
                            buttons[i].addEventListener('click',()=> {
                                if(actionDrop.value=='viewGame'){
                                    //console.log(`clicked ${i}`)
                                    addAGame.innerHTML=''
                                    //remove previous game's genres before adding new ones to ul
                                    cardList.innerHTML = ''
                                    //randomizes card picture when you click a button to choose a game
                                    let randomPic = () => {
                                        let num = Math.floor(Math.random()*7)
                                        console.log(num)
                                        switch (num){
                                            case 0:
                                                return './imgs/vg1.png'
                                                break;
                                            case 1:
                                                return './imgs/vg2.png'
                                                break;
                                            case 2:
                                                return './imgs/vg3.png'
                                                break;
                                            case 3:
                                                return './imgs/vg4.png'
                                                break;
                                            case 4:
                                                return './imgs/vg5.png'
                                                break;
                                            case 5:
                                                return './imgs/vg6.png'
                                                break;
                                            case 6:
                                                return './imgs/vg7.png'
                                                break;
                                            default:
                                                return './imgs/vg1.png'
                            
                                        }
                                    }
                                    //customizes card based on button clicked
                                    cardImg.setAttribute('src',randomPic() )
                                    data.forEach(game=>{
                                        if(buttons2[i]===game.id){
                                                cardTitle.innerText = game.title
                                                cardTxt.innerText = `Released: ${game.yearReleased}`
                                                game.genre.forEach(genre =>{
                                                    let li = document.createElement('li')
                                                    cardList.appendChild(li)
                                                    li.innerText = genre
                                                })
                                            
                                        }
                                    })
                                }
                                else{
                                    cardTitle.innerHTML=''
                                    cardTxt.innerHTML=''
                                    cardList.innerHTML=''
                                }       
                    
                            })
                        }
                    })
                

                }
            
        })

});//end of fetch

//adding a new game
actionDrop.addEventListener('change',()=>{
    console.log(actionDrop.value)
    if(actionDrop.value==="addGame"){
        

        cardTitle.innerHTML=''
        cardTxt.innerHTML=''
        cardList.innerHTML=''

        let titleInput = document.createElement('input')
        titleInput.setAttribute('id', 'titleIn')
        titleInput.setAttribute('placeholder', 'Dark Souls III')
        let titleLabel = document.createElement('label')
        titleLabel.setAttribute('for', 'titleIn')
        titleLabel.innerText = "Game Title:  "

        let yearReleasedInput = document.createElement('input')
        yearReleasedInput.setAttribute('id', 'yearReleasedIn')
        yearReleasedInput.setAttribute('placeholder', '2016')
        let yearReleasedLabel = document.createElement('label')
        yearReleasedLabel.setAttribute('for', 'yearReleasedIn')
        yearReleasedLabel.innerText = "Year Released:  "
        
        let genreInput = document.createElement('input')
        genreInput.setAttribute('id', 'genreIn')
        genreInput.setAttribute('placeholder', 'action-role-playing, dark-fantasy, hack-and-slash')
        let genreLabel = document.createElement('label')
        genreLabel.setAttribute('for', 'genreIn')
        genreLabel.innerText = "Genres (sep by commas):  "
        
        let searchVerInput = document.createElement('input')
        searchVerInput.setAttribute('id', 'searchVerIn')
        searchVerInput.setAttribute('placeholder', 'dark-souls-3')
        let searchVerLabel = document.createElement('label')
        searchVerLabel.setAttribute('for', 'searchVerIn')
        searchVerLabel.innerText = "SearchVer:  "

        let addButton = document.createElement('button')
        addButton.setAttribute('id','addBtn')
        addButton.setAttribute('class','btn')
        addButton.setAttribute('class','btn-dark')
        addButton.innerText='Add Game'
        let addBtn = document.querySelector('#addBtn')
        console.log(addButton)
        console.log(addBtn)
       
        
        
        addAGame.appendChild(titleLabel)
        addAGame.appendChild(titleInput)

        addAGame.appendChild(yearReleasedLabel)
        addAGame.appendChild(yearReleasedInput)

        addAGame.appendChild(searchVerLabel)
        addAGame.appendChild(searchVerInput)

        addAGame.appendChild(genreLabel)
        addAGame.appendChild(genreInput)

        addAGame.appendChild(addButton)
       
    }

})


//Add Game Button has been clicked
addBtn.addEventListener('click',()=>{
    console.log(`add button clicked`)
})
addButton.addEventListener('click',()=>{
    console.log(`add clicked`)
})


    

    






