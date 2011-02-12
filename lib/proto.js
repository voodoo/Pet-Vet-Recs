if (!Array.prototype.each)
{
  Array.prototype.each = function(fun)
  {
    var len = this.length;
    if (typeof fun != "function") {throw new TypeError();}
      

    for (var i = 0; i < len; i++)
    {
				fun(this[i]);        
    }
  };
}