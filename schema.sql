-- Stylists table
CREATE TABLE IF NOT EXISTS stylists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  availability TEXT NOT NULL
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_name TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  stylist_id INTEGER,
  FOREIGN KEY (stylist_id) REFERENCES stylists(id)
);

