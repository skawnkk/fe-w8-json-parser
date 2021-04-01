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

      function render(item, prefix = '{') {

         let html = `<div style = "padding-left: ${item.depth * 15}px"><span>${prefix}</span><br>`;
         html += `<span class="object-property">"type": "${item.type}"</span></br>`;
         console.log(item)
         if (item.child) {
            html += `<span class="object-property">"child" :[</span><br>`;
            while (item.child.length > 0) {
               html += render(item.child.shift())
            }
            html += '<span>]</span><br>'
         } else if (item.hasOwnProperty('value')) {
            if (item.value && typeof item.value !== 'boolean' && item.value.propKey) {
               html += `<div style = "padding-left: ${item.depth *15}px">"propKey": {<br>`;
               html += `<span class="object-property">"type": ${item.value.propKey.type}</span><br>`
               html += `<span class="object-property">"value": ${item.value.propKey.value},</span><br>`;

               html += `},<br>`
               html += `"propValue": {`
               //if (item.value.propValue.child) 
               html += render(item.value.propValue, '')
               //else html += `<span class="object-property">`
            } else html += `<span class="object-property">"value" : ${item.value}</span><br>`;
         }

         html += `<span>},</span><br></div>`;
         return html;
      }

      jsonParseResult.innerHTML = render(result);
   }
};

init();