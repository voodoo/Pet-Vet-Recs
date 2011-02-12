function Request(opts){
  this.baseURI = opts.baseURI;
  if (opts.auth){this.auth = opts.auth};
}

Request.prototype = {

  get       : function(path,params,callback){
    this.buildRequest("GET",path,params,callback);
  },

  post      : function(path,params,callback){
    this.buildRequest("POST",path,params,callback);
  },

  put       : function(path,params,callback){
    this.buildRequest("PUT",path,params,callback);
  },

  destroy   : function(path,params,callback){
    this.buildRequest("DELETE",path,params,callback);
  },

	setAuth : function(login, pwd){
		Titanium.App.Properties.setString("login",login);
		Titanium.App.Properties.setString("password",pwd);
		
		this.auth = {
	    login    : login,
	    password : pwd
	  };
	},
	
  buildRequest  : function(method,path,params,callback){

    var url       = this.baseURI + path;

    if (method == 'GET'){url += ('?' + this.stringifyParams(params))};

    var xhr       = Titanium.Network.createHTTPClient();
    //var callback  = callback;

    // onload will not fire unless onreadystatechange 
    // is defined.
    xhr.onreadystatechange  = function() {};
    xhr.onload              = function(){
	    var s   = '(' + this.responseText + ')';
		  Ti.API.info(s);	
		  this.response = eval(s);
		
      callback.apply(this);
    };

    xhr.open(method,url);

    if (this.auth) {
      xhr.setRequestHeader('login', this.auth.login);
      xhr.setRequestHeader('password',this.auth.password);
    }

    //xhr.send(this.stringifyParams(params));
     xhr.send(params);

  },

  stringifyParams : function(obj){
    var str = "";
    for(var prop in obj){
      str += (prop+"="+obj[prop]);
    }
    return str;
  }
}

var $xhr = new Request({
  baseURI : $app.api(),
  auth    : {
    login    : $app.login(),
    password : $app.password()
  }
});



