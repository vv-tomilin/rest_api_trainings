const db = require('../db.js');

class UserController {
  async createUser(req, res) {
    const { name, surename } = req.body;

    const newPerson = await db.query(
      'INSERT INTO person (name, surename) VALUES ($1, $2) RETURNING *',
      [name, surename]
    );

    res.json(newPerson.rows);
  }

  async getUsers(req, res) {
    const users = await db.query(
      'SELECT * FROM person'
    );

    res.json(users.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query(
      'SELECT * FROM person WHERE id = $1',
      [id]
    );

    res.json(user.rows);
  }
}

module.exports = new UserController();