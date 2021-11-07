"use strict";

/////// loading animation ///////

let screenloader = document.getElementById('loading');

function loadscreen(){
	screenloader.style.display = 'none';
};


///////////////////////////////////////


///// Toggle Menu Bar Start //////

let collapseNav = document.getElementById('toggle-btn');

collapseNav.onclick = function(){
	collapseNav.classList.toggle('active');
	
};


