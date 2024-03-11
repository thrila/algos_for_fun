// first we sort the array
// then we initialise the difference value to 0
// then we loop through the array checking if arr[i+1] - arr[i] > difference var if it is we update it
// we return difference
// twitter handle @nino_da_creator / name: thrila
// thanks cassidoo your newsletter rocks!!!

const randomNumbers = (length: number) => Array.from({ length }).map(() => Math.floor(Math.random() * 10) + 1);
function maxGap(arr: Array<number>): number {
  let difference = 0;
  let sorted = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (sorted[i + 1] - sorted[i] > difference) {
      difference = sorted[i + 1] - sorted[i];
    };
  };
  return difference;
}
console.log(maxGap(randomNumbers(20000000)));
