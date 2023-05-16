# vue3-quickstart

### 원쌤의 Vue3 퀵스타트 

<img src="https://github.com/stepanowon/vue3-quickstart/blob/main/vue_cover.jpg" data-canonical-src="vue_cover.jpg" width="400" />

---

- ch01 : Vue.js 소개
- ch02 : Vue.js를 위한 ES6
- ch03 : Vue.js기초와 Template
- ch04 : Vue 인스턴스
- ch05 : 이벤트 처리
- ch06 : 스타일 적용
- ch07 : 단일 파일 컴포넌트를 이용한 Vue 애플리케이션 개발
- ch08 : 컴포넌트 심화
- ch09 : 컴포지션 API
- ch10 : vue-router를 이용한 라우팅
- ch11 : axios를 이용한 HTTP 통신
- ch12 : vue-router와 axios를 사용한 예제
- ch13 : pinia를 이용한 상태관리

---

## 공지사항
### 7.4.3 속성의 유효성 검증 오류(188 페이지)
- 현재(2023.05.16) Vue 최신버전(3.3.x)에서 속성의 유효성에 어긋나는 경우 브라우저 콘솔에 경고 메시지가 나타나지 않고 있습니다. Vue 최신 버전의 버그라고 보여집니다.
- 경고 메시지가 나타나지 않는다면 Vue 버전을 다운그레이드하여 실행하십시오.
* package.json의 vue, vite 버전을 다음과 같이 변경합니다.
~~~
{
  "name": "test-vue-app",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.45"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.0.3",
    "vite": "^4.0.3"
  }
}
~~~
* package-lock.json을 삭제합니다.
* node_modules 디렉터리 전체를 삭제합니다.
* npm install 명령어를 실행해 관련모듈을 다시 내려받습니다.
* npm run dev 명령어로 다시 실행하여 기능을 확인합니다.
* 만일 그래도 경고메시지가 나타나지 않는다면 예제 파일의 ch07/test-vue-app743 을 로딩하여 확인하세요.

## 오탈자
* 오탈자는 [여기](오탈자.MD)를 확인합니다.
