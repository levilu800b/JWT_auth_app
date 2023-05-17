import UserModel from '../model/User.model.js';
import bcrypt from 'bcrypt';

/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "Jane",
  "lastName": "Doe",
  "mobile": 073889927737,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/

export async function register(req, res) {
	try {
		const { username, password, profile, email } = req.body;

		// check the existing user
		const existUsername = new Promise((resolve, reject) => {
			UserModel.findOne({ username })
				.then((user) => {
					if (user) {
						reject({ error: 'Please use a unique username' });
					} else {
						resolve();
					}
				})
				.catch((err) => {
					reject({ error: err.message });
				});
		});

		// check for existing email
		const existEmail = new Promise((resolve, reject) => {
			UserModel.findOne({ email })
				.then((email) => {
					if (email) {
						reject({ error: 'Please use a unique email' });
					} else {
						resolve();
					}
				})
				.catch((err) => {
					reject({ error: err.message });
				});
		});

		Promise.all([existUsername, existEmail])
			.then(() => {
				if (password) {
					bcrypt
						.hash(password, 10)
						.then((hashedPassword) => {
							const user = new UserModel({
								username,
								password: hashedPassword,
								profile: profile || '',
								email,
							});

							// return save result as a response
							user
								.save()
								.then((result) =>
									res.status(201).send({ msg: 'User Register Successfully' }),
								)
								.catch((error) => res.status(500).send({ error }));
						})
						.catch((error) => {
							return res.status(500).send({
								error: 'Unable to hashed password',
							});
						});
				}
			})
			.catch((error) => {
				console.log(error);
				return res.status(500).send({ error });
			});
	} catch (error) {
		return res.status(500).send(error);
	}
}

/** POST: http://localhost:8080/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/

export async function login(req, res) {
	res.json('register route');
}

/** GET: http://localhost:8080/api/user/example123 */

export async function getUser(req, res) {
	res.json('register route');
}

/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/

export async function updateUser(req, res) {
	res.json('register route');
}

/** GET: http://localhost:8080/api/generateOTP */

export async function generateOTP(req, res) {
	res.json('register route');
}

/** GET: http://localhost:8080/api/verifyOTP */

export async function verifyOTP(req, res) {
	res.json('register route');
}

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res) {
	res.json('register route');
}

// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res) {
	res.json('register route');
}
