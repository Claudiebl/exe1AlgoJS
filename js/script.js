//QUESTION1 : Afficher les nombres pairs de 1 à 20

for (let a = 0; a<=20; a++){
    if (a % 2 === 0){
        console.log(`Les chiffres pair jusqu'à 20 ${a}`);
    }
}

//QUESTION DEUX : Le roi, le jeu d'échec et les grains de riz.

let grains = 1;
for (let caseNum = 1; caseNum<=64 ; caseNum++){
    console.log(`Case ${caseNum} : ${grains} grains`);
    grains = grains*2;
}