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

export const openDom =  ({tag='div', value = '', classes = [] }={}) =>
  `<${tag} class='${classes.join(' ')}'>${value}`;

export const closeDom = ({tag = 'div', value =''}={}) =>
  `${value}</${tag}>`;
