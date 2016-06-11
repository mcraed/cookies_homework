$(document).ready(function(){	
		//refresh on cookie setter syntax
	console.log('working');


	// Cookies.set('sugar', '0');
	// Cookies.set('choclate', '0');
	// Cookies.set('lemon', '0');

	console.log(Cookies.get('sugar'));

	var sugar_count = 0;
	var chocolate_count = 0;
	var lemon_count = 0;

	//for testing -- refresh/ experiment with cookie setter syntax
	$('#sugar-val').text(sugar_count);
	$('#chocolate-val').text(sugar_count);
	$('#lemon-val').text(sugar_count);

	//	cookie getters
	$('#sugar-val').text(Cookies.get('sugar'));
	$('#chocolate-val').text(Cookies.get("chocolate"));
	$('#lemon-val').text(Cookies.get('lemon'));

	$('#sugar-name').on('click', function(){
		sugar_count = sugar_count + 1;
		//This might be the proper syntax for cookies, but I'm not totally sure
		Cookies.set('sugar', sugar_count);
		$('#sugar-val').text(sugar_count);
	});

	$('#chocolate-name').click(function(){
		chocolate_count = chocolate_count + 1;
		Cookies.set('chocolate', chocolate_count);
		$('#chocolate-val').text(chocolate_count);
	});

	$('#lemon-name').click(function(){
		lemon_count = lemon_count + 1;
		Cookies.set('lemon', lemon_count);
		$('#lemon-val').text(lemon_count);
	});

	$('#clear').click(function(){
		Cookies.expire('sugar');
		Cookies.expire('chocolate');
		Cookies.expire('lemon');

		var sugar_count = 0;
		var chocolate_count = 0;
		var lemon_count = 0;
	});
});