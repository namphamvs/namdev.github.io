
  ((function() {
  var a = [],
      b = 50,
      c = false;
  setInterval(loop, 1);
  return {
      addListener: function(art) {
          a["push"](art);
      },
      cancleListenr: function(aL5) {
          a = a["filter"](function(v) {
              return v !== aL5;
          });
      }
  };

  function loop() {
      var Env = new window["Date"]();
      debugger;
      if (new window["Date"]() - Env > b) {
          if (!c) {
              a["forEach"](function(checked) {
                  checked["call"](null);
              });
          }
          c = true;
          window["stop"]();
          window["alert"]('\u004e\u1ebf\u0075\u0020\u006b\u0068\u00f4\u006e\u0067\u0020\u0063\u00f3\u0020\u0073\u1ef1\u0020\u0063\u0068\u006f\u0020\u0070\u0068\u00e9\u0070\u002c\u0020\u006e\u0067\u0068\u0069\u00ea\u006d\u0020\u0063\u1ea5\u006d\u0020\u006c\u1ea5\u0079\u0020\u006d\u00e3\u0020\u006e\u0067\u0075\u1ed3\u006e\u0020\u0062\u1eb1\u006e\u0067\u0020\u006d\u1ecd\u0069\u0020\u0063\u00e1\u0063\u0068\u002e\u0020\u0043\u1ea3\u006d\u0020\u01a1\u006e\u0020\u0073\u1ef1\u0020\u0068\u1ee3\u0070\u0020\u0074\u00e1\u0063\u0020\u0063\u1ee7\u0061\u0020\u0062\u1ea1\u006e\u0021');
          document.documentElement.innerHTML = '\u0056\u0069\u1ec7\u0063\u0020\u0111\u00e1\u006e\u0068\u0020\u0063\u1eaf\u0070\u0020\u0076\u00e0\u0020\u0073\u1eed\u0020\u0064\u1ee5\u006e\u0067\u0020\u006d\u00e3\u0020\u006d\u00e0\u0020\u006b\u0068\u00f4\u006e\u0067\u0020\u0111\u01b0\u1ee3\u0063\u0020\u0070\u0068\u00e9\u0070\u0020\u0111\u1ec1\u0075\u0020\u0062\u1ecb\u0020\u006e\u0067\u0068\u0069\u00ea\u006d\u0020\u0063\u1ea5\u006d\u002e';
      } else {
          c = false;
      }
  }
})())["addListener"](function() {
  window["location"]["reload"]();
});
window["document"]["oncontextmenu"] = function() {
  return false;
};
window["document"]["onselectstart"] = function() {
  return false;
}; 
document.οncοntextmenu=function(){return false;};document.onselectstart=function(){return false;};let h = window.innerHeight;let w = window.innerWidth;document.oncontextmenu = function () { return false; };window.onkeydown = window.onkeyup = window.onkeypress = function () {window.event.returnValue = false;return false;};document.onkeydown = function () {if (window.event && window.event.keyCode == 123) {event.keyCode = 0;event.returnValue = false;return false;}};window.onresize = function () {if (h != window.innerHeight || w != window.innerWidth) {window.close();window.location = "about:blank";}};
