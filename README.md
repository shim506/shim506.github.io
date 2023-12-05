# 정리 필요글
### Gson -> Serialization 마이그레이션
- (가니쉬) 모듈화에서의 라이브러리 import

### LaunchedEffect
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


