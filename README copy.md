Project Title
A brief description of what this project does and who it's for

API Reference
Post MOvies
  POST /movie

if success

 - Status = 200

{ name: 'string', synopsis: 'inser synopsis', 
trailerUrl: 'req.body.trailerurl', 
imgUrl: 'req.body.imgUrl', rating: 1, authorId: 1 }

*NOT MEETING PREQUISITES

- Status Code: 400 BAD REQUEST

[ " Synopsis Field Is Required!", "Validation min on rating failed" ] 

Get All Movie
  GET /movie

if success

 - Status = 200

[ { "id": 1, "name": null, 
"synopsis": null, 
"trailerUrl": null, 
"imgUrl": null, "rating": null, 
"authorId": null, "
createdAt": "2021-06-07T09:08:19.870Z", 
"updatedAt": "2021-06-07T09:08:19.870Z" } .... ]



*NOT LOGGED IN

- Status Code: 400 BAD REQUEST

- STATUS 401 LOGIN REQUIRED

Get movie by id
  GET /movies/${id}

if :id is 1 AND is not NULL

- STATUS 200

{ "id": 1, "name": null, 
"synopsis": null, 
"trailerUrl": null, 
"imgUrl": null, 
"rating": null, 
"authorId": null, 
"createdAt": "2021-06-07T09:08:19.870Z", 
"updatedAt": "2021-06-07T09:08:19.870Z" }

if :id is not available

("No id with that number") status is 404

if failed bad gateway STATUS IS 500
PUT /movie by :id
  Put /movies/${id}

if :id is 1 AND is not NULL, AND USER IS ADMIN OR userID === authorId

- STATUS 200

Updated!

if not ADMIN or Wrong user

- STATUS is 400

if failed bad gateway STATUS IS 500
Acknowledgements
Awesome Readme Templates

Awesome README

How to write a Good readme

Authors
@katherinepeterson

Contributing
Contributions are always welcome!

See contributing.md for ways to get started.

Please adhere to this project's code of conduct.

Demo
Insert gif or link to demo

Deployment
To deploy this project run

  npm run deploy
Documentation
Documentation
