import "../style/style.scss";
import { _ } from "./util.js";
import jsonParser from "./jsonParser";
import createHTML from "./createHTML.js";
import { exampleData } from "./exampledata.js";
import { stringTypeCounter, numberTypeCounter, parserDepth } from "./lexer";

const init = (): void => {
  const parseBtn: HTMLButtonElement = _.$(".parse-btn");
  const textarea: HTMLTextAreaElement = _.$(".json-area");
  const jsonParseResult: HTMLDivElement = _.$(".json-parse");
  const parseAnalysis: HTMLDivElement = _.$(".parse-analysis");

  parseBtn.addEventListener("click", (): void => parse());
  textarea.addEventListener("input", ({ target }): void => {
    if ((target as HTMLTextAreaElement).value.length > 0) changeButtonClass("remove");
    else changeButtonClass("add");
  });

  const changeButtonClass = (type): void => {
    if (type === "add") parseBtn.classList.add("disabled");
    else parseBtn.classList.remove("disabled");
  };

  const parse = () => {
    try {
      const result: object[] = jsonParser(textarea.value);
      const renderHTML: string = createHTML(result);
      const lastComma: number = renderHTML.lastIndexOf(",");
      parseAnalysis.innerHTML = `
        <span>배열중첩수준: ${Math.max(...parserDepth)}</span><br>
        <span>숫자타입갯수: ${numberTypeCounter}</span><br>
        <span>문자타입갯수: ${stringTypeCounter}</span>
      `;
      jsonParseResult.innerHTML =
        renderHTML.substring(0, lastComma) +
        renderHTML.substring(lastComma + 1);
    } catch (e) {
      console.error(e);
      jsonParseResult.innerHTML = "👿제이슨 형식이 올바르지 않습니다💀";
    }
  };

  const renderExampleBtns = (exampleBtn): void => {
    exampleBtn.innerHTML = exampleData.reduce(
      (acc, cur, i) => acc + `<button value="${i}">example ${i + 1}</button>`,
      ""
    );
    exampleBtn.addEventListener("click", ({ target }) => {
      if (target.value) {
        textarea.value = exampleData[target.value].toString();
        changeButtonClass("remove");
      }
    });
  };
  renderExampleBtns(_.$(".example-buttons"));
};

init();
