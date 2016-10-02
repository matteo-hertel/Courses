interface Crocodile { personality: string; }
interface Taxes { year: number; }
interface Container<T> { unit: T; }

let crocContainer: Container<Crocodile> = { unit: { personality: "mean" } };
let taxContainer: Container<Taxes> = { unit: { year: 1991 } };

interface BlueCroc extends Crocodile {
    colour: "blue"
}
interface RedCroc extends Crocodile {
    colour: "red"
}
interface CrocContainer<T extends Crocodile> { crocUnit: T }
let redCrocContainer: CrocContainer<RedCroc> = {
    crocUnit: {
        personality: "irate",
        colour: "red"
    }
}
let blueCrocContainer: CrocContainer<BlueCroc> = {
    crocUnit: {
        personality: "irate",
        colour: "blue"
    }
}

class ClassyContainer<T extends Crocodile>{
    classyCrocUnit: T;
}
let classyCrocContainer = new ClassyContainer<BlueCroc>();

classyCrocContainer.classyCrocUnit = {
    personality: "classy",
    colour: "blue"
}

class CCC<T extends Crocodile>{
    constructor(public cccUnit: T) { }
}

let ccc = new CCC<RedCroc>({ personality: "ultra classy", colour: "red" })
