let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value) {
    alert("vui long nhap day du thong tin");
  }
  if (localStorage.getItem(username.value) == json) {
    alert("dang nhap thanh cong");
    window.location.href = "address_start.html";
  } else {
    alert("dang nhap that bai");
  }
});
btnLogin.addEventListener("Enter", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value) {
    alert("vui long nhap day du thong tin");
  }
  if (localStorage.getItem(username.value) == json) {
    alert("dang nhap thanh cong");
    window.location.href = "address_start.html";
  } else {
    alert("dang nhap that bai");
  }
});
