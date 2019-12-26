class User {
	constructor(user = {}) {
		this.name = user.name;
		this.phone = user.phone;
		this.email = user.email;
		this.role = user.role;
		this.created_at = user.created_at;
		this.updated_at = user.updated_at;
		this.email_verified_at = user.email_verified_at;
	}
}

export default User;
