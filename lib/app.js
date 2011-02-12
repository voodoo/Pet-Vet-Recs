$uri_prod  = 'petvetrecs.com'; 
$uri_dev   = $local ? 'localhost:3000' : '192.168.1.81:3000'; 


$controllers = 'manage upload account'.split(' '); // = tabs

$app = {};

$app.load = function(){	
	$controllers.each(function(controller){
		Ti.include('app/controllers/' + controller + '.js');	
	});		
};

$app.uri = function(){
 return 'http://' + ($prod ? $uri_prod :  $uri_dev);	
};

$app.api = function(){
	return this.uri() + '/api'
};

$app.is_local = function(){
	return ($current_url.indexOf($prod ? $uri_prod :  $uri_dev) != -1);
};

$app.authed = function(){
	return Titanium.App.Properties.getBool("authorized") === true
}

$app.login = function(){
 return	Titanium.App.Properties.getString("login")
};

$app.password = function(){
 return	Titanium.App.Properties.getString("password")
};

$app.init_remote_login = function(){
	if(!this.authed()) return this.uri();
	else return this.remote_login_path()
};

$app.remote_login_path = function(){
	//if(this.authed()){
	//	return this.uri();
	//} else {
	return this.uri() + '/api/users/remote_login?login=' + this.login() + '&password=' + this.password();
	//}
};