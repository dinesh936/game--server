const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/authmiddleware'); // <- Import

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error Handling Middleware (should be after routes)
app.use(errorHandler);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/gameuser')
.then(() => {
    console.log('✅ MongoDB (Local Compass) connected');
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
})
.catch(err => console.error('❌ MongoDB connection error:', err));
