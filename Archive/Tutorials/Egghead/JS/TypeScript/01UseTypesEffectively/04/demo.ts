let unit: string;
let miles: "MILES" = "awesome";

type distanceMetric = "MILES" | "KILOMETERS" | "METERS" | "YARDS" | "FEET" | "INCHES";

function moveCharacter(distance: number, value: distanceMetric) {
    console.log(`You moved ${distance} ${value}`);
}

moveCharacter(3, "FEET");
