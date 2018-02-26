var $all = $('[data-category] image');
var $branding = $('[data-category*=branding] image');
var $illustration = $('[data-category*=illustration] image');
var $motion = $('[data-category*=motion] image');
var $print = $('[data-category*=print] image');
var $uxUi = $('[data-category*=ux-ui] image');
var $web = $('[data-category*=web] image');

$('#select-specialty').on('change', function () {
  $all.attr("filter", "url(#pixelate)");

  switch ($(this).val()) {
    case 'option-all':
      $all.removeAttr("filter");
      break;
    case 'option-branding':
      $branding.removeAttr("filter");
      break;
    case 'option-illustration':
      $illustration.children("image").removeAttr("filter");
      break;
    case 'option-motion':
      $motion.children("image").removeAttr("filter");
      break;
    case 'option-print':
      $print.children("image").removeAttr("filter");
      break;
    case 'option-ux-ui':
      $uxUi.children("image").removeAttr("filter");
      break;
    case 'option-web':
      $web.children("image").removeAttr("filter");
      break;
  }
});
