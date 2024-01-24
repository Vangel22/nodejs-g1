// application code
function welcome(req, res) {
  res.end("Welcome to our page");
}

function test(req, res) {
  res.end("Welcome to our test page");
}

function handleUser(req, res, username) {
  const usernamePattern = /^[a-zA-Z0-9_]{3,}$/; // regular expression
  //const usernamePattern = new RegExp("^[a-zA-Z0-9_]{3,}$")
  if (usernamePattern.test(username)) {
    res.end(`Hello ${username}`); //Hello J2
  } else {
    res.end("Invalid username format");
  }
}

function handleNotFound(req, res) {
  res.end("404 Not Found");
}

module.exports = {
  welcome,
  test,
  handleUser,
  handleNotFound,
};
