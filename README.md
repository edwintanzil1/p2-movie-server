
## API Reference


#### Login
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`   | `string` | **Required**. registered email    |
| `password`| `string` | **Required**. registered password |

if Wrong 
Status code 400 
  

```



#### Register
```
| Parameter | Type     | Description                                  |
| :-------- | :------- | :--------------------------------            |
| `email`   | `string` | **Required**.  email must be email format    |
| `password`| `string` | **Required**.  password minimun length is 5  |
| `username`| `string` | **Required**.  username                      |

if email is already registered
Status code 400 
  

```



#### Get all Movies

```http
  GET /movies/items
if success

Status = 200
[ { "id": 1, "name": null, "synopsis": null, "trailerUrl": null, "imgUrl": null, "rating": null, "authorId": null, " createdAt": "2021-06-07T09:08:19.870Z", "updatedAt": "2021-06-07T09:08:19.870Z" } .... ]

*NOT LOGGED IN

Status Code: 400 BAD REQUEST

STATUS 401 LOGIN REQUIRED





```

#### Get Movies

```http
  GET /movies/${id}
  if :id is 1 AND is not NULL

STATUS 200
{ "id": 1, "name": null, "synopsis": null, "trailerUrl": null, "imgUrl": null, "rating": null, "authorId": null, "createdAt": "2021-06-07T09:08:19.870Z", "updatedAt": "2021-06-07T09:08:19.870Z" }

if :id is not available

("No id with that number") status is 404

if failed bad gateway STATUS IS 500 PUT /movie by :id Put /movies/${id}

if :id is 1 AND is not NULL, AND USER IS ADMIN OR userID === authorId

STATUS 200
Updated!

if not ADMIN or Wrong user

STATUS is 400
if failed bad gateway STATUS IS 500
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


  #### Edit Movies

```http
  PUT /movies/${id}
  if :id is 1 AND is not NULL

STATUS 200
{ "id": 1, "name": null, "synopsis": null, "trailerUrl": null, "imgUrl": null, "rating": null, "authorId": null, "createdAt": "2021-06-07T09:08:19.870Z", "updatedAt": "2021-06-07T09:08:19.870Z" }

if :id is not available

("No id with that number") status is 404

if failed bad gateway STATUS IS 500 PUT /movie by :id Put /movies/${id}

if :id is 1 AND is not NULL, AND USER IS ADMIN OR userID === authorId

STATUS 200
Updated!

if not ADMIN or Wrong user

STATUS is 400
if failed bad gateway STATUS IS 500
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to edit |


 #### Delete Movies

```http
  Delete /movies/${id}
  if :id is 1 AND is not NULL

STATUS 200
{ "id": 1, "name": null, "synopsis": null, "trailerUrl": null, "imgUrl": null, "rating": null, "authorId": null, "createdAt": "2021-06-07T09:08:19.870Z", "updatedAt": "2021-06-07T09:08:19.870Z" }

if :id is not available

("No id with that number") status is 404

if failed bad gateway STATUS IS 500 PUT /movie by :id Put /movies/${id}

if :id is 1 AND is not NULL, AND USER IS ADMIN OR userID === authorId

STATUS 200
Updated!

if not ADMIN or Wrong user

STATUS is 400
if failed bad gateway STATUS IS 500
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to edit |
