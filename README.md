# Post

## API 명세
| INDEX | METHOD | URI | DESCRIPTION | REMARK |
| --- | --- | --- | --- | --- |
| 1 | POST | /api/post | 게시글 작성 | O |
| 2 | GET | /api/post?page=&count= | 20개 단위 게시글 불러오기 | O |
| 3 | PUT | /api/post?id=&password= | 게시글 수정 | O |
| 4 | DELETE | /api/post?id=&password= | 게시글 삭제 | O |
| 5 | GET | /openapi/weather?location= | 날씨 정보 가져오기 | O |

## ERD
| Post |  |  |
| --- | --- | --- |
| Column | Type | Description |
| id | numer |  |
| title | string | 제목, 최대 20자 |
| content | string | 본문, 최대 200자 |
| hash | string | 게시글 비밀번호 |
| weather | string | 날씨 |
