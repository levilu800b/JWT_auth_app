import UserModel from '../model/User.model.js';
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import ENV from '../config.js';

/** middleware for verify user */
export async function verifyUser(req, res, next){
    try {
        
        const { username } = req.method == "GET" ? req.query : req.body;

        // check the user existence
        let exist = await UserModel.findOne({ username });
        if(!exist) return res.status(404).send({ error : "Can't find User!"});
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error"});
    }
}


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
	const { username, password } = req.body;

	try {
		UserModel.findOne({ username })
			.then((user) => {
				bcrypt
					.compare(password, user.password)
					.then((passwordCheck) => {
						if (!passwordCheck)
							return res.status(400).send({ error: "Don't have Password" });

						// create jwt token
						const token = jwt.sign(
							{
								userId: user._id,
								username: user.username,
							},
							ENV.JWT_SECRET,
							{ expiresIn: '24h' },
						);

						return res.status(200).send({
							msg: 'Login Successful...!',
							username: user.username,
							token,
						});
					})
					.catch((error) => {
						return res.status(400).send({ error: 'Password does not Match' });
					});
			})
			.catch((error) => {
				return res.status(404).send({ error: 'Username not Found' });
			});
	} catch (error) {
		return res.status(500).send({ error });
	}
}

/** GET: http://localhost:8080/api/user/example123 */

export async function getUser(req, res) {
	const { username } = req.params;

	try {
		UserModel.findOne({ username })
			.then((user) => {
				return res.status(200).send({ user });
			}
			)
			.catch((error) => {
				return res.status(404).send({ error: 'Username not Found' });
			}
			);
	} catch (error) {
		return res.status(500).send({ error });
	}
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
