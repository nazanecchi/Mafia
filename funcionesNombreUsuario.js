let inputs = document.getElementsByClassName('inp');
for (var i=0;i<inputs.length; i++) {
  inputs[i].addEventListener("keyup", function(){
    if((this.value.length)>0){
      this.nextElementSibling.classList.add('fijar');
      localStorage.setItem("nombre",this.value);
    }
    else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}
