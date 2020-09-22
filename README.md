# simple_REST_api
A basic REST api to incorporate in you machine.

Packages used: 
Express -> It is a framework that makes a server easily. No need for using createHTTP server. Express narrows it to few lines of code which is more readable and comprehdable.
nodemon -> This is crazy package. It will keep your server alive and restarts on saving. you don't have to explicitly run "node file.js"
dotenv -> To keep passwords, urls and others thing secure. Never push your .env file.
body-parser -> In order to read certain string, we need to parse the response.
mongoose -> It is used to define a schema and connect to your DB very easily. Simple and handy.
cors -> You can use your app from other apis too within your machine. For example, to test it on codepen.io
morgan -> It will print logs of all HTTP requests automatically.
joi -> It is used for validation. When requirements are not met, it will automatically throw an error in your response which can be used further as desired.

Database used:
MongoDB -> It is very easy to integrate with your projecct and connection is super easy and fast. You can go online or can go with npm install.
