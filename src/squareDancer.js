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
  this.$node.setColor(103, 208, 159);

  this.$node.animate({left: left + 'px'});
  this.$node.animate({top: top + 'px'});
  this.$node.animate({left: this.left + 'px'});
  this.$node.animate({top: this.top + 'px'});
  //this.$node.rotateClockwise90AndJump5Px();
};
