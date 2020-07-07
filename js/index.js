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
      var td = $(this).closest('tr').find('td');
      var name = td.eq(0).html()
      
      $.ajax({
        url: "http://127.0.0.1:5000/delete_waterfall/",
        type: "DELETE",
        contentType: "application/json",
        data: JSON.stringify({"name" : name}),
      })

      $(this).parent().parent().remove()  
    })
  )

  $("#add-waterfall-form").submit(function(e) {
    e.preventDefault()

    var name = $("#w-name").val()
    var height = $("#height").val()
    var latitude = $("#lat").val()
    var longitude = $("#long").val()

    $.ajax({
      url: "http://127.0.0.1:5000/add_waterfall/",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        "name" : name,
        "height" : height,
        "latitude" : latitude,
        "longitude" : longitude
      }),
      success: function() {
        alert("Successfully added waterfall -- " + name)
        location.reload()
      }
    })
  })

})




