alert("welcome to the mobile recommender");
alert(
  "please answer the following questions to help us suggest the perfect mobile for your use"
);
var budget = prompt("choose your budget", "low, med, high");
var system = prompt("which type of system do you prefer", "android, IOS");

if (budget === "high") {
  if (system === "ios") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      // prompt("we have this model in basic camera quality", "ios13");
      alert("We have this model in basic camera quality \n Iphone 13 ");
    } else if (camera == "moderate") {
      // prompt("we have this model in moderate camera quality", "ios14");
      alert(
        "We have this model in moderate camera quality \n Iphone 14ProMax "
      );
    } else if (camera == "high") {
      // prompt("we have this model in high camera quality", "ios15");
      alert("We have this model in high camera quality \n Iphone 15 ");
    }
    battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      // prompt("we have this model in short battery life", "iphone5");
      alert("We have this model in short battery life \n Iphone 05 Pro Max ");
    } else if (battery == "long") {
      // prompt("we have this model in long battery life", "iphone15");
      alert("We have this model in long battery life \n Iphone 15 Pro Max ");
    } else if (battery == "average") {
      // prompt("we have this model in long battery life", "iphone11");
      alert("We have this model in average battery life \n Iphone 11 Pro Max ");
    }
    screensize = prompt("how important is screensize to you? ");
    if (screensize == "small") {
      // prompt("we have this model in short screensize", "iphone5");
      alert("We have this model in short screensize \n Iphone5 Pro Max ");
    } else if (screensize == "medium") {
      alert("We have this model in long screensize \n Iphone13 Pro Max ");
    } else if (screensize == "large") {
      alert("We have this model in average screensize \n Iphone15 Pro Max ");
    } else {
      alert("not available");
    }
  } else if (system === "android") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      alert("We have this model in basic camera quality \n techno ");
    } else if (camera == "moderate") {
      alert("We have this model in moderate camera quality \n motoe4 ");
    } else if (camera == "high") {
      alert("We have this model in high camera quality \n google pixels ");
    }
    battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      alert("We have this model in short battery life \n samsung ");
    } else if (battery == "long") {
      alert("We have this model in long battery life \n nokia10 ");
    } else if (battery == "average") {
      alert("We have this model in average battery life \n huawei ");
    }
    screensize = prompt("how important is screensize to you? ");
    if (screensize == "small") {
      alert("We have this model in short screensize \n samsung galaxy5 ");
    } else if (screensize == "medium") {
      alert("We have this model in long screensize \n opppo ");
    } else if (screensize == "large") {
      alert("We have this model in average screensize \n galaxy53 ");
    } else {
      alert("not available");
    }
  }
} else if (budget === "medium") {
  if (system === "ios") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      alert("We have this model in basic camera quality \n iphone 8+ ");
    } else if (camera == "moderate") {
      alert(
        "We have this model in moderate camera quality \n Iphone 12pro max "
      );
    } else if (camera == "high") {
      alert("We have this model in high camera quality \n Iphone 11 ");
    }
    battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      alert("We have this model in short battery life \n Iphone x");
    } else if (battery == "long") {
      alert("We have this model in long battery life \n Iphone xs max ");
    } else if (battery == "average") {
      alert("We have this model in average battery life \n Iphone 7+ ");
    }
    screensize = prompt("how important is screensize to you? ");
    if (screensize == "small") {
      alert("We have this model in short screensize \n iphone6 ");
    } else if (screensize == "medium") {
      alert("We have this model in long screensize \n Iphone11 ");
    } else if (screensize == "large") {
      alert("We have this model in average screensize \n Iphone12 Pro Max ");
    } else {
      alert("not available");
    }
  } else if (budget === "medium") {
    if (system === "android") {
      var camera = prompt(
        "what camera quality do you need?",
        "basic, moderate, high"
      );
      if (camera == "basic") {
        alert("We have this model in basic camera quality \n redmi k20 pro ");
      } else if (camera == "moderate") {
        alert("We have this model in moderate camera quality \n vivo ");
      } else if (camera == "high") {
        alert("We have this model in high camera quality \n lg ");
      }
      battery = prompt("how important is battery life to you? ");
      if (battery == "short") {
        alert("We have this model in short battery life \n infinix smart");
      } else if (battery == "long") {
        alert("We have this model in long battery life \n amazong ");
      } else if (battery == "average") {
        alert("We have this model in average battery life \n galaxy z filp ");
      }
      screensize = prompt("how important is screensize to you? ");
      if (screensize == "small") {
        alert("We have this model in short screensize \n galaxy s20 ");
      } else if (screensize == "medium") {
        alert("We have this model in long screensize \n galaxy m20 ");
      } else if (screensize == "large") {
        alert("We have this model in average screensize \n galaxy m40 ");
      } else {
        alert("not available");
      }
    }
  }
}

if (budget === "low") {
  if (system === "ios") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      // prompt("we have this model in basic camera quality", "ios13");
      alert("We have this model in basic camera quality \n Iphone 5 ");
    } else if (camera == "moderate") {
      // prompt("we have this model in moderate camera quality", "ios14");
      alert("We have this model in moderate camera quality \n Iphone 6s ");
    } else if (camera == "high") {
      // prompt("we have this model in high camera quality", "ios15");
      alert("We have this model in high camera quality \n Iphone 7+");
    }
    battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      // prompt("we have this model in short battery life", "iphone5");
      alert("We have this model in short battery life \n Iphone 8 ");
    } else if (battery == "long") {
      // prompt("we have this model in long battery life", "iphone15");
      alert("We have this model in long battery life \n Iphone 8 x ");
    } else if (battery == "average") {
      // prompt("we have this model in long battery life", "iphone11");
      alert("We have this model in average battery life \n iphone 9 ");
    }
    screensize = prompt("how important is screensize to you? ");
    if (screensize == "small") {
      // prompt("we have this model in short screensize", "iphone5");
      alert("We have this model in short screensize \n Iphone5 11 pro max ");
    } else if (screensize == "medium") {
      alert("We have this model in long screensize \n Iphone12 Pro Max ");
    } else if (screensize == "large") {
      alert("We have this model in average screensize \n Iphone13 Pro Max ");
    } else {
      alert("not available");
    }
  } else if (system === "android") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      alert("We have this model in basic camera quality \n real me 9 ");
    } else if (camera == "moderate") {
      alert("We have this model in moderate camera quality \n nokia1 ");
    } else if (camera == "high") {
      alert("We have this model in high camera quality \n google pixels3 ");
    }
    battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      alert("We have this model in short battery life \n samsung a20 ");
    } else if (battery == "long") {
      alert("We have this model in long battery life \n opppof21 ");
    } else if (battery == "average") {
      alert("We have this model in average battery life \n q mobile ");
    }
    screensize = prompt("how important is screensize to you? ");
    if (screensize == "small") {
      alert("We have this model in short screensize \n sony ");
    } else if (screensize == "medium") {
      alert("We have this model in long screensize \n haier ");
    } else if (screensize == "large") {
      alert("We have this model in average screensize \n samsung22 ");
    } else {
      alert("not available");
    }
  }
} else if (budget === "medium") {
  if (system === "ios") {
    var camera = prompt(
      "what camera quality do you need?",
      "basic, moderate, high"
    );
    if (camera == "basic") {
      alert("We have this model in basic camera quality \n iphone 8+ ");
    } else if (camera == "moderate") {
      alert(
        "We have this model in moderate camera quality \n Iphone 12pro max "
      );
    } else if (camera == "high") {
      alert("We have this model in high camera quality \n Iphone 11 ");
    }
    battery = prompt("how important is battery life to you? ");
    if (battery == "short") {
      alert("We have this model in short battery life \n Iphone x");
    } else if (battery == "long") {
      alert("We have this model in long battery life \n Iphone xs max ");
    } else if (battery == "average") {
      alert("We have this model in average battery life \n Iphone 7+ ");
    }
    screensize = prompt("how important is screensize to you? ");
    if (screensize == "small") {
      alert("We have this model in short screensize \n iphone6 ");
    } else if (screensize == "medium") {
      alert("We have this model in long screensize \n Iphone11 ");
    } else if (screensize == "large") {
      alert("We have this model in average screensize \n Iphone12 Pro Max ");
    } else {
      alert("not available");
    }
  } else if (budget === "medium") {
    if (system === "android") {
      var camera = prompt(
        "what camera quality do you need?",
        "basic, moderate, high"
      );
      if (camera == "basic") {
        alert("We have this model in basic camera quality \n redmi k20 pro ");
      } else if (camera == "moderate") {
        alert("We have this model in moderate camera quality \n vivo ");
      } else if (camera == "high") {
        alert("We have this model in high camera quality \n lg ");
      }
      battery = prompt("how important is battery life to you? ");
      if (battery == "short") {
        alert("We have this model in short battery life \n infinix smart");
      } else if (battery == "long") {
        alert("We have this model in long battery life \n amazong ");
      } else if (battery == "average") {
        alert("We have this model in average battery life \n galaxy z filp ");
      }
      screensize = prompt("how important is screensize to you? ");
      if (screensize == "small") {
        alert("We have this model in short screensize \n galaxy s20 ");
      } else if (screensize == "medium") {
        alert("We have this model in long screensize \n galaxy m20 ");
      } else if (screensize == "large") {
        alert("We have this model in average screensize \n galaxy m40 ");
      } else {
        alert("not available");
      }
    }
  }
}
