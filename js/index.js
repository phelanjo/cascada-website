$("document").ready(function() {
  $.ajax({
    url: "http://3.87.254.131:5000/fetch_all/",
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
  
      $("#edit-waterfall-form *").filter(':input').each(function(index) {
        $(this).attr('value', rows[index])
      })

      var oldName = $("#edit-name").val()

      $("#edit-waterfall-form").validate({
        rules: {
          "edit-name" : "required",
          "edit-height" : "required",
          "edit-lat" : "required",
          "edit-long" : "required"
        },
        submitHandler: function() {      
          var id
      
          $.ajax({
            url: "http://3.87.254.131:5000/fetch_waterfall_by_name/",
            type: "GET",
            contentType: "application/json",
            data: {"name" : oldName},
            success: function(response) {
              id = response
  
              var name = $("#edit-name").val()
              var height = $("#edit-height").val()
              var latitude = $("#edit-lat").val()
              var longitude = $("#edit-long").val()
        
              $.ajax({
                url: "http://3.87.254.131:5000/edit_waterfall/",
                type: "UPDATE",
                contentType: "application/json",
                data: JSON.stringify({
                  "waterfall_id" : id,
                  "name" : name,
                  "height" : height,
                  "latitude" : latitude,
                  "longitude" : longitude
                }),
                success: function() {
                  alert("Successfully edited waterfall")
                  location.reload()
                }
              })
            }
          })
        }
      })
    })
  )

  $("#waterfall-table-body").on("click", ".delete", (function() {
      var td = $(this).closest('tr').find('td');
      var name = td.eq(0).html()

      $.ajax({
        url: "http://3.87.254.131:5000/delete_waterfall/",
        type: "DELETE",
        contentType: "application/json",
        data: JSON.stringify({"name" : name}),
      })

      $(this).parent().parent().remove()  
    })
  )

  $("#add-waterfall-form").validate({
    rules: {
      "add-name" : "required",
      "add-height" : "required",
      "add-lat" : "required",
      "add-long" : "required"
    },
    submitHandler: function() {
      var name = $("#add-name").val()
      var height = $("#add-height").val()
      var latitude = $("#add-lat").val()
      var longitude = $("#add-long").val()
  
      $.ajax({
        url: "http://3.87.254.131:5000/add_waterfall/",
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
    }
  })
})




