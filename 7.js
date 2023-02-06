const nums = [10, 12, 0, 13.21, 11, 153, 0, null, undefined]

let zero = 0

let even = 0

let odd = 0

for (let i = 0; i < nums.length; i++) {
  if (nums [i] === 0) {
    zero += 1
  }
  else
    if(nums [i] % 2 === 0) {
        even += 1
      }
  else
    if(nums [i] % 2 !== 0) {
      odd += 1
    }
}
console.log(`${even} чётных, ${zero} нулей, ${odd} нечётных`)
