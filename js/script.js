
function validateForm() {
  const usernameInput = document.getElementById('name-input').value;
  console.log(usernameInput);
  if (usernameInput == ''){
    alert('masukan nama');
  }else{
    alert('sukses menginput nama');
  }

  const emailInput = document.getElementById('email-input').value;
  console.log(emailInput);
  if(emailInput == ''){
    alert('masukan email');
  }else{
    alert('sukses menginput email');
  }
}

let indexSlide = 1;
const listImages = document.getElementsByClassName('banner-autoslide')

nextSlide();

function nextSlide(){
  showSlide(indexSlide += 1);
}

function showSlide(index){
  //resetter
  if(index > listImages.length) indexSlide = 1;
  console.log(indexSlide);
  hideAllSlide();
  listImages[indexSlide - 1].style.display = 'block'
}

function hideAllSlide(){
  for (let i = 0; i < listImages.length; i++) {
    listImages[i].style.display = 'none'
  }
}

setInterval(() => nextSlide(), 2000)