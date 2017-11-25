const mongoose = require("mongoose")
const Schema = mongoose.Schema

const taskSchema = new Schema({
	description: { type: String, required: true },
	dueDate: { type: Date, required: true },
	points: { type: Number, required: true },
	claim: { type: Boolean, default: false},
	complete: { type: Boolean, default: false}
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task