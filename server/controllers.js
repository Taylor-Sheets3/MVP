const db = require('./db.js');

module.exports = {
  getBatches: (res) => {
    db.queryAsync('Select * from batching')
      .then((results) => {
        res.send(results[0]);
    });
  },

  delete: (req, res) => {
    let id = req.url.slice(9);
    db.queryAsync(`DELETE from batching where id = ${id}`)
      .then(() => (res.send()));
  },

  postBatches: (req, res) => {
    const { flavor, date, cases, units, gallons, tank, sanitation, qa } = req.body;
    db.queryAsync('INSERT into batching (product, date_made, case_size, units, tank, gallons, sanitation, qa) values (?, ?, ?, ?, ?, ?, ?, ?);', [flavor, date, cases, units, tank, gallons, sanitation, qa])
      .then(() => res.send())
  },

  reviewed: (req, res) => {

  },

  tested: (req, res) => {

  }
}

