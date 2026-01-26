### 26일
remember
- remember 는 recomposition 이후에도 값을 유지 하기 위한 도구
    - 최초 composition 시 한 번 실행
    - 이후 recompositiono 에서는 재실행 X
    - key 값이 있는 remember 값은 key 를 기준으로 재생성 됨
    - 예시
        - var count by remember {mutableStateOf(0)}
        - compose 사이클동안 해당 객체의 주소값은 유지되지만 mutableStateOf 값이 바뀔 수는 있음
        - Compose 는 해당 값에 대한 관찰을 수행
        - 값이 바뀔때 마다 리컴포지션 수행

- rememberUdateState
    - 값이 변경되어도 재시작되지 않아야하는 Effect 내에서 최신값으로의 수정이 필요할때 사용
        - LaunchedEffect 는 key 로 전달되는 값이 바뀌면 기존 효과를 취소하고 재시작하지만 중간에 끊기지 않고 계속 실행되야할때 씀
        - 스플레시 화면등
- rememberSaveable
    - 화면 회전 시 유지됨 + 리컴포지션 시에도 유지 
- 페이지 이동중 객체 전달 방법 
    - 이전페이지에서 객체 저장 
        - rootNavController.currentBackStackEntry?.saveStateHandler?.set(KEY, value)
    - 이후 페이지에서 객체 추출
        - rottNavController.previousBackStackEntry?.saveStateHadle?.get<Post>(KEY)

- Context
    - 리소스, 시스템 서비스, 다른 컴포넌트에 접근하기 위한 출입증 같은 존재
        - getString(R.string.xxx) -> 리소스 접근
        - startActivity(Intent) -> 화면전환
        - getSystemServic -> 시스템 서비스 사용

- ApplicationContext
    - 싱글톤
    - UI 와 상관 없음
    - 파일, DB, SharedPreferences, DataStore 에 쓰임
```
class Repository(
    @ApplicationContext private val context : Context
)
```

- ActivityContext
    - Activity 생명주기와 동일
    - UI 가 보이는 작업에서 쓰임
    - Compose 내에서 사용하는 contenxt -> val context = LocalContext.current
    - 오래 잡고 있으면 메모리 릭 위험 

```object ImageLoader {
            lateinit var context: Context

        }
// 일때 Activity 는 죽어야하는데 object 가 계속 참조하여 GC 불가함
        ```

    



### 23일
- 에디터 기본 지원동착 체크
    - 입력, 줄바꿈에 의해서 커서가 시야에서 사라지지 않도록 자동 스크롤 동작해야 함
    - 드레그를 통한 케럿(커서)이 이동해야하며 이에 맞게 스크롤이 동작해야 함
    - 커서이동 (하드웨어 키포드 방향키, 소프트 키보드 space 에서 움직임) 시 스크롤 동작
    - 커서가 키보드에 의해 가려지는 케이스가 없는지

- 에디터 관련 클래스 및 필드 정리
    - TextFieldValue.section
        - testFeildValue.selection.end
    - TextLayoutResultState
        - textLayoutResult.getLineTop
    - bringIntoViewRequestrer

- upsert 란?
    - key 값을 기준으로 이미 있는 값이라면 update 를 없다면 insert 를 수행함
    - Room Library 에서는 upsert 기능을 제공함

- delete 시 유의점
    - not in 절에는 nullable 한 값이 안들어가도록 해야함

### 20일
- 이미지 다운로드 Util 에서 이미지 라이브리러 로더를 사용하지 않는이유
    - 컴포즈 로더(Coil, Glide)는 해당 placeholder 값을 기준으로 캐싱하기 때문에 크기나 화질에 문제가 있을 수 있음

### 19일
- inJustDecodeBounds = true
    - 실제 비트맵을 메모리에 로드하지 않고 제한적으로 사용할 수 있ㅡ
    - 이미지 파일의 처음 몇 바이트(헤더) 만 읽음
    - 실제 픽셀 데이터 디코딩 없음
- JetpackCompose Naming
    - Screen
    - Route

- Compose Navigation 처리
    - Route 에서만 Navigation 처리
    - Screen 은 NavHost를 몰라도 됨
    - Route/Screen 을 나누는 이유
        - Screen 에 대한 Preview 작성이 가능해 짐
    - composable("...") 은 직접호출 함수가 아닌 목적지 등록
    - navController.navigate("detail/3")
        - detail 스크린에 인자 3을 가지고 전환

- 이미지 처리
    - Crop : 확대해서 꽉 채움 (넘치면 자름)
    - Fit : 확대해서 컨테이너 안에 맞춤(빈 공간 생길 수 있음)
    - Fill : 비율 무시하고 컨테이너에 맞춤
- 

### 15일
- 프로젝트 구조 
    - CleanArchitechture : UI -> Domain <- Data
    - Android App Architecture : UI -> Domain(Optional) -> Data
- NBSP
    - NoneBreakSpace : 줄바꿈이 불가능한 공백
    - 눈에 보일때는(UI 렌더링) 일반 공백처럼 보임 but 식별값일때(로그) : \u00A0, <NBSP>, ⍽ 등으로 표시 
    - \u00A0 
- Android LineHeight
    - 안드로이드에서의 lineHeight 는 다른 줄과의 baseLine 까지의 거리이다.
    - 특히 한줄일 경우 lineHeight 값을 통한 조절이 불가능함
- Android 상수 네이밍
    - 일반 kotlin 에서는 snake
    - compose 안에서는 Camel 사용



### 14일
- ViewModel 에서 리소스 삭제 및 정리 해야할때
    - super.onCleared() 가 호출될때 viewModelScope 도 사라진다
    - 그러나 NonCancellable 과 함께 호출될 경우 사라지지 않는다
    - super.onCleared() 보다 먼저 호출되게 하여 실행 시켜놓으면 viewModelScope 이 끝나도 수행함
```
viewModelScope.launch{
    withContext(context = NonCancellable + Dispatchers.IO)
        runCatching {
            cacheDir.listFiles()?.forEach {it.deleteRecursively()}
        }
}
```
- ViewModelScope & LifcycleScope 를 써야하는 이유
    - 자동 취소, 에러/취소 전파를 지원하기 때문에
    - 아래 예시 코드에서 fetchA 가 실패할 경우 fetchB(형제 코루틴) 도 같이 취소 됨
    - GlobalSceop 안에서는 그렇지 않음
    - 즉 책임의 주체가 생기는 것
```
viewModelScope.launch {
    val a = async { fetchA() }
    val b = async { fetchB() }

    a.await()
    b.await()
}

```
- Claude & Language Server
    - Claude Code 에 명령을 내리면 내 컴퓨터에서 돌아가는 LanguageServer 와 대화함
    - LS 는 로컬 프로그램임 (Android 의 경우 AS 와 IntelliJ dㅔ서 )
    - 진행 순서
        ClaudeCode -> Claude AI(Anthropic 서버) -> LS(로컬) -> 코드베이스(내 파일)
    - 이때 ClaudeCode 와 LS 사이의 대화 규칙이 LSP 임
    - Android 의 경우 CladueCode 가 Android IDE Mcp 와 연계되어 사용되어 불필요함 (MCP 이름 : IDE Integration)

```
Claude Code: "calculateTotal 정의가 어디야?" (textDocument/definition)
Language Server: "src/billing.py 42번째 줄이야"
```


### 13일
- EXIF 정보
    - Exchange Image File Format
    - 사진의 설명서로서 Orientation / Flip / 회정 정보들을 포함한다
    - 카메라는 항상 한 방향으로만 픽셀을 저장하지만 센서를 통해서 EXIF 정보를 첨가하고 사용자에게 보여줄 때 이를 반영하여 보기 좋은 형태로 노출
- File Provider

- ContentProvider
    - Android에서 앱간의 데이터 를 안전하게 공유하기 위한 IPC 컴포넌트
    - URI (content://) 기반으로 데이터 접근
- FileProvider
    - 실제 파일의 경로(/data/data...) 대신에 content:// URI 로 변환하여 사용
    - 임시 접근 권한만 부여 함    
    - 앱 내부 파일을 생성할때 사용
    - 상대 앱은 파일에 대한 직접(절대) 경로를 모른 채 접근
        - 빈파일을 만들고 이를 FileProvider를 사용하여 다른앱에 쓰기를 부탁(카메라 촬영)
        - 앱별 sandbox 저장소 개념에 맞는 방법
- ContentProvider & FileProvider
    - FileProvider 는 ContentProvider 의 특수한 형태(구현체)
    - 카메라 촬영 결과 전달, 이미지/영상 공유 등 거의 모든 경우 FileProvider를 사용함
- ContentResolver
    - contentResolver 는 데이터를 요청/소비하는 요소
    - 포토 피커로부터 받은 결과(url) d에 대해서 읽기, 쓰기 , query 등을 하기 위해서 필요함
    - content://URL 을 받았다면 ContentResolver 로 접근

```
// 카메라 촬영 후 이미지 읽기
val uri: Uri = photoUri // FileProvider로 받은 것

val inputStream = contentResolver.openInputStream(uri)
bitmap = BitmapFactory.decodeStream(inputStream)
```
    
### 9일
- Google App Architecture 와 Clean Architecture 차이
    - 의존 구조의 차이가 있음
    - Google App 아키택처 의존 방향 : Presentation -> Domain -> Data
    - Clean 아키택처 의존 방향 : Presentation -> Domain <- Data
- 아스키 & 유니코드
    - 아스키 한글자 1byte
    - 아스키 범위를 넘는 한글자 3byte(특히 한글은 3byte)
    - 유니코드 중에서 UTF8 은 만국에서 공통적으로 사용하는 인코딩 방식
    - 색과는 다르게 텍스트의 경우 인코딩 한다고 해서 크기가 줄어들지는 않음
- URL 인코딩
    - Url 을 포함해서 통신상에서는 아스키 범위의 표현이 필요하다 
    - 이에따라 아스키 범위로 표현되지 않는 내용을 아스키 단위로 인코딩하여 표현하는 것을 URL 인코딩이라고함
    - 한글 따위가 % 등으로 구성되는 것을 볼 수 있음

### 8일
- JPG
    - 압축 손실
        - 저장할 수록 계속 열화
        - 압축 퀄리티를 설정할 수 있음
    - 화질 특성 : 시진, 인물, 풍경에 특화됨
    - 기타 
        - 투명도 지원이 안됨
        - 텍스트, 아이콘, UI 에 대해서 뭉개지고/테두리 깨짐
    - 용량
        - 같은 해상도 기준 PNG 에 빙해 3-10 배 작음
- PNG
    - 압축 손실
        - 픽셀 정보 안보림
        - 대신 요량 큼
        - 알파지원
    - 기타
        - 스크린샷, 아이콘, 로고, 투명 배경 필요할때 등 사용좋음
- JPG / PNG 인코딩 방식 차이
    - JPG : 사람 눈에 특화 -> 사림이 잘 인식하지 못하는 색/디테일 버림
    - PNG : 컴퓨터 데이터 압축 관점 -> 얼마나 비슷한 패턴으로 저장되어 있는지에 따라 압축 효율이 달라짐
- WebP 는 일부 iOS 디바이스에서 지원이 잘 안됨


### 7일
- Squircle Shape -> 사각형과 원이 합쳐진 형태
- Heateos 통신 방식
    - 정의: Api path 를 BE 응답으로 내려줌
    - 장점
        - 위험한 접근을 선제적으로 막을 수 있다(잔고가 0 일때 출금 API 전달X)
        - 앱배포 없이 API 업데이트가 가능하다
- OS 별 URL 패턴 체크 상이
    - Android 와 iOS 는 URL 패턴 체크를 다르게 수행하기 때문에 다른 매커니즘으로 인식할 수 있음
- Android 알림
    - Notification id(app), 채널, 그룹 의 개념이 존재함
    - Notification id 는 앱을 특정하는 id 로 같은 id 에 대해서 새로운 알림이 오면 대체 됨
    - Channel 은 쌓이는 방식과는 무관하게 앱설정에서 채널별로 알림 수신 여부를 판단할 수 있게 해줌
    - 같은 Group 끼리는 알림이 겹처보이게 할 수 있음
- 앱과 서버간에 미디어 전달 방식
    - 각 미디어 별로 presignedUrl 을 발급받아서 multipart 형태로 저장 함

