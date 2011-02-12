var win = Titanium.UI.currentWindow;

var rtSelectView = Titanium.UI.createTableView({
	data:win.types,
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});

rtSelectView.addEventListener('click',function(e){
  win.uploadTable.updateRow(2,{title:e.rowData.title, hasCheck: true, btnName:'recordType'});
	win.close();
})

win.add(rtSelectView);