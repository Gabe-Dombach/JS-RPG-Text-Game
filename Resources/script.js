$(document).ready(function() {
    let MyCharacter = {};
    if(localStorage.getItem('character')==null){
        let created = false
    do{
    let Carname = prompt('please Enter your Name');
    let gender = prompt('enter M for male or F for female');

    if(gender.toUpperCase =='M'){
         MyCharacter ={
            health: 100,
            stamina: 100,
            agility: 100,
            strength: 150,
            name: Carname
        }
        created = true;
    }
    else if(gender.toUpperCase == 'F'){
         MyCharacter ={
            health: 100,
            stamina: 120,
            agility: 170,
            strength: 80,
            name: Carname
        }
        created = true;

    }
    else{
        window.alert('Please Enter a Valid name');
    }} while(created == false)
}
else{
    MyCharacter = JSON.parse(localStorage.getItem('character'))
}  
});