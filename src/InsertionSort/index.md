`memmove(first, second, third)`
- C 함수의 표준 함수
- 원본 데이터를 대상 메모리 주소로 이동시킨다. 
- 배열처럼 연속된 데이터를 한 번에 이동시킬 때 쓴다.
- 순환문으로 대체 가능하나, 성능이 떨어진다.

- `first` paramter : 원본 데이터가 옮길 새로운 메모리의 주소
- `second` parameter : 원본 데이터가 있는 주소
- `third` parameter : 이동시킬 데이터의 양(byte)

`memcpy()`
- 원본 데이터를 대상 메모리 주소로 복사한다.