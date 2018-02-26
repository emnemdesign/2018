var $dataAll = $('[data-category]');
var $dataBranding = $('[data-category*=branding]');
var $dataIllustration = $('[data-category*=illustration]');
var $dataMotion = $('[data-category*=motion]');
var $dataPrint = $('[data-category*=print]');
var $dataUxUi = $('[data-category*=ux-ui]');
var $dataWeb = $('[data-category*=web]');
var $all = $('.designer');

$('#select-specialty').on('change', function () {
  $all.css('opacity', .5);

  switch ($(this).val()) {
    case 'option-all':
      $dataAll.css('opacity', 1);
      break;
    case 'option-branding':
      $dataBranding.css('opacity', 1);
      break;
    case 'option-illustration':
      $dataIllustration.css('opacity', 1);
      break;
    case 'option-motion':
      $dataMotion.css('opacity', 1);
      break;
    case 'option-print':
      $dataPrint.css('opacity', 1);
      break;
    case 'option-ux-ui':
      $dataUxUi.css('opacity', 1);
      break;
    case 'option-web':
      $dataWeb.css('opacity', 1);
      break;
  }
});
