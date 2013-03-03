;(function () {
  var WS = window.MozWebSocket || window.WebSocket;
  var ws;
  var timeout;
  var refreshing;
  var refreshAfter;
  function connect () {
    if (refreshing) return;
    clearTimeout(timeout);
    try {
      ws = new WS("ws://localhost:3003/refresh");
      ws.onopen = function () {
        console.log('watch-js live reload connected');
        if (refreshAfter) {
          refreshing = true;
          window.location.reload();
          return;
        }
      }
      ws.onmessage = function (msg) {
        console.log('watch-js : '+msg.data);
        if ("refresh" == msg.data) {
          refreshing = true;
          window.location.reload();
        }
      }
      ws.onclose =
      ws.onerror = function (e) {
        refreshAfter = true;
        if (refreshing) return;
        console.error('watch-js error:', e);
        clearTimeout(timeout);
        timeout = setTimeout(connect, 3000);
      }
    }
    catch (e) {
      refreshAfter = true;
      if (refreshing) return;
      console.error('watch-js error:', e);
      clearTimeout(timeout);
      timeout = setTimeout(connect, 3000);
    }
  };
  connect();
}());
