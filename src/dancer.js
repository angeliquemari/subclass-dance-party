
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  this.top = top;
  this.left = left;
};

Dancer.prototype.setColor = function(r, g, b) {
  var rgbColor = 'rgb(' + [r, g, b].join(',') + ')';
  this.css('border', '10px solid ' + rgbColor);
};

Dancer.prototype.interact = function() {
  this.$node.css('transform', 'scale(2)');
}
