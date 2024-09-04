
function frequencyMap(str) {
    let freqMap = {}
    for (let char of str) {
        if(char>= 'a' && char <= 'z')
            freqMap[char] = (freqMap[char] || 0) + 1
    }

    return freqMap
}
function areAnagrams(str1, str2) {
    
    freqMap1 = frequencyMap(str1.toLowerCase())
    freqMap2 = frequencyMap(str2.toLowerCase())

    console.log('freqMap1 = ', freqMap1);
    console.log('freqMap2 = ', freqMap2);

    key1 = Object.keys(freqMap1)
    key2 = Object.keys(freqMap2)

    console.log('key1 = ', key1);
    console.log('key2 = ', key2);

    if (key1.length !== key2.length) return false

    for (let key of key1) {
        if ( freqMap1[key] !== freqMap2[key]) return false
        
    }

    return true
} 

console.log(areAnagrams('li @ sten', 'sIL, @ ent')); // Output: true 
console.log(areAnagrams('hello', 'world')); // Output: false