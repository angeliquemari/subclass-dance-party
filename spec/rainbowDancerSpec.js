describe('rainbowDancer', function() {

  var rainbowDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rainbowDancer = new RainbowDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  xit('should have a step function that makes its node change color', function() {
    // sinon.spy(rainbowDancer.$node, 'toggle');
    // rainbowDancer.step();

    // expect(rainbowDancer.$node.pickRandomColor.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rainbowDancer, 'step');
      expect(rainbowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rainbowDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(2);
    });
  });
});
