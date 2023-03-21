// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}


function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(pickupLocation, destination) {
    const absoluteDistance = Math.abs(pickupLocation - destination);
    return absoluteDistance * 264;
}

function calculatesFarePrice(pickupLocation, destination) {
    let distance = distanceTravelledInFeet(pickupLocation, destination);
    if (distance <= 400) {
        return 0.00;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
    return 'cannot travel that far'
   }

}