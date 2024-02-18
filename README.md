# T-아고라

교육 이슈 모음 및 현식 교사 익명 커뮤니티
[https://tgora.kr](https://tgora.kr)

개발인원: 1인
개발기간: 2023/09/15 ~ 2023/10/03

## 백엔드 저장소

- [https://github.com/classbinu/tgora-backend](https://github.com/classbinu/tgora-backend)

## 기획 의도

- 이미 참여한 교육 이슈에 중복으로 참여하는 불편함 존재
- 기존 교사 커뮤니티에서 산발적으로 게시되는 교육 이슈 참여 독려글에 따른 피로도 누적
- 현직 교사들이 교육 이슈에 대해 의견을 나누고, 참여하고, 관리할 수 있는 커뮤니티가 필요

## 주요 기능

- 교육 이슈(입법, 청원, 설문, 서명 등) 모아보기
- 교육 이슈 참여 여부 관리
- 현직 교사 전용 익명 커뮤니티(피드, 댓글)

## 기술 스택

### 백엔드

- Nest.js

### 프론트 엔드

- Svelte Kit
- Tailwind CSS

### 데이터베이스

- MongoDB

### 배포

- Fly.io
- Netlify

## 기술적 챌린지

### 1. 피드 클릭 후 뒤로 가기 시 스크롤이 최상단으로 이동

- 최초 피드 로드 후 상태 저장 후 뒤로 가기 시에는 Fetch 없이 렌더링

### 2. 피드 내 URL에 링크가 적용되지 않음

- 정규식으로 URL 감지 시 링크로 변환

### 3. 피드 내 script 입력 시 악의적 script 실행 가능

- 정규식으로 script 태그 감지하여 빈 문자로 치환

## 이전 프로젝트

[정글피디아 v1](https://github.com/classbinu/jungle-pedia)

## 관련 포스팅

[우당탕탕 T-아고라 개발 비하인드 스토리](https://velog.io/@classbinu/%EC%9A%B0%EB%8B%B9%ED%83%95%ED%83%95-T-%EC%95%84%EA%B3%A0%EB%9D%BC-%EA%B0%9C%EB%B0%9C-%EB%B9%84%ED%95%98%EC%9D%B8%EB%93%9C-%EC%8A%A4%ED%86%A0%EB%A6%AC)

## Contact

> 서비스와 코드는 누구든지 편하게 쓰셔도 됩니다.  
> 출처를 남겨주시면 감사하겠지만, 남기지 않으셔도 괜찮습니다.🙇‍♂️  
> 서비스에 대한 피드백, 질문은 언제든지 환영합니다.🥳
> classbinu@gmail.com
