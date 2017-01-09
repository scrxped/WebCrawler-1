// Generated by CoffeeScript 1.11.1
var Queue,
  slice = [].slice;

Queue = (function() {
  function Queue() {
    this.increment = 0;
    this.queue = [];
    this.crawled = [];
  }

  Queue.prototype.add = function(job) {
    if (Array.isArray(job)) {
      return this.queue = slice.call(job);
    } else if (!this.exists(job)) {
      return this.queue.push(job);
    }
  };

  Queue.prototype.getNextJob = function() {
    return this.queue.pop();
  };

  Queue.prototype.isEmpty = function() {
    return this.queue.length === 0;
  };

  Queue.prototype.update = function() {};

  Queue.prototype["delete"] = function() {};

  Queue.prototype.exists = function() {};

  return Queue;

})();

module.exports = Queue;

//# sourceMappingURL=queue.js.map