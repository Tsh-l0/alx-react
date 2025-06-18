import './header.css';
import $ from 'jquery';

$(function () {
	$('#header').append('<img src="logo.png" alt="Logo">');
	$('#header').append('<h1>ALX Dashboard</h1>');
	console.log('Init header');
});
