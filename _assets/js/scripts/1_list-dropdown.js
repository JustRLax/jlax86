if($('.list-dropdown').length) {
  $('.list-dropdown .title').on('click', function() {
      $(this).closest('.list-dropdown').toggleClass('open');
  });
  $('.list-dropdown a').on('click', function(e) {
      var text = $(this).text();
      $('.list-dropdown li').removeClass('active');
      $(this).closest('li').addClass('active');
      $(this).closest('.list-dropdown').removeClass('open');
      $(this).closest('.list-dropdown').find('.title').text(text);
  });
}
