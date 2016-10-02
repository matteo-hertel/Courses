function pusshSomethingIntoCollection<T>(something: T, collection: T[]) {
    collection.push(something);
    console.log(collection);
}

interface SuperHero {
    name: string
}

let jeanGrey = { name: "Jean Grey" }
let wolverine = { name: "Wolverine" }

let superHeroes = [jeanGrey];
let powers = ["telekenisis", "esp"];

pusshSomethingIntoCollection((wolverine as SuperHero), superHeroes);
pusshSomethingIntoCollection("adamantium claws", powers);
