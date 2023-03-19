var display1 = document.querySelector("#display1")
var display2 = document.querySelector("#display2")
var display3 = document.querySelector("#display3")
var display4 = document.querySelector("#display4")
var display5 = document.querySelector("#display5")
var input = document.querySelector("#input")
var error = document.querySelector("#error")

function submit(){
  if (display1.textContent == "-"){
    if (input.value == "no hw yay"){
      display1.textContent = "Go revise instead :D"
    } else{
      display1.textContent = input.value
    }
  } else if (display2.textContent == "-"){
    display2.textContent = input.value
  } else if (display3.textContent == "-"){
    display3.textContent = input.value
  } else if (display4.textContent == "-"){
    display4.textContent = input.value
  } else if (display5.textContent == "-"){
    display5.textContent = input.value
  } else {
    error.textContent = "All slots full, please clear all to proceed"
  }
  
  
}

function clearall(){
  display1.textContent = "-"
  display2.textContent = "-"
  display3.textContent = "-"
  display4.textContent = "-"
  display5.textContent = "-"
  error.textContent = ""
}
