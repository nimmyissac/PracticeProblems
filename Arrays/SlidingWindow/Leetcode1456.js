/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelsCount = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            vowelsCount++;
        }
    }

    let maxCount = vowelsCount;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            vowelsCount += 1;
        }
        if (vowels.has(s[i - k])) {
            vowelsCount -= 1;
        }
        maxCount = Math.max(maxCount, vowelsCount);

    }
    return maxCount;
}


