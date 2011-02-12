var win = Titanium.UI.currentWindow;
win.layout = 'vertical';

// var doneBtn = Titanium.UI.createButton({
// 	title:'Done'
// });

var leftBtn = Titanium.UI.createButton({
	title:'Done'
});

leftBtn.addEventListener('click', function(){
	//Ti.API.info(win.uploadTable.section(2));
	//win.uploadTable.updateRow(3,{title:noteTxt.value, hasCheck: true, btnName:'note'});
	win.row.title = noteTxt.value;
	win.row.color = 'teal'
	win.close();
});

win.setLeftNavButton(leftBtn);

var noteTxt     = Ti.UI.createTextField({
	left:10, top:10, //right: 5,
	width:300, height:50,
	hintText:'Pet Log Note',
	textAlign:'left',
//	clearOnEdit:true,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED	
});

Ti.API.info(win.state.note);

if(win.row.title != 'Note')
  noteTxt.value = win.row.title;

win.add(noteTxt);




