$(".rating").grating();

$(".rating").grating({
  callback: function(owner, value)
  {
    console.log("Callback from "+owner.attr("id")+" with value "+value);
  }
});