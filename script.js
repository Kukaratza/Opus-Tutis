$(document).ready(function() {
    M.updateTextFields();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    // var instances = M.Dropdown.init(elems, options);
    var instance = M.Dropdown.getInstance(elem)
  });
  instance.open();
