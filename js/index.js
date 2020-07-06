$(".delete").click(function() {
  $(this).parent().parent().remove()
})

$(".edit").click(function() {
  var td = $(this).closest('tr').find('td');
  var rows = []

  for(i = 0; i < td.length - 1; i++) {
    rows.push(td.eq(i).html())
  }

  $("#edit-form *").filter(':input').each(function(index) {
    $(this).attr('placeholder', rows[index])
  })
})