import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as child from 'child_process';
import axios from 'axios';

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.post('/test', async (req, res) => {
	try {
		console.log(req.body)
		const {
			bedrooms,
			bathrooms,
			sqft_living,
			sqft_lot,
			floors,
			waterfront,
			yr_built,
			view
		} = req.body;
		const actualData = {
			bedrooms,
			bathrooms,
			sqft_living,
			sqft_lot,
			floors,
			waterfront,
			yr_built,
			view
		};

		const response = await axios.post(
									'https://cs98-ml.herokuapp.com/hello',
									actualData);
		console.log(response)
		res.send(JSON.stringify(response.data))
	} catch (error) {
		console.error(error)
	}
});



app.listen(PORT, () => console.log('App is up!'));
