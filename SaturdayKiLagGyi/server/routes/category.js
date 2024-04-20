const express = require("express");
const db = require("../db");
const utils = require("../utils");
const router = express.Router();
router.get("/display", (request, response) => {
  const statement = `select id, title, description from categories;`;
  db.pool.query(statement, (error, categories) => {
    response.send(utils.createResult(error, categories));
  });
});
router.put("/delete", (request, response) => {
  const { id } = request.body;
  const statement = `alter table categories set isDeleted=1 where ;`;
  db.pool.query(statement, (error, categories) => {
    response.send(utils.createResult(error, categories));
  });
});

router.post("/add", (request, response) => {
  const { title, description } = request.body;
  const statement = `insert into categories(title,description)values(?,?)`;
  db.pool.execute(
    statement,
    [title, description],
    (error, categories) => {
      response.send(utils.createResult(error, categories));
    }
  );
});
module.exports = router;
