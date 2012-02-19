function nextMove() {

var mycurrentlat = parseFloat($("#buddy").attr('latitude'));
var mycurrentlong = parseFloat($("#buddy").attr('longitude'));
var myLat1 = parseFloat($("#buddy").attr('latitude'))+1;
var randomness = Math.floor(Math.random()*4);

if (randomness ==0)
{
// move down
if ($('span[latitude='+ myLat1 +'][longitude=' + mycurrentlong +']').data('busy')=='empty')
{
	$('span[latitude='+ myLat1 +'][longitude=' + mycurrentlong +']').attr('past', 'yes');
	$("#buddy").attr('longitude', mycurrentlong).attr('latitude', myLat1);
	$("#buddy").animate(
	{
		'top' : '+=60'
	}, 500, function (){nextMove()});
}
// move left
else if ($('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').data('busy')=='empty')
{
$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').attr('past', 'yes');
$("#buddy").attr('longitude', (mycurrentlong-1)).attr('latitude', mycurrentlat);

	$("#buddy").animate(
	{
		'left' : '-=60'
	}, 500, function (){nextMove()});
	}
// move right
else if ($('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong+1) +']').data('busy')=='empty')
{
$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong+1) +']').attr('past', 'yes');
$("#buddy").attr('longitude', (mycurrentlong+1)).attr('latitude', mycurrentlat);

	$("#buddy").animate(
	{
		'left' : '+=60'
	}, 500, function (){nextMove()});
	}
// move up
else if ($('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty')
{
	$('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('past', 'yes');
	$("#buddy").attr('longitude', (mycurrentlong)).attr('latitude', mycurrentlat-1);
	$("#buddy").animate(
	{
		'top' : '-=60'
	}, 500, function (){nextMove()});
	}
}
else if (randomness == 1)
{
// move up
if ($('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty')
{
	$('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('past', 'yes');
	$("#buddy").attr('longitude', (mycurrentlong)).attr('latitude', mycurrentlat-1);
	$("#buddy").animate(
	{
		'top' : '-=60'
	}, 500, function (){nextMove()});
	}
// move left
else if ($('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').data('busy')=='empty')
{
$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').attr('past', 'yes');
$("#buddy").attr('longitude', (mycurrentlong-1)).attr('latitude', mycurrentlat);

	$("#buddy").animate(
	{
		'left' : '-=60'
	}, 500, function (){nextMove()});
	}
// move right
else if ($('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong+1) +']').data('busy')=='empty')
{
$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong+1) +']').attr('past', 'yes');
$("#buddy").attr('longitude', (mycurrentlong+1)).attr('latitude', mycurrentlat);

	$("#buddy").animate(
	{
		'left' : '+=60'
	}, 500, function (){nextMove()});
	}
// move down
else if ($('span[latitude='+ myLat1 +'][longitude=' + mycurrentlong +']').data('busy')=='empty')
{
	$('span[latitude='+ myLat1 +'][longitude=' + mycurrentlong +']').attr('past', 'yes');
	$("#buddy").attr('longitude', mycurrentlong).attr('latitude', myLat1);
	$("#buddy").animate(
	{
		'top' : '+=60'
	}, 500, function (){nextMove()});
}

}
else if (randomness == 2)
{
// move left
if ($('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').data('busy')=='empty')
{
$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').attr('past', 'yes');
$("#buddy").attr('longitude', (mycurrentlong-1)).attr('latitude', mycurrentlat);

	$("#buddy").animate(
	{
		'left' : '-=60'
	}, 500, function (){nextMove()});
	}
// move down
else if ($('span[latitude='+ myLat1 +'][longitude=' + mycurrentlong +']').data('busy')=='empty')
{
	$('span[latitude='+ myLat1 +'][longitude=' + mycurrentlong +']').attr('past', 'yes');
	$("#buddy").attr('longitude', mycurrentlong).attr('latitude', myLat1);
	$("#buddy").animate(
	{
		'top' : '+=60'
	}, 500, function (){nextMove()});
}
// move right
else if ($('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong+1) +']').data('busy')=='empty')
{
$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong+1) +']').attr('past', 'yes');
$("#buddy").attr('longitude', (mycurrentlong+1)).attr('latitude', mycurrentlat);

	$("#buddy").animate(
	{
		'left' : '+=60'
	}, 500, function (){nextMove()});
	}
// move up
else if ($('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty')
{
	$('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('past', 'yes');
	$("#buddy").attr('longitude', (mycurrentlong)).attr('latitude', mycurrentlat-1);
	$("#buddy").animate(
	{
		'top' : '-=60'
	}, 500, function (){nextMove()});
	}
}
else if (randomness ==3)
{
// move right
if ($('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong+1) +']').data('busy')=='empty')
{
$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong+1) +']').attr('past', 'yes');
$("#buddy").attr('longitude', (mycurrentlong+1)).attr('latitude', mycurrentlat);

	$("#buddy").animate(
	{
		'left' : '+=60'
	}, 500, function (){nextMove()});
	}
// move down
else if ($('span[latitude='+ myLat1 +'][longitude=' + mycurrentlong +']').data('busy')=='empty')
{
	$('span[latitude='+ myLat1 +'][longitude=' + mycurrentlong +']').attr('past', 'yes');
	$("#buddy").attr('longitude', mycurrentlong).attr('latitude', myLat1);
	$("#buddy").animate(
	{
		'top' : '+=60'
	}, 500, function (){nextMove()});
}
// move left
else if ($('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').data('busy')=='empty')
{
$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').attr('past', 'yes');
$("#buddy").attr('longitude', (mycurrentlong-1)).attr('latitude', mycurrentlat);

	$("#buddy").animate(
	{
		'left' : '-=60'
	}, 500, function (){nextMove()});
	}

// move up
else if ($('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty')
{
	$('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('past','yes');
	$("#buddy").attr('longitude', (mycurrentlong)).attr('latitude', mycurrentlat-1);
	$("#buddy").animate(
	{
		'top' : '-=60'
	}, 500, function (){nextMove()});
	}
}
else {}
}