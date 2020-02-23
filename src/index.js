import React from 'react';
import { render } from 'react-dom';
import '../public/css/styles.css';

const MyComponent = () => {
	return <h1>Hello Webpack + React</h1>;
};

render(<MyComponent />, document.getElementById('root'));
