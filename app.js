$(function () {


	$('#btn1').on('click', function () {
		$('button').attr('disabled', true);
		
		var isComplete = false;
		var place = 'first';

		function checkIfComplete() {
			if (isComplete === false) {
				isComplete = true;
			} else {
				place = 'second';
			}
			if (place === 'first' && isComplete === true) {
				$('#raceTrack').append(`<img src="img/finish.gif" class = " img-responsive flag">`);
				$('#raceTrack').css('opacity', '0.7');
			}

		}

		var raceTime1 = Math.floor((Math.random() * 5000) + 1);
		var raceTime2 = Math.floor((Math.random() * 5000) + 1);


		var carWidth = $('#car1').width();
		var raceTrackWidth = $(window).width() - carWidth;

		// function countDown(i) {

		// 	var int = setInterval(function () {
		// 		document.getElementById("raceTrack").innerHTML = `<p class='c'>` + i + `</p>`;
		// 		if (i === 0) {
		// 			clearInterval(int);
		// 		} else {
		// 			i--;
		// 		}

		// 	}, 1000);
		// }
		// countDown(3);

		$('#car1').animate({
			left: raceTrackWidth
		}, raceTime1, function () {
			checkIfComplete();
			$('.one').append(`<tr><td>Finished in: <span>${place}</span> place with a time of <span>${raceTime1}</span> milliseconds!</td></tr>`);
			$('.one').find('span').css('color', 'white');
			$('button').attr('disabled', false);

		});
		$('#car2').animate({
			left: raceTrackWidth
		}, raceTime2, function () {
			checkIfComplete();
			$('.two').append(`<tr><td>Finished in: <span>${place}</span> place with a time of <span>${raceTime2}</span> milliseconds!<td></tr>`);
			$('.two').find('span').css('color', 'red');
			$('button').attr('disabled', false);

		});
		// let val1 = $('three').text();

		// localStorage.setItem(`Car1 finisher in ${place} place, with a time of ${raceTime1} milliseconds`, val1);

		// $(document).on('load',function(){
		// 	console.log(localStorage.getItem(`Car1 finisher in ${place} place, with a time of ${raceTime1} milliseconds`));
		// })

	})
	

	
	$('#btn2').on('click', function () {
		$('.car').css('left', '0');
		$('#raceTrack').css('opacity', '1');
		$('.flag').hide();
	})

	



















});