import { Router } from "express";
import db from "./database";

const router = Router();

// Book appointment
router.post("/", (req, res) => {
  const { customer_name, date, time, stylist_id } = req.body;
  const stmt = db.prepare("INSERT INTO appointments (customer_name, date, time, stylist_id) VALUES (?, ?, ?, ?)");
  stmt.run(customer_name, date, time, stylist_id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, customer_name, date, time, stylist_id });
  });
});

// Get appointments
router.get("/", (req, res) => {
  db.all("SELECT * FROM appointments", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

export default router;
