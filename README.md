# fe-w8-json-parser

### 분류 기준

1. 숫자
2. 문자열
3. 객체
4. 배열
5. 논리값(불리언)
6. 널

**구현사항**

* [x]   index.js 이벤트 작업 (+에러수정)
* [x]   parser.js 구현 완성하기d
* [x]   리팩토링
* [x]   배포
* [ ]   에러처리_ 괄호pair, single quotation ' 처리.
* [x]   typescript적용하기


[JSONAMI Parser](http://jsonami-parser.herokuapp.com/)

**회고**
### Junami
이번 미션은 재귀사용과 정규표현식을 사용해볼 기회였던 것 같은데,
스택과 다른 방식으로 접근하게 되어 아쉽기도 하지만 대신, html에서 렌더링하는 부분과 개인적으로 다시 parsing 모듈을 재귀로 표현하여 구현하며 공부했습니다. 또한, 스택을 쓰면서 좀 더 코드가 간결해진 것을 확인할 수 있었고 다음 미션에도 기회가 된다면 스택, 재귀를 응용하고 싶습니다. 굉장히 복잡할 것 같았던 미션이었는데 제이슨의 도움으로 한결 이해가 쉬웟고 코드가 간단해 좋았습니다.
추가로 타입스크립트로 환경설정을 하고, 타입스크립트로 변환해보면서 타입스크립트의 특징과 장점(에러를 사전에 미리파악/간편한 실행 등)을 맛볼 수 있었습니다. 
마지막까지 추가미션 구현을 목표로 이끌어준 제이슨 고맙고 함께해서 즐거운 페어미션이었습니다.😃🎈

### json  
이번 주 미션은 설계에 대해서 많은 생각을 하는 시간이었습니다.  
스택과 재귀 같은 접근 방식에 대해서도 많은 고민을 했죠!

혼자서 고민하는게 아니라 팀 프로젝트다 보니 소통의 필요성을 느꼈고
제 인터넷 상태가 갑자기 안좋아져서 월요일은 제대로 된 회의를 못했습니다!
화요일날 코쿼에서 부랴부랴 렉서까지 어느정도 진척을 하긴 했는데 파서와 렌더링 쪽에서 고려해야 될 사항이 많아 걱정이었는데 주나미와의 호흡이 잘맞았는지 다행스럽게도 나머지 작업을 만족스럽게 할 수 있었어요!

타입스크립트도 동의해주신 덕분에 주말에 재미있게 공부할 수 있었습니다 👍 
결국 기본 미션에서 배포, 타입스크립트까지 얹어서 멋진 마무리를 할 수 있었네요!
에러 처리가 조금 아쉽긴하지만요!

타입스크립트를 써보니까 설계 단계부터 사용했으면 어땠을까 하는 생각이 들었습니다!
만들고 나서 바꾸려고 하니까 헷갈리는 부분이 많고, 인터페이스를 쓰기 너무 귀찮은 나머지
any라는 나쁜 녀석을 몇 번 써버렸네요.. 

주나미 덕분에 정말 정말 재미있게 미션을 진행할 수 있었습니다!
