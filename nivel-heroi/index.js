const prompt = require("prompt-sync")();

let jogoHeroi = prompt("gostaria de saber a sua colocaçao como heroi? s/n: ");

while(jogoHeroi != "n"){

    let xpHeroi = Number(prompt("insira seu xp: "));

    if(xpHeroi <= 0){
        console.log("insira um valor válido e tente novamente"); 
        continue
    }

    let nomeHeroi = prompt("insira o seu nome: ");

    let nivel = ["ferro", "bronze", "prata", "ouro", "platina", "ascendente", "imortal", "radiante"];

    if(xpHeroi <= 1000){
        console.log(`o heroi ${nomeHeroi} está no nível ${nivel[0]}`);
    } else if (xpHeroi == 1001 || xpHeroi <= 2000){
        console.log(`o heroi ${nomeHeroi} está no nível ${nivel[1]}`);
    } else if (xpHeroi == 2001 || xpHeroi <= 5000 ){
        console.log(`o heroi ${nomeHeroi} está no nível ${nivel[2]}`);
    } else if (xpHeroi == 5001 || xpHeroi <= 7000 ){
        console.log(`o heroi ${nomeHeroi} está no nível ${nivel[3]}`);
    } else if (xpHeroi == 7001 || xpHeroi <= 8000 ){
        console.log(`o heroi ${nomeHeroi} está no nível ${nivel[4]}`);
    } else if (xpHeroi == 8001 || xpHeroi <= 9000){
        console.log(`o heroi ${nomeHeroi} está no nível ${nivel[5]}`);
    } else if (xpHeroi == 9001 || xpHeroi <= 10000){
        console.log(`o heroi ${nomeHeroi} está no nível ${nivel[6]}`);
    } else {
        console.log(`o heroi ${nomeHeroi} está no nível ${nivel[7]}`);
    }

    jogoHeroi = prompt("gostaria de saber a sua colocacao como heroi? s/n: ");

};

