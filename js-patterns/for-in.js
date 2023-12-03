// use for in to iterate non array objects. looping in for-in is also called enumaration

const man = {
  heads: 1,
  legs: 2,
  hands: 2,
};

for (let i in man) {
  //check obj hasOwnProperty
  if (man.hasOwnProperty(i)) {
    console.log(i, ": ", man[i]);
  }
  // heads: 1
  //   returns
  // legs: 2,
  // handsL 2,
}

//  more efficient way use

const hasOwn = Object.prototype.hasOwnProperty;
console.log("\n");
for (let i in man) {
  if (hasOwn.call(man, i)) {
    console.log(i, ": ", man[i]);
  }
}
