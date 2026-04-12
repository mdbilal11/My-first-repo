const marvel_heros = ["thor", "spiderman", "Ironman"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const again_array = [1, 2, 3, [6, 7,], 8, 9, [2, 3, 4, [5, 6]]]
const new_again_array = again_array.flat(Infinity)
// console.log(new_again_array);

console.log(Array.isArray("Bilal"))
console.log(Array.from("Bilal"))
