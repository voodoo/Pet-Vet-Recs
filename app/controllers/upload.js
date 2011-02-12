
//
// create controls tab and root window
//
var upload_win = Titanium.UI.createWindow({  
    title:'Upload',
    backgroundImage:'img/bg.png'
});
//upload_win.layout = 'vertical';

var upload_tab = Titanium.UI.createTab({  
    icon:'img/upload.png',
    title:'Upload',
    window:upload_win
});

upload_win.addEventListener('focus', function(){
	if(!$app.authed()){
		alert('Please Authenticate');
		tabGroup.setActiveTab(account_tab);
	}
});

Ti.include('app/views/upload/ui.js', 'app/views/upload/cam.js', 'app/views/upload/selects/load.js');

tabGroup.addTab(upload_tab);  


