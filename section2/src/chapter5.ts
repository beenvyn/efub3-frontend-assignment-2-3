// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "김아무개",
  role: Role.ADMIN, // 관리자
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER,
  language: Language.english,
};
const user3 = {
  name: "박아무개",
  role: Role.GUEST, // 게스트
};

console.log(user1, user2, user3);
