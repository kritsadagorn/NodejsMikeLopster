// Learning REST API, MOCK API - Ty YT: MikeLopster

const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());

const port = 8000;

let users = [];
let counter = 1;

// C = Post / Create
app.post("/user", (req, res) => {
    let user = req.body;
    user.id = counter;
    counter += 1;
    users.push(user);
    res.json({
      message: "add ok",
      user: user,
    });
  });

// R = Get / Read
app.get("/users", (req, res) => {
  const filterUser = users.map((user) => {
    return {
      id: user.id,
      firstname: user.name,
      lastname: user.lastname,
      fullname: user.name + " " + user.lastname,
    };
  });
  res.json(filterUser);
});

// R = Get / Read

app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let selected = users.findIndex((user) => user.id == id);

  res.json({
    message: "User",
    data: {
      user: users[selected],
    },
  });
});

// U = Put / Update (ALL)

app.put("/user/:id", (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;

  let selected = users.findIndex((user) => user.id == id);

  users[selected].name = updateUser.name || users[selected].name;
  users[selected].lastname = updateUser.lastname || users[selected].lastname;

  res.json({
    message: "Updated",
    data: {
      user: updateUser,
      index: selected,
    },
  });
});

// U = Patch / Update (Specific)

app.patch("/user/:id", (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;

  let selected = users.findIndex((user) => user.id == id);

  if (updateUser.name) {
    users[selected].name = updateUser.name;
  }
  if (updateUser.lastname) {
    users[selected].lastname = updateUser.lastname;
  }

  res.json({
    message: "Updated",
    data: {
      user: updateUser,
      index: selected,
    },
  });
});

// D = Delete / Delete

app.delete("/user/:id", (req, res) => {
  let id = req.params.id;

  let selected = users.findIndex((user) => user.id == id);

  // WHATT IS IT THIS EASY?? just delete?
  delete users[selected];
  // Ahhh after i test if we use this object that we want to delete will turn into NULL

  // We can use this
  users.splice(selected, 1);

  res.json({
    message: "Deleted",
    indexDelete: selected,
  });
});

app.listen(port, (req, res) => {
  console.log("http server run at " + port);
});
