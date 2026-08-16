import { Router } from "express";
import db from "./database";

const router = Router();

// Add stylist
router.post("/", (req, res) => {
  const { name, specialty, availability } = req.body;
  const stmt = db.prepare("INSERT INTO stylists (name, specialty, availability) VALUES (?, ?, ?)");
  stmt.run(name, specialty, availability, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, specialty, availability });
  });
});

// Get stylists
router.get("/", (req, res) => {
  db.all("SELECT * FROM stylists", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

export default router;

