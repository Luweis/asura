import *as React from 'react';
import {render} from 'react-dom';
import {Test} from "./test";


function r() {
	render(<Test/>, document.querySelector('#root'));
}

r();


if (process.env.NODE_ENV ==='development'){
	if (module.hot) {
		module.hot.accept('./test', function () {
			console.log('luwei=======Accepting the updated printMe module!');
			r()
		})
	}
}

