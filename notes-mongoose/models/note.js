const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true,
		default: "Other",
		enum: ["Household Chores", "YT", "Study", "Other", "Relaxation"]
	}
});

module.exports = mongoose.model('Note', noteSchema);

