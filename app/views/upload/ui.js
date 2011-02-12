
var uploadTable = Ti.UI.createTableView({
	borderRadius: 6,
	//style:Ti.UI.iPhone.TableViewStyle.GROUPED,
	left:10, top:10, width:300, height: 200,
	data:[
	{title:"Image", hasChild:true, btnName:'image', header:'Pet Log'}, 
	{title:"Pet", hasChild:true, btnName:'pet'}, 
	{title:"Record Type", hasChild:true, btnName:'recordType'},
	{title:"Note", hasChild:true, btnName:'note'}
	]
	
});
uploadTable.addEventListener('click', function(e){
	//bug(e.rowData.btnName);
	//switch(e.rowData.btnName){
	switch(e.index){
		case 0:
		  getCam();
		  break;
		case 1:
		  openPetSelector();
		  break;
		case 2:
			openRecordTypeSelector();
			break;		
		case 3:
			openNote(e.row);
		  break;
		default :
		  throw('Option not found in upload form');
	};
});

upload_win.add(uploadTable);

var submitBtn = Titanium.UI.createButton({
	title: 'Upload!',
	top: 220,
	left: 10,
	height: 100,
	width: 190,
	//backgroundImage: 'img/btn.png',	
	font:{fontSize:14, fontWeight:'bold'}
});

submitBtn.addEventListener('click', function(){
	if(!b_image_selected){
		getCam();
	} else {
	 $xhr.post("/plogs", {image:$image, note:image_note_txt.value}, function(){
		alert('success');
	 });		
	} 
});

submitBtn.hide();
upload_win.add(submitBtn);


var imageView = Titanium.UI.createImageView({
	height:100,
	width:100,
	top:220,
	right:10,
	// backgroundColor:'#ccc',
	// borderWidth:0,
	// borderColor:'#bbb',
  borderRadius:5
});

imageView.hide();
upload_win.add(imageView);


//upload_win.add(message_txt);

