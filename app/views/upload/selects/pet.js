
var win = Titanium.UI.currentWindow;

var petSelectView = Titanium.UI.createTableView({
	data:win.pets,
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

petSelectView.addEventListener('click',function(e){
	win.uploadTable.updateRow(1,{title:e.rowData.title, hasCheck: true, btnName:'pet'});
	//showNotice(e.rowData.title + ' was selected');
	win.close();
})

win.add(petSelectView);