$('#sizePicker').submit(function makeGrid(event) {  // selection of DOM element "form" for "submit" event.
  $('table tr').remove();
  var rows = $('#input_height').val();  // Grid height is equal to number of rows.               
  var cells = $('#input_width').val();  // Grid width is equal to number of columns.              
  for (var i = 1; i <= rows; i++) {
    $('table').append("<tr></tr>");
    for (var j = 1; j <= cells; j++) {
      $('tr:last').append("<td></td>");  // tr: last makes sure that the cells are added only to the last created table row and not for all.       
      $('td').attr('class', 'pixel');
    }
  }
  event.preventDefault();
});

//Javascript code used to select and apply color to the cell of the canvas.
$('#pixel_canvas').on('click', '.pixel', function () {
  var pen = $('#colorPicker').val();
  $(this).css('background-color', pen);
});
// Toggle the grid after creating the pixel art..Take a screenshot.
$('#toggleBtn').click('.pixel_canvas', function () {
  $('td').toggleClass('grid_Toggle');
});