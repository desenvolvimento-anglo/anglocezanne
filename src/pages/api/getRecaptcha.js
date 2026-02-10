import axios from 'axios';
import Cors from 'cors';

const cors = Cors({
	origin: 'toalheiros',
	methods: ['POST', 'GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, result => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

export default async function handler(req, res) {
	await runMiddleware(req, res, cors);
	const secretRecaptcha = '6Ldj9Q4pAAAAAG8hi7f053Ih6CBEYfoZtL0Nscjj';
	const body = req.body;
	const resposta = axios
		.post(
			`https://www.google.com/recaptcha/api/siteverify?secret=${secretRecaptcha}&response=${body.value}`,
			{},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then(function (response) {
			res.status(200).json({ data: response.data });
			//console.log(response.data);
		})
		.catch(function (error) {
			if (error.response) {
				res.status(400).json(error.response.data);
			} else if (error.request) {
				res.status(400).json(error.request);
				//console.log(error.request);
				console.clear(error.request);
			} else {
				//console.log('Error', error.message);
				console.clear(error.request);
			}
		});

	//console.log(resposta);
}
