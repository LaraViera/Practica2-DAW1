$(".rating1").grating1();

$(".rating1").grating1({
  callback: function(owner, value)
  {
    console.log("Callback from "+owner.attr("id")+" with value "+value);
  }
});