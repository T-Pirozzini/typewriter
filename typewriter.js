const sentence = "hello there from lighthouse labs";

const typewriter = function(str) {  
  str += "\n";
  let delay = 800
    for (const char of str)     
      setTimeout(() => {
        process.stdout.write(char)
      }, delay += 70);
  }

typewriter(sentence)