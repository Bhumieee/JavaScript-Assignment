    // String And Array Problem Solving Kit!

    // 1.Reverse a string
    function reverseString(str){
        let res =" "
        for(let i =str.length-1; i>=0; i--){
            res+=str[i]
        }
    return res
    }
    console.log("reverseString:",reverseString("Radha"));
    // Output: reverseString:  ahdaR
    // Approach: "I used a loop to read the string from the last 
    // character to the first and added each character to a new string
    // to get the reversed string."


    // 2.Check Palindrome
    function checkPalindrome(str){
        let rev = str.split("").reverse().join("")
        return rev === str
    }
    console.log("checkPalindrome:",checkPalindrome("madam"));
    // Output: checkPalindrome: true
    // Approach: "I converted string to array using split then reversed and
    // joined it and compared it with the original string to check palindrome."


    // 3.Count Vowels
    function countchar(str){
        let char = ["a","i","e","o","u","A","E","I","O","U"];
        let vowel = 0
        let consonent = 0
        for(let i =0; i<str.length; i++){
            if(char.includes(str[i])){
                vowel++
            }else{
                consonent++
            }
        }
        return{
            vowels: vowel,
            consonent: consonent
        }     
    }    
    console.log(countchar("nitishSir"));
    // Output: {vowels: 3, consonent: 7}
    // Approach: I checked each character of the string. If vowel, I increased
    // the vowel count, otherwise, increased the consonant count.


    // 4.Find second largest
    function secondLargest(arr) {
        let largest = arr[0];
        let second = -Infinity;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                second = largest;
                largest = arr[i];
            }else if (arr[i] > second && arr[i] < largest){
            second = arr[i];
            }
        }
     return second;
    }
    console.log("secondLargest:",secondLargest([10, 5, 20, 20, 8, 20]));
    // Output: secondLargest: 10
    // Approach: 1st, function stores the largest number. Then it checks
    // each number and updates the largest and second-largest values. Duplicate
    // largest numbers are ignored to get second-largest.


    // 5.RemoveDuplicates
    function removeDuplicates(arr) {
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            let found = false;

            for (let j = 0; j < result.length; j++) {
                if (arr[i] === result[j]) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    console.log("removeDuplicate:", removeDuplicates([1, 2, 2, 3, 1]));
    // Output: removeDuplicate: [1, 2, 3]
    // Approach: I created a new array and checked whether each element was
    // already present in it. If not, I added it in new array.


    // 6.sum of even numbers
    function sumEvenNumbers(arr){
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum+=arr[i];
            }
        }
        return sum;
    }
    console.log("evenNumbersSum:", sumEvenNumbers([1, 2, 3, 4, 5, 6]));
    // Output: evenNumbersSum: 12
    // Approach: I checked each number using modulus operator(%). If number is 
    // divisible by 2 added it to sum.


    // 7.Count frequency 
    function countFrequency(arr, number) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === number) {
                count++;
            }
        }
        return count;
    }

    console.log("FrequencyCount:", countFrequency([1, 2, 2, 3, 2, 4], 2));
    // Output: FrequencyCount: 3
    // Approach: Checked every element of array and compared it with the given number.
    // When both were equal, I increased the count by one.


    // 8.Check anagram
    function areAnagrams(str1,str2){
        str1= str1.toLowerCase().split("").sort().join("");
        str2= str2.toLowerCase().split("").sort().join("");
        return str1 === str2;
    }
    console.log("checkAnagram:", areAnagrams("listen","silent"));
    // Output: CheckAnagram: true
    // Approach: Converted both strings to lowercase, removed spaces and sorted
    // their characters to check anagram.


    // 9.Move zeros
    function moveZeros(arr){
        let result =[];
        for(let i=0; i<arr.length; i++){
            if(arr[i]!== 0){
                result.push(arr[i]);
            }else{
                result.push(arr.shift());
                arr.push(arr.shift());
                i--;
            }
        }
        return result;
    }
    console.log("moveZeros:", moveZeros([0,1,0,3,5]));
    // Output: moveZeros: [0,0,5,1,3]
    // Approach: 1st stored all non-zero elements in a new array while keeping their
    // order the same. After that, I added all the zeros at the end.
    