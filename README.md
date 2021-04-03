# fe-w8-json-parser

## webpack typescript 세팅

1. typescript, ts-loader 설치
> npm i --save-dev typescript ts-loader

___ 

2. 타입스크립트 config 생성
> tsc --init

경로는 프로젝트의 시작점인 root로 설정

```json
// tsconfig.json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "allowJs": true,
    "checkJs": true,
    "target": "es5",
    "module": "amd",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

___ 

3. 웹팩 config 수정

```javascript
// rules 추가
{
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}
// allowJs를 true로 해뒀다면 바벨 로더를 대체해도 됨.
// 변경 전
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: "babel-loader"
},
// 변경 후
{
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}
```

___ 

4. 바벨 dependencies 삭제

> npm uninstall @babel/cli @babel/core @babel/preset-env babel-loader

___ 

5. 실행!

> nodemon server.js


**tsconfig.json 최종 상태**
```json
{
  "compilerOptions": {
    "outDir": "./dist/", // 컴파일 결과물이 저장될 경로
    "allowJs": true, // js 파일의 컴파일 여부
    "checkJs": true, // js 파일의 에러 출력
    "target": "es5", // 컴파일 환경 설정
    "module": "amd", // import
    "sourceMap": true, // sourceMap 사용
    "skipLibCheck": true, // *.d.ts 파일의 검사를 진행하지 않음.
    "moduleResolution": "node", // 에러 수정 사항 1 참고
    "forceConsistentCasingInFileNames": true, // 파일의 대소문자를 구분하는 설정
  }
}
```

**webpack.config.js 최종 상태**

```javascript
module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
      new HtmlWebpackPlugin({
          template: 'src/index.html'
      }),
      new CleanWebpackPlugin()
  ],
}
```

## 에러 수정

1. HtmlWebpackPlugin, CleanWebpackPlugin 등 모듈의 Cannot find module 에러

tsconfig.json의 module 옵션이 amd, system, es6일 경우 기본 값은 classic이 된다.  
클래식에서는 module을 찾을 때, 전역 폴더부터 하위 폴더를 탐색하게 되며,  
하위 폴더에 **HtmlWebpackPlugin** 이나 **CleanWebpackPlugin** 이 존재함을 확인할 수 없으므로 에러가 발생한다.

tsconfig.json에 아래의 옵션을 추가
> "moduleResolution": "node"

**"node"** 로 명시하게 되면 **node_modules** 를 탐색하게 된다.

___ 

2. writeToDisk 일 때, nodemon이 자동 재시작하는 문제

dist 폴더를 ignore 처리하면 해결된다!  
package.json의 최상위 프로퍼티에 아래의 프로퍼티를 추가한다.

```json
"nodemonConfig": {
  "ignore": ["dist/*"]
} 
```

___ 

3. js 파일에서 css를 로드할 때, Cannot find module '경로/파일' or its corresponding type declarations. 에러가 발생

> 1. alias 삭제

```javascript
// 기존
import style from "../style/style.scss";
// 변경
import "../style/style.scss";
```

4. server.js에서 webpack 관련 에러가 발생하는 경우

> ERROR in C:\Users\kowoo\github\codesquad\fe-w8-json-parser\server.js(6,26) TS2769: No overload matches this call.

> 1. ignore 추가

```javascript
// @ts-ignore
const compiler = webpack(webpackConfig);
```

> 2. tsconfig.json에서 checkJs 삭제

근본적인 해결책을 못찾겠음 ::(

