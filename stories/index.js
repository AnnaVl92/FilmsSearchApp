import React from 'react';
import { storiesOf } from '@storybook/react';
import Film from '../src/components/films/film.jsx';

const movie = {
	title: 'Star Trek: Insurrection',
	release_date: '1998-12-10',
	poster_path: 'https://image.tmdb.org/t/p/w500/9pbc44kltJhArUNyrdQcantMEvH.jpg',
	genres: ['Science Fiction', 'Action', 'Adventure', 'Thriller']
};

storiesOf('Film', module).add('with film', () => (
	<Film movie={movie} />
));
