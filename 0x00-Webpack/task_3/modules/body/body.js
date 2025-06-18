import './body.css';
import $ from 'jquery';
import _ from 'lodash';

let count = 0;
$(function () {
	const button = $('<button>Click Me</button>');
	const counter = $('<p>Clicks: 0</p>');

	button.on('click', () => {
		count += 1;
		counter.text(`Clicks: ${count}`);
	});

	$('#body').append(button, counter);
});
