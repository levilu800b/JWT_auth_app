import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connection.js';
import router from './router/route.js';

const app = express();

/** middleware */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

const PORT = process.env.PORT || 8080;

/** HTTP GET Request */
app.get('/', (req, res) => {
	res.status(201).json('Home GET Request');
});

/** api routes */
app.use('/api', router);

/** start server only when we have valid connection */
connect()
	.then(() => {
		try {
			app.listen(PORT, () => {
				console.log(`Server is running on PORT: ${PORT}`);
			});
		} catch (error) {
			console.log('Cannot connect to the server');
		}
	})
	.catch((error) => {
		console.log('Invalid database connection...!');
	});
