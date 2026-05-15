const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => res.json({ message: 'Smart Travel API is running!' }));

// Routes (sẽ thêm dần)
// app.use('/api/auth', require('./modules/auth/auth.routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;