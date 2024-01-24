// infrastrucure code
const http = require("http");
const url = require("url");
const {
  welcome,
  test,
  handleUser,
  handleNotFound,
} = require("./handlers/handler");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // if(req.url === "/welcome")
  if (parsedUrl.pathname === "/welcome") {
    // if(funkcijaEden()) before
    welcome(req, res);
    // if(funkcijaTri()) after
  } else if (parsedUrl.pathname === "/test") {
    test(req, res);
  } else if (parsedUrl.pathname === "/user") {
    // 'http://localhost:3000/user/1/test?username=johndoe
    handleUser(req, res, parsedUrl.query.username);
  } else {
    handleNotFound(req, res);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

// funkcijaEden
// funkcijaDva
// funkcijaTri
