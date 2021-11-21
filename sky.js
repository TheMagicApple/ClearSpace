var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  //alert(this.value);
  var sky=document.getElementById("sky");
  var a = this.value;
  sky.className="";


  b = "sky" + (a.toString());
  sky.classList.add(b);

}