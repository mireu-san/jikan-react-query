fetch("https://reqres.in/api/users/", {
  method: "POST",
  body: {
    name: "User 1",
  },
})
  .then((res) => {
    if (res.ok) {
      console.log("success");
    } else {
      console.log("not successful");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
