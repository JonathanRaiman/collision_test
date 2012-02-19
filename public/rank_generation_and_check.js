function rankGenerate_and_check_light (a) {
$('span[living="no"]').attr('rank',99999999);
$('span[living="no"]').text('');
$('span[living="no"][latitude="'+endlatitude+'"][longitude="'+endlongitude+'"]').attr('rank',0);
max_rank=0;
var tiles_seen=1;
solve_attempts = 0;
	while (solve_attempts<max_solve_attempts)
	{
	$("span[living='no'][rank=" + max_rank + "]").each(function (i)
		{
		var mycurrentlat= parseFloat($(this).attr('latitude'));
		var mycurrentlong= parseFloat($(this).attr('longitude'));	
		
        if ($('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty' && $('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('rank')=="99999999" )
        {
        $('span[living="no"][latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('rank', (max_rank-(-1)));
        if (a=="text") {$('span[living="no"][latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').text((max_rank-(-1)));}
            tiles_seen++;
        }
        
        
        if ($('span[latitude='+ (mycurrentlat-(-1)) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty' && $('span[latitude='+ (mycurrentlat-(-1)) +'][longitude=' + (mycurrentlong) +']').attr('rank')=="99999999")
        {
        $('span[living="no"][latitude='+ (mycurrentlat-(-1)) +'][longitude=' + (mycurrentlong) +']').attr('rank', (max_rank-(-1)));
        if (a=="text") {$('span[living="no"][latitude='+ (mycurrentlat-(-1)) +'][longitude=' + (mycurrentlong) +']').text((max_rank-(-1)));}
            tiles_seen++;
        }
        
        
        if ($('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-(-1)) +']').data('busy')=='empty' && $('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-(-1)) +']').attr('rank')=="99999999")
        {
        $('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-(-1)) +']').attr('rank', (max_rank-(-1)));
        if (a=="text") {$('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-(-1)) +']').text((max_rank-(-1)));}
            tiles_seen++;
        }
        
        
        if ($('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').data('busy')=='empty' && $('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').attr('rank')=="99999999")
        {
        $('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').attr('rank', (max_rank-(-1)));
        if (a=="text") {$('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').text((max_rank-(-1)));}
            tiles_seen++;
        }
    }); 
    if (tiles_seen>200)
		{
		{break} //$('span[living="no"][latitude="'+startlatitude+'"][longitude="'+startlongitude+'"]').attr('rank') != 99999999
		}
	else {
		 max_rank++;
		 solve_attempts++;
		 }

	}
	    if ($('span[living="no"][latitude="'+startlatitude+'"][longitude="'+startlongitude+'"]').attr('rank') == 99999999) {sellAsset (last_purchase);}
		
}