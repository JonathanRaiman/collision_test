function handleBuildingDrop( event, ui ) {

  var slotNumber = $(this).data( 'busy' );
  var myLat = $(this).attr('latitude');
  var myLong = $(this).attr('longitude');
  var myLong1 = parseFloat($(this).attr('longitude'))+1;
  var leftok = false;
  var rightok = false;
  var placement_tile = $(this);
  if ( slotNumber == 'empty' )
  {
    if ($(".ui-draggable-dragging").hasClass('greenhouse') == true || $(".ui-draggable-dragging").hasClass('tent') == true || $(".ui-draggable-dragging").hasClass('tent_mud') == true)
  	{   
  		if ($('span[latitude='+ myLat +'][longitude=' + myLong1 +']').data('busy')=='empty')
  			{
  			rightok = true;
  			}
  			
  	  	if (rightok == true) // okay up to here
    	{
    
    		  	ui.draggable.removeClass( 'ui-draggable-dragging' );
				ui.draggable.draggable( 'disable' );
   				placement_tile.droppable( 'disable' );
    			placement_tile.data( 'busy', 'busy' );
    			ui.draggable.attr('placed','yes');
    			$('span[latitude='+ myLat +'][longitude=' + myLong1 +']').data( 'busy', 'busy' );
    			$('span[latitude='+ myLat +'][longitude=' + myLong1 +']').droppable( 'disable' );
    			ui.draggable.appendTo("#place_map");
   				ui.draggable.position( {
   				of: placement_tile,
   				my: 'top left',
   				at: 'top left' } );
    			ui.draggable.draggable( 'option', 'revert', false );
    			if (placement_tile.position().top == 0) {
   					ui.draggable.css({"z-index":20});
    				}
    			else if (placement_tile.position().top == 60) {
    				ui.draggable.css({"z-index":30});
    				}
    			else if (placement_tile.position().top == 120) {
   					ui.draggable.css({"z-index":40});
    				}
    			else if (placement_tile.position().top == 180) {
    				ui.draggable.css({"z-index":50});
    				}
    			else if (placement_tile.position().top == 240) {
    				ui.draggable.css({"z-index":60});
    				}
    			else if (placement_tile.position().top == 300) {
    				ui.draggable.css({"z-index":70});
    				}
    			else if (placement_tile.position().top == 360) {
    				ui.draggable.css({"z-index":80});
    				}
   				else if (placement_tile.position().top == 420) {
    				ui.draggable.css({"z-index":90});
    				}
    			else if (placement_tile.position().top == 480) {
    				ui.draggable.css({"z-index":100});
    				}
    			else if (placement_tile.position().top == 540) {
    				ui.draggable.css({"z-index":110});
    				}
    	ui.draggable.attr("latitude",myLat).attr("longitude",myLong);
    	last_purchase=ui.draggable;
    	rankGenerate_and_check_light ();		
    	}
    } // end of factory conditions
    
    
  	else if ($(".ui-draggable-dragging").hasClass('house') == true || $(".ui-draggable-dragging").hasClass('farmhouse') == true || $(".ui-draggable-dragging").hasClass('factory') == true)
  	{   
  		if ($('span[latitude='+ myLat +'][longitude=' + (myLong -1) +']').data('busy')=='empty')
  			{
  			leftok = true;
  			}
  		if ($('span[latitude='+ myLat +'][longitude=' + myLong1 +']').data('busy')=='empty')
  			{
  			rightok = true;
  			}
  	  	if (leftok == true && rightok == true) // okay up to here
    	{
    
    			
    		  	ui.draggable.removeClass( 'ui-draggable-dragging' );
				ui.draggable.draggable( 'disable' );
   				placement_tile.droppable( 'disable' );
    			placement_tile.data( 'busy', 'busy' );
    			ui.draggable.attr('placed','yes');
    			$('span[latitude='+ myLat +'][longitude=' + myLong1 +']').data( 'busy', 'busy' );
    			$('span[latitude='+ myLat +'][longitude=' + myLong1 +']').droppable( 'disable' );
    			$('span[latitude='+ myLat +'][longitude=' + (myLong -1) +']').data( 'busy', 'busy' );
    			$('span[latitude='+ myLat +'][longitude=' + (myLong -1) +']').droppable( 'disable' );
    			ui.draggable.appendTo("#place_map");
   				ui.draggable.position( {
   				of: placement_tile,
   				my: 'center',
   				at: 'center' } );
    			ui.draggable.draggable( 'option', 'revert', false );
    			if (placement_tile.position().top == 0) {
   					ui.draggable.css({"z-index":20});
    				}
    			else if (placement_tile.position().top == 60) {
    				ui.draggable.css({"z-index":30});
    				}
    			else if (placement_tile.position().top == 120) {
   					ui.draggable.css({"z-index":40});
    				}
    			else if (placement_tile.position().top == 180) {
    				ui.draggable.css({"z-index":50});
    				}
    			else if (placement_tile.position().top == 240) {
    				ui.draggable.css({"z-index":60});
    				}
    			else if (placement_tile.position().top == 300) {
    				ui.draggable.css({"z-index":70});
    				}
    			else if (placement_tile.position().top == 360) {
    				ui.draggable.css({"z-index":80});
    				}
   				else if (placement_tile.position().top == 420) {
    				ui.draggable.css({"z-index":90});
    				}
    			else if (placement_tile.position().top == 480) {
    				ui.draggable.css({"z-index":100});
    				}
    			else if (placement_tile.position().top == 540) {
    				ui.draggable.css({"z-index":110});
    				}
    	ui.draggable.attr("latitude",myLat).attr("longitude",myLong);
    	last_purchase=ui.draggable;
    	rankGenerate_and_check_light ();		
    	} // we've placed our house.
    } // end of house conditions
    
else
	{
		ui.draggable.removeClass( 'ui-draggable-dragging' );
		ui.draggable.draggable( 'disable' );
	    placement_tile.droppable( 'disable' );
	    placement_tile.data( 'busy', 'busy' );
	    ui.draggable.appendTo("#place_map");
	    ui.draggable.attr('placed','yes');
	    ui.draggable.position( { of: placement_tile, my: 'left top', at: 'left top' } );
	    ui.draggable.draggable( 'option', 'revert', false );
	    
	    if (placement_tile.position().top == 0)
	    {
	    ui.draggable.css({"z-index":20});
	    }
	    else if (placement_tile.position().top == 60)
	    {
	    ui.draggable.css({"z-index":30});
	    }
	    else if (placement_tile.position().top == 120)
	    {
	    ui.draggable.css({"z-index":40});
	    }
	    else if (placement_tile.position().top == 180) 
	    {
	    ui.draggable.css({"z-index":50});
	    }
	    else if (placement_tile.position().top == 240) 
	    {
	    ui.draggable.css({"z-index":60});
	    }
	    else if (placement_tile.position().top == 300) 
	    {
	    ui.draggable.css({"z-index":70});
	    }
	    else if (placement_tile.position().top == 360) 
	    {
	    ui.draggable.css({"z-index":80});
	    }
	    else if (placement_tile.position().top == 420) 
	    {
	    ui.draggable.css({"z-index":90});
	    }
	    else if (placement_tile.position().top == 480) 
	    {
	    ui.draggable.css({"z-index":100});
	    }
	    else if (placement_tile.position().top == 540) 
	    {
	    ui.draggable.css({"z-index":110});
	    }
	    ui.draggable.attr("latitude",myLat).attr("longitude",myLong);
	    last_purchase=ui.draggable;
	rankGenerate_and_check_light ();  
	} // tile is not a house

} // end of function
}
$(function () {
$("#buildings span").draggable({
containment:'document',
preventCollision: true,
revert: true,
});

$("#buildings span").attr('placed','no').attr('living','no');
$("#buildings span.house").attr('building_type','house').attr('sell_price',1000).attr('upgrade_cost',3000);
$("#buildings span.shack").attr('building_type','shack').attr('sell_price',500).attr('upgrade_cost',1500);
$("#buildings span.tree").attr('building_type','tree').attr('sell_price',0).attr('upgrade_cost',0);
$("#buildings span.shrub").attr('building_type','shrub').attr('sell_price',0).attr('upgrade_cost',0);
$("#buildings span.factory").attr('building_type','factory').attr('sell_price',10000).attr('upgrade_cost',50000);
$("#buildings span.farmhouse").attr('building_type','farm house').attr('sell_price',2000).attr('upgrade_cost',12000);
$("#buildings span.palmtree_double").attr('building_type','palm trees').attr('sell_price',0).attr('upgrade_cost',0);
$("#buildings span.hut").attr('building_type','hut').attr('sell_price',100).attr('upgrade_cost',300);
$("#buildings span.palmtree_single1").attr('building_type','palm tree').attr('sell_price',0).attr('upgrade_cost',0);
$("#buildings span.palmtree_single2").attr('building_type','palm tree').attr('sell_price',0).attr('upgrade_cost',0);
$("#buildings span.tent_mud").attr('building_type','tent').attr('sell_price',0).attr('upgrade_cost',0);
$("#buildings span.tent").attr('building_type','tent').attr('sell_price',0).attr('upgrade_cost',0);
$("#buildings span.hexapod").attr('building_type','hexapod').attr('sell_price',0).attr('upgrade_cost',25000);



$(".vertical_line").clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'})
.clone().appendTo('#place_map').css({left: '+=60'});

$(".horizontal_line").clone().appendTo('#place_map').css({top: '+=60'})
.clone().appendTo('#place_map').css({top: '+=60'})
.clone().appendTo('#place_map').css({top: '+=60'})
.clone().appendTo('#place_map').css({top: '+=60'})
.clone().appendTo('#place_map').css({top: '+=60'})
.clone().appendTo('#place_map').css({top: '+=60'})
.clone().appendTo('#place_map').css({top: '+=60'})
.clone().appendTo('#place_map').css({top: '+=60'});

$('.dry_grass_tile').data( 'busy', 'empty').droppable( {
      accept: '#buildings span',
      hoverClass: 'dry_grass_tile_hovered',
      drop: handleBuildingDrop
    });

$('.grass_tile').data( 'busy', 'empty').droppable( {
      accept: '#buildings span',
      hoverClass: 'grass_tile_hovered',
      drop: handleBuildingDrop
    });
    });
$("#place_map").live('mousedown', function () { return false; });
$("#buildings").live('mousedown', function () { return false; });