var bgcolour;

//bg -change
var bgChangebtn=document.getElementById('change-bg');

const refreshBtn=document.getElementById('refresh')

var capture=document.getElementById('capture');

let tbody=document.getElementById('tbody')
var table = document.getElementById("cash-table");
var totalRowCount = table.rows.length;
console.log(totalRowCount);



window.onload = function theme() {
  //capture.style.display = ;
 // localStorage.setItem("bgcolour",4 );
 var bg=localStorage.getItem('bgcolor')
 console.log(bg);
 capture.style.backgroundImage=bg
}


bgChangebtn.addEventListener('click',function(){
  let random=Math.floor(Math.random()*arr.length)
  console.log(random);
  capture.style.backgroundImage=arr[random]
  localStorage.setItem('bgcolor', arr[random]);
})

let arr=[
  'linear-gradient(to right,#C9FFBF, #FFAFBD)',
 ' linear-gradient(to right,#649173, #DBD5A4)',
 ' linear-gradient(to right,#B993D6, #8CA6DB)',
 'linear-gradient(to right,#764BA2, #667EEA)',
 'linear-gradient(to right,#C33764, #1D2671)',
 'linear-gradient(to right,#11998E  ,#38EF7D)',
 ' linear-gradient(to right,#2E3192, #1BFFFF)',
 ' linear-gradient(to right,#ff9a9e , #fad0c4)',
 ' linear-gradient(to right,#009245, #FCEE21)',
 ' linear-gradient(to right,#FFECD2, #FCB69F)',
 ' linear-gradient(to right,#09203F, #537895)',
 ' linear-gradient(to right,#FC5C7D, #6A82FB)',
 ' linear-gradient(to right,#007991,#78ffd6)',
 
 ' linear-gradient(to right,#7F00FF,#E100FF)',
 ' linear-gradient(to right,#ff9966,#ff5e62)',
 ' linear-gradient(to right,#00F260, #0575E6)'
 
 
 
  ]

refreshBtn.addEventListener('click',function(){
  location.reload()
})
