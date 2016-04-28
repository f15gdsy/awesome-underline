(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Underline = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_OPTS = {
  /**
   * Selectors for items to be decorated.
   * @type {String}
   */
  items: '[data-as-item]',
  /**
   * Selectors for the underline
   * @type {String}
   */
  underline: '[data-as-underline]',
  /**
   * The event on the item that triggers the movement of the underline.
   * @type {Array}
   */
  triggerEvents: ['mouseenter'],
  /**
   * The event on the item that cancels the movement of the underline.
   * The underline will go back to the active item.
   * @type {Array}
   */
  cancelEvents: ['mouseleave'],
  /**
   * Direction of the underline.
   * Possible values are:
   * 		- "horizontal" (default),
   * 		- "vertical"
   * @type {String}
   */
  direction: 'horizontal',
  speed: 0.3
};

var AwesomeUnderline = function () {
  function AwesomeUnderline(containerEl, opts) {
    _classCallCheck(this, AwesomeUnderline);

    this.container = containerEl;
    this.opts = _extends({}, DEFAULT_OPTS, opts);
    this.items = [];
    this.activeIndex = 0;

    this.updateUnderline();
    this.updateItems();
    this.goto(this.activeIndex);
  }

  _createClass(AwesomeUnderline, [{
    key: 'updateOpts',
    value: function updateOpts(opts) {
      this.optsn = _extends({}, this.opts, opts);
    }
  }, {
    key: 'updateItems',
    value: function updateItems() {
      var _this = this;

      var itemsArr = this.container.querySelectorAll(this.opts.items);

      var _loop = function _loop(i) {
        var item = itemsArr[i];
        _this.items.push(item);

        _this.opts.triggerEvents.forEach(function (event) {
          item.addEventListener(event, function () {
            _this.goto(i, false);
          });
        });

        _this.opts.cancelEvents.forEach(function (event) {
          item.addEventListener(event, function () {
            _this.goto(_this.activeIndex, false);
          });
        });
      };

      for (var i = 0; i < itemsArr.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: 'updateUnderline',
    value: function updateUnderline() {
      console.log('here');
      this.underline = this.container.querySelector(this.opts.underline);

      var style = this.underline.style;
      style['position'] = 'absolute';

      var direction = this.opts.direction === 'horizontal' ? 'left' : 'top';
      var toScale = this.opts.direction === 'horizontal' ? 'width' : 'height';
      style['transition'] = this.opts.speed + 's ' + direction + ', ' + this.opts.speed + 's ' + toScale;
    }
  }, {
    key: 'goto',
    value: function goto(index) {
      var active = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var item = this.items[index];
      var style = this.underline.style;

      if (active) {
        this.activeIndex = index;
      }

      if (this.opts.direction === 'vertical') {
        var height = item.clientHeight;
        var top = item.offsetTop;
        style['height'] = height + 'px';
        style['top'] = top + 'px';
      } else {
        var width = item.clientWidth;
        var left = item.offsetLeft;
        style['width'] = width + 'px';
        style['left'] = left + 'px';
      }
    }
  }]);

  return AwesomeUnderline;
}();

exports.default = AwesomeUnderline;
module.exports = exports['default'];

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXdlc29tZS11bmRlcmxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNLGVBQWU7Ozs7O0FBS25CLFNBQU8sZ0JBQVA7Ozs7O0FBS0EsYUFBVyxxQkFBWDs7Ozs7QUFLQSxpQkFBZSxDQUFDLFlBQUQsQ0FBZjs7Ozs7O0FBTUEsZ0JBQWMsQ0FBQyxZQUFELENBQWQ7Ozs7Ozs7O0FBUUEsYUFBVyxZQUFYO0FBQ0EsU0FBTyxHQUFQO0NBOUJJOztJQWlDZTtBQUNuQixXQURtQixnQkFDbkIsQ0FBWSxXQUFaLEVBQXlCLElBQXpCLEVBQStCOzBCQURaLGtCQUNZOztBQUM3QixTQUFLLFNBQUwsR0FBaUIsV0FBakIsQ0FENkI7QUFFN0IsU0FBSyxJQUFMLEdBQVksU0FBYyxFQUFkLEVBQWtCLFlBQWxCLEVBQWdDLElBQWhDLENBQVosQ0FGNkI7QUFHN0IsU0FBSyxLQUFMLEdBQWEsRUFBYixDQUg2QjtBQUk3QixTQUFLLFdBQUwsR0FBbUIsQ0FBbkIsQ0FKNkI7O0FBTTdCLFNBQUssZUFBTCxHQU42QjtBQU83QixTQUFLLFdBQUwsR0FQNkI7QUFRN0IsU0FBSyxJQUFMLENBQVUsS0FBSyxXQUFMLENBQVYsQ0FSNkI7R0FBL0I7O2VBRG1COzsrQkFZUixNQUFNO0FBQ2YsV0FBSyxLQUFMLEdBQWEsU0FBYyxFQUFkLEVBQWtCLEtBQUssSUFBTCxFQUFXLElBQTdCLENBQWIsQ0FEZTs7OztrQ0FJSDs7O0FBQ1osVUFBTSxXQUFXLEtBQUssU0FBTCxDQUFlLGdCQUFmLENBQWdDLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBM0MsQ0FETTs7aUNBR0g7QUFDUCxZQUFNLE9BQU8sU0FBUyxDQUFULENBQVA7QUFDTixjQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCOztBQUVBLGNBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZ0MsaUJBQVM7QUFDdkMsZUFBSyxnQkFBTCxDQUFzQixLQUF0QixFQUE2QixZQUFNO0FBQ2pDLGtCQUFLLElBQUwsQ0FBVSxDQUFWLEVBQWEsS0FBYixFQURpQztXQUFOLENBQTdCLENBRHVDO1NBQVQsQ0FBaEM7O0FBTUEsY0FBSyxJQUFMLENBQVUsWUFBVixDQUF1QixPQUF2QixDQUErQixpQkFBUztBQUN0QyxlQUFLLGdCQUFMLENBQXNCLEtBQXRCLEVBQTZCLFlBQU07QUFDakMsa0JBQUssSUFBTCxDQUFVLE1BQUssV0FBTCxFQUFrQixLQUE1QixFQURpQztXQUFOLENBQTdCLENBRHNDO1NBQVQsQ0FBL0I7UUFiVTs7QUFHWixXQUFLLElBQUksSUFBRSxDQUFGLEVBQUssSUFBRSxTQUFTLE1BQVQsRUFBaUIsR0FBakMsRUFBc0M7Y0FBN0IsR0FBNkI7T0FBdEM7Ozs7c0NBa0JnQjtBQUNoQixjQUFRLEdBQVIsQ0FBWSxNQUFaLEVBRGdCO0FBRWhCLFdBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsQ0FBZSxhQUFmLENBQTZCLEtBQUssSUFBTCxDQUFVLFNBQVYsQ0FBOUMsQ0FGZ0I7O0FBSWhCLFVBQU0sUUFBUSxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBSkU7QUFLaEIsWUFBTSxVQUFOLElBQW9CLFVBQXBCLENBTGdCOztBQU9oQixVQUFNLFlBQVksS0FBSyxJQUFMLENBQVUsU0FBVixLQUF3QixZQUF4QixHQUF1QyxNQUF2QyxHQUFnRCxLQUFoRCxDQVBGO0FBUWhCLFVBQU0sVUFBVSxLQUFLLElBQUwsQ0FBVSxTQUFWLEtBQXdCLFlBQXhCLEdBQXVDLE9BQXZDLEdBQWlELFFBQWpELENBUkE7QUFTaEIsWUFBTSxZQUFOLElBQXlCLEtBQUssSUFBTCxDQUFVLEtBQVYsVUFBb0IsbUJBQWMsS0FBSyxJQUFMLENBQVUsS0FBVixVQUFvQixPQUEvRSxDQVRnQjs7Ozt5QkFZYixPQUFzQjtVQUFmLCtEQUFTLG9CQUFNOztBQUN6QixVQUFNLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFQLENBRG1CO0FBRXpCLFVBQU0sUUFBUSxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBRlc7O0FBSXpCLFVBQUksTUFBSixFQUFZO0FBQ1YsYUFBSyxXQUFMLEdBQW1CLEtBQW5CLENBRFU7T0FBWjs7QUFJQSxVQUFJLEtBQUssSUFBTCxDQUFVLFNBQVYsS0FBd0IsVUFBeEIsRUFBb0M7QUFDdEMsWUFBTSxTQUFTLEtBQUssWUFBTCxDQUR1QjtBQUV0QyxZQUFNLE1BQU0sS0FBSyxTQUFMLENBRjBCO0FBR3RDLGNBQU0sUUFBTixJQUFxQixhQUFyQixDQUhzQztBQUl0QyxjQUFNLEtBQU4sSUFBa0IsVUFBbEIsQ0FKc0M7T0FBeEMsTUFLTztBQUNMLFlBQU0sUUFBUSxLQUFLLFdBQUwsQ0FEVDtBQUVMLFlBQU0sT0FBTyxLQUFLLFVBQUwsQ0FGUjtBQUdMLGNBQU0sT0FBTixJQUFvQixZQUFwQixDQUhLO0FBSUwsY0FBTSxNQUFOLElBQW1CLFdBQW5CLENBSks7T0FMUDs7OztTQXpEaUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgREVGQVVMVF9PUFRTID0ge1xuICAvKipcbiAgICogU2VsZWN0b3JzIGZvciBpdGVtcyB0byBiZSBkZWNvcmF0ZWQuXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBpdGVtczogJ1tkYXRhLWFzLWl0ZW1dJyxcbiAgLyoqXG4gICAqIFNlbGVjdG9ycyBmb3IgdGhlIHVuZGVybGluZVxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgdW5kZXJsaW5lOiAnW2RhdGEtYXMtdW5kZXJsaW5lXScsXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgb24gdGhlIGl0ZW0gdGhhdCB0cmlnZ2VycyB0aGUgbW92ZW1lbnQgb2YgdGhlIHVuZGVybGluZS5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdHJpZ2dlckV2ZW50czogWydtb3VzZWVudGVyJ10sXG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgb24gdGhlIGl0ZW0gdGhhdCBjYW5jZWxzIHRoZSBtb3ZlbWVudCBvZiB0aGUgdW5kZXJsaW5lLlxuICAgKiBUaGUgdW5kZXJsaW5lIHdpbGwgZ28gYmFjayB0byB0aGUgYWN0aXZlIGl0ZW0uXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIGNhbmNlbEV2ZW50czogWydtb3VzZWxlYXZlJ10sXG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gb2YgdGhlIHVuZGVybGluZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGFyZTpcbiAgICogXHRcdC0gXCJob3Jpem9udGFsXCIgKGRlZmF1bHQpLFxuICAgKiBcdFx0LSBcInZlcnRpY2FsXCJcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBzcGVlZDogMC4zLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdlc29tZVVuZGVybGluZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsLCBvcHRzKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJFbDtcbiAgICB0aGlzLm9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVFMsIG9wdHMpO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcblxuICAgIHRoaXMudXBkYXRlVW5kZXJsaW5lKCk7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIHRoaXMuZ290byh0aGlzLmFjdGl2ZUluZGV4KTtcbiAgfVxuXG4gIHVwZGF0ZU9wdHMob3B0cykge1xuICAgIHRoaXMub3B0c24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdHMsIG9wdHMpO1xuICB9XG5cbiAgdXBkYXRlSXRlbXMoKSB7XG4gICAgY29uc3QgaXRlbXNBcnIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0cy5pdGVtcyk7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8aXRlbXNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc0FycltpXTtcbiAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcblxuICAgICAgdGhpcy5vcHRzLnRyaWdnZXJFdmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZ290byhpLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMub3B0cy5jYW5jZWxFdmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZ290byh0aGlzLmFjdGl2ZUluZGV4LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVW5kZXJsaW5lKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgdGhpcy51bmRlcmxpbmUgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHRoaXMub3B0cy51bmRlcmxpbmUpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLnVuZGVybGluZS5zdHlsZTtcbiAgICBzdHlsZVsncG9zaXRpb24nXSA9ICdhYnNvbHV0ZSc7XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLm9wdHMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICBjb25zdCB0b1NjYWxlID0gdGhpcy5vcHRzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHN0eWxlWyd0cmFuc2l0aW9uJ10gPSBgJHt0aGlzLm9wdHMuc3BlZWR9cyAke2RpcmVjdGlvbn0sICR7dGhpcy5vcHRzLnNwZWVkfXMgJHt0b1NjYWxlfWA7XG4gIH1cblxuICBnb3RvKGluZGV4LCBhY3RpdmUgPSB0cnVlKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaW5kZXhdO1xuICAgIGNvbnN0IHN0eWxlID0gdGhpcy51bmRlcmxpbmUuc3R5bGU7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0cy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgdG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgICBzdHlsZVsnaGVpZ2h0J10gPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgc3R5bGVbJ3RvcCddID0gYCR7dG9wfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgd2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuICAgICAgY29uc3QgbGVmdCA9IGl0ZW0ub2Zmc2V0TGVmdDtcbiAgICAgIHN0eWxlWyd3aWR0aCddID0gYCR7d2lkdGh9cHhgO1xuICAgICAgc3R5bGVbJ2xlZnQnXSA9IGAke2xlZnR9cHhgO1xuICAgIH1cbiAgfVxufVxuIl19
