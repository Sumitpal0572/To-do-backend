const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Low' },
    tags: [String],
    mentions: [String],
    notes: [String],
    createdBy: String,
}, { timestamps: true });
module.exports = mongoose.model('Todo', TodoSchema);