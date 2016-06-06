class User {
	constructor(name) {
		this.name = name
	}

	getName() {
		return this.name
	}
}

class TwitterUser extends User {
	getName() {
		Return ‘@’ + this.name
	}
}

var user = new TwitterUser (‘Gordo’)

user.getName()







class User {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

	toString() {
		return this.firstName + ' ' + this.lastName
	}

	toJSON() {
		return {
			firstName: this.firstName,
			lastName: this.lastName
		}
	}
}

class TwitterUser extends User {
	toString() {
		return ‘@’ + super.toString()
	}
}

var user = new TwitterUser (‘Gordo’)

user.getName()






class TwitterUser extends User {
	toJSON() {
		var json = super.toJSON()
		json.type = 'twitter'
		return json
	}
}