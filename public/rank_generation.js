function rankGenerate() {

$("span[living='no'][rank=" + max_rank + "]").each(function (i)
{
		var mycurrentlat= parseFloat($(this).attr('latitude'));
		var mycurrentlong= parseFloat($(this).attr('longitude'));	
		
        if ($('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty' && $('span[latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('rank')=="99999999" )
        {
        $('span[living="no"][latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').attr('rank', (max_rank-(-1)));
        $('span[living="no"][latitude='+ (mycurrentlat-1) +'][longitude=' + (mycurrentlong) +']').text((max_rank-(-1)));
        }
        
        
        if ($('span[latitude='+ (mycurrentlat-(-1)) +'][longitude=' + (mycurrentlong) +']').data('busy')=='empty' && $('span[latitude='+ (mycurrentlat-(-1)) +'][longitude=' + (mycurrentlong) +']').attr('rank')=="99999999")
        {
        $('span[living="no"][latitude='+ (mycurrentlat-(-1)) +'][longitude=' + (mycurrentlong) +']').attr('rank', (max_rank-(-1)));
        $('span[living="no"][latitude='+ (mycurrentlat-(-1)) +'][longitude=' + (mycurrentlong) +']').text((max_rank-(-1)));
        }
        
        
        if ($('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-(-1)) +']').data('busy')=='empty' && $('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-(-1)) +']').attr('rank')=="99999999")
        {
        $('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-(-1)) +']').attr('rank', (max_rank-(-1)));
        $('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-(-1)) +']').text((max_rank-(-1)));
        }
        
        
        if ($('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').data('busy')=='empty' && $('span[latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').attr('rank')=="99999999")
        {
        $('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').attr('rank', (max_rank-(-1)));
        $('span[living="no"][latitude='+ (mycurrentlat) +'][longitude=' + (mycurrentlong-1) +']').text((max_rank-(-1)));
        }
        
});
max_rank++;
if ($('span[living="no"][latitude="'+startlatitude+'"][longitude="'+startlongitude+'"]').attr('rank') != 99999999)
{
}
else
{
rankGenerate();
}
}