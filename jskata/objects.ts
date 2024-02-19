const arr: string[] = ['key', 'value'] //store an array of strings

// checks the length of array and returns key value pair of array strings
const entries: [string, string][] = Object.entries(arr)
// [['0', 'key'], ['1', 'value']]

const fromEntries = Object.fromEntries(entries)

console.log(fromEntries) // {0: 'key', 1: 'value' }
