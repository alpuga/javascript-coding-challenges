/*jshint esversion: 6 */

/* Return new array that transforms the elements'
average altitude into their orbital periods(in sec) */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var i = 0; i < arr.length; i++) {
    let pi = Math.PI;
    let twoPie = 2 * pi;
    let numerator = Math.pow(earthRadius + arr[i].avgAlt, 3);
    let denominator = GM;
    let orbitalPeriod = Math.round(twoPie * Math.sqrt(numerator / denominator));

    if (arr[i].avgAlt) {
      delete arr[i].avgAlt;
    }

    arr[i].orbitalPeriod = orbitalPeriod;
  }

  return arr;
}

orbitalPeriod([
  { name: "sputnik", avgAlt: 35873.5553 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]);
