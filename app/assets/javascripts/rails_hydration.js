var Hydration = {
  _data: {},
  _callbacks: [],
  _callbacksFired: false,
  _listening: false,

  onReady: function(callback) {
    if (this._callbacksFired) {
      callback(this._data);
    } else {
      this._callbacks.push(callback);
    }
  },

  _hydrate: function() {
    for (var i=0; i < this._callbacks.length; i++) {
      this._callbacks[i](this._data);
    }
    this._callbacksFired = true;
  },

  _collectData: function() {
    var elems = document.querySelectorAll('.hydration-helper-data');
    if (elems.length > 0) {
      for (var i=0; i < elems.length; i++) {
        var el = elems[i];
        var key = el.getAttribute('data-hydration-key');
        Hydration._data[key] = JSON.parse(el.innerHTML);
      }
    }
    Hydration._hydrate();
  },

  init: function() {
    var self = this;
    if (self._listening) return;
    self._listening = true;
    if (document.readyState != 'loading'){
      self._collectData();
    } else {
      document.addEventListener('DOMContentLoaded', self._collectData);
    }
  }
}

Hydration.init();
