

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

addProduct.addEventListener('click',function(){
  alert(88)
})
  
  
addProduct.addEventListener('click',function(){
  let tr=document.createElement('tr');
  tr.innerHTML=`
    <td>১</td> 
    <td class = "biboron" > ${productDescription.value}</td><td> ${productQuantity.value}</td> <td class = "dor"> ${productDor.value}</td> <td > ${productTk.value}</td>
  
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
  
})
