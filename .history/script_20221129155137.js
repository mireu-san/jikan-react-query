fetch("https://reqres.in/api/users/23")
  .then((res) => {
    if (res.ok) {
      console.log("success");
    } else {
      console.log("not successful");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
