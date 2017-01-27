# Matchy - A social network for Animals

## Goals
 - To work in pairs solving real-world programming problems.
 - To understand the basics of building a data backed website.
 - To reinforce the foundations of Javascript we've learned so far.
 - To learn some new Javascript!

## What Javascript you should know already
 - variables
 - looping
 - objects
 - arrays
 - functions

If you don't know any of these concepts, see a Teacher or TA before starting this project!

# Setup
## Step 1 - Installation
 - open your cloud9 to your portfolio workspace.
 - in the terminal run `os install` and choose matchy
 - if asked, input your github username and password
 - open the `projects/matchy` folder.

## Step 2 - Explore the Project Structure
 - open the index.html file (double click on it)
 - with the index.html file open click the Run button at the top.
 - copy the url that appears in your terminal and paste it as the URL of a new tab.
 - Go back to your cloud9 and check out the other files in the project.

## Step 3 - Setting up our Dev Environment
 - Go back to your project's index.html tab
 - Open the developer console by right clicking anywhere and choosing `inspect element`.
 - Click on the `console` tab in the panel that opens up.

# Part 1
**All work in this section will be done in my_code.js**

## Step 1 - Object Creation
 1. [ ] Open up my_code.js
 1. [ ] Create a variable named `animal` and assign it to an empty object.
 1. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
 1. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
 1. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
 1. [ ] run `console.log(animal)` and refresh your page to see what `animal` looks like.
 1. [ ] It should be something like: 
~~~JS
{ species: 'duck', name: 'Jennifer', noises: [] }
~~~

## Step 2 - Array Creation
 1. [ ] Create a variable named `noises` and assign it to an empty array.
 2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
 3. [ ] Using an array function add another noise to the end of `noises`.
 4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
 6. [ ] Add an element to `noises` using this function.
 7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
 8. [ ] `console.log` the length of `noises`
 9. [ ] `console.log` the last element in `noises` again without hard coding the index.
 10. [ ] `console.log` the whole array.
 11. [ ] Does it look right?
 

## Step 3 - Combining Step 1 and 2
 1. [ ] Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
 2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
 3. [ ] `console.log` `animal`.
 4. [ ] Does it look right?


## Step 4 - Review
 1. [ ] What are the different ways you can access properties on objects?
 2. [ ] What are the different ways of accessing elements on  arrays?

## Step 5 - Take a Break!
It's super important to give your brain and yourself a rest when you can! Grab a drink and have a think! For like 10 minutes, then, **BACK TO WORK!** :)

## Step 6 - A Collection of Animals
**from now on i will say inspect instead of console.log**

 1. [ ] Create a variable named `animals` and assign it to an empty array.
 2. [ ] `push` our `animal` that we created to `animals`.
 3. [ ] inspect `animals`. What does it look like?
 4. [ ] Create a variable called `duck` and assign it to the data:
  - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
 5. [ ] `push` `duck` to `animals`
 6. [ ] inspect `animals`. What does it look like?
 7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
 8. [ ] inspect `animals`.
 9. [ ] inspect the length of `animals`
 10. [ ] Is everything looking right?


## Step 7 - Making Friends

Imagine that our website has a profile page for each animal. On this profile page we can see a list of each animal's friend on the website. Just like how people have a list of friends or followers on facebook or instagram. What would be a good data structure to hold this list of friends?

 1. [ ] Choose a data structure for this **list** of friends.
 2. [ ] Write a comment in your code that explains why you chose this data structure.
 3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
 4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 5. [ ] Write a function that takes our `animals` array and returns a random element using `Math.random`
 6. [ ] Using this function that you just created, get a random animal and add its `name` to `friends`.
 7. [ ] inspect `friends`.
 8. [ ] add `friends` as a **property** named `friends` on one of the animals in `animals`
 9. [ ] inspect your work.
 
## Step 8 - Take Another Break!!


# Part 2
**All work in this section will be done in my_code.js**

## Step 1 - Search
 1. Open up `my_code.js` in your editor.
 2. Implement a function called `search` that:
   - Takes 1 paramater, a name of an animal
   - Returns the animal's object if an animal with that name exists
   - Returns `null` if no animal with that name exists
 3. Use the search bar at the top of the page to make sure your function works.

## Step 2 - Edit
 1. Write a function called `edit` that:
   - Takes 2 parameters, a name of an animal and an object 
   - If an animal with that name exists, replace it's entire object with the new object
   - Otherwise do nothing
 2. Test it on the website

## Step 3 - Remove
 1. Write a function called `remove` that:
   - Takes 1 parameter, a name of an animal
   - If an animal with that name exists, remove it
 2. Test that it works on the website

## Step 4 - Create
 1. Write a function called `create` that:
   - Takes 1 parameter, an object
   - Checks that the object has a `name` property with a length > 0
   - Checks that the object has a `species` property with a length > 0
   - Has a **unique** name, meaning no other animals have that name
   - Adds this new object to the animals array, **only** if all the other conditions pass.
   - Make sure it works

This is called **data validation** and it's extremely important in web development!
 
## Step 5 - Break
**Step back and think about how far you've come!!** We are doing really hard stuff and if you've gotten here you get it! This is awesome! It means you are well on your way to becoming a **pro web developer**. SWEET!

