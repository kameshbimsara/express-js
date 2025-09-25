
const db = require('../config/db')

const saveMedicine = (req, res) => {
    const  { name, price, quantity } = req.body;
    const sql = 'INSERT INTO medicine (name, price, quantity) VALUES (?, ?, ?)';
    db.query(sql, [name, price, quantity], (err, result) => {
        if (err) {
            console.error('Error inserting medicine:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Medicine saved successfully', medicineId: result.insertId });
    })
    
}

const deleteMedicine = (req, res) => {
    const id = req.params.id;
    const query = "DELETE from medicine where id = ?";
    db.query(query, [id], (err,result) => {
        if(err) return res.status(500).json({ error: err.message});
        res.json(result)
    }) 
    
}

const getAllMedicine = (req, res) => {
    const query = 'SELECT * from medicine';
    db.query(query,(err,result) => {
        if(err) return res.status(500).json({error: err.message});
        res.json(result);
    });
};

const updateMedicine = (req, res) => {
    const id = req.params.id;
    const { name, price, quantity } = req.body;
    const query = "UPDATE medicine set name=?, price=?, quantity=? where id = ?";
    db.query(query,[name, price, quantity, id],(err,result)=>{
        if(err) return res.status(500).json({ error: err.message});
        res.json(result)
    })
}

const getMedicineById = (req, res) => {
    const id = req.params.id;
    const query = "SELECT * from medicine where id = ?";
    db.query(query,[id], (err,result)=>{
         if(err) return res.status(500).json({error: err.message});
        res.json(result);
    })
}

module.exports = {
    saveMedicine,
    deleteMedicine,
    getAllMedicine,
    updateMedicine,
    getMedicineById
}