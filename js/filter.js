var $All = $('[data-category] image');
var $Branding = $('[data-category*=branding] image');
var $Illustration = $('[data-category*=illustration] image');
var $Motion = $('[data-category*=motion]');
var $Print = $('[data-category*=print]');
var $UxUi = $('[data-category*=ux-ui]');
var $Web = $('[data-category*=web]');

$('#select-specialty').on('change', function () {
  $All.attr("filter", "url(#pixelate)");
  console.log($All);
  switch ($(this).val()) {
    case 'option-all':
      $All.removeAttr("filter");
      break;
    case 'option-branding':
      $Branding.removeAttr("filter");
      break;
    case 'option-illustration':
      $Illustration.children("image").removeAttr("filter");
      break;
    case 'option-motion':
      $Motion.children("image").removeAttr("filter");
      break;
    case 'option-print':
      $Print.children("image").removeAttr("filter");
      break;
    case 'option-ux-ui':
      $UxUi.children("image").removeAttr("filter");
      break;
    case 'option-web':
      $Web.children("image").removeAttr("filter");
      break;
  }
});
