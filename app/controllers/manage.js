// var home_btn = Titanium.UI.createButton({
// 	title:'Home'
// });
// 
// home_btn.addEventListener('click', function(){
// 	web.url = 'http://petvetrecs.com/';
// });

var manage_win = Titanium.UI.createWindow({  
    title:'Manage',
    backgroundColor:'#fff',
    //leftNavButton: home_btn,
    backgroundImage:'img/bg.png',
    navBarHidden: true
});

manage_win.addEventListener('focus', function(){
	if(!$app.is_local()){
		web.url = $app.uri();
	}
})

var manage_tab = Titanium.UI.createTab({  
    icon:'img/pet.png',
    title:'Manage',
    window:manage_win
});


var web = Titanium.UI.createWebView({
	  url:$app.remote_login_path()
});	

// web.url is not updating wtf
$current_url = $app.remote_login_path();
web.addEventListener('load', function(e){
	$current_url = e.url;
});

manage_win.add(web);

tabGroup.addTab(manage_tab);  
