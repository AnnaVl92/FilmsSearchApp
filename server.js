const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log(app);

app.prepare()
	.then(() => {
		const server = express()

		server.get('/film/:id', (req, res) => {
			const actualPage = '/film';
			const queryParams = { id: req.params.id };
			console.log(res);
			app.render(req, res, actualPage, queryParams);
		});

		server.get('/search/:query', (req, res) => {
			const actualPage = '/search';
			const queryParams = { query: req.params.query };
			console.log(res);
			app.render(req, res, actualPage, queryParams);
		});


		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(3000, (err) => {
			if (err) throw err;
			console.log('> Ready on http://localhost:3000');
		})
	})
.catch((ex) => {
	console.error(ex.stack)
	process.exit(1)
})