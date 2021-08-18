let count = 0;

const count_value = document.getElementById("counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(o){
        const obj = o.currentTarget.classList;
        if(obj.contains('decrease')){
            count--;
            count_value.style.color="red";
        }
        if(obj.contains('reset')){
            count=0;
            count_value.style.color="black";
        }
        if(obj.contains('increase')){
            count++;            
            count_value.style.color="green";
        }

        
        count_value.textContent=count;
    });
});