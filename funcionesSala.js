//var inputs = document.getElementsByClassName('inp');
             alert(inputs.lenght);
for (var i=0;i<inputs.lenght; i++) {
  inputs[i].addEventListener('keyup', function(){
    if(this.value.lenght>0){
      this.nextElementSilbing.classList.add('fijar');
    }
    else {
      this.nextElementSilbing.classList.remove('fijar');
    }
  });
}
