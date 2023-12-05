# 정리 필요글
### Gson -> Serialization 마이그레이션
- (가니쉬) 모듈화에서의 라이브러리 import

### LaunchedEffect
- 



## 12/5
- TypeScript 에서 JS 외부 라이브러리를 사용하려면 타입 정보가 필요하고 그에 따라 타입 정보를 갖는 파일을 "타잊 정의 파일" 이라고한다
- 타입 정의 파일은 두가지 형태로 적용가능
  - 라이브러리에서 제공: @types/라이브러리 해당 모듈을 설치
    - node_modules 하위에 @types 안에 타입 정의 파일들이 모이는 곳에 담기게됨
  - 미제공: .d.ts 파일을 추가 -> 직접 제작
    - 해당 라이브러리와 같은 위치에 .d.ts 파일을 생성하여 type을 정의해주어야함
  - 참고: 실제 라이브러리 코드는 node_modules 안에 해당 라이브러리 이름으로 접근하여 확인 가능
- Dom 이란? 
  - 브라우저에서 html 의 요소들 객체화하여 들고 있는 주체
  - JS 객체는 아니지만 JS를 통해 DOM 에 접근하여 조작할 수 있음
  - Dom 에서 제공하는 API 규격은 브라우저들 모두 공유함
  - Dom 은 트리구조로 Html 요소들을 객체형태로 들고 있게됨
  - HTML 엘리먼트들은 Node 를 상속 받기 때 문에 최종적으로 DOM 은 node 들을 들고 있는 형태
  - HTML 요소들에 대해 공통적으로 사용하던 API 는 Node 에서 제공하는 API? 
    - 해당 API 에 대해서 정리가 필요함
  - CSSOM
    - 비슷한 형식으로 HTML 대신 CSS 가 대상인 DOM 이다
    - DOM(html) + CSSOM(css) 이 융합되 우리가 보는 화면 구성
  - BOM
    - 브라우저 자체를 다루기 위한 API
    - Window.~ / alert / setTimout 등등 이 있음
    - 

## 12/04
### 해상도란
- 얼마나 많은 픽셀로 이루어져있는가를 의미함
- 같은 해상도(픽셀수) 이더라도 화면 크기에 따라 선명도가 달라지기때문에 PPI 밀도 단위를 사용함

### PPI
- pixel per inch 는 일인치당 픽셀의 개수
- 픽셀의 밀도를 나타냄
- PPI 가 높을수록 선명함

### 물리픽셀 / 논리픽셀,DPR
- 개발시에는 물리픽셀이 아닌 논리픽셀을 작업함
- 논리픽셀과 물리픽셀 비율은 device-pixel ratio

## 11/30
### Fragment Result API
- 화면간 데이터 전달에는 viewmodel 공유, nav graph safe args, Fragment ResultApi 등이 있다
- https://developer.android.com/guide/fragments/communicate
- ResultAPI 방식은 특정 데이터를 이전 화면에 돌려주고 싶을때 사용하기좋음
- PIN check, 보안 관련 등등 에서 유용함
### LaunchedEffect
- 코루틴 suspense 키워드
  - 코루틴의 코드에는 코루틴을 일시 중단 시킬 수 있는 함수 또는 코드가 포함될 수 있다
  - 이런 중단 코드 코루틴 내부에 포함되거나 suspend fun 으로 정의 되어야하만 한다
- 내일 이어서...


## 11/29
### 모듈화에서의 라이브러리 import
  - 모듈간 의존성과 상관없이 라이브러리는 각 모듈에서 import 해야한다
  - 기본적으로 implementation 을 사용했을 경우 모듈별로 import 됨
  - 과거 compile 키워드는 deprecated 되었고 역할을 api 가 대체한다(둘 모두 권장X)
  - implementation 대신 api 키워드를 통해 종속성을 라이브러리 import 에도 대입할 수 있지만 권장되지 않음
    - 모듈을 사용할때는 모듈의 인터페이스만이 외부에 노출되어야하는데 라이브러리의 인터페이스까지 노출되면 안되기 때문

    
## 2023/11/28
- 한 컴퓨터에서 github 계정을 여러개를 사용할때는 컴퓨터에서 ssh 를 만들어 계정에 등록하여 사용하면 된다 [참고링크](https://velog.io/@skyepodium/Github-SSH-Key-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B8%B0)


