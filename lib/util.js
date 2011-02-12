function bug(){
  var s = '';
  for(var i = 0 ; i < arguments.length ; i++){
	  s += arguments[i] + "\n";
  }
  Ti.API.info(s);
}



