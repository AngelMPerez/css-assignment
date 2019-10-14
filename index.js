
function clickHandler(event){

  event.preventDefault();
    var x = document.forms["myForm"]["fname"].value;
    document.getElementById("insert").innerHTML = x;

    alert("Hello, my name is " + x);
  }
  console.log('file loaded')

