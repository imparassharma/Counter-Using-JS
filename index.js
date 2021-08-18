let count = 0;

const count_value = document.getElementById("counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(o){
        const obj = o.currentTarget.classList;
        if(obj.contains('decrease')){
            count--;
        }
        if(obj.contains('reset')){
            count=0;
        }
        if(obj.contains('increase')){
            count++;            
        }

        if(count>0){
            count_value.style.color="green";
        }

        if(count==0){
            count_value.style.color="black";
        }

        if(count<0){
            count_value.style.color="red";
        }
        
        count_value.textContent=count;
    });
});
