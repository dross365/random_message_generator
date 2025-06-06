let workoutTime = ['morning', 'afternoon', 'evening'];

let inspireMessages = ["Come on, you got this!",
                "Only 5 more minutes!",
                "You're over half way, keep going!",
                "You're not going to give up now, are you?",
                "You were built for this!",
                "No pain, no gain!",
                "You showed up, now show me how it's done!",
                "You're almost there!",
                "Don't give up on me now, you're so close!",
                "Mama didn't raise no bi**h, keep going!",
                "You have to work for the life you want!",
                "You make your goals!",
                "5 more days after this!",
                "If you want that body, keep going!",
                "Extra motivation is always needed!",
                "Stop whining and keep grinding!"
];

let workoutJudgement = ['Stop right now',
                        'Keep going for 5 more minutes',
                        'keep going, you just started',
                        'stop in 10 minutes',
                        'switch to a different workout now',
                        'quit working out all together'
];


let timeOfDay = workoutTime[Math.floor(Math.random() * workoutTime.length)];
let quote = inspireMessages[Math.floor(Math.random() * inspireMessages.length)];
let judgement = workoutJudgement[Math.floor(Math.random() * workoutJudgement.length)];

const readMessages = (message1, message2, message3) => {
  return `The best time to work out is during the ${message1}!
"${message2}"
You should: "${message3}."`;
}

console.log(readMessages(timeOfDay, quote, judgement));
console.log("Hello World");
