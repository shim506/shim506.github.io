# 정리 & 학습 필요 주제
1. 

## 2일
### SQL
- 원래는 아래와 같이 SQL 1과 같이 작성해야하지만 JAVA 코드에서 바인딩 변수를 사용할때 ? 를 사용할 수 있음
  - INSERT INTO 테이블명 (컬럼1, 컬럼2, ...) VALUES (값1, 값2, ...);
  -  "insert into member(member_id, money), values (?,?)";

## 3일
### 코딩테스트
- 문제에서 제시된 사례 내용은 설명과 함께 한번 따라가 보는 것이 좋음
- 이중 람다를 써야하는 상황에서 it 에 혼용으로 인한 오류 가능성이 있으니 변수를 명시해주는 것을 잊지말자
- 문제 안에서 이미 정렬된 리스트가 주어졌을때는 이를 활용할 수 있느 방법을 생각해보자
- Map 구체 활용법
  - getOrDefault 를 활용하여 조건문을 줄일 수있따
    - cntMap[team] = cntMap.getOrDefault(team , 0 ) + 1
  - 리스트에 대해서는 apply 연산자를 이용하여 리스트를 반환하면 깔끔하다
    - scoreMap[ele] = scoreMap.getOrDefault(ele ,mutableListOf()).apply { add(score) }
- 복잡한 정렬 조건
  - 간단한 정렬른 sortBy{} 를 활용하고, 복잡한 정렬에 대해서는 compareBy 와 함게 sortedWith 를 사용하는 것이 좋음
  - 다중 정렬 기준을 적용하는데 특히 효과적
    - ex) val sortedList = sumMap.toList().sortedWith(compareBy({ it.second }, { fifthMap[it.first] }))
