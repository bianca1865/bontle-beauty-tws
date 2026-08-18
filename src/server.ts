import express from "express";
import authRoutes from "./auth";
import stylistRoutes from "./stylists";
import appointmentRoutes from "./appointments";

const app = express();
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/stylists", stylistRoutes);
app.use("/appointments", appointmentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
