const assert = require("chai").assert;

const names = [
  "Michael Daniel Jäger",
  "LINUS HARALD christer WAHLGREN",
  "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
  "Kalle Anka",
  "Ghandi",
];

const expected = [
  { first: "Michael", middle: ["Daniel"], last: "Jäger" },
  { first: "Linus", middle: ["Harald", "Christer"], last: "Wahlgren" },
  {
    first: "Pippilotta",
    middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"],
    last: "Långstrump",
  },
  { first: "Kalle", middle: [], last: "Anka" },
  { first: "Ghandi", middle: [], last: null },
];

const validate = (result) => {
  try {
    assert.deepEqual(result, expected);
  } catch (e) {
    console.error("Failed", e);
  }
};

// implement code generating result
const result = [];

//generate result
names.forEach(name => {
  let first = null, middle = [], last = null
  const parts = name.split(' ')
  parts.forEach((part, index) => {
    const capitalized = part[0].toUpperCase() + part.substring(1).toLowerCase()
    if(index === 0)first = capitalized
    else if(index === parts.length - 1) last = capitalized
    else middle.push(capitalized)
  })
  result.push({ first, middle, last})
})

// At the end call validate
validate(result);
