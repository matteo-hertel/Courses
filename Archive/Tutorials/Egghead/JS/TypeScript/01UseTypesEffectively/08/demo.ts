interface SuperHero {
    powers: string[];
    savesTheDay: () => void;
}

interface BadGuy {
    badDeeds: string[];
    getRandomDeed: () => string;
    commitBadDeed: () => void;
}

let dazzler: SuperHero = {
    powers: ["tansduces sonic vibartions into loght"],
    savesTheDay() {
        console.log(`Dazzler ${this.powers} to save the day!!`);
    }
}

let badGuy: BadGuy = {
    badDeeds: ["fats on old folks", "doesn't picks up his dog's poop", "steals from babies"],
    getRandomDeed() {
        return this.badDeeds[Math.floor(Math.random() * this.badDeeds.length)];
    },
    commitBadDeed() {
        console.log(`BadGuy ${this.getRandomDeed()}`);
    }
}

function saveDayOrBadDeed(something: SuperHero | BadGuy) {
    if ((something as SuperHero).powers) {
        (something as SuperHero).savesTheDay();
    } else {
        (something as BadGuy).commitBadDeed();
    }
}

saveDayOrBadDeed(dazzler);
saveDayOrBadDeed(badGuy);
