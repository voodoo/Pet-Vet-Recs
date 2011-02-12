account_win.layout = 'vertical';

		
var login_label = Ti.UI.createLabel({
	left: 10,
	top: 10,
	width: 300,
	height: 'auto',
	text:'Login',
  //textAlign:'center',
  font:{fontWeight:'bold'}
});

account_win.add(login_label);

var login_tf = Ti.UI.createTextField({
	left: 10,
	top: 10,	
	width: 300,
	height:  40,	
  hintText: 'Email',
  value: $app.login(),
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	
});

account_win.add(login_tf);

var password_label = Ti.UI.createLabel({
	left: 10,
	top: 10,	
	width: 300,
	height: 'auto',	
	text:'Password', 
	//textAlign:'center',
	font:{fontWeight:'bold'}
});

account_win.add(password_label);

var password_tf = Ti.UI.createTextField({
	left: 10,
	top: 10,
	width: 300,
	height: 40,	
  passwordMask:true,
  value: $app.password(),
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	
});

account_win.add(password_tf);

var account_button = Titanium.UI.createButton({
  title: 'Authenticate',
  left:10,
  top: 10,
  width: 300,
  height: 60,
  font:{fontSize:30},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL//,
	//backgroundColor:'teal'
	//backgroundImage:'img/BUTT_grn_off.png'
});

account_win.add(account_button);

if($app.authed()){
	account_button.image = 'img/check.png';
	account_button.title = '  Authenticated';
} else {
	
	var signup_button = Titanium.UI.createButton({
	  title: 'Sign Up',
	  left:10,
	  top: 10,
	  width: 300,
	  height: 60,
	  font:{fontSize:30},
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL//,
		//backgroundColor:'teal'
		//backgroundImage:'img/BUTT_grn_off.png'
	});
	
	signup_button.addEventListener('click', function(){
		web.url = $app.uri() + '/signup';
		tabGroup.setActiveTab(0);
		
	});
	account_win.add(signup_button);
	
	
}
