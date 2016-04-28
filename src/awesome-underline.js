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
   * Direction of the underline.
   * Possible values are:
   * 		- "horizontal" (default),
   * 		- "vertical"
   * @type {String}
   */
  direction: 'horizontal',
}

export default class AwesomeUnderline {
  constructor(containerEl, opts) {
    this.container = containerEl;
    this.opts = Object.assign({}, DEFAULT_OPTS, opts);
    this.items = [];

    this.updateUnderline();
    this.updateItems();
    this.goto(0);
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
          this.goto(i);
        });
      });
    }
  }

  updateUnderline() {
    // this.underline = this.container.querySelector(this.opts.underline);
    this.underline = querySelector(this.opts.underline);
  }

  goto(index) {
    const item = this.items[index];
    const style = this.underline.style;

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
