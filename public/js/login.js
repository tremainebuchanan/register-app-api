$(document).ready(function(){

  var login_btn = $('#btn-login');

  login_btn.click(function(e){
    e.preventDefault();
    var email = $('#email').val(),
        password = $('#password').val(),
        data = {
          email: email,
          password: password
        };

    $.ajax({
      method: 'POST',
      url: '/login',
      data: data
    }).done(function(response){
      if(response.success){
        clearFields(['email', 'password']);
        if(store(response.user)){
          window.location = '/app/#/registers';
        }
      }
    });
  });

  function clearFields(fields){
    var len = fields.length, i = 0;
    for(; i < len; i++){
      $('#'+ fields[i]).val('');
    }
  }

  function store(user){
    if(localStorage){
      sessionStorage.setItem('user', JSON.stringify(user));
    }else{
      return false;
    }
    return true;
  }
});
