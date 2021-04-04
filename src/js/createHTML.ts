import { openDom, closeDom } from "./util";

export default function createHTML(item, prefix = "{", suffix = ","):string {
  let html = openDom({ value: prefix, classes: ["object-block"] });
  html +=
    openDom({ value: `"type": "${item.type}"`, classes: ["object-block"] }) +
    closeDom({ value: `,` });

  if (item.child) {
    html += openDom({ value: `"child": [`, classes: ["object-property"] });
    while (item.child.length > 0) {
      html += createHTML(
        item.child.shift(), "{",
        item.child.length === 0 ? "" : ","
      );
    }
    html += closeDom({ value: "]" });
  } else if (item.hasOwnProperty("value")) {
    if (item.value && typeof item.value !== "boolean" && item.value.propKey) {
      html += openDom({ value: `"propKey": {`, classes: ["object-block"] });
      html +=
        openDom({
          value: `"type": ${item.value.propKey.type},`,
          classes: ["object-property"],
        }) + closeDom();
      html +=
        openDom({
          value: `"value": ${item.value.propKey.value},`,
          classes: ["object-property"],
        }) + closeDom();
      html += closeDom({ value: `},`, tag: "br" });
      html += `"propValue": {`;
      html += createHTML(item.value.propValue, "");
      html += closeDom();
    } else
      html +=
        openDom({
          value: `"value": ${item.value}`,
          classes: ["object-property"],
        }) + closeDom();
  }
  html += openDom({ value: `}${suffix}` }) + closeDom() + closeDom();
  return html;
}
