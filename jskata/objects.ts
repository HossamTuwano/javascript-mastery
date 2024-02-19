const arr: string[] = ['key', 'value'] //store an array of strings

// checks the length of array and returns key value pair of array strings
const entries: [string, string][] = Object.entries(arr)
// [['0', 'key'], ['1', 'value']]

const fromEntries = Object.fromEntries(entries)

console.log(fromEntries) // {0: 'key', 1: 'value' }

// kata hyah
const entry1: string[] = ['key', 'value']

const entry2: string[] = ['key1', 'value 1']

const fromEntry1Entry2: object = Object.fromEntries([entry1, entry2])

console.log(fromEntry1Entry2) // {key: 'value', key1: 'value 1'}
