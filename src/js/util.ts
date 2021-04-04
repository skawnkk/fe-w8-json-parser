export const _ = {
  $(selector: string, base = document) {
    return base.querySelector(selector);
  },
  $All(selector: string, base = document) {
    return base.querySelectorAll(selector);
  },
  addEvent(base:any, eventType:string, callbackFn:any){
    return base.addEventListener(eventType, callbackFn);
  },
};


interface dom {
  tag?: string;
  value?: string;
  classes?: string[];
}
//{ tag = "div", value = "", classes = [] }: dom
export const openDom = ({ tag = "div", value = "", classes = []}: dom={}):string =>
  `<${tag} class='${classes.join(" ")}'>${value}`;

export const closeDom = ({tag = "div", value= ""}:dom={}):string=>
  `${value}</${tag}>`;
