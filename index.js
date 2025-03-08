function distanceFromHqInBlocks(street) {
  const hqBlock = 42;
  return Math.abs(street - hqBlock);
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(street) {
  const hqBlock = 42;
  const feet = 264;
  return Math.abs(street - hqBlock) * feet;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
  const feet = 264;
  return Math.abs(destination - start) * feet;
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination) {
  const feet = 264;
  const distTravelled = Math.abs(destination - start) * feet;
  if (distTravelled <= 400) {
    return 0;
  } else if (distTravelled > 400 && distTravelled <= 2000) {
    const distTravelled2 = (distTravelled - 400) * 0.02;
    return distTravelled2;
  } else if (distTravelled > 2000 && distTravelled <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
calculatesFarePrice();
