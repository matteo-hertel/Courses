class ComicBookCharacter {

    constructor(
        public alias: string,
        public health: number,
        public strength: number,
        protected secretIdentity: string
    ) { }
}

class SuperHero extends ComicBookCharacter {
    traits: string[] = ["empathy", "strong moral code"];
    getSecretIdentity() {
        console.log(this.secretIdentity);
    }
}
class SuperVillain extends ComicBookCharacter {
    flaws: string[] = ["hubris", "always explains evil plan"];

    constructor(alias: string, health: number, strength: number, secretIdentity: string) {
        super(alias, health, strength, secretIdentity);
        console.log(`${this.alias} eats kittens!!`)
    }
}

let jubilee = new SuperHero("Jubilee", 23, 233, "Jubilation Lee");
let scarletWitch = new SuperVillain("Scarlet Witch", 233, 4444, "Wanda Maximoff");

console.log(jubilee.getSecretIdentity());
// console.log("///");
// console.log(scarletWitch);
