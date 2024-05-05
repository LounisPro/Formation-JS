let score = 0;


let choix = ChoisirPhrasesOuMots()

//Choix mots par l'utilisateur
if (choix === "mots") {
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[0] );
        while (motUtilisateur != listeMots[0]) {
            motUtilisateur = prompt("Le mot entré est différent de " + listeMots[0] + ". Entrez le mot " + listeMots[0]);
        }
score ++;
console.log("Votre score est à présent de " + score + "." );
motUtilisateur = prompt("Entrez le mot : " + listeMots[1] );
    while (motUtilisateur != listeMots[1]) {
        motUtilisateur = prompt("Le mot entré est différent de " + listeMots[1] + ". Entrez le mot " + listeMots[1])
    }
score ++;
console.log("Votre score est à présent de " + score + "." );
motUtilisateur = prompt("Entrez le mot : " + listeMots[2] );
while (motUtilisateur != listeMots[2]) {
    motUtilisateur = prompt("Le mot entré est différent de " + listeMots[2] + ". Entrez le mot " + listeMots[2])
}
score ++;
console.log("Votre score est à présent de " + score + "." );

//Choix phrases par l'utilisateur
} else {
    let motUtilisateur = prompt("Entrez la phrase suivante : " + listePhrases[0] );
while (motUtilisateur != listePhrases[0]) {
    motUtilisateur = prompt("La phrase entrée est différente de " + listePhrases[0] + ". Entrez la phrase: " + listePhrases[0])
}
score ++;
console.log("Votre score est à présent de " + score + "." );
motUtilisateur = prompt("Entrez la phrase suivante : " + listePhrases[1] );
while (motUtilisateur != listePhrases[1]) {
    motUtilisateur = prompt("La phrase entrée est différente de " + listePhrases[1] + ". Entrez la phrase suivante: " + listePhrases[1])
}
score ++;
console.log("Votre score est à présent de " + score + "." );
motUtilisateur = prompt("Entrez la phrase suivante : " + listePhrases[2] );
while (motUtilisateur != listePhrases[2]) {
    motUtilisateur = prompt("La phrase est différente de " + listePhrases[2] + ". Entrez la phrase suivante: " + listePhrases[2])
}
score ++;
console.log("Votre score est à présent de " + score + "." );
}


function afficherResultat(score, nombreMot) {
    console.log("Votre score est de " + score + " sur "+ nombreMot + ".") ;
}

function ChoisirPhrasesOuMots() {
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");
    while ( choix != "mots" || choix != "phrases" ) {
        choix = prompt("Ecrivez 'phrases' pour jouer avec des phrases, ou 'mots' pour jouer avec des mots.");
    return choix
    }
}

/*
let motUtilisateur = prompt("Entrez le mot : " + listeMots[0] );


while (motUtilisateur != listeMots[0]) {
    motUtilisateur = prompt("Le mot entré est différent de " + listeMots[0] + ". Entrez le mot " + listeMots[0])
    
}

score ++;
console.log("Votre score est à présent de " + score + "." );

motUtilisateur = prompt("Entrez le mot : " + listeMots[1] );

while (motUtilisateur != listeMots[1]) {
    motUtilisateur = prompt("Le mot entré est différent de " + listeMots[1] + ". Entrez le mot " + listeMots[1])
}

score ++;
console.log("Votre score est à présent de " + score + "." );


motUtilisateur = prompt("Entrez le mot : " + listeMots[2] );


while (motUtilisateur != listeMots[2]) {
    motUtilisateur = prompt("Le mot entré est différent de " + listeMots[2] + ". Entrez le mot " + listeMots[2])
}

score ++;
console.log("Votre score est à présent de " + score + "." );







/*
switch (motUtilisateur) {
    case motValide:
        console.log("Bien joué, tu remportes un point !")
        
        break
    case "Mécréant":
        console.log("Restons poli.")
        break
    case "vilain":
        console.log("Trouvons des mots plus gentils.")
        break
    default:
        console.log("Le mot entrée n'est pas correct.")
}
*/