



var $btn = document.getElementById('btnScreenShot');
$btn.addEventListener('click', onScreenShotClick);

function download(canvas, filename) {
  // create an "off-screen" anchor tag
  const a = document.createElement('a');

  // the key here is to set the download attribute of the a tag
  a.download = filename;

  // convert canvas content to data-uri for link. When download
  // attribute is set the content pointed to by link will be
  // pushed as "download" in HTML5 capable browsers
  a.href = canvas.toDataURL("image/png;base64");

  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function onScreenShotClick(event) {
  const element = document.querySelector("#capture");

  html2canvas(element).then((canvas) => {
    download(canvas, 'screenshot');
  });
}

//let str='123456789'

//if(str.includes(3));

//var myStr = '007';

function makeBangla(myStr){
  var newStr1 = myStr.replace(/0/g,"০");
var newStr2 = newStr1.replace(/1/g,"১");
var newStr3 = newStr2.replace(/2/g,"২");
var newStr4 = newStr3.replace(/3/g,"৩");
var newStr5 = newStr4.replace(/4/g,"৪");
var newStr6 = newStr5.replace(/5/g,"৫");
var newStr7 = newStr6.replace(/6/g,"৬");
var newStr8 = newStr7.replace(/7/g,"৭");
var newStr9 = newStr8.replace(/8/g,"৮");
var newStr10= newStr9.replace(/9/g,"৯");

return newStr10

}

/* get today date */
let d=new Date();

//year and set
let year=d.getFullYear()
let banglaYear=makeBangla(year.toString());
document.getElementById('year').innerHTML=banglaYear
//month and set


//মাস
const mash = [
  "জানুয়ারী",
  "ফেব্রুয়ারী ",
  "মার্চ",
  "এপ্রিল ",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর,",
  "অক্টোবর ",
  "নভেম্বর ",
  ',ডিসেম্বর '
 
  ];
let eiMash=mash[d.getMonth()]
//console.log(eiMash);
document.getElementById('month').innerHTML=eiMash


let month=d.getMonth()
let banglaMonth=makeBangla(String(month+1))

//day and set
let day=d.getDate()
let banglaDate=makeBangla(String(day))
document.getElementById('day').innerHTML=banglaDate
let log=arg=> console.log(arg);

//log(banglaMonth)

//বার
const weekday = [
  "রবিবার",
  "সোমবার",
  "মঙ্গলবার ",
  "বোধবার",
  "বৃহস্পতিবার",
  "শুক্রবার ",
  "শনিবার "
  ];
let bar=weekday[d.getDay()];
document.getElementById('bar').innerHTML=bar

$(document).ready(function(){
 
  
  
	
		
		
		if(window.localStorage.getItem('shop')){
		  
		}else{
		  	$("#myModal2").modal('show');
		  	
		}
	});
	
	
	function setShop(){
	  window.localStorage.setItem('shop', 'কাওছার শপ');
	
	alert(8)
	  
	}
