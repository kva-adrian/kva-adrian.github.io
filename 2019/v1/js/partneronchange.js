$(document).ready(function(){
	$("#result").hide();
	$('#myMap').hide();
	$('#tempbox').show();
$('select.mydrop').change(function(){
			$("#result").hide();
			$('#myMap').hide();
			$('#tempbox').hide();
			var country = $("#country").val();
				if(country == "Select")
				{
					alert("Country Is Mandatory..");
					
					$('#tempbox').show();
				}
				if(country == "India")
				{
				$.getJSON("js/json/indiapartner.json", function(response){
					let loc='';
					const indiaLatLongs = [];
					$.each(response.India, function(det,item){
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						indiaLatLongs.push(latLngObj);
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

			//kenya
				if(country == "Kenya")
				{
						
				$.getJSON("js/json/kenyapartner.json", function(response){
					let loc='';
					const kenyaLatLongs = [];
					$.each(response.Kenya, function(det,item){
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						kenyaLatLongs.push(latLngObj);
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
					createPushPins(kenyaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}

			//Rwanda
				if(country == "Rwanda")
				{
				$.getJSON("js/json/rwandapartner.json", function(response){
					let loc='';
					const rwandaLatLongs = [];
					$.each(response.Rwanda, function(det,item){
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						rwandaLatLongs.push(latLngObj);
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
					createPushPins(rwandaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}

			//Ethiopia
				if(country == "Ethiopia")
				{
				$.getJSON("js/json/ethiopiapartner.json", function(response){
					let loc='';
					const ethiopiaLatLongs = [];
					$.each(response.Ethiopia, function(det,item){
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						ethiopiaLatLongs.push(latLngObj);
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
					createPushPins(ethiopiaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}
			//Tanzania
				if(country == "Tanzania")
				{
				$.getJSON("js/json/tanzaniapartner.json", function(response){
					let loc='';
					const tanzaniaLatLongs = [];
					$.each(response.Tanzania, function(det,item){
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						tanzaniaLatLongs.push(latLngObj);
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
					createPushPins(tanzaniaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}
			
			//Nigeria
				
				if(country == "Nigeria")
				{
				$.getJSON("js/json/nigeriapartner.json", function(response){
					let loc='';
					const nigeriaLatLongs = [];
					$.each(response.Nigeria, function(det,item){
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						nigeriaLatLongs.push(latLngObj);
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
					createPushPins(nigeriaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}	


		//End filter based on country only


		//start filter based on country with technology
			var selectedtech = $("#technology").val();

			//india

				if(country == "India" && selectedtech != "Select")
				{
					
					$.getJSON("js/json/indiapartner.json", function(response){
					let loc='';
					const indiatechLatLongs = [];
					
					$.each(response.India, function(det,item){
						
					if(item.Technology.includes(selectedtech))
					{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						indiatechLatLongs.push(latLngObj);	
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
									
					}	
					

					});
					createPushPins(indiatechLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					
					});	
					
				}
					

			//kenya		

				if(country == "Kenya" && selectedtech != "Select")
				{
					
					$.getJSON("js/json/kenyapartner.json", function(response){
					let loc='';
					const kenyatechLatLongs = [];
					$.each(response.Kenya, function(det,item){
						if(item.Technology.includes(selectedtech))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						kenyatechLatLongs.push(latLngObj);
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
						
						}
					});
					createPushPins(kenyatechLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}
								

			//Rwanda

				if(country == "Rwanda" && selectedtech != "Select")
				{
					$.getJSON("js/json/rwandapartner.json", function(response){
					let loc='';
					const RwandatechLatLongs = [];
					$.each(response.Rwanda, function(det,item){
						if(item.Technology.includes(selectedtech))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						RwandatechLatLongs.push(latLngObj);
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
						}
					});
					createPushPins(RwandatechLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}


			//Ethiopia

				if(country == "Ethiopia" && selectedtech != "Select")
				{
					$.getJSON("js/json/ethiopiapartner.json", function(response){
					let loc='';
					const ethiopiatechLatLongs = [];
					$.each(response.Ethiopia, function(det,item){
						if(item.Technology.includes(selectedtech))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						ethiopiatechLatLongs.push(latLngObj);
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
						
						}
					});
					createPushPins(ethiopiatechLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}

			//Tanzania
				
				if(country == "Tanzania" && selectedtech != "Select")
				{
				$.getJSON("js/json/tanzaniapartner.json", function(response){
					let loc='';
					const tanzaniaLatLongs = [];
					$.each(response.Tanzania, function(det,item){
						if(item.Technology.includes(selectedtech))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						tanzaniaLatLongs.push(latLngObj);
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
						}
						
					});
					createPushPins(tanzaniaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}
			//Nigeria
				
				if(country == "Nigeria" && selectedtech != "Select")
				{
				$.getJSON("js/json/nigeriapartner.json", function(response){
					let loc='';
					const nigeriaLatLongs = [];
					$.each(response.Nigeria, function(det,item){
						if(item.Technology.includes(selectedtech))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						nigeriaLatLongs.push(latLngObj);
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
						}
						
					});
					createPushPins(nigeriaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}	
		//end filter based on country with technology


		//start filter based on country with industry
					var selectedindustry = $("#industry").val();
			//india

				if(country == "India" && selectedindustry != "Select")
				{
				
					$.getJSON("js/json/indiapartner.json", function(response){
					let loc='';
					const indiaindusLatLongs = [];
					$.each(response.India, function(det,item){
						if(item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						indiaindusLatLongs.push(latLngObj);
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
						
						}

					});
					createPushPins(indiaindusLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}
				
			//kenya	

				if(country == "Kenya" && selectedindustry != "Select")
				{
					
					$.getJSON("js/json/kenyapartner.json", function(response){
					let loc='';
					const kenyaindusLatLongs = [];
					$.each(response.Kenya, function(det,item){
						if(item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						kenyaindusLatLongs.push(latLngObj);
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
						}
					});
					createPushPins(kenyaindusLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}

			//Rwanda

				if(country == "Rwanda" && selectedindustry != "Select")
				{
					$.getJSON("js/json/rwandapartner.json", function(response){
					let loc='';
					const rwandaindusLatLongs = [];
					$.each(response.Rwanda, function(det,item){
						if(item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						rwandaindusLatLongs.push(latLngObj);
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
						
						}
					});
					createPushPins(rwandaindusLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}

			//Ethiopia

				if(country == "Ethiopia" && selectedindustry != "Select")
				{
					$.getJSON("js/json/ethiopiapartner.json", function(response){
					let loc='';
					const ethiopiaindusLatLongs = [];
					$.each(response.Ethiopia, function(det,item){
						if(item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						ethiopiaindusLatLongs.push(latLngObj);
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
						}
					});
					createPushPins(ethiopiaindusLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}

			//Tanzania
				
				if(country == "Tanzania" && selectedindustry != "Select")
				{
				$.getJSON("js/json/tanzaniapartner.json", function(response){
					let loc='';
					const tanzaniaLatLongs = [];
					$.each(response.Tanzania, function(det,item){
						if(item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						tanzaniaLatLongs.push(latLngObj);
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
						}
						
					});
					createPushPins(tanzaniaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}
			//Nigeria
				
				if(country == "Nigeria" && selectedindustry != "Select")
				{
				$.getJSON("js/json/nigeriapartner.json", function(response){
					let loc='';
					const nigeriaLatLongs = [];
					$.each(response.Nigeria, function(det,item){
						if(item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						nigeriaLatLongs.push(latLngObj);
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
						}
						
					});
					createPushPins(nigeriaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}	
		//End filter based on country with technology


		//start filter based on country with technology and indutry

			//india

				if(country == "India" && selectedtech != "Select" && selectedindustry != "Select")
				{
					$.getJSON("js/json/indiapartner.json", function(response){
					let loc='';
					const indiatechindusLatLongs = [];
					$.each(response.India, function(det,item){
						if(item.Technology.includes(selectedtech) && item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						indiatechindusLatLongs.push(latLngObj);
						
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
						
						}
					});
					createPushPins(indiatechindusLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}
				
			//Kenya	

				if(country == "Kenya" && selectedtech != "Select" && selectedindustry != "Select")
				{
					
					$.getJSON("js/json/kenyapartner.json", function(response){
					let loc='';
					const kenyatechindusLatLongs = [];
					$.each(response.Kenya, function(det,item){
						if(item.Technology.includes(selectedtech) && item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						kenyatechindusLatLongs.push(latLngObj);
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
						}
					});
					createPushPins(kenyatechindusLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}

			//Rwanda

				if(country == "Rwanda" && selectedtech != "Select" && selectedindustry != "Select")
				{
					$.getJSON("js/json/rwandapartner.json", function(response){
					let loc='';
					const rwandatechindusLatLongs = [];
					$.each(response.Rwanda, function(det,item){
						if(item.Technology.includes(selectedtech) && item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						rwandatechindusLatLongs.push(latLngObj);
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
						
						}
					});
					createPushPins(rwandatechindusLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}

			//Ethiopia

				if(country == "Ethiopia" && selectedtech != "Select" && selectedindustry != "Select")
				{
					$.getJSON("js/json/ethiopiapartner.json", function(response){
					let loc='';
					const ethiopiatechindusLatLongs = [];
					$.each(response.Ethiopia, function(det,item){
						if(item.Technology.includes(selectedtech) && item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						ethiopiatechindusLatLongs.push(latLngObj);
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
						}
					});
					createPushPins(ethiopiatechindusLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}

			//Tanzania
				
				if(country == "Tanzania" && selectedtech != "Select" && selectedindustry != "Select")
				{
				$.getJSON("js/json/tanzaniapartner.json", function(response){
					let loc='';
					const tanzaniaLatLongs = [];
					$.each(response.Tanzania, function(det,item){
						if(item.Technology.includes(selectedtech) && item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						tanzaniaLatLongs.push(latLngObj);
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
						}
						
					});
					createPushPins(tanzaniaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}
			//Nigeria
				
				if(country == "Nigeria" && selectedtech != "Select" && selectedindustry != "Select")
				{
				$.getJSON("js/json/nigeriapartner.json", function(response){
					let loc='';
					const nigeriaLatLongs = [];
					$.each(response.Nigeria, function(det,item){
						if(item.Technology.includes(selectedtech) && item.Industry.includes(selectedindustry))
						{
						let latLngObj = {lat:item.latitude,long:item.longitude, title:item.title}
						nigeriaLatLongs.push(latLngObj);
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
						}
						
					});
					createPushPins(nigeriaLatLongs);
					$('#result').html(loc).show();
					$('#myMap').show();
					});	
				}	

		//End filter based on country with technology and indutry
		


	function createPushPins(latLongData){
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
});
});