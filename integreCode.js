let reponses = document.getElementById("reponse")
let validation = document.getElementById("valider");
let affichageResultat = document.querySelector("#score");
let proposition = document.querySelector("#zoneProposition");

let score = 0;
let nombreMot = 0;
let redaction ;

const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrases = ["Je suis un bon." , "J'ai pas le temps." , "Rapide l'adjoint."];

validation.addEventListener('click', () => {
    redaction = reponse.value;
    console.log(redaction);
    reponses.value = "";  
});

function choix () {
    if (document.getElementById('mot').checked) {
        proposition.innerText = "Entrez le mot : " + listeMots[0] ;
        return 'Mots';
    } else if (document.getElementById('phrases').checked) { 
        return 'Phrases' ;
    }else {
        console.log(choixUtilisateur)
    return "";
    }
}

function boucleDuJeu (choix) {
    const choixUtilisateur = choix;
    console.log(choixUtilisateur)
    if (choixUtilisateur !== "") {
        if (choixUtilisateur === "Mots") {
            proposition.innerText = "Entrez le mot : " + listeMots[0] ;
                while (redaction != listeMots[0]) {
                    proposition.innerText = ("Le mot entré est différent de " + listeMots[0] + ". Entrez le mot " + listeMots[0]);
                }
            afficherResultat(++score, ++nombreMot);
    
            proposition.innerText = "Entrez le mot : " + listeMots[1] ;
        while (redaction != listeMots[1]) {
            proposition.innerText = "Le mot entré est différent de " + listeMots[1] + ". Entrez le mot " + listeMots[1]
        }
        afficherResultat(++score, ++nombreMot);
    
        proposition.innerText = "Entrez le mot : " + listeMots[2] ;
        while (redaction != listeMots[2]) {
            proposition.innerText = "Le mot entré est différent de " + listeMots[2] + ". Entrez le mot " + listeMots[2]
            }
        afficherResultat(++score, ++nombreMot);
    
    //Choix phrases par l'utilisateur
    } else if (choixUtilisateur === "Phrases") {
        proposition.innerText = "Entrez la phrase suivante : " + listePhrases[0];
            while (redaction != listePhrases[0]) {
                proposition.innerText = "La phrase entrée est différente de " + listePhrases[0] + ". Entrez la phrase: " + listePhrases[0];
            }
        afficherResultat(++score, ++nombreMot);
    
        proposition.innerText = "Entrez la phrase suivante : " + listePhrases[1];
        while (redaction != listePhrases[1]) {
            proposition.innerText = "La phrase entrée est différente de " + listePhrases[1] + ". Entrez la phrase suivante: " + listePhrases[1];
        }
        afficherResultat(++score, ++nombreMot);
    
        proposition.innerText = "Entrez la phrase suivante : " + listePhrases[2];
        while (redaction != listePhrases[2]) {
            proposition.innerText = "La phrase est différente de " + listePhrases[2] + ". Entrez la phrase suivante: " + listePhrases[2];
        }
        }else if (choixUtilisateur === "") {
            proposition.innerText = "Selectionnez un mode de jeu pour lancer la partie" ;
        }
    } 
    
    afficherResultat(++score, ++nombreMot);
    return afficherResultat(score, nombreMot)
}

function afficherResultat(score) {
    affichageResultat.innerText = "Votre score est de : " + score + " sur " + nombreMot;
}


boucleDuJeu(choix());

