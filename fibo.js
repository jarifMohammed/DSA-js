// const isAnagram = function (s,t){
//     s= s.split("").sort().join("")
//     t= t.split("").sort().join("")
//     return s===t
// }
// console.log(isAnagram("anagram", "nagaram")) // true
// console.log(isAnagram("rat", "car")) // false;
        
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
  
    let obj1 = {};
    let obj2 = {};
  
    for (let i = 0; i < s.length; i++) {
      obj1[s[i]] = (obj1[s[i]] || 0) + 1;
      obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
  
    // ✅ Now compare after building both objects
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true; // ✅ Return true after all keys matched
  };
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false  