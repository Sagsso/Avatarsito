let player = null;

function startApp(){
    player = new Player('',{ username: '#content .username'});
}

function changeUsername(e){
    player.username = e.target.value;
}
function changeWeaponColor(e){
    player.character.weapon = e.target.value;
}
function changeClotheColor(e){
    player.character.clothes = e.target.value;
}
function changeClotheColor(e){
    player.character.hat = e.target.value;
}
