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

app.get('/test', async (req, res) => {
	try {
		console.log(req.body)
		const {
			bedroom,
			bathroom,
			sqft_living,
			sqft_lot,
			floor,
			zipcode,
			waterfront,
			view
		} = req.body;
		const actualData = {
			bedroom,
			bathroom,
			sqft_living,
			sqft_lot,
			floor,
			zipcode,
			waterfront,
			view
		};
		const hardcodedData = {
			bedroom: 3,
			bathroom: 1,
			sqft_living: 1180,
			sqft_lot: 5650,
			floor: 1,
			zipcode: "03755",
			waterfront: 0,
			view: 0
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
