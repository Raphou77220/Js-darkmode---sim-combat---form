class fighter {
    constructor(nom, hp, atk, spe) {
        this.name = nom;
        this.vie = hp;
        this.damage = atk;
        this.speed = spe;

        var Legolas = new fighter("Legolas", 10, 3, 0.8);
        var Orc = new fighter("Orc", 20, 5, 0.4);
        fight(Legolas, Orc);

    }
    attack(enemy){
        if(this.speed_check()){
            enemy.vie = enemy.vie - this.damage;
            console.log(this.name + "inflige" + this.damage.toString() + " dégats");
        } else {
            console.log(this.name + "miss");
        }
    }
    speed_check(){
        if(this.speed>Math.random()){
            return true
        }
        return false
    }
}
function fight(fighter1, fighter2){
    while(fighter1.vie>0 && fighter2.vie>0){
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }
    if(fighter1.vie>fighter2.vie){
        console.log(fighter1.name + "Tue l'Orc");
    } else{
        console.log(fighter2.name + "a eu raison de Legolas");
    }
}
