//model todo list
$('.show-todolist-modal').click(function(event){
    event.preventDefault();

    $('#todolist-modal').modal('show');
});

// model todo list tasks
$('.show-task-modal').click(function(event){
    event.preventDefault();

    $('#task-modal').modal('show');
});

$(document).ready(function(){

    //checkbox stylings
    $('input[type=checkbox]').iCheck({
      checkboxClass: 'icheckbox_square-green', 
      radioClass: 'iradio_square',
      increaseArea: '20%' // optional
    });

    //check all checkbox
    $('#check_all').on('ifChecked', function(e) {
        $('.item-check').iCheck('check');
    });

    //uncheck all checkbox  
    $('#check_all').on('ifUnchecked', function(e) {
        $('.item-check').iCheck('uncheck');
    });
  });