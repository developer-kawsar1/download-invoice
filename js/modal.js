
let kromk=0;

let customerName=document.getElementById('name');
let customerAddress=document.getElementById('address');

let productDescription=document.getElementById('description');
let productQuantity=document.getElementById('product-quantity');
let productDor=document.getElementById('product-dor');
let productTk=document.getElementById('product-tk');

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//add button 

//add button
const addProduct = document.getElementById('add-product')

//addProduct.addEventListener('click',function(){
  
//})
  
  
addProduct.addEventListener('click',function(){
  document.getElementById("name-div").innerHTML=customerName.value;
  document.getElementById('address-div').innerHTML=customerAddress.value;
  kromk++
  
  let banglaKromik=makeBangla(String(kromk))
  

  let tr=document.createElement('tr');
  tr.innerHTML=`
    <td>${banglaKromik}</td> 
    <td class = "biboron" > ${productDescription.value}</td><td> ${productQuantity.value}</td> <td class = "dor"> ${productDor.value}</td> <td class="product-tk"> ${productTk.value}</td>
  
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
  
  modal.style.display = "none";
  console.log(customerName.value);
  productDescription.value=''
 productQuantity.value=''
 productDor.value=''
 productTk.value=''
 
 //mot count
 
 
 let total=document.getElementsByClassName('product-tk');
// alert(total.length);
 let arr=[];
 for(let item of total){
   arr.push(item.innerHTML)
 }
  let engArr=arr.map(item=>makeEng(item))
  let makeNum=engArr.map(item=>Number(item))
  
  let sum=0;
  for(let i=0; i<makeNum.length; i++){
    sum+=makeNum[i]
  }
 // alert(sum)
 let banglaMot=makeBangla(String(sum))
 document.getElementById('last-mot').innerText=banglaMot
 //alert(makeBangla('6'))
})

//eady data write

function checkData()  {
  let renDom=Math.floor(Math.random()*myInfo.length)

 
 customerName.value=myInfo[renDom].customerName;
 customerAddress.value=myInfo[renDom].address;
 productDescription.value=myInfo[renDom].biboron;
 productQuantity.value=myInfo[renDom].poriman;
 productDor.value=myInfo[renDom].dor;
 productTk.value=myInfo[renDom].tk
 
 
 
}

let myInfo=[
  {customerName:'?????????????????? ???????????????',
  address:'??????????????????,???????????????????????? ?????????????????????',
  biboron:'??????????????????',
  poriman:'??? ??????', 
  dor:'???????????????', 
  tk:'???????????????'
  
  },
  {customerName:'??????????????? ???????????????',
  address:' ????????????????????? ????????????',
  biboron:'????????????????????? ',
  poriman:'??? ??????', 
  dor:'???????????????', 
  tk:'???????????????'
  
  },
  {customerName:'???????????? ????????????',
  address:'??????????????????????????? ??????????????????????????? ',
  biboron:'??????????????? ',
  poriman:'??? ??????', 
  dor:'????????????', 
  tk:'???????????????'
  
  }
  
  ]
//,function



function makeEng(myStr){
  var newStr1 = myStr.replace(/???/g,"0");
var newStr2 = newStr1.replace(/???/g,"1");
var newStr3 = newStr2.replace(/???/g,"2");
var newStr4 = newStr3.replace(/???/g,"3");
var newStr5 = newStr4.replace(/???/g,"4");
var newStr6 = newStr5.replace(/???/g,"5");
var newStr7 = newStr6.replace(/???/g,"6");
var newStr8 = newStr7.replace(/???/g,"7");
var newStr9 = newStr8.replace(/???/g,"8");
var newStr10= newStr9.replace(/???/g,"9");

return newStr10

}


function makeBangla(myStr){
  var newStr1 = myStr.replace(/0/g,"???");
var newStr2 = newStr1.replace(/1/g,"???");
var newStr3 = newStr2.replace(/2/g,"???");
var newStr4 = newStr3.replace(/3/g,"???");
var newStr5 = newStr4.replace(/4/g,"???");
var newStr6 = newStr5.replace(/5/g,"???");
var newStr7 = newStr6.replace(/6/g,"???");
var newStr8 = newStr7.replace(/7/g,"???");
var newStr9 = newStr8.replace(/8/g,"???");
var newStr10= newStr9.replace(/9/g,"???");

return newStr10

}
