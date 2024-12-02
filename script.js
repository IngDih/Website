// //import random

// // Function to assign a random letter and a random num to create a random set:
// def randomSet():
//     letters = ["a", "b", "c", "d", "e"]
//     nums = [1, 2, 3, 4, 5]
    
//     # Randomly pick an item from each list
//     random_letter = random.choice(letters)
//     random_number = random.choice(nums)
    
//     return random_letter, random_number


// letter, num = randomSet()
// print("Your set is " + letter + str(num))

// // Function to get the user input:
// def getInput():
    

// // Function to make the comparisons between user input and random set:
// def compareSets():



const letters = ["a", "b", "c", "d", "e"];
const nums = [1, 2, 3, 4, 5]

const randomLetterIndex = Math.floor(Math.random() * letters.length);
const randomNumIndex = Math.floor(Math.random() * nums.length);
const randomLetter = letters[randomLetterIndex]
const randomNumber = nums[randomNumIndex]

console.log(randomSet); 
    