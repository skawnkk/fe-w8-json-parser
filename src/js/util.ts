interface dom {
  tag?: string;
  value?: string;
  classes?: string[];
}

export const _ = {
  $(selector, base = document) {
    return base.querySelector(selector);
  },
  $All(selector, base = document) {
    return base.querySelectorAll(selector);
  },
  addEvent(base, eventType, callbackFn) {
    base.addEventListener(eventType, callbackFn);
  },
};

export const openDom = ( { tag = "div", value = "", classes = [] }: dom = {}): string =>
  `<${tag} class='${classes.join(" ")}'>${value}`;

export const closeDom = ( { tag = "div", value = "" }: dom = {}): string =>
  `${value}</${tag}>`;
