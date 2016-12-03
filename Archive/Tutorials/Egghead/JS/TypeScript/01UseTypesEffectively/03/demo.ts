type thing = string | number | string[];
let returnSomeThing = (someThing: thing) => {
    if (someThing instanceof Array) {
        let joinedThings: string = "";
        someThing.forEach((thing: string) => {
            joinedThings += `${thing}`;
        });
        console.log("joinedThings = ", joinedThings);

    } else {
        console.log("something = ", someThing);

    }

};
returnSomeThing(["hello", "World", "!"]);
returnSomeThing("hello World !");
returnSomeThing(8);

type stuff = string | { name: string };
let gimmeStuff = (stuff: stuff) => {
    typeof stuff === "string";
    typeof stuff.name === "string";
};

type coolThings = { name: string } | { id: number };
let gimmeCoolThings = (thing: coolThings) => {
    if (typeof thing.name === "string") {
        return thing.name;
    }
    if (typeof thing.id === "number") {
        return thing.id;
    }
};

type stuffAndThings = { cool: string; meh: string } | { cool: string; lame: string }
let gimmeStuffAndThings = (sat: stuffAndThings) => {
    return sat.cool || sat.lame;
}
