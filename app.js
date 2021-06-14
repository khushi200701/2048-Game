document.addEventListener('DOMContentLoaded', ()=>{
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    const width = 4
    let squares = []

    //creating playing board
    function createBoard() {
        for(let i=0 ; i<width*width; i++){
            square = document.createElement('div')
            square.innerHTML = 0;
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }
    createBoard()

    //generate random number 
    function generate() {
        let randomNumber = Math.floor(Math.random() * squares.length)
        if(squares[randomNumber].innerHTML==0) {
            squares[randomNumber].innerHTML = 2
        }
        else
        generate()
    }

    //swipe right
    function moveRight() {
        for(let i=0 ; i<16 ; i++)
        {
            if(i % 4 === 0 ){
                let totalone = squares[i].innerHTML
                let totaltwo = squares[i+1].innerHTML
                let totalthree = squares[i+2].innerHTML
                let totalfour = squares[i+3].innerHTML
                let row = [parseInt(totalone), parseInt(totaltwo),parseInt(totalthree),parseInt(totalfour)]

                console.log(row)
            }
        }

    }

moveRight()




})