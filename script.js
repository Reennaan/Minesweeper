window.onload = function createField(){
    const field = document.getElementById("field-inside")
    const row = document.createElement("div")

    row.className = "row row-cols-4"

    var bombNumber = []
    bombNumber = getRamdomNumber(0,99)
    
    for(let i = 0; i< 100 ; i++){
        const btn = document.createElement("button")
        btn.className = "col"
        btn.className = "btn-mines"
        btn.style.fontFamily = "Courier New"
        btn.style.fontSize = "0"
        btn.style.fontWeight = "bold"
        btn.id = i
        btn.addEventListener("click",() =>{
            btn.style.fontSize = "larger"
            if(btn.querySelector(".img")){
                img = btn.querySelector(".img")
                img.style.visibility = "visible"
                btn.classList.add('unpressed')
                
            }
            if(btn.textContent === "" && !btn.querySelector(".img")){
                btn.classList.add('pressed')
                clearmap(btn.id)
                clearmaptop(btn.id);
                
            }
            
        })
        row.appendChild(btn)
        field.appendChild(row)
        
    }


    var btn = document.getElementsByClassName("btn-mines")
    creatMap(btn,bombNumber)
}

    function clearmaptop(id){
        const allbtn = document.querySelectorAll(".btn-mines")
        id = parseInt(id);
        console.log(Number(id -10))
        for(let b = -10; Number(id - b) >=0 ; b = b + 10){
            
            if(allbtn[id - b] && allbtn[id - b].id >=0 && allbtn[id - b].textContent.length <= 0 && !allbtn[id -b].querySelector(".img") ){
                clearmap(allbtn[id - b].id)
            }
        }
            
        for(let b = 10 ; Number(id) + b <= 100; b += 10){
            if (allbtn[id + b] && allbtn[id + b].id <= 100 && allbtn[id + b].textContent.length <= 0 && !allbtn[id + b].querySelector(".img")) {
                clearmap(allbtn[id + b].id);        
            }
        }

    }


    function clearmap (id){
        var btns = document.getElementsByClassName("btn-mines")
        id = parseInt(id);
        for(let i = id;i <= btns.length;i++){
            if(isBorderRight(i) && btns[i].textContent.length <= 0){
                btns[i].classList.add('pressed')
                break;
            }
            if(btns[i].textContent.length >= 1){
                btns[i].style.fontSize = "larger"
                break;
            }else{
                btns[i].classList.add('pressed')
            }
        }
        for(let i = id ;i <= btns.length;i--){
            if(isBorderLeft(i) && btns[i].textContent.length <= 0){
                btns[i].classList.add('pressed')
                break;
            }
            if(btns[i].textContent.length >= 1){
                btns[i].style.fontSize = "larger"

                break;

            }else{
                btns[i].classList.add('pressed')
            }

        }
    }


    function creatMap(btn,bombNumber){

        for(let i = 0; i < bombNumber.length; i++ ){
            var idNumber = Number(btn[bombNumber[i]].id);
            var img = document.createElement("img")
            img.className = "img"
            img.src = "img/bomb_circle.png"
            img.width = 25
            img.height = 25
            img.style.visibility = "hidden"
            btn[idNumber].appendChild(img)
            

            if(idNumber - 10 >= 0  && !isBorderTop(idNumber) && hasIncluded(bombNumber,idNumber - 10))
                btn[bombNumber[i]-10].textContent = Number(btn[bombNumber[i]-10].textContent) + 1

            if(idNumber - 11 >= 0 && !isBorderLeft(idNumber) && !isBorderTop(idNumber)&& hasIncluded(bombNumber,idNumber - 11))
                btn[bombNumber[i]-11].textContent = Number(btn[bombNumber[i]-11].textContent) + 1

            if(idNumber - 9 >= 0 && !isBorderRight(idNumber) && !isBorderTop(idNumber)&& hasIncluded(bombNumber,idNumber - 9))
                btn[bombNumber[i]-9].textContent = Number(btn[bombNumber[i]-9].textContent)+1

            if(idNumber -1 >= 0 && !isBorderLeft(idNumber)&& hasIncluded(bombNumber,idNumber - 1))
                btn[bombNumber[i]-1].textContent = Number(btn[bombNumber[i]-1].textContent) + 1

            if(idNumber + 1 <= 100 && !isBorderRight(idNumber)&& hasIncluded(bombNumber,idNumber + 1))
                btn[bombNumber[i]+1].textContent = Number(btn[bombNumber[i]+1].textContent) + 1
             
            if(idNumber + 10 <= 100 && !isBorderBottom(idNumber)&& hasIncluded(bombNumber,idNumber + 10))
                btn[bombNumber[i]+10].textContent = Number(btn[bombNumber[i]+10].textContent) + 1
            
            if(idNumber + 9 <= 100 && !isBorderLeft(idNumber) && !isBorderBottom(idNumber)&& hasIncluded(bombNumber,idNumber + 9))
                btn[bombNumber[i]+9].textContent = Number(btn[bombNumber[i]+9].textContent) + 1
            
            if(idNumber + 11 <= 100 && !isBorderRight(idNumber) && !isBorderBottom(idNumber)&& hasIncluded(bombNumber,idNumber + 11))
                btn[bombNumber[i]+11].textContent = Number(btn[bombNumber[i]+11].textContent) + 1
            
            
        }
        const btns = document.querySelectorAll(".btn-mines")
        btns.forEach(button =>{
            if(Number(button.textContent) === 1)
                button.style.color = "blue"
            if(Number(button.textContent) === 2)
                button.style.color = "green"
            if(Number(button.textContent) === 3)
                button.style.color = "red"
            if(Number(button.textContent) === 4)
                button.style.color = "darkblue"

        })



        
    }

    function hasIncluded(bombnumber,btn){
        if(bombnumber.includes(btn)){
            return false
        }else{
            return true
        }
    }
    

    function isBorderLeft(idNumber){
        var left = [0,10,20,30,40,50,60,70,80,90]
        border = false;
        for(let i =0; i <= left.length ;i++){
            if(left[i] === idNumber){
                border = true
            }
        }
        return border
    }

    function isBorderRight(idNumber){
        var right = [9,19,29,39,49,59,69,79,89,99]
        border = false;
        for(let i =0; i <= right.length ;i++){
            if(right[i] === idNumber){
                border = true
            }
        }
        return border
    }
    
    function isBorderTop(idNumber){
        var top = [0,1,2,3,4,5,6,7,8,9]
        border = false;
        for(let i =0; i <= top.length ;i++){
            if(top[i] === idNumber){
                border = true
            }
        }
        return border
    }

    function isBorderBottom(idNumber){
        var top = [90,91,92,93,94,95,96,97,98,99]
        border = false;
        for(let i =0; i <= top.length ;i++){
            if(top[i] === idNumber){
                border = true
            }
        }
        return border
    }



    function getRamdomNumber(min,max){
        var random = []
        for(let i = 0; i< 10; i++){
            var rnum = Math.floor(Math.random() * (max - min + 1))+ min
            if(!random.includes(rnum)){
                random.push(rnum);
            }else{
                i = i - 1
            } 
        }
        return random
    }

 