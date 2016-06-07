
class Model {
	constructor(id) {
		if (!id && id !== 0) {
			throw new Error('You must supply an ID to a model!')
		}

		this.id = id
	}

	toJSON() {
		return {
			id: this.id
		}
	}

	save() {
		var className = this.constructor.name
		localStorage[className + ':' + this.id] = JSON.stringify(this.toJSON())
	}

	delete() {
		var className = this.constructor.name
		delete localStorage[className + ':' + this.id]
	}

	// Static methods are called from the class itself
	// rather than from any instances. So I can just
	// call Model.fromJSON().
	static fromJSON(json) {
		return new Model(json.id)
	}

	static load(id) {
		var className = this.prototype.constructor.name
		var data = localStorage[className + ':' + id]
		
		if (data) {
			return this.fromJSON(JSON.parse(data))
		} else {
			return null
		}
	}
}

/**
 * Example 1
 * I've extended the Model class to create a Message class
 * I overrode the necessary methods so that it can be
 * saved and loaded just like the Model class
 */
class Message extends Model {
	constructor(id, text) {
		super(id)
		/* calling the parent constructor ^ */

		this.text = text
	}

	toJSON() {
		var json = super.toJSON()
		json.text = this.text
		return json
	}

	static fromJSON(json) {
		return new Message(json.id, json.text)
	}
}

/*
 * Problem 1
 * Create a new Account class that extends from the Model class.
 * Make it so that Account objects can't be deleted.
 */

 class Account extends Model {
 	delete() {
 		throw new Error('You can\'t delete an account!')
 		/* or leave it blank */
 	}
 }

var a = new Account(-10)
a.save()
a.delete()


// deletes account if it's negative:

	delete() {
		if (this.id < 0) {
			super.delete()
		}
	}

/*
 * Problem 2
 * Create a new Tweet class that extends from the Message class
 * Make it so that the text of the message can't be any more than
 * 140 characters. If it's more than 140 characters, truncate the
 * message to just 140 characters. (Hint: use the substring() method)
 */

 class Tweet extends Message {
 	constructor(id, text) {
 		if (text.length <= 140) {
 			text = text.slice(0, 140)
 		}

 		super(id, text)
 	}
 }

/**
 * Problem 3
 * The Message class above can take any text as a message.
 * The problem with this is that the text for the message
 * can become very large - too large for local storage in
 * fact. Below you'll find compress() and decompress()
 * methods. Your job is to create a CompressedMessage class
 * that extends Message. This class will override the toJSON()
 * and fromJSON() methods so that they can compress and
 * decompress the message text respectively. You can find
 * test code below.
 */

class CompressedMessage extends Message {}
	toJson() {

		var json = super.toJSON()
		json.text = compress(json.text)
		return json
	}

	static fromJSON(json) {

		json.text = decompress(json.text)
		return new CompressedMessage(json.id, json.text)
	}

function compress(data) {
	// Don't worry about what I do
	 return btoa(data);
}

function decompress(data) {
	// Don't worry about what I do
	return atob(data);
}

var message = new CompressedMessage(5, 'Test text')
message.save()
var loaded = CompressedMessage.load(5)
var raw = localStorage['CompressedMessage:5']
if (raw.indexOf('VGVzdCB0ZXh0') < 0 || loaded.text !== 'Test text') {
	console.log('Your compressed message code is broken!')
} else {
	console.log('Your compressed message code works!')
}

/*
 * Problem 4
 * Create a new User class that extends from model, but add 2
 * properties in addition to the ID: firstName and lastName
 * Override the constructor, toJSON() and fromJSON() so that
 * it properly saves and loads the name. You can find test
 * code commented out below that should guide your implementation.
 */

class User extends Model {
	constructor(id, firstName, lastName) {
		super(id)

		this.firstName = firstName
		this.lastName = lastName
	}

	toJSON() {
		return {
			id: this.id,
			firstName: this.firstName,
			lastName: this.lastName
		}
	}

	static fromJSON(json) {
		return new User(json.id, json.firstName, json.lastName)
	}
}

var user = new User(36, 'Gordo', 'Kristan')
user.save()
var loaded = User.load(36)
if (loaded.id === 36 &&
	loaded.firstName === 'Gordo' &&
	loaded.lastName === 'Kristan') {
	console.log('Your user code works!')
} else {
	console.log('Your user code is broken!')
}