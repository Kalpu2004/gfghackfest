const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, ".."))); // Serve static files (HTML, CSS, JS)

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.post("/book-appointment", (req, res) => {
  const { firstName, lastName, address, phoneNo } = req.body;
  
  if (!firstName || !lastName || !address || !phoneNo) {
    return res.status(400).send("All fields are required!");
  }

  // Simulate saving to a database (for demo purposes)
  console.log("Booking Data:", req.body);
  
  // Send success response
  res.send("Appointment booked successfully!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
