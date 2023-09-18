function scuberGreetingForFeet(Feet){
  // Write your code here!
  if (Feet <= 400){
    return "This one is on me!";
  }
  else if (Feet > 2000 && Feet <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else
    return 'No can do.';
  
}

function ternaryCheckCity(City){
  // Write your code here!
  return City === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  switch (Tip){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default: "thanks for everything"
      return "Bye.";
  }
}