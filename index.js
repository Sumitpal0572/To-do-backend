    require('dotenv').config();
    const express = require('express');
    const connectDB = require('./Server/config/db.js')
    const todoRoutes=require('./Server/routes/todoRoutes.js')
    const userRoutes = require('./Server/routes/userRoutes.js');
    const cors = require('cors');

    const app = express();
    connectDB();
    app.use(cors());
    app.use(express.json());

    app.use('/api/todos', todoRoutes);
    app.use('/api/users', userRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));