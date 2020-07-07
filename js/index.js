$("document").ready(function() {
  $.ajax({
    url: "http://127.0.0.1:5000/fetch_all/",
    type: "GET",
    contentType: "application/json",
    success: function(response) {
      var editButton = '<button type="button" class="btn btn-sm edit" data-toggle="modal" data-target="#editModal">Edit</button> '
      var deleteButton = '<button type="button" class="btn btn-sm delete"><i class="fas fa-trash"></i></button>'

      for(i = 0; i < response.length; i++) {
        $("#waterfall-table-body").append($("<tr></tr>").append(
          $('<td scope="row"></td>').html(response[i].name),
          $('<td></td>').html(response[i].height),
          $('<td></td>').html(response[i].latitude),
          $('<td></td>').html(response[i].longitude),
          $('<td></td>').append(editButton, deleteButton)
        ))
      }
    }
  })

  $("#waterfall-table-body").on("click", ".edit", (function() {
      var td = $(this).closest('tr').find('td');
      var rows = []
  
      for(i = 0; i < td.length - 1; i++) {
        rows.push(td.eq(i).html())
      }
  
      $("#edit-form *").filter(':input').each(function(index) {
        $(this).attr('placeholder', rows[index])
      })
    })
  )

  $("#waterfall-table-body").on("click", ".delete", (function() {
      $(this).parent().parent().remove()
    })
  )

})




