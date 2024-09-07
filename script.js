window.onload = function createField(){
    const field = document.getElementById("field-inside")
    const row = document.createElement("div")
    row.className = "row row-cols-4"

    var bombNumber = []
    bombNumber = getRamdomNumber(1,100)
    
    for(let i = 0; i< 100 ; i++){
        const btn = document.createElement("button")
        btn.className = "col"
        btn.className = "btn-mines"
        btn.id = i
        row.appendChild(btn)
        field.appendChild(row)
        
    }
    var btn = document.getElementsByClassName("btn-mines")
    creatMap(btn,bombNumber)
   

}

    function creatMap(btn,bombNumber){
        
        

        for(let i = 0; i < bombNumber.length; i++ ){
            let img = document.createElement("img")
            img.src = "img/bomb_circle.png"
            img.width = 25
            img.height = 25
            
            btn[bombNumber[i]].appendChild(img)
            let idNumber = Number(btn[bombNumber[i]].id);

            

            
            if(idNumber - 10 >= 0){
                btn[bombNumber[i]-10].textContent = "-10"

            }if(idNumber - 11 >= 0 && isBorderLeft(idNumber) === false ){
                btn[bombNumber[i]-11].textContent = "-11"

            }if(idNumber - 9 >= 0 && isBorderRight(idNumber) === false){
                btn[bombNumber[i]-9].textContent = "-9"

            } if(idNumber -1 >= 0 && isBorderLeft(idNumber) === false){
                btn[bombNumber[i]-1].textContent = "-1"  

            } if(idNumber + 1 <= 100 && isBorderRight(idNumber) === false){
                btn[bombNumber[i]+1].textContent = "+1"

            } 
            if(idNumber + 10 <= 100){
                btn[bombNumber[i]+10].textContent = "+10"

            }
            if(idNumber + 9 <= 100 && isBorderLeft(idNumber) === false){
                btn[bombNumber[i]+9].textContent = "+9"

            }
            
            if(idNumber + 11 <= 100 && isBorderRight(idNumber) === false){
                btn[bombNumber[i]+11].textContent = "+11"
            }
            
           
            
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

    function getRamdomNumber(min,max){
        var random = []
        for(let i = 0; i< 1; i++){

            var rnum = Math.floor(Math.random() * (max - min + 1))+ min
            random.push(rnum);
            
        }
        
        return random
    }

    function click(){

    }


 