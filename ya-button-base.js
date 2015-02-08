Polymer({
  /**
   * An instance of the element is created.
   * @return {void}
   */
  created: function() {
    this._state = {};
  },

  /**
   * Called when the element’s initial set of children are guaranteed to exist
   * @private
   */
  domReady: function() {

  },

  get content() {
    return this.$.content.innerText;
  },

  set content(text) {
    this.fire('ya-button.changed');
    return this.$.content.innerText = text;
  }
});