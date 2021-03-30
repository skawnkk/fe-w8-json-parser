import { SEPARATOR } from './variables.js';

const error = (i) => {
  return new Error(`에러에요 ${i}`);
}

// 주어진 문자열을 순서대로 방문하며, depth 구분 없이 토큰 단위의 배열로 반환.
// create~Token() 함수들은 tokenizer의 내부에 존재.
export const tokenizer = str => {
  const result = [];
  let i = 0;
  while(i < str.length) {
    if(str[i] === ' ') {
      i++;
      continue;
    }
    if(SEPARATOR.includes(str[i])) {
      // 세퍼레이터라면 result에 바로 추가
      result.push(str[i++]);
      continue;
    } else {
      // null, true, false, ", 0~9
      switch(str[i]) {
        case 'n': 
          result.push(createNullToken());
          continue;
        case 't': 
          result.push(createTrueToken());
          continue;
        case 'f': 
          result.push(createFalseToken());
          continue;
        case '"': case '\'':
          result.push(createStringToken());
          continue;
      }
      if(/\d|-/.test(str[i])) {
        result.push(createNumberToken());
        continue;
      }
      throw error(i);
    }
  }

  function createNullToken() {
    if(str[++i] !== 'u') throw error(i);
    if(str[++i] !== 'l') throw error(i);
    if(str[++i] !== 'l') throw error(i);
    ++i;
    return null;
  }

  function createTrueToken() {
    if(str[++i] !== 'r') throw error(i);
    if(str[++i] !== 'u') throw error(i);
    if(str[++i] !== 'e') throw error(i);
    ++i;
    return true;
  }

  function createFalseToken() {
    if(str[++i] !== 'a') throw error(i);
    if(str[++i] !== 'l') throw error(i);
    if(str[++i] !== 's') throw error(i);
    if(str[++i] !== 'e') throw error(i);
    ++i;
    return false;
  }

  function createStringToken() {
    const start = ++i;
    while(str[++i] !== '"') {
      if(str[i] === '\\') {
        i++;
      }
    }
    return str.substring(start, i++);
  }

  function createNumberToken() {
    const start = i;
    if(str[i] === '-') i++;
    let count = 0;
    while(i) {
      console.log(str[i]);
      if(/\d|\./.test(str[i])) {
        if(/\./.test(str[i])) {
          count++;
        }
        i++;
      } else {
        break;
      }
    }
    console.log(count);
    if(count > 1) throw error(i);
    return Number(str.substring(start, i));
  }
  
  return result;
};
