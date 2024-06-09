$("#error").hide();
function getStorage() {
  return window.localStorage;
}

function initStorage() {
  let storage = getStorage();
  if (!("users" in storage)) {
    storage["users"] = "";
  }
}

function createUser() {
  console.log("entered");
  initStorage();
  let email = $("#email").val();
  let password = $("#password").val();
  let confirm_password = $("#confirm-password").val();
  let name = $("#name").text();
  console.log(email);
  if (confirm_password != password) {
    $("#error").text("incorrect confirmed password").show();
    return;
  }
  let storage = getStorage();
  let users = JSON.parse(storage["users"] || "{}"); // Initialize users if it's not present
  if (email in users) {
    // Check if the email already exists in users
    $("#error").text("email already exists").show();
    return;
  }
  let user = {
    name: name, // Use colon instead of equals sign
    password: password, // Use colon instead of equals sign
  };
  users[email] = user;
  storage["users"] = JSON.stringify(users);
  window.location.href = 'myaccount.html';
}

function loginUser() {
  initStorage();
  let email = $("#email").val();
  let mypassword = $("#password").val();
  let storage = getStorage();
  let users = JSON.parse(storage["users"] || "{}"); // Initialize users if it's not present
  if (email in users) {
    let user = users[email];
    let password = user["password"];
    if (password == mypassword) {
      window.location.href = "./myaccount.html";
    } else $("#error").text("incorrect password").show();
  } else $("#error").text("incorrect email").show();
}
