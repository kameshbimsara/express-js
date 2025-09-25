const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO  user_register (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }
        res.status(201).json({ message: "User registered successfully", userId: result.insertId });
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password required" });
    }

    const sql = "SELECT * FROM user_register WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });
        if (results.length === 0) return res.status(404).json({ message: "User not found" });

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id, email: user.email }, "kameshbimsara", { expiresIn: "1h" });

        res.json({ token });
    });
};

module.exports = { registerUser, loginUser };
