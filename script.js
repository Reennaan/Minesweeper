window.onload = function createField(){
    const field = document.getElementById("field-inside")

    field.innerHTML = '';

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
            const numberclick = new Audio('sounds/numberclick.wav')
            numberclick.play()
            if(btn.querySelector(".img")){
                img = btn.querySelector(".img")
                img.style.visibility = "visible"
                btn.classList.add('unpressed')
                setTimeout(() => {
                    img.src = "img/explosion.gif";
                    const fartsound = new Audio('sounds/fart.wav')
                    fartsound.play() 
                }, 1000); 
                actvatebomb()
                setTimeout(()=>{
                    createField()

                },3000)


            }
            if(btn.textContent === "" && !btn.querySelector(".img")){
                const clicksound = new Audio('sounds/retroclick.wav')
                clicksound.play()
                btn.classList.add('pressed')
                clearhorizont(btn.id)
            }
            
        })
        row.appendChild(btn)
        field.appendChild(row)   
    }
    var btn = document.getElementsByClassName("btn-mines")
    creatMap(btn,bombNumber)

}



    function actvatebomb() {
        var btn = document.getElementsByClassName("btn-mines");
    
        Array.from(btn).forEach(i => {
        if (i.textContent <= 0 && !i.querySelector(".img")) {
            i.classList.add('pressed');
        } else {
            const imgElement = i.querySelector(".img");
            if (imgElement) {
                imgElement.style.visibility = "visible";
                
            }
            i.style.fontSize = "larger";
        }
    });
}




    function clearvertical(verticalid){
        var btns = document.getElementsByClassName("btn-mines")
        const horizont = [0,10,20,30,40,50,60,70,80,90,9,19,29,39,49,59,69,79,89,99]
        var topbottom = [0,1,2,3,4,5,6,7,8,9,90,91,92,93,94,95,96,97,98,99]
        
        var clearhorizontid = []
        
        
        for(let i = 0;i <= verticalid.length; i++){
            for(let b = 0 ; btns[verticalid[i] + b] && btns[verticalid[i]+ b].textContent.length <= 0; b = b +10){
                let vid = verticalid[i] + b

                btns[vid].classList.add('pressed')
                if(btns[vid+1] && !horizont.includes(vid +1)){
                    btns[vid+1].style.fontSize = "larger"
                }
                
                if(btns[vid -1] && !horizont.includes(vid -1)){
                    btns[vid-1].style.fontSize = "larger"
                }
                if(btns[vid+10] && btns[vid+10].textContent.length > 0 && !topbottom.includes(btns[vid+10])){
                    btns[vid+10].style.fontSize = "larger"
                }

                if(btns[vid+1] && !horizont.includes(vid +1) && btns[vid+1].textContent.length <=0 ){
                    clearhorizontid.push(btns[vid+1])
                }
                if(btns[vid-1] && !horizont.includes(vid -1) && btns[vid-1].textContent.length <=0){
                    clearhorizontid.push(btns[vid-1])
                }
            }
        }



        for(let i = 0;i <= verticalid.length; i++){
            for(let b = 0 ; btns[verticalid[i] - b] && btns[verticalid[i] - b].textContent.length <= 0; b = b +10){
                let vid = verticalid[i] - b

                
                btns[vid].classList.add('pressed')
                if(btns[vid+1] && !horizont.includes(vid +1)){
                    btns[vid +1].style.fontSize = "larger"
                }
                if(btns[vid -1] && !horizont.includes(vid -1)){
                    btns[vid -1].style.fontSize = "larger"
                }
                if(btns[vid-10] && btns[vid-10].textContent.length > 0 && !topbottom.includes(btns[vid-10])){
                    btns[vid-10].style.fontSize = "larger"
                }
                
                if(btns[vid+1] && !horizont.includes(vid +1) && btns[vid+1].textContent.length <=0 ){
                    clearhorizontid.push(btns[vid+1])
                }
                if(btns[vid-1] && !horizont.includes(vid -1) && btns[vid-1].textContent.length <=0){
                    clearhorizontid.push(btns[vid-1])
                }

            }
        }

        const notpressed = new Set()
        clearhorizontid.forEach(clearid =>{
            if(!clearid.classList.contains('pressed')){
                notpressed.add(Number(clearid.id))
            }
        })
        
        if(exec < 9){
            notpressed.forEach(i =>{
                clearhorizont(i);
            })
            exec += 1
        }
        
        

    }
var exec = 0

    function clearhorizont (id){
        var btns = document.getElementsByClassName("btn-mines")
        id = parseInt(id);
        var left = [0,10,20,30,40,50,60,70,80,90]
        var right = [9,19,29,39,49,59,69,79,89,99]
        const clearverticalid =[]


        for(let i = id;btns[i] && btns[i].textContent.length <= 0 && !right.includes(i-1); i++){
                
            if(btns[i])
                btns[i].classList.add('pressed')
            
            if(btns[i - 10] && btns[i - 10].textContent.length > 0){
                btns[i - 10].style.fontSize = "larger"
            }else{
                clearverticalid.push(i - 10)
            }

            if(btns[i + 10] && btns[i + 10].textContent.length > 0){
                btns[i + 10].style.fontSize = "larger"
            }else{
                clearverticalid.push(i + 10)
            }
           
            if(btns[i + 1] && !right.includes(i) &&  i != 99 ){
                btns[i + 1].style.fontSize = "larger"
            } 
                     
        }

        for(let i = id ; btns[i] && btns[i].textContent.length <= 0 && !left.includes(i+1) ; i--){
                
            if(btns[i])
                btns[i].classList.add('pressed')

            if(btns[i - 10] && btns[i - 10].textContent.length > 0){
                btns[i - 10].style.fontSize = "larger"
            }else{
                clearverticalid.push(i - 10)
            }

            if(btns[i + 10] && btns[i + 10].textContent.length > 0){
                btns[i + 10].style.fontSize = "larger"
            }else{
                clearverticalid.push(i + 10)
            } 


            if(btns[i - 1] && !left.includes(i))
                btns[i - 1].style.fontSize = "larger"

            
                
        }

        clearvertical(clearverticalid);
        

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
            var left = [0,10,20,30,40,50,60,70,80,90]
            var right = [9,19,29,39,49,59,69,79,89,99]
            var top = [0,1,2,3,4,5,6,7,8,9]
            var bottom = [90,91,92,93,94,95,96,97,98,99]
        

            if(idNumber - 10 >= 0  && !top.includes(idNumber) && hasIncluded(bombNumber,idNumber - 10))
                btn[bombNumber[i]-10].textContent = Number(btn[bombNumber[i]-10].textContent) + 1

            if(idNumber - 11 >= 0 && !left.includes(idNumber) && !top.includes(idNumber)&& hasIncluded(bombNumber,idNumber - 11))
                btn[bombNumber[i]-11].textContent = Number(btn[bombNumber[i]-11].textContent) + 1

            if(idNumber - 9 >= 0 && !right.includes(idNumber) && !top.includes(idNumber)&& hasIncluded(bombNumber,idNumber - 9))
                btn[bombNumber[i]-9].textContent = Number(btn[bombNumber[i]-9].textContent)+1

            if(idNumber -1 >= 0 && !left.includes(idNumber)&& hasIncluded(bombNumber,idNumber - 1))
                btn[bombNumber[i]-1].textContent = Number(btn[bombNumber[i]-1].textContent) + 1

            if(idNumber + 1 <= 100 && !right.includes(idNumber)&& hasIncluded(bombNumber,idNumber + 1))
                btn[bombNumber[i]+1].textContent = Number(btn[bombNumber[i]+1].textContent) + 1
             
            if(idNumber + 10 <= 100 && !bottom.includes(idNumber)&& hasIncluded(bombNumber,idNumber + 10))
                btn[bombNumber[i]+10].textContent = Number(btn[bombNumber[i]+10].textContent) + 1
            
            if(idNumber + 9 <= 100 && !left.includes(idNumber) && !bottom.includes(idNumber)&& hasIncluded(bombNumber,idNumber + 9))
                btn[bombNumber[i]+9].textContent = Number(btn[bombNumber[i]+9].textContent) + 1
            
            if(idNumber + 11 <= 100 && !right.includes(idNumber) && !bottom.includes(idNumber)&& hasIncluded(bombNumber,idNumber + 11))
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