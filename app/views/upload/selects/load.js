$pets        = null;
$recordTypes = null;

var state = {note:null, good:'bad'};

function loadSelects(){
	$xhr.get('/pets', {}, function(){
	  $pets = this.response;
	});	
	$xhr.get('/plogs/record_types', {}, function(){
	  $recordTypes = this.response;
	});	
}
if($app.authed()){
  loadSelects();
}


function openPetSelector(){
	var petsSelect = Titanium.UI.createWindow({  
	    title:'Select Pet',
	    url: "app/views/upload/selects/pet.js",
	    backgroundColor:'#fff',
	    uploadTable: uploadTable,
	    pets: $pets
	});	
	
	upload_tab.open(petsSelect,{animated:true});
}


function openNote(row){

	var textSelect = Titanium.UI.createWindow({  
	    title:'Pet Log Note',
	    url: "app/views/upload/selects/note.js",
	    backgroundColor:'#fff',
	    uploadTable: uploadTable,
	    state: state,
			row: row
	});	
	
	upload_tab.open(textSelect,{animated:true});
}



function openRecordTypeSelector(){
	var recordTypeSelector = Titanium.UI.createWindow({  
	    title:'Select Record Type',
	    url: "app/views/upload/selects/recordType.js",
	    backgroundColor:'#fff',
	    uploadTable: uploadTable,
	    types: $recordTypes
	});	
	
	upload_tab.open(recordTypeSelector,{animated:true});
}