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

