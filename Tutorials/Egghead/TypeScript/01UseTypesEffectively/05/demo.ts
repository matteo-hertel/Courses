interface AttackFunction {
    (opponent: { alias: string; health: number }, attackWith: number): number;
}

interface KrustyTheClown {
    alias: string;
    health: number;
    inebriationLevel: number;
    attack: AttackFunction;
}

interface OptionaAttributes {
    strength? :number;
    insanity? :number;
    dexterity? :number;

}

interface ComicBookCharacter extends OptionaAttributes {
    secretIdentity?: string;
    alias: string;
    health: number;
    attack: AttackFunction;
}

function attackFunc(opponent: ComicBookCharacter, attackWith: number) {
    opponent.health -= attackWith;
    console.log(`${this.alias} attacked ${opponent.alias}, who's health left is ${opponent.health}`);
    return opponent.health;
}

let superHero: ComicBookCharacter = {
    alias: "Papoi",
    health: 5000,
    strength: 5000,
    attack: attackFunc
}
let superVillain: ComicBookCharacter = {
    secretIdentity: "Jack Napier",
    alias: "Joker",
    health: 200,
    insanity: 175,
    attack: attackFunc
};

superHero.attack(superVillain, superHero.strength);

function getSecretIdentity(charachter: ComicBookCharacter) {
    if (charachter.secretIdentity) {
        console.log(`${charachter.alias} is ${charachter.secretIdentity}`);
    } else {
        console.log(`${charachter.alias} has no secret identity`);
    }
}

getSecretIdentity(superVillain);
