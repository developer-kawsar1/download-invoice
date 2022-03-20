var bgcolour;
var bgChangebtn=document.getElementById('change-bg');
const addProduct=document.getElementById('add-product')
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
  
  
addProduct.addEventListener('click',function(){
  let tr=document.createElement('tr');
  tr.innerHTML=`
    <td>১</td> 
    <td class = "biboron" > uu </td><td> yy</td> <td class = "dor"> bb</td> <td > mm</td>
  
  `
  tbody.appendChild(tr)
  var tbodyRowCount = table.tBodies[0].rows.length;
  var tbodyRows=table.tBodies[0].rows
  
  
  
  if(tbodyRowCount==1){
    tbodyRows[0].style.display=''
      tbodyRows[0].style.height = '150px'
      
  }else if(tbodyRowCount==2){
    tbodyRows[0].style.height='150px'
    tbodyRows[1].style.height='150px'
  }else if(tbodyRowCount==3){
    tbodyRows[0].style.height = '100px'
  tbodyRows[1].style.height = '100px'
  tbodyRows[2].style.height = '100px'
  }else if (tbodyRowCount == 4) {
    tbodyRows[0].style.height = '70px'
    tbodyRows[1].style.height = '70px'
    tbodyRows[2].style.height = '70px'
    tbodyRows[3].style.height = '70px'
  

  }else if (tbodyRowCount == 5) {
    tbodyRows[0].style.height = '60px'
    tbodyRows[1].style.height = '60px'
    tbodyRows[2].style.height = '60px'
    tbodyRows[3].style.height = '60px'
    tbodyRows[4].style.height = '60px'
  
  }
  
})
