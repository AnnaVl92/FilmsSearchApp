import React from 'react';
import { storiesOf } from '@storybook/react';
import Film from '../src/components/films/film.jsx';
import Radio from '../src/components/radio/radio.jsx';
import { action } from '@storybook/addon-actions';

const movie = {
	title: 'Star Trek: Insurrection',
	release_date: '1998-12-10',
	poster_path: 'https://image.tmdb.org/t/p/w500/9pbc44kltJhArUNyrdQcantMEvH.jpg',
	genres: ['Science Fiction', 'Action', 'Adventure', 'Thriller']
};

storiesOf('Film', module).add('with film', () => (
	<Film movie={movie} />
));

storiesOf('Radio', module)
	.add('with search by', () => (
		<React.Fragment>
			<Radio
				id="searchTitle"
				name="searchBy"
				value="title"
				onChange={action('onChange')}
				labelText="TITLE"
			/>
			<Radio
				id="searchGenre"
				name="searchBy"
				value="genres"
				onChange={action('onChange')}
				labelText="GENRE"
			/>
		</React.Fragment>
	));
