import db from "./database";

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS appointments");
  db.run(`CREATE TABLE appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT,
    date TEXT,
    time TEXT,
    stylist_id INTEGER,
    FOREIGN KEY (stylist_id) REFERENCES stylists(id)
  )`);
});

console.log("Appointments table reset ✅");
