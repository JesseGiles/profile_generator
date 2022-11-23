//following code imports node readline functionality and uses stdin/out to push and receive input from command line interface

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//following code populates interface ^ above with questions, then receives and stores each answer before displaying combined profile msg and closing readline

rl.question('What\'s your name? Nicknames are also acceptable: ', (answer) => {
  let answer1 = answer;
  console.log(`Nice to meet you ${answer}!`);
  rl.question('What\'s your age, by the way?: ', (answer) => {
    let answer2 = answer;
    console.log(`Oh wow, only ${answer}? So young.`);
    rl.question('Who\'s your favorite historical figure?: ', (answer) => {
      let answer3 = answer;
      console.log(`I agree, ${answer} is an inspiration.`);
      rl.question('Whats your favorite travel destination?: ', (answer) => {
        let answer4 = answer;
        console.log(`Oh nice, I've always wanted to visit ${answer}!`);
        let finalProfile = `\nYOUR NEW PROFILE:\nYour parents named you ${answer1} because the hospital would not accept 'Dumby dumb face' on the birth certificate. You are already ${answer2} years old?? What was life like before electricity? Was ${answer3} nice to you when you were in school together? As per your will, when you die, your remains be spread over ${answer4}. You will not be cremated first.`;
        console.log(finalProfile);
        rl.close();
      });
    });
  });



});

