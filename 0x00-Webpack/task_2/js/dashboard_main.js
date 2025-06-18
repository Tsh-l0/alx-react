import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(document).ready(function () {
	$('body').prepend('<div id="logo"></div>');
	$('body').append('<p>ALX Dashboard</p>');
	$('body').append('<p>Dashboard data for the students</p>');
	$('body').append('<button>Click here to get started</button>');
	$('body').append("<span id='count'></span>");
	$('body').append('<p>Copyright - ALX</p>');

	let count = 0;
	const updateCounter = () => {
		count++;
		$('#count').text(`${count} clicks on the button`);
	}

	$('button').on('click', _.debounce(updateCounter, 500));
});
