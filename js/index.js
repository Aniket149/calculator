let calScreen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (element of buttons) {
  element.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log("button is", buttonText);
    if (buttonText === "X") {
      buttonText = "*";
      screenValue += buttonText;
      calScreen.value = screenValue;
    } else if (buttonText === "C") {
      screenValue = "";
      calScreen.value = screenValue;
    } else if (buttonText === "=") {
       if(screenValue === ""){
        screenValue = "";
        calScreen.value = screenValue;
      }else{
        calScreen.value = eval(screenValue);
      }
      
    } else if (buttonText === "+/-") {
      if (isNaN(screenValue)) {
        screenValue = screenValue;
        calScreen.value = screenValue;
      }else if(screenValue === ""){
        screenValue = "";
        calScreen.value = screenValue;
      } else {
        screenValue = -1 * screenValue;
        calScreen.value = screenValue;
      }
    } 
    else if(buttonText === "%") {
      if (isNaN(screenValue)){
          screenValue = screenValue;
          calScreen.value = screenValue;
      } else if(screenValue === ""){
        screenValue = "";
        calScreen.value = screenValue;
      }else {
        screenValue = screenValue/100;
        calScreen.value = screenValue;
    }
    }else{
        screenValue += buttonText;
        calScreen.value = screenValue;
    }
  });
}
