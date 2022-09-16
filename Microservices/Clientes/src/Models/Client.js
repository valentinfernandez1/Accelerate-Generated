import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: false
	},
	lastName: {
		type: String,
		required: true,
		unique: false
	},
	birthDate: {
		type: Date,
		required: true,
		unique: false
	},
	personAddress: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	},
	rendedBook: {
		type: String,
		required: false,
		ref: "BookInstance"
	},
    subscriptionDate: {
		type: Date,
		required: true,
		unique: true
	},
});

export default mongoose.model("Client", ClientSchema);

