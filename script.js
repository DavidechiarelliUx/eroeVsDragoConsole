let eroe={
    haSpada:true,
    haPozioneCurativa:false,
    energia:100
};
let combattimento=false;
if (eroe.haSpada && eroe.energia > 50 && !combattimento){
    console.log ("E' la tua prima Vittoria ! hai sconfitto il drago!🐲, adesso continua");
}else{
    console.log( "Game Over.... serve una spada ed energia! ");
}

/* ATTRAVERSIAMO IL FIUME : Attraversiamo il fiume con la 
pozione oppure se abbiamo abbastanza energia per attraversarlo : */
if(eroe.haPozioneCurativa || eroe.energia >= 80){
    console.log("Ottimo hai attraversato il fiume");
}else{
    console.log("Non puoi attraversare il fiume!");
};

if(!eroe.haPozioneCurativa){
    eroe.haPozioneCurativa=true;
    console.log( "Cercando per strada hai trovato una super pozione 🍶");
}

console.log("Il Drago è tornato combattiamo ");

eroe.energia=10;
console.log("Adesso il drago è più forte di prima ti sta uccidendo, sei rimasto con :" + eroe.energia + " punti vita")

if(eroe.energia <= 20 && eroe.haPozioneCurativa && !combattimento){
    eroe.energia=100;
    eroe.haPozioneCurativa=false
    console.log("Ricarica di energia completata, livello di energia : " + eroe.energia + ", Ora puoi continuare a combattere!🗡️")
}else{
    eroe.energia =0;
    console.log (" Non puoi più combattere Game Over");
}

if(eroe.energia>=90 && !combattimento){
    console.log("Hai Sconfitto il Drago!🐉❌ HAI VINTO");
}else{
    console.log("Hai Perso!")
}