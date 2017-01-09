// Generated by CoffeeScript 1.11.1
var PriorityQueue;

PriorityQueue = function() {
  var _best, _shift_down, _shift_up, _swap;
  this.q = [];
  _best = function(a, b) {
    return this.q[a].priority < this.q[b].priority;
  };
  _swap = function(a, b) {
    var ref;
    return ref = [this.q[b], this.q[a]], this.q[a] = ref[0], this.q[b] = ref[1], ref;
  };
  _shift_down = function() {
    var best, c1, c2, max, n;
    n = 0;
    max = this.q.length;
    while (n < max) {
      c1 = 2 * n + 1;
      c2 = c1 + 1;
      best = n;
      if (c1 < max && _best(c1, best)) {
        best = c1;
      }
      if (c2 < max && _best(c2, best)) {
        best = c2;
      }
      if (best === n) {
        return;
      }
      _swap(n, best);
      n = best;
    }
  };
  _shift_up = function() {
    var n, parent;
    n = q.length - 1;
    while (n > 0) {
      parent = ~~((n - 1) * .5);
      if (_best(parent, n)) {
        return;
      }
      _swap(n, parent);
      n = parent;
    }
  };
  return {
    get: function() {
      return q;
    },
    size: function() {
      return q.length;
    },
    push: function(priority, value) {
      q.push({
        priority: priority,
        value: value
      });
      return _shift_up();
    },
    pop: function() {
      var last, value;
      if (q.length === 0) {
        console.log('Cannot pop from empty queue');
      }
      value = q[0].value;
      last = q.pop();
      if (q.length > 0) {
        q[0] = last;
        _shift_down();
      }
      return value;
    }
  };
};

module.exports = PriorityQueue;

//# sourceMappingURL=PriorityQueue.js.map