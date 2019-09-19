	function myFunction(){
		// document.getElementById("tempbox").style.display = "none";
		var country = $("#country").val();
		var cty = document.getElementById("country");
		var value = cty.options[cty.selectedIndex].value;
        // alert(value);
        if(country == value)
        {
        	
        $.getJSON("js/json/indiapartner.json", function(response){
        	
					let loc='';
					const indiaLatLongs = [];
					$.each(response.India, function(det,item){
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						indiaLatLongs.push(latLngObj);
						// alert(latLngObj);
						loc+='<div class="row">';
						loc+='<div class="panel panel-default">';
						loc+='<div class="panel-body">';
						loc+='<div class="col-xs-4">';
						loc+='<a href="'+item.href+'" target="_blank">';
						loc+='<img src="images/'+item.imgpath+'" class="img-responsive" alt="'+item.companyname+'_logo"/>';
						loc+='</a>';
						loc+='</div>';//close col-xs-4
						loc+='<div class="col-xs-8"><b>'+item.companyname+'</b><br/>'+item.companyaddress+'<br/>Tel: '+item.Tel+'</div>';
						loc+='</div></div>';//close panel-body and panel-default
						loc+='</div>';
					});
					createPushPins(indiaLatLongs);		
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
		
		}
		
	}
	
	//map

    function createPushPins(latLongData){
    	
    	// alert(latLongData);
    	clearPushPins();
    	if(latLongData.length>0){
    		for(let i=0;i<latLongData.length;i++){
    			let pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latLongData[i].lat, latLongData[i].long));
    			pin.metadata = {
    				title: latLongData[i].title
    			};
    			Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
    			map.entities.push(pin);
    			pin.setOptions({ enableHoverStyle: true, enableClickedStyle: true });
    			map.setView({
    				zoom: 4, center: new Microsoft.Maps.Location(latLongData[i].lat, latLongData[i].long)
    			});			
    		}
    	}
    }
    function clearPushPins(){
    	if(map.entities.getLength() >= 1){
    		for(let i=map.entities.getLength() - 1; i >= 0; i--){
    			let pushpin = map.entities.get(i);
    			if(pushpin instanceof Microsoft.Maps.Pushpin){
    				map.entities.removeAt(i);
    			}
    		}
    	}
    }

	
    function pushpinClicked(e) {
            //To ensure whether infobox have metadata to be displayed
        if (e.target.metadata) {
            //Add metadata pushpin on option infobox
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                //description: e.target.metadata.description,
                visible: true
            });
        }
    }


   