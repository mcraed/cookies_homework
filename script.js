$(document).ready(function(){	
		
	var picker = function(){			
		$('#spinner-1').spinner({min: 0});
		$('#spinner-2').spinner({min: 0});
		$('#spinner-3').spinner({min: 0});
	};

	$('#sugar-val').text(Cookies.get("sugar"));
	$('#chocolate-val').text(Cookies.get("chocolate"));
	$('#lemon-val').text(Cookies.get('lemon'));
	

	$('#submit').on('click', function(){

		Cookies.set("sugar", $('#spinner-1').val() );
		Cookies.set("chocolate", $('#spinner-2').val() )
		Cookies.set("lemon", $('#spinner-3').val() 	)

		$('#sugar-val').text($('#spinner-1').val());
		$('#chocolate-val').text($('#spinner-2').val());
		$('#lemon-val').text($('#spinner-3').val());

		$('#confirm').text('Your order has been saved!! Reset by clicking the clear button below!')


	});

	$('#clear').click(function(){
		Cookies.expire('sugar');
		Cookies.expire('chocolate');
		Cookies.expire('lemon');

		$('#sugar-val').text('');
		$('#chocolate-val').text('');
		$('#lemon-val').text('');
	});

picker();

});