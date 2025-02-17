# 정리 & 학습 필요 주제
1. 

## 7일
- async/sync 와 block/non-block 의 개념을 학습하고 이에 따른 케이스를 생각해본다
- https://musma.github.io/2019/04/17/blocking-and-synchronous.html

## 13일

오류 
- Spring Bean 생성시 static 매소드로 정의할 경우 싱글톤이 보장되지 않는다
- Static 메서드
  - 인스턴스 생성없이 호출 가능하다
  - 유틸리티 관련함수를 만드는데 유용함
  - 클래스(static 변수) 만 접근 가능
  - 상태가 없는 메서드로 사용되며 인스턴스와는 독립적이기 때문에 스프링이 만들어낸 복제 인스턴스에서 관리되지 못한다

## 17일
- Static 변수
  - 클래스 로드시 한번만 메로리에 할당되며, 모든 객체가 공유함
  - 인스턴스 변수와 달리 객체 생성 없이 사용가능
- Static 내부 클래스(정적 중첩 클래스)
  - 외부 클래스의 인스턴스 없이 생성 가능
  - 내부 클래스가 외부 인스턴스에 접근할 일이 없다면 inner-class 에 static 을 붙이는게 좋음
    - 메모리 누수 방지 (내부 클래스가 참조를 들고 있어 외부 클래스 인스턴스가 GC 에 안잡힘)
  
- Static 블록
  - 클래스가 로딩 될때 한번만 실행됨
  - 복잡한 static 변수 초기화에 사용됨
``` java
class Config {
    static String appName;
    
    static {
        appName = "MyApp";
        System.out.println("Static block executed");
    }
}
```