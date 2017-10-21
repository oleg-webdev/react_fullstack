const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs');

const userSchema = new Schema({

	email: {
		type: String
	},
	username: {
		type: String
	},
	password: {
		type: String
	},

	// Socials
	googleId: {
		type: String
	}

})

const User = mongoose.model('users', userSchema)

module.exports.User = User

module.exports.createUser = (newUser, callback) => {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			newUser.password = hash
			newUser.save(callback)
		})
	})
}

module.exports.getUserByEmail = (email, callback) => {
	User.findOne({ email }, callback)
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		if(err) throw err

		callback(null, isMatch)
	});
}