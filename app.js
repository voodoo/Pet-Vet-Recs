$prod      = false;
$local     = false; // which ip, or localhost

Ti.include('lib/app.js','lib/proto.js', 'lib/request.js', 'lib/util.js', 'app/views/shared/notice.js');

Titanium.UI.setBackgroundColor('#fff');

var tabGroup = Titanium.UI.createTabGroup();

$app.load();

if($app.authed()){
	tabGroup.setActiveTab(0); 	
} else {
	tabGroup.setActiveTab(2); 
	
}

tabGroup.open({
	transition:3
});



