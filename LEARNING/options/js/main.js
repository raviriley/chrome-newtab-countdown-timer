$(document).ready(function() {
  $('#theme-picker').on('change', function() {
    if (this.value === "custom") {
      $("#demo-app").show();
    } else {
      $("#demo-app").hide();
    }
  });
});