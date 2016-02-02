  var copyEmailBtn = document.querySelector('.js-copybtn');
  copyEmailBtn.addEventListener('click', function(event){
    var copytext = $('.js-emaillink').html();
    console.log(copytext);
    var range = document.createRange();
    range.selectNode(copytext);
    window.getSelection().addRange(copytext);
    try {
      // Now that we've selected the anchor text, execute the copy command
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copy email command was ' + msg);
    } catch(err) {
      console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
  });
