document.addEventListener('DOMContentLoaded',() => {
  

    //card options 
    const cardArray =[
        { 
            name : 'flash' ,
            img : 'images\\flash.png'
        },
        { 
            name : 'flash' ,
            img : 'images\\flash.png'
        },
        { 
            name : 'ironman' ,
            img : 'images\\ironman.png'

        },      
        { 
            name : 'ironman' ,
            img : 'images\\ironman.png'

        },
        { 
            name : 'kitty' ,
            img : 'images\\kitty.png'

        },
        { 
            name : 'kitty' ,
            img : 'images\\kitty.png'

        },
        { 
            name : 'mario' ,
            img : 'images\\mario.png'

        },
        { 
            name : 'mario' ,
            img : 'images\\mario.png'

        },
        { 
            name : 'naruto' ,
            img : 'images\\naruto.png'
        },
        { 
            name : 'naruto' ,
            img : 'images\\naruto.png'
        },
        {
            name : 'wizard',
            img : 'images\\wizard.png'
        },
        {
            name : 'wizard',
            img : 'images\\wizard.png'
        }    
    ]

    cardArray.sort(() => 0.5 - Math.random( ))

    const grid = document.querySelector('.grid')
    var cardsChosen = [] 
    var cardChosenId = []
    var cardsWon = [] ;
    const resultDisplay = document.querySelector( '#result')
    //create your board 
    function createBoard(){
        for (let i =0 ;i<cardArray.length ; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images\\blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId  = cardChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){ 
            alert('you found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            alert('Sorry, try again')
        }

        cardsChosen = []
        cardChosenId = []

        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent ='Congratulations! You found them all'
        }
    }

    function flipcard(){
        var cardId= this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name) // cardChosen contain the name of each image 
        cardChosenId.push(cardId)                // cardChosenId contain the id of each image 
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch , 500)
        }
    }

    createBoard();
})




