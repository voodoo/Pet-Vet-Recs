var imageView = Titanium.UI.createImageView({
	height:100,
	width:100,
	top:10,
	left:10,
	//backgroundColor:'#ccc',
	borderWidth:1,
  borderColor:'#bbb',
  borderRadius:5
});

upload_win.add(imageView);

var image_note_txt = Titanium.UI.createTextArea({
	value:'Note',
	right: 10,
	top: 10,
	height: 100,
	width: 180,  
  font:{fontSize:16,fontFamily:'Marker Felt', fontWeight:'bold'},
  color:'#888',
//  textAlign:'left',
  appearance:Titanium.UI.KEYBOARD_APPEARANCE_ALERT,   
  keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
//  returnKeyType:Titanium.UI.RETURNKEY_EMERGENCY_CALL,
  borderWidth:1,
  borderColor:'#bbb',
  borderRadius:5
});

upload_win.add(image_note_txt);


$xhr.get('/pets', {}, function(){
	$pets = this.response;
	if($pets.length > 0){
		pets_select.title = $pets[0].title;				
	} else {
		pets_select.hide();
	}
	//bug($pets[0]);
	//pets_select.data = [$pets[0]];
	//pets_select.reload();
})

pets_select = Ti.UI.createButton({
	left:10, 
	top: 120,
	width: 300,
	height: 40,
	hasChild: true
	//style:Ti.UI.iPhone.TableViewStyle.GROUPED	
});

pets_select.addEventListener('click', function(e){
	var show_pet_select = Titanium.UI.createWindow({  
	    title:'Select Pet',
	    url: 'app/views/upload/select_pet.js',
	    pets: $pets,
	    select: pets_select
	});
	upload_tab.open(show_pet_select,{animated:true});
});
	
upload_win.add(pets_select);
// var pet_picker = Titanium.UI.createTable({
// 	 right:10, 
// 	 width: 180, 
// 	 height: 30,
// 	 top: 10
// });
// 
// pet_picker.add(Titanium.UI.createPickerRow({title:'Bananas'}))
// 
// upload_win.add(pet_picker);

var submit_image_btn = Titanium.UI.createButton({
	title: 'Select Image',
	top: 170,
	left: 10,
	height: 50,
	width: 300,
	//backgroundImage: 'img/btn.png',	
	font:{fontSize:20}
});


upload_win.add(submit_image_btn);

