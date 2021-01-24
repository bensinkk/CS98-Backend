import express from 'express'
import cors from 'cors'
import * as child from 'child_process';
import axios from 'axios';

const PORT = process.env.PORT || 5000


const app = express()
app.use(cors())

app.get('/add', (req, res) => {
	// Use child_process.spawn method from child_process module and assign it to variable spawn 

	// Parameters passed in spawn - 
	// 1. type_of_script 
	// 2. list containing Path of the script and arguments for the script  

	// E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
	// so, first name = Mike and last name = Will 
	let process = child.spawn('python', ["./python/test.py", req.query.firstnum, req.query.secondnum]);

	// Takes stdout data from script which executed with arguments and send this data to res object 
	process.stdout.on('data', (data) => res.send(data.toString()))
})

app.get('/test', async (req, res) => {
	try {
		const response = await axios.get('http://127.0.0.1:5000/hello')
		console.log(response)
		res.send(JSON.stringify(response.data))
	} catch (error) {
		console.error(error)
	}

})




app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))