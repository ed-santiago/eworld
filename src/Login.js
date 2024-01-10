import React from "react";

function Login() {
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.username === "esantiago" && formData.password === "edmond123") {
      setIsLoggedIn(true);
      history.push("/");
    } else {
      alert("wrong username or password")
    }
  }

  return (
    <div id="login">
      <h1>eWorld</h1>
      <form id="login_form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="username"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;