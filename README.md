# Post
## 개발 Notion Link
https://mellow-deer-e21.notion.site/3-5683cad9674645989291dc4a582a2d96

## 1. 프로젝트 목적
- 게시글 작성/수정/삭제 서비ㅅ 구현, 날씨 API 연동 등
- 기능 : 게시글 글자 수 제한, 비밀번호 암호화 등 규칙 설정, 게시글 로드 시 Pagination 서비스(20개 단위 최신 게시글 불러오기) 기능, 날씨 API 연동(weatherapi.com)

## 2. 백엔드 프로젝트 구성
1) 서버 : Nestjs
2) DB : PostgreSQL (Docker)
3) ORM : Prisma

## 3. API 명세
| INDEX | METHOD | URI | DESCRIPTION | REMARK |
| --- | --- | --- | --- | --- |
| 1 | POST | /api/post | 게시글 작성 | O |
| 2 | GET | /api/post?page=&count= | 20개 단위 게시글 불러오기 | O |
| 3 | PUT | /api/post?id=&password= | 게시글 수정 | O |
| 4 | DELETE | /api/post?id=&password= | 게시글 삭제 | O |
| 5 | GET | /openapi/weather?location= | 날씨 정보 가져오기 | O |

## 4. ERD 설계
| Post |  |  |
| --- | --- | --- |
| Column | Type | Description |
| id | numer |  |
| title | string | 제목, 최대 20자 |
| content | string | 본문, 최대 200자 |
| hash | string | 게시글 비밀번호 |
| weather | string | 날씨 |

## 미비 사항 및 추후 적용 예정 사항
- 게시글 작성 시 이모지 사용
