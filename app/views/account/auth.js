account_button.addEventListener('click', function(){	
	var l = login_tf.value;
	var p = password_tf.value;
	actInd.show();
	function notAuthorized(){
		account_button.image = null;
		Titanium.App.Properties.setBool("authorized",false);
		account_button.title = '  Authenticate';
		
	}

	function authorized(){	
		Titanium.App.Properties.setBool("authorized",true);
		account_button.image = 'img/check.png';
		account_button.title = '  Authenticated';
		
	}

	function release(){
		login_tf.blur();
		password_tf.blur();
	}

	$xhr.setAuth(l, p);
  
  release();
		
	$xhr.post('/users/auth', {}, function(){
	  if(this.response === true){
		  authorized();
		} else {
		 notAuthorized();	
		}	
		actInd.hide();
	});
		
});



