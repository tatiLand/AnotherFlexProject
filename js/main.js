function toggleDropdown() {
	let navbarToggle = document.getElementById("navbar-toggle");
	if ( navbarToggle === 'topnav') {
		navbarToggle += ' responsive';
	}
	else {
		navbarToggle = 'topnav';
	}
}