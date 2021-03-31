let charMap = {};
let text = 'aaaaabbbbbggggghhh';

for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
        charMap[char]++
    } else {
        charMap[char] = 1;
    }
}
console.log(charMap);
