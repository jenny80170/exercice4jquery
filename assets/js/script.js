//Déclenchement du jquery
$(document).ready(function(){
  //Fonction click bouton valider
  $('#validateAge').click(function(){
    //Variable age
    var age = $('#l_age').val();
    if(age >= 18){
      //Si plus de 18 ans vous êtes majeur
      window.alert('Vous êtes majeur');
      //Sinon vous êtes mineur
    }else{
      window.alert('Vous êtes mineur');
    }
  });
});
