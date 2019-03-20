console.log('hello pug 3242340000000@#$@#$@#4');
$(function () {
  $('#testMock').click(function () {
    $.ajax({
      url: '/rest/com',
      type: 'get',
      dataType: 'json',
      success: function (result) {
        console.log(result);
        $('#data-box').val(JSON.stringify(result));
      }
    });
  });



  $('#proxyMock').click(function () {
    $.ajax({
      url: '/api/v1/topics',
      type: 'get',
      beforeSend: function () {
        // $('.tips').show();
      },
      complete: function () {
        // $('.tips').hide();
      },
      success: function (result) {
        console.log(result);
        $('#data-box').val(JSON.stringify(result));
      }
    });
  })

});
