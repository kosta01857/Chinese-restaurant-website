$(document).ready(function () {
	let path = window.location.pathname;
	let strings = path.split('/');
	let len = strings.length;
	let page = strings[len-1];
	console.log(page);
	$("body").prepend(
		`
		<div id="navbar">
		<img src="resources/logo.png" alt="">
		<a href="index.html"> HOME</a>
		<a href="menu.html"> MENU</a>
		<a href="gallery.html"> GALLERY</a>
		<a href="login.html"> MY ACCOUNT</a>
		<a href="about.html">ABOUT US</a>
		<img src="resources/dragon4.png" alt="">
		</div>
		<div id="drop" class="dropdown show">
		<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		Language
		</a>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
		<a class="dropdown-item" href="../en/${page}">EN</a>
		<a class="dropdown-item" href="../sr/${page}">SR</a>
		</div>
		</div>
		`,
	);
});
