const express = require("express");
const db = require("../db");
const utils = require("../utils");
const crypto = require("crypto-js");

const router = express.Router();
router.post("/signUp", (request, response) => {
  const { fullName, email, password, phoneNo } = request.body;
  const statement = `insert into user (fullName,email,password,phoneNo)values(?,?,?,?);`;
  const encryptedPassKey = String(crypto.SHA256(password));
  db.pool.execute(
    statement,
    [fullName, email, encryptedPassKey, phoneNo],
    (error, result) => {
      response.send(utils.createResult(error, result));
    }
  );
});

// router.post("/login", (request, response) => {
//   const { email, password } = request.body;
//   const statement = `select id, fullName,phoneNo from user where email = ? and password = ?`;
//   const encryptedPassword = String(crypto.SHA256(password));
//   db.pool.execute(statement, [email, encryptedPassword], (error, users) => {
//     if (error) {
//       response.send(utils.createErrorResult(error));
//     } else {
//       //  console.log(users.length)
//       if (users.length == 0) {
//         response.send(utils.createErrorResult("user does not exist"));
//       } else {
//         const user = users[0];

//         // create the payload
//         const payload = { id: user.id };
//         const token = jwt.sign(payload, config.secret);
//         const userData = {
//           token,
//           name: `${user["fullName"]}`,
//         };
//         response.send(utils.createSuccessResult(userData));
//       }
//     }
//   });
// });

router.post("/login", (request, response) => {
  const { email, password } = request.body;
  const statement = `select id,fullName from user where email = ? and password = ?`;
  const encryptedPassword = String(crypto.SHA256(password));
  db.pool.query(statement, [email, encryptedPassword], (error, users) => {
    console.log(users);
    if (error) {
      response.send(utils.createErrorResult(error));
    } else {
      if (users.length == 0) {
        response.send(utils.createErrorResult("user does not exist"));
      } else {
        const user = users[0];

        // create the payload
        const payload = { id: user.id };
        const token = jwt.sign(payload, config.secret);
        const userData = {
          token,
          name: `${user["fullName"]}`,
        };
        response.send(utils.createSuccessResult(userData));
      }
    }
  });
});
module.exports = router;
