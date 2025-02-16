const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("Email").value,
    password = document.getElementById("Password").value;

  const res = await fetch("/user/api", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());

  if (res.status === "success") {
    window.location.href = "/dashboard";
  }
});
