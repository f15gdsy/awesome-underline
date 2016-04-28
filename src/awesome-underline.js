const DEFAULT_OPTS = {
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
  speed: 0.3,
}

export default class AwesomeUnderline {
  constructor(containerEl, opts) {
    this.container = containerEl;
    this.opts = Object.assign({}, DEFAULT_OPTS, opts);
    this.items = [];
    this.activeIndex = 0;

    this.updateUnderline();
    this.updateItems();
    this.goto(this.activeIndex);
  }

  updateOpts(opts) {
    this.optsn = Object.assign({}, this.opts, opts);
  }

  updateItems() {
    const itemsArr = this.container.querySelectorAll(this.opts.items);

    for (let i=0; i<itemsArr.length; i++) {
      const item = itemsArr[i];
      this.items.push(item);

      this.opts.triggerEvents.forEach(event => {
        item.addEventListener(event, () => {
          this.goto(i, false);
        });
      });

      this.opts.cancelEvents.forEach(event => {
        item.addEventListener(event, () => {
          this.goto(this.activeIndex, false);
        });
      });
    }
  }

  updateUnderline() {
    console.log('here');
    this.underline = this.container.querySelector(this.opts.underline);

    const style = this.underline.style;
    style['position'] = 'absolute';

    const direction = this.opts.direction === 'horizontal' ? 'left' : 'top';
    const toScale = this.opts.direction === 'horizontal' ? 'width' : 'height';
    style['transition'] = `${this.opts.speed}s ${direction}, ${this.opts.speed}s ${toScale}`;
  }

  goto(index, active = true) {
    const item = this.items[index];
    const style = this.underline.style;

    if (active) {
      this.activeIndex = index;
    }

    if (this.opts.direction === 'vertical') {
      const height = item.clientHeight;
      const top = item.offsetTop;
      style['height'] = `${height}px`;
      style['top'] = `${top}px`;
    } else {
      const width = item.clientWidth;
      const left = item.offsetLeft;
      style['width'] = `${width}px`;
      style['left'] = `${left}px`;
    }
  }
}
