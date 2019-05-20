import React from 'react';
//import { Link } from "react-router-dom";
import Link from 'next/link'

function Page404 () {
	return (
		<React.Fragment>
			<h1>404 Error</h1>
			<Link to="/" href="/"><a>Main Page</a></Link>
		</React.Fragment>
	);
};

export default Page404;