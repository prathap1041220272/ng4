# Basic login app with authentication and authorization(`using with node js ,jwt and bcrypt`)

#### __server url__

click on the url

<http://localhost:3100>

###### console response

`server started at port 3100`

`connected to db`

#### bcrypt

used bcrypt to hash the password

password was hashed for 10 rounds

`$2b$10$/faxgT.QCBR7TzeNnDynJ.0qaO/mDsVEfvjhgBrLjorqrZsY2iHtq`

comparing the password

`plainpassword(sgdgdssss) hashedpassword($2b$10$anRV/7yU/pssrE2PuD4xM.SrXnB0sb31aRB6P3cQcX5Gvz3OYcJyG)
`

#### jwt

used jsonwebtoken(jwt) to create a token

token will expire with in an 1 hour

`"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjViMDgyMDAzNjRkM2FmM2ZjNGVhZDRmMCIsInBhc3N3b3JkIjoiJDJiJDEwJGFuUlYvN3lVL3Bzc3JFMlB1RDR4TS5TclhuQjBzYjMxYVJCNlAzY1FjWDVHdnozT1ljSnlHIiwiZW1haWwiOiJ0ZXN0QGp1bmsuY28iLCJfX3YiOjB9LCJpYXQiOjE1MjcyNTkzOTgsImV4cCI6MTUyNzI2Mjk5OH0.PXMna8N5M6IcO1k7QTXD4NM0BTe79rhN5fAZ8lVpSNA"`

#### morgan logger

used morgan logger to store the log's 

sample log:-

`::1 - - [23/May/2018:16:35:08 +0000] "GET / HTTP/1.1" 404 139 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"`
