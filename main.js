const selectElement = (s) => { return document.querySelector(s) };
let imageTwo = false;




 selectElement(".menu-icon").addEventListener('click',() => {
 	selectElement('.nav-list').classList.toggle('active');
 });

 function changeImage() {
   
    if(imageTwo==true){
    	document.getElementById("img").src="profile.jpg";
    	imageTwo = false;	
    } else {
    	document.getElementById("img").src="udemiCertificate.jpg";
    	imageTwo = true;
    }
}
