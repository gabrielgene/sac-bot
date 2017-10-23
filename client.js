$(document).ready(function() {
  $.get('/chat.yaml').done(function(data) {
    var rules = jsyaml.load(data);

    new YveBot(rules, {
      target: '.Chat',
      name: 'SacBot',
    })
      .on('render', function() {
        document.querySelector('.yvebot-form-input').focus();
      })
      .start();
  });
});
