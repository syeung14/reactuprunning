'use strict';

import Button from './components/Button';
import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<div style={ {padding: '20px'} }>
		<h1>Component discoverer</h1>
		<h2>Logo</h2>
		<div style={ {display: 'inline-block', background: 'purple'} }>
		<Logo />
	</div>
	
	{/* more components go here... */}
	<h2>Buttons</h2>
	<div>Button with onClick: <Button onClick={() => alert('ouch')}>Click me</Button></div>
	<div>A link: <Button href="https://cfb-public.slack.com/messages"> Go to Slack!</Button></div>

	</div>,

	document.getElementById('pad')
);