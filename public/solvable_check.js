function hasSolutions() {
$("#progressbar").text('');
$("#progressbar").animate({width:0}, 50);
$("span[living='no'][sees_end='yes']").each(function (i)
{
	var mycurrentlat= parseFloat($(this).attr('latitude'));
	var mycurrentlong= parseFloat($(this).attr('longitude'));
        if ($('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty')
        {
        $('span[living="no"][latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('sees_end', 'yes');
        }
        else {}
        
        if ($('span[latitude='+ (mycurrentlat+1) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty')
        {
        $('span[living="no"][latitude='+ (mycurrentlat+1) +'][longitude=' + (mycurrentlong) +']').attr('sees_end', 'yes');
        }
        else {}
        
        if ($('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong+1) +']').data('busy')=='empty')
        {
        $('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong+1) +']').attr('sees_end', 'yes');
        }
        else {}
        
        if ($('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').data('busy')=='empty')
        {
        $('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').attr('sees_end', 'yes');
        }
        else {}
	});
	
	if ($('span[living="no"][latitude='+ startlatitude +'][longitude=' + startlongitude +']').attr('sees_end') == 'yes')
	{
	$("#progressbar").animate({width:100}, 20);
	$("#progressbar").addClass('finished');
	$("#progressbar").text('Solvable');
	return(true);
	}
	else
	{
	$('span[sees_end="yes"]').addClass('end_in_sight');
	$("#progressbar").animate({width: 100}, 200, function () {
	hasSolutions();
	});
	}
}