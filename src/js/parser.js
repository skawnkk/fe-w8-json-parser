/* 

토크나이저?
   의미가 있는 최소 단위로 나누는 것. 근데 json parser이므로 6종류만 허용됨.
   그렇다면 나눈 시점에서 이미 끝나는데 더 처리할 게 있나?
렉서?
   토크나이저 단계에서 이미 트리 구조로 정제돼버림...
파서?
   ????

-------------------------

루카스에서 제시하는 방법

토크나이저
   토큰으로 분리
렉서
   토큰에 type, child, value 등을 생성
파서
   트리 구조로 생성 + 트리 구조로 출력? 

그러면 토크나이저로 모든 토큰을 만들고
이후에 렉서에서 다시 반복문을 통해 그 값들에 type, child, value를 생성?
그리고 그 다음에 파서를?

n이면 되는걸 왜 3n으로?
왜?

or
토크나이저 + 렉서 + 파서를 동시에?

*/

const test = '["1a3",[null,false,["11",[112233],{"easy" : ["hello", {"a":"a"}, "world"]},112],55, "99"],{"a":"str", "b":[912,[5656,33],{"key" : "innervalue", "newkeys": [1,2,3,4,5]}]}, true]';

const error = () => {
  return new Error('에러에요');
};

const jsonParser = str => {
  const [result, idx] = handleTokenizer(str);
  if(idx !== str.length) {
    throw error();
  }
};

// i = 시작 지점
const handleTokenizer = (str, i = 0) => {
  // 토큰 단위로 잘라내기
  // [배열, "asdf", 123, 34.4, null, false, 객체, true]
  
  // 이러면 재귀 호출이 불가능.
  while(i < str.length) {
    switch(str) {
      case '{':
      case '[':
      case '"':
      case '-':
      case '숫자': 
    }
  }
};

const lexer = arr => {
  // 토큰 배열에 의미 추가
  // [{ "type" : "array" }, { "type" : "str", "value" : "asdf" }, { "type" : "number", "value" : 123 }, ...]
};

const parser = arr => {
  // 트리 구조로 변경
  // { "type" : "array", "child" : [{ "type" : "string", "value" : "asdf" }, { "type" : "number", "value" : 123 }, ... ]}
};