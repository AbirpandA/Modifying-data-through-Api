const mongoose = require('mongoose');
require('dotenv').config(); 

const MenuItem = require('./models/MenuItem');

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));
