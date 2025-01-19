/*Définis les variables qui vont etre utilisées en fonction de mes class en html*/
let darkmode = localStorage.getItem('darkmode')
const Switch = document.getElementById('Lune')

/*définis la variable qui marque le fait que le darkmode soit on ou off*/
const activeDark = () => {
    /*ajoute le darkmode, présent dans le css a mon body*/ 
    document.body.classList.add("darkmode")
    /*Fait en sorte de stocker l'information du theme actif pour permettre a celui ci d'etre encore actif apres la prochaine reconnexion*/ 
    localStorage.setItem("darkmode", "active")
}
/*Meme chose que juste au dessus mais pour le light mode */
const inactivDark = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}
/*Permet de demander si le darkmode est actif ou pas*/
if (darkmode === "active") activeDark

/*Définis l'evenement qui se passe quand le bouton "lune" est pressé, et là on lui demande d'activer le darkmode*/
Switch.addEventListener ("click" , () => {
    /*Permet de "soliciter" le storage en permanance le Storage a propos du darkmode, sinon on ne peut pas le rechanger sans recharger la page */
        darkmode = localStorage.getItem ("darkmode")
    darkmode !== "active" ? activeDark() : inactivDark()

})
