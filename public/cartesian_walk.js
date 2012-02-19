function reStart() {
	$("#helperbar").fadeOut(800);
	rankGenerate_and_check_light ();
	epicness=epicness+wavesize;
	while (squirted_dudes<epicness)
		{
		$("#magic").animate({opacity:1}, (2*speed), function ()
			{
			$('#place_map').append("<span class='badguy' id='buddy_"+unique_characterid+"' living='yes'></span>");
			var temp_buddy= $("#buddy_"+unique_characterid);
			$(temp_buddy).css({"top":60*startlatitude,"left":60*startlongitude}).attr('latitude',startlatitude).attr('longitude',startlongitude);
			enterGame(temp_buddy);
			organisedMove(temp_buddy);
			//console.log("#buddy_"+unique_characterid);
			unique_characterid++;
			});
		//console.log("#buddy_"+squirted_dudes);
		squirted_dudes++;
		}
}


$(document).ready(function()
{
 
    $(document).keypress(function(e)
    {
    	
    	if(e.which == 32)
    	{
    	event.preventDefault();
		reStart();
		notifyUser ('Game Started','Lead '+epicness+' kings through your labyrinth. Press "spacebar" to restart.');
    	}
	});
});


function moveUp(element)
{
var mycurrentlat = parseFloat($(element).attr('latitude'));
var mycurrentlong = parseFloat($(element).attr('longitude'));
	$('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('past', 'yes');
	$(element).attr('longitude', (mycurrentlong)).attr('latitude', (mycurrentlat-1));
	$(element).addClass('moving_up').animate(
	{
		'top' : '-=60'
	}, speed, 'linear', function() {
	$(element).removeClass('moving_up');
	organisedMove (element);});
}

function moveDown(element)
{
var mycurrentlat = parseFloat($(element).attr('latitude'));
var mycurrentlong = parseFloat($(element).attr('longitude'));

	$('span[latitude='+ (mycurrentlat-(-1)) +'][longitude=' + mycurrentlong +']').attr('past', 'yes');
	$(element).attr('longitude', mycurrentlong).attr('latitude', (mycurrentlat-(-1)));
	$(element).addClass('moving_down').animate(
	{
		'top' : '+=60'
	}, speed, 'linear', function() {
	$(element).removeClass('moving_down');
	organisedMove (element);});
}

function enterGame(element)
{
	$(element).css({opacity: 0, top: '-= 60'});
	$(element).addClass('moving_down').animate(
	{
		'top' : '+=60',
		'opacity': 1
	}, speed, 'linear', function()
		{
		$(element).removeClass('moving_down');
		});
}



function exitGame(element)
{

	$(element).addClass('moving_down').animate(
	{
		'top' : '+=60',
		'opacity': 0
	}, speed, 'linear', function()
		{
		$(element).removeClass('moving_down');
		$(element).remove();
		});
}

function moveLeft(element)
{
var mycurrentlat = parseFloat($(element).attr('latitude'));
var mycurrentlong = parseFloat($(element).attr('longitude'));
$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').attr('past', 'yes');
$(element).attr('longitude', (mycurrentlong-1)).attr('latitude', mycurrentlat);

	$(element).addClass('moving_left').animate(
	{
		'left' : '-=60'
	}, speed, 'linear', function() {
	$(element).removeClass('moving_left');
	organisedMove (element);});
}

function moveRight(element)
{
var mycurrentlat = parseFloat($(element).attr('latitude'));
var mycurrentlong = parseFloat($(element).attr('longitude'));

$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-(-1)) +']').attr('past', 'yes');
$(element).attr('longitude', (mycurrentlong-(-1))).attr('latitude', mycurrentlat);

	$(element).addClass('moving_right').animate(
	{
		'left' : '+=60'
	}, speed , 'linear',  function()
	{$(element).removeClass('moving_right');
	organisedMove (element);});
}


function organisedMove (element) {

var mycurrentlat = parseFloat($(element).attr('latitude'));
var mycurrentlong = parseFloat($(element).attr('longitude'));

var northrank = $('span[latitude='+ (mycurrentlat-1) +'][longitude=' + mycurrentlong +']').attr('rank');
var southrank = $('span[latitude='+ (mycurrentlat-(-1)) +'][longitude=' + mycurrentlong +']').attr('rank');
var eastrank = $('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-(-1)) +']').attr('rank');
var westrank =$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong-1) +']').attr('rank');
var currentrank =$('span[latitude='+ mycurrentlat +'][longitude=' + (mycurrentlong) +']').attr('rank');

var chosen_direction;

// find the minimum rank of all
if (parseFloat(northrank)<parseFloat(currentrank))
	{
	var chosen_direction = "n";
	}
if (parseFloat(eastrank)<parseFloat(currentrank))
	{
	var chosen_direction = "e";
	}
if (parseFloat(westrank)<parseFloat(currentrank))
	{
	var chosen_direction = "w";
	}
if (parseFloat(southrank)<parseFloat(currentrank))
	{
	var chosen_direction = "s";
	}
if (parseFloat(currentrank)==0)
	{
	//console.log("Success! "+$(element).attr('id')+" made it through the maze!");
	through_maze_counter++;
	//console.log("So far "+through_maze_counter+" kings have arrived of "+epicness+" total, that's "+parseInt((100*through_maze_counter/epicness))+"% !!!");
	exitGame(element);
	if (through_maze_counter==epicness)
		{
		notifyUser ('Wave Cleared','Epic! '+through_maze_counter+' kings have passed your labyrinth.');
		$("#helperbar").fadeIn(800);
		}
	}
else
{
//console.log(chosen_direction);
// apply analysis:
if (chosen_direction=="n")
{
moveUp($(element));
}
else if (chosen_direction=="s")
{
moveDown($(element));
}
else if (chosen_direction=="w")
{
moveLeft($(element));
}
else if (chosen_direction=="e")
{
moveRight($(element));
}
else {}
}
}