# 2일

### SQL

- 원래는 아래와 같이 SQL 1과 같이 작성해야하지만 JAVA 코드에서 바인딩 변수를 사용할때 ? 를 사용할 수 있음
    - `INSERT INTO 테이블명 (컬럼1, 컬럼2, ...) VALUES (값1, 값2, ...);`
    - `insert into member(member_id, money), values (?,?)";`

# 3일

### 코딩테스트

- 문제에서 제시된 사례 내용은 설명과 함께 한번 따라가 보는 것이 좋음
- 이중 람다를 써야하는 상황에서 it 에 혼용으로 인한 오류 가능성이 있으니 변수를 명시해주는 것을 잊지말자
- 문제 안에서 이미 정렬된 리스트가 주어졌을때는 이를 활용할 수 있느 방법을 생각해보자
- Map 구체 활용법
    - getOrDefault 를 활용하여 조건문을 줄일 수있따
        - `cntMap[team] = cntMap.getOrDefault(team , 0 ) + 1`
    - 리스트에 대해서는 apply 연산자를 이용하여 리스트를 반환하면 깔끔하다
        - `scoreMap[ele] = scoreMap.getOrDefault(ele ,mutableListOf()).apply { add(score) }`
- 복잡한 정렬 조건
    - 간단한 정렬른 sortBy{} 를 활용하고, 복잡한 정렬에 대해서는 compareBy 와 함게 sortedWith 를 사용하는 것이 좋음
    - 다중 정렬 기준을 적용하는데 특히 효과적
        - ex) `val sortedList = sumMap.toList().sortedWith(compareBy({ it.second }, { fifthMap[it.first] }))`
- 리스트 vs 배열
    - 만약 인덱스 저장이 필요하고 자료의 길이를 고정해놓는 것이 필요하다면 배열을 사용하는 것이 효고적이다
    - 리스트의 경우 인덱스 값까지 Pair 로 저장하거나 빈 값을 넣어 두어야하는 방식이기에 이 케이스에서의 리스트 장점이 사라진다

![img.png](img.png)

- 텍스트로 된 문제를 그림으로 도식화해보자 -> 포문과 이프문을 머릿속으로 그리고 치기전에 실제 값들을 대입하여 써서 개산해보는 과정

# 4일

## Spring

### JDBC 등장이유

- 각 DB 마다 커넥션 SQL 전달 방법, 결과 응답 받는 방법들이 상이했음
- DB 를 교체할때마 이에 따른 코드가 수정 되어야하고, 각 방법을 새로 학습해야했음
- 해결점: 자바에서 데이터베이스에 접속할 수 있도록 하는 자바 API 즉 JDBC 를 통해 이를 해결
- 한계: 여전히 각 DB 마다의 SQL 작성법이 상이하다( JPA 를 통해 이 문제도 해결 가능)
- SQL injection 공격을 예방하려면 PreparedStatement 를 통한 파라미터 바인딩 방식을 사용

# 5일

## Spring

### 커넥션 풀

- 커넥션을 새롭게 만드는 과정이 매우 복잡하고 소모적임(예외처리 부터에서 아주 귀찮) + 속도에 영향을 주기도함
- 이를 해결하기 귕해 미리 커넥션을 생성해두었다가 사용하는 개념이 커넥션 풀임 (이미 TCP/IP 로 DB 와 컨넥션이 연결되어 있음)

### 데이터소스

- 커넥션을 얻는 방법에 있어서 JDBC DriverManager 를 직접 사용하거나 커넥션풀들(커넥션 풀에 대한 여러 구현체들)을 사용할 수 있음
- 사용처를 바꿀때 의존 코드의 수정을 최소화하고자 커넥션을 획득하는 방법을 추상화 한것이 `데이터 소스`

## 클린코드

### 변수

- 변수명은 지나치게 줄이기보다는 분명하게 나타내는 것이 좋음
- 사용하는 부분에 최대한 가깝게 생성
- 사용하는 범위를 고려하여 변수가 될지 상수가 될지를 결정(객체더라도 불변이라면 상수로 선언하는 것이 좋을 수 있음)

### 메서드

- 한 메서드의 주제는 반드시 하나다 -> 하나 이상에 테스크를 수행한다면 쪼개라
- 반환할 만한 값이 있느지 고민해조기 -> 테스트에 용이 함

### 기타

- 매직 넘버, 매직스트링은 지양한다

### 조건문

- early return
    - 미리 탈출이 가능하다면 탈출 시킴으로써 굳이 아래까지 코드를 읽을 필요가 없게 함 -> else 문 없어짐
    - if 문 중첩을 없앨 수 있다
    - 다만 탈출 코드가 중구 난방이 될 경우 가독성을 해칠 수 있기때문에 조절 할 수 있다면 최대한 탈출 코드를 응집 시키는 것이 좋겠다
- 변수 값에 대한 검사라면 if 문 대신 when 을 사용하는 것이 가독성면에서 낫다

### 반복문

- 중첩문 안에서 메서드로 쪼개는 것을 고려해보자
    - 메서드로 쪼개게 되면 메서드 내부와 파라미터의 영역만에 온전히 집중할 수 있게된다
    - 쪼개는 것이 가독성을 높이질에 대해서는 생각해보기

### 부정연산자

- 불필요한 부정연산자는 피하자
- 메서드를 통해 부정연산자를 없애는 방식도 고려해보자(isNot 키워드를 넣거나 반대 개념 ex- Left/Right)

### 객체 설계

- 무지성으로 getter/setter 를 설정하지 않아야한다
- setter
    - 객체 내부에서 외부 개입없이 자체적인 변경/가곡으로 처리할 수 있는지를 확인
    - 만약 외부에서 가기고 있는 데이터로 변경이 필요한경우 set~ 보다는 update 와 같이 의도를 드러내는 네이밍을 고려해볼 수 있음
- getter
    - 해당 필드가 외부로 그대로의 노출이 꼭 필요한지는 고민해볼 필요가 있음
    - person.get지갑().get신분증().age > = 19 보다는 person.isAgeGreaterThanOrEqualTo(19) 가 나은 구현
- 필드
    - 불필요한 필드를 굳이 만들 필요없음
    - 기존 필드 를 가지고 계산할 수 있는 필드를 만드는 것은 고민해보기

# 6일

## 코테

- 반복문에서의 요소 삭제
    - for 문 안에서 해당 리스트에 대한 삭제는 지양해야한다
    - 루프 중간에 요소가 삭제되면 리스트의 인덱스가 조정되지 않고 다음 요소로 뛰는 문제가 발생
- 시간복잡도
    - 시간 복잡도 안에서 해결하려고 노력하고 그 이상에 효율을 위해서 지나친 노력을 하지 말자
    - 특히 코드의 복잡도를 높이는 것은 금물
- 반복문 탈출
    - repeat 내부에서는`return@repeat`를 통해서 탈출 할 수 있다
    - return 을 할 경우 현재 반복문과 가장 가까운 스콥으로 탈출하게 된다

## Spring

### 트렌잭션

- sql 에 대해서 commit 을 하기 전까지는 임시로 데이터를 저장하는 것
    - 커밋하기 전 내용은 다른 세션에서는 확인 할 수 없음

# 7일

## Spring

### DB 락

- 세션이 트랜젝션을 시작하고 데이터를 수정하는 동안에는 커밋이나 롤백전까지 다른 세션에서 해당 데이터를 수정할 수 없게 막아야한다
- `SET LOCK_TIMEOUT <mSec>` 를 쿼리와함께 명시하는 부분이 이미 점유된 락을 기다리게됨 -> 기존에 점유권을 얻은 곳에서 방어하는 것x , 침범하지 않기위한 설정 O
- `select for update` 를 사용하면 기존 점유권을 얻은 쪽에서 락을 가져가고 다른 세션에서의 조회/업데이트까지도 막을 수 있음  (
  ex-`select * from member where member_id='A' for update;`)

### 트렌젝션 적용

- 트렌젝션은 한개의 세션안에서 이루어져야하기 때문에 Connection 객체를 공유하고 중간에 연결을 끊지 않도록 한다
- con.setAutocommit 이 사실상 트렌젝션에 시작임
- 트렌젝션 종료 시점(finally~) 에는 autoCommit 을 디폴트값인 true 로 복구한다

### Application 구조

- 프레젠테이션 계층(@Controller) -> 서비스 계층(@Service) -> 데이터 계층(@Repository) -> DB 서버

### Infra

- Buffer/Cache
    - 디스크 I/O 성능을 최적화하기 위해 RAM 을 적극적으로 활요하는 기술
    - OS 는 프로그램이 요청한 데이터를 매번 디스크에서 읽거나 쓰는 대신 자수 사용되는 데이터를 RAM 에 저장함
    - 버퍼 -> 쓰기 최적화, 캐시 -> 읽기 최적화
    - 웹서버의 경우 자주 조회되는 이미지, CSS 파일, JavaScript 파일 등이 Cache에 저장됨.

# 8일

## Spring

### 트렌젝션 코드와 Domain 계층
- domain 계층의 Service 에서 트랜젝션 코드를 직접 호출할 경우 특정 기술(JDBC) 에 의존하게 된다
- Spring 은 이를 해결하기 위해 트랜젝션 추상화 인터페이스와 구현체들을 제공한다 (JPA TransactionManger, DataSource TransactionManager...)

# 10일

### 코테
- joinToString 시 람다가 아닌 sperater 로 주입
  - `arr.toList().joinToString(" ")`
- 규칙 또는 점화식을 찾을 때 더욱 간단한 조건이 없는지 생각해보기

### DB
- 외래키는 두 테이블을 잇는 키로써 다른테이블에서는 기본키로 작용한다
- 싱글 테이블 전략
  - JPA 에서 상속 구조를 하나의 테이블에 저장하는 방법
  - 장점: Join 이 없어 조회 성능빠름
  - 단범: 사용하지 않느 컬럼 많아짐(Null)
```java
import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE) // 싱글 테이블 전략 사용
@DiscriminatorColumn(name = "DTYPE") // 구분 컬럼 추가
public abstract class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int price;
}
// 이를 상속하는 각각의 Book, Album 구체 클래스 사용
```
``` sql
CREATE TABLE product (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    DTYPE VARCHAR(255),  -- 구분 컬럼
    name VARCHAR(255),
    price INT,
    author VARCHAR(255), -- BOOK만 사용
    isbn VARCHAR(255),   -- BOOK만 사용
    artist VARCHAR(255)  -- ALBUM만 사용
);
```
## Spring
### AOP
-
### Entity
- `@Entity`를 통해서 JPA가 해당 클래스를 DB 테이블 과 매핑되는 엔티티로 인식
- domain 폴더  하위에 Entity 배치
- 기본적으로 클래스명을 테이블 이름으로 사용(수정가능)
- 클래스 필드들은 테이블 컬럼과 자동 매핑 됨(수정가능)
- `@Id` 를 사용하여 기본키 설정 해야함
-  내장 타입의 경우 `@Ebededable` 로 선언해주고 사용하는 쪽에서는 `@Ebeded` 선언해줌
- `@GeneratedValue` 를 작성함으로써 기본키를 자동생성할 수 있다
- value type
  - 특정 엔티티에 종속되는 개념으로 객체지향적 설계와 유지보수를 쉽게하기위해 사용
- 엔티티 연결
  - 다대다 혹은 다대일 관계 등에 대해서 엔티티를 연결할때는 해당 관계에 맞는 어노테이션을 명시한다(ex-@ManyToOne)
  - `@joinColumn(name="member_id")` 와 같은  방법으로 연결 // member_id 라는 필드를 기준으(외래키 저장)
- Enum 
  - `@Enumerated(EnumType.STRING)` 을 통해서 설정 
    - Ordinal 을 중간에 값을 추가할 경우 장애로 이어질 확율 높음 -> String 쓰기

# 11일

## Infra
- 사용자가 등록된 도멘인을 입력하면 `Route 53` 가 적절한 엔드 포인트로 라우팅함
  - API 요청은 EC2 인스턴스
  - 정적 파일 및 프론트는 CloudFront
- 정적 리소스는  S3 버킷에 보관하고 `CloudFront` 는 이를 적절히 캐싱하여 성능을 최적화 함
- 프론트엔드 빌드물 또한 S3+CloudFront 가 경제적
  - EC2 보다 S3에 정적 파일 보관이 저렴함
  - 캐싱 최적화
  - 무중단 배포 가능

### 리눅스
- `~` 와 `/` 키워드 차이 
  - `/` 루트 디렉터리 
    - 시스템 전체의 절대 경로를 사용할때 (`/var/log` , `/ect/nginx/`)
    - 루트 사용자만 쓰기 권한을 가짐
  - `~` 현재 사용자 홈 디렉토리
    - 현재 사용자의 홈 디렉토리 사용할때 (~/my-project)
    - aws 에서는 `/home/ec2-user/` 에 해당함

# 17일

### Spring
- DAO(Data Access Object)
  - 레파지토리와 유사한 개념으로 애해할 수 시음
- DTO(Data Transfer Object)
  - 계층 간 데이터 교환을 위한 객체ㅔ
  - 로직을 가질 수 없고 getter/setter 만을 가진다
- VO(Value Object)
  - 불변성을 가지며 값 자체가 중요한 객체
  - equals 와 hashCode 를 오버라이드 하여 같은 값을 가지면 같은 객체로 취급함 
  - Entity 와 달리 식별자를 가지지 않는다
  - 여러개의 필드를 하나의 의미 있는 객체로 묶을 때 사용됨
  - 내부 로직을 가질 수 있음
- Entity
  - 데이터베이스 테이블과 매핑되는 객체
  - ID(primary key)를 가지며 영속성 컨텍스트에 의해 관리됨

- 객체 지향적 설계를 위한 객체 유형 선택
  - 내부에서 검사를 위해 사용될 객체는 도메인 모델을 새롭게 정의하는 것이 좋겠다(ex-평균 이상인지 반환)
  - 로직이 복잡하다면 서비스로 정의하는 것도 고려해볼 수 있다





