class Question
{
  constructor(text, choices,answers)
  {
    this.text = text;
    this.choices = choices;
    this.answers=answers;
  }
}
if(document.URL.includes("nightsky.html")){
  
  if (parseInt(localStorage.getItem("Score")) > 0)
    {
      document.getElementById("decision").id ="NightSkyGood";
    }
    else
    {
      document.getElementById("decision").id ="NightSkyBad";
    }
    
}



var currentQuestion = 0;
var score = 0;

var questions_list = [
  new Question("You are buying a new lightbulb. What type do you choose?", ["Incandescent", "LED", "I don't need lightbulbs"], [-1,1,0]),

  new Question("You are going out for work.", ["Leave the lights on", "Turn some of them off","Turn them all off"],[-1,0,1]),

  new Question("What light bulbs do you prefer?", ["Dim", "Bright", "Who cares?"], [1, -1, 0]),
  
  new Question("You have a light outside your front porch.",["Install a motion sensor","Install a timer","Leave it as is."], [2,1,0]),

  new Question("As you walk out of a room, what do you do?", ["Turn off the lights.", "Leave them on", "Leave a small lamp on instead."], [1, -1,0]),

  new Question("You have just installed some outdoor lights.",["Leave them as is.","Cover them up with lighting fixtures.","Turn them off"], [-1,1,0]),
  
  new Question("You are deciding whether to buy new lightbulbs.",["Buy 1 incandescent lightbulb.","Buy 3 LED lightbulbs.","Don't buy any lightbulbs."], [0,-1,1]),
  new Question("You are buying a new light.",["Buy a warm lightbulb.","Buy a cold lightbulb.","Buy a nonfiltered lightbulb."],[1,-1,0]),
  new Question("How can you fix light pollution?",["Talk to your local representative","Do nothing","Talk to your local hardware store."],[1,-1,0])
]
if(document.URL.includes("sim.html")){
  document.getElementById("Question").innerHTML = ((questions_list[currentQuestion]).text);

document.getElementById("button1").innerHTML = ((questions_list[currentQuestion]).choices[0]);

document.getElementById("button2").innerHTML = ((questions_list[currentQuestion]).choices[1]);

document.getElementById("button3").innerHTML = ((questions_list[currentQuestion]).choices[2]);
localStorage.setItem("Score",score);
}




function answer(answer)
{
  score = parseInt(localStorage.getItem("Score"));  
  score += (questions_list[currentQuestion]).answers[answer-1];
  localStorage.setItem("Score",score);
  currentQuestion += 1;

  if (currentQuestion >= 9)
  {
    window.location.href = "nightsky.html";
    
    
    
  }

  document.getElementById("Question").innerHTML = ((questions_list[currentQuestion]).text);


  document.getElementById("button1").innerHTML = ((questions_list[currentQuestion]).choices[0]);

  document.getElementById("button2").innerHTML = ((questions_list[currentQuestion]).choices[1]);

  document.getElementById("button3").innerHTML = ((questions_list[currentQuestion]).choices[2]);
  


}
function next(){
  window.location.href = "ending.html";
}




/*
5 events happen
"""""""""""interactive simulation""""""""""""""" aka survey aka chore and not fun

LED or normal lightbulb
leave the lights on when you are going to work?
Dim light or bright light
Motion sensor or constantly on?
How many lights are in your house?
Outdoor lighting fixtures?
Do you leave the lights on when you leave the room?
Unnecessary indoor lighting?
Warm lights?
Talk to your local representative?


Every time you answer a prompt, get a certain amount of "pollution points"

At the end, it gives you a score and a picture of the night sky, with a different amount of stars depending on how many points you have

*/

/*
Additional ideas:
Projections into the future(10 years, 100 years, etc...) that show you what the night sky will look like
 lim
time→∞

More questions??





720x425


*/
