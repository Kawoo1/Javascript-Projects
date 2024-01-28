// Import "readline" module to read user input
const readline = require('readline');

/*  This program was authored by: Kyle Shanahan
    To run the program, follow the steps below:
    1) Users will need Node.js installed. To install Node.js, follow the instructions at https://nodejs.org/
    2) Have this file downloaded locally.
    3) In the terminal, first ensure the directory the file is stored to is selected 
    by using the command: "cd path/to/your/file" <--- Make sure to replace "path/to/your/file" with the path to your file 
    4) Then, type "node TellMeAStory.js" in terminal and hit enter
    The program will begin running and then prompt the user for input and generate a short story based on the input
    
    !! To EXIT the program, type "Ctrl + C" !!
*/

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to generate a short story based on user input
function generateStory(userInput) {
  // You can customize the story generation logic based on your requirements
  const story = `Once upon a time, there was a character named ${userInput}. ${userInput} had a unique ability that made them stand out from the crowd. One day, ${userInput} embarked on a thrilling adventure that led them to unexpected places and introduced them to fascinating characters. Through challenges and triumphs, ${userInput} discovered the true power within themselves. And so, the story of ${userInput}'s extraordinary journey unfolded.`;

  return story;
}

// Prompt user for input
rl.question('Enter a subject (up to 500 characters): ', (userInput) => {
  // Check if the input exceeds 500 characters
  if (userInput.length > 500) {
    console.log('Error: Input exceeds 500 characters. Please try again with a shorter input.');
  } else {
    // Generate and display the short story
    const story = generateStory(userInput);
    console.log('\nGenerated Story:\n');
    console.log(story);
  }

  // Close the readline interface
  rl.close();
});

// Handle close event
rl.on('close', () => {
  console.log('\nThank you for using the story generator. Goodbye!');
});
