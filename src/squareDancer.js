var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  let left = this.left + 30;
  let top = this.top + 30;

  this.$node.setColor = this.setColor;
  this.$node.setColor(0, 255, 0);

  this.$node.animate({position: 'relative', left: this.left + 30 + 'px'});
  this.$node.animate({position: 'relative', top: this.top + 30 + 'px'});
  this.$node.animate({position: 'relative', left: this.left + 'px'});
  this.$node.animate({position: 'relative', top: this.top + 'px'});

};
