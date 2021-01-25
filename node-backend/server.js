import express from 'express'
import cors from 'cors'
import * as child from 'child_process';
import axios from 'axios';

const PORT = process.env.PORT || 5000


const app = express()
app.use(cors())

app.get('/test', async (req, res) => {
	try {
		const hardcodedData = {
			bedroom: 3,
			bathroom: 1,
			sqft_living: 1180,
			sqft_lot: 5650,
			floor: 1,
			zipcode: "03755",
			waterfront: 0,
			view: 0
		}

		const response = await axios.post('http://127.0.0.1:5000/hello', hardcodedData)
		console.log(response)
		res.send(JSON.stringify(response.data))
	} catch (error) {
		console.error(error)
	}
})



app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))