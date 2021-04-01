import style from "../style/style.scss";
import {
   _
} from './util.js';
import jsonParser from './jsonParser.js';

const init = () => {
   const parseBtn = _.$('.parse-btn');
   parseBtn.addEventListener('click', () => parse());
   const textarea = _.$('.json-area');
   const jsonParseResult = _.$('.json-parse');
   textarea.addEventListener('keyup', ({
      target
   }) => {
      if (target.value.length > 0) parseBtn.classList.remove('disabled')
      else parseBtn.classList.add('disabled')
   })
   const parse = () => {
      const result = jsonParser(textarea.value);
      function render(item, prefix = '{', suffix = ',') {
         let html = `<div class="object-block">${prefix}`;
         html += `<div class="object-property">"type": "${item.type}",</div>`;
         if (item.child) {
            html += `<div class="object-property">"child": [`;
            while (item.child.length > 0) {
               html += render(item.child.shift(), '{', item.child.length === 0 ? '' : ',');
            }
            html += ']</div>'
         } else if (item.hasOwnProperty('value')) {
            if (item.value && typeof item.value !== 'boolean' && item.value.propKey) {
               html += `<div class="object-block">"propKey": {`;
               html += `<div class="object-property">"type": ${item.value.propKey.type},</div>`
               html += `<div class="object-property">"value": ${item.value.propKey.value},</div>`;
               html += `},<br>`
               html += `"propValue": {`
               html += render(item.value.propValue, '')
               html += '</div>';
            } else html += `<div class="object-property">"value": ${item.value}</div>`;
         }

         html += `<div>}${suffix}</div></div>`;
         return html;
      }
      const renderHTML = render(result);
      const lastComma = renderHTML.lastIndexOf(',');
      jsonParseResult.innerHTML = renderHTML.substring(0, lastComma) + renderHTML.substring(lastComma + 1);
   }
};

init();