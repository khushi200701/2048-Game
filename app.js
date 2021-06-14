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

               // console.log(row)

                let filteredRow = row.filter(num => num)
                //console.log(filteredRow)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
               // console.log(zeros)
                let newrow = zeros.concat(filteredRow)
               // console.log(newrow)

                squares[i].innerHTML = newrow[0]
                squares[i+1].innerHTML = newrow[1]
                squares[i+2].innerHTML = newrow[2]
                squares[i+3].innerHTML = newrow[3]
            }
        }
    }

    //swipe left
    function moveLeft() {
        for(let i=0 ; i<16 ; i++)
        {
            if(i % 4 === 0 ){
                let totalone = squares[i].innerHTML
                let totaltwo = squares[i+1].innerHTML
                let totalthree = squares[i+2].innerHTML
                let totalfour = squares[i+3].innerHTML
                let row = [parseInt(totalone), parseInt(totaltwo),parseInt(totalthree),parseInt(totalfour)]

                //console.log(row)

                let filteredRow = row.filter(num => num)
                //console.log(filteredRow)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                //console.log(zeros)
                let newrow = filteredRow.concat(zeros)
                //console.log(newrow)

                squares[i].innerHTML = newrow[0]
                squares[i+1].innerHTML = newrow[1]
                squares[i+2].innerHTML = newrow[2]
                squares[i+3].innerHTML = newrow[3]
            }
        }
    }

//moveRight()
//moveLeft()




    function combineRow(){
        for(let i=0;i<15;i++){
            if(squares[i].innerHTML === squares[i+1].innerHTML){
                let combinedtotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combinedtotal
                squares[i+1].innerHTML = 0

            }
        }
    }

    //assign codes
    function control (e){
        if(e.keyCode === 39){
            keyright()
        }
        else if(e.keyCode === 37){
            keyleft()
        }
    }

    document.addEventListener('keyup',control)

    function keyright(){
        moveRight()
        combineRow()
        moveRight()
        generate()
    }
    function keyleft(){
        moveLeft()
        combineRow()
        moveRLeft()
        generate()
    }


})