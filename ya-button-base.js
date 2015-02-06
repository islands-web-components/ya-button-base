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
    this.content = this.querySelector('.js-content');
  }
});