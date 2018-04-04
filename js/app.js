$('.show-todolist-modal').click(function(event){
    event.preventDefault();

    $('#todolist-modal').modal('show');
});

$('.show-task-modal').click(function(event){
    event.preventDefault();

    $('#task-modal').modal('show');
});