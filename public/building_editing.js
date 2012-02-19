function notifyUser (a,b) {
$("#place_map").append('<span class="notification_menu" id="notificationmenu_'+unique_notification_menu_messageid+'"><span class="title"><font size="2px" style="color: white" face="wingdings">*</font> '+a+'</span><span class="extra_blab">'+b+'</span></span>');
var message_self=$("#notificationmenu_"+unique_notification_menu_messageid);
unique_notification_menu_messageid++;
var t=setTimeout( function()
	{
	$(message_self).animate(
					{opacity: 0}
	, 500, function ()
		{
		$(message_self).remove();
		}
	);
	}
	,3000);
}

$("span[living='no'][placed='yes']").live('click', function() {
$(".salemenu").animate({opacity: 0}, 500, function () {$(this).remove();});
var self = $(this);
$(this).append('<span class="salemenu" id="salemenu_'+unique_sale_menu_messageid+'"><span>'+$(this).attr('building_type')+'</span><a class="stylishbutton sellasset_button"><font size="2px" face="wingdings">M</font>&nbsp;$'+$(this).attr('sell_price')+'</a><a class="stylishbutton"><font size="2px" face="wingdings">µ</font>&nbsp;$'+$(this).attr('upgrade_cost')+'</a></span>');
var message_self=$("#salemenu_"+unique_sale_menu_messageid);
unique_sale_menu_messageid++;
var t=setTimeout( function()
	{
	$(message_self).animate(
					{opacity: 0}
	, 500, function ()
		{
		$(message_self).remove();
		}
	);
	}
	,5000);
});

function sellAsset (a) {
var myLat = $(a).attr('latitude');
var myLong = $(a).attr('longitude');
var myLong1 = parseFloat($(a).attr('longitude'))+1;
var myType =$(a).attr('building_type');
var mySellprice = $(a).attr('sell_price');
$('span[tile="yes"][latitude='+ myLat +'][longitude=' + myLong +']').data('busy','empty');
$('span[tile="yes"][latitude='+ myLat +'][longitude=' + myLong +']').droppable( "enable" );

if ($(a).hasClass('house') == true || $(a).hasClass('farmhouse') == true || $(a).hasClass('factory') == true)
	{
	$('span[tile="yes"][latitude='+ myLat +'][longitude=' + myLong1 +']').data('busy','empty');
	$('span[tile="yes"][latitude='+ myLat +'][longitude=' + myLong1 +']').droppable( "enable" );
	$('span[tile="yes"][latitude='+ myLat +'][longitude=' + (myLong-1) +']').data('busy','empty');
	$('span[tile="yes"][latitude='+ myLat +'][longitude=' + (myLong-1) +']').droppable( "enable" );
	}
else if ($(a).hasClass('greenhouse') == true || $(a).hasClass('tent') == true || $(a).hasClass('tent_mud') == true)
	{
	$('span[latitude='+ myLat +'][longitude=' + myLong1 +']').data('busy','empty');
	$('span[latitude='+ myLat +'][longitude=' + myLong1 +']').droppable( 'enable' );
	}

$(a).remove();
notifyUser (myType+' sold','$'+mySellprice+' added to your funds');
rankGenerate_and_check_light ();
}

$(".sellasset_button").live('click', function () {
var self= $(this).parent().parent();
sellAsset(self);
});