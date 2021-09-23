var btn = document.createElement("BUTTON");   
btn.innerHTML = "CLICK ME";                
document.body.appendChild(btn);   

btn.addEventListener("click", function () {
    alert("Have a wonderful day");
})

let x = document.getElementById("tbox").textContent;
const btn2 = document.querySelector('button');
btn2.addEventListener("click", function(){
    alert(x)

})

div1.addEventListener("mouseover", function(){
    div1.style.backgroundColor = getRandomColor();
})

div1.addEventListener("mouseleave", function(){
    div1.style.backgroundColor = 'green'
})

par1.addEventListener("click", function(){
    par1.style.color = getRandomColor()
})

btn3.addEventListener("click", function(){
    var s = document.createElement("span");          
    var textnode = document.createTextNode("Ray Sorenson");         
    s.appendChild(textnode);                            
    document.getElementById("div2").appendChild(s);
})

const friends = ["Julie", "David", "Sam", "Ruth", "Vic", "Keith", "Brenda", "Bernice", "Phil", "Alex"];

btn5.addEventListener("click", function(){
    var node = document.createElement("LI");             
var textnode = document.createTextNode("Water");       
node.appendChild(textnode);                            
document.getElementById("myList").appendChild(node); 
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }