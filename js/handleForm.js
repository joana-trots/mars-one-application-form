const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)

function serializeForm(formNode) {
  const data = new FormData(formNode)
  console.log(Array.from(data.entries()))
  return data
}
function handleFormSubmit(event) {
  event.preventDefault()
  serializeForm(applicantForm)
  onSuccess(event.target)
}
function onSuccess(formNode) {
  alert('Ваша заявка отправлена!')
  formNode.classList.toggle('hidden')
}

/**
 * CUSTOM FILE INPUTS FOR IMAGES
 *
 * Version: 1.0.0
 *
 * Custom file inputs with image preview and 
 * image file name on selection.
 */
$('input[type="file"]').each(function(){
  // Refs
  var $file = $(this),
  $label = $file.next('label'),
  $labelText = $('.label-text'),
  labelDefault = $labelText.text();


  // When a new file is selected
  $file.on('change', function(event) {

    if(event.target.files.length !== 0) {
      var fileName = $file.val().split( '\\' ).pop(),
      tmppath = URL.createObjectURL(event.target.files[0]);
    }

    //Check successfully selection
		if(fileName) {
      $label
        .addClass('file-ok')
        .css('background-image', 'url(' + tmppath + ')');
			$labelText.text(fileName);
    } else {
      $label.removeClass('file-ok');
      $label.css('background-image', 'none');
			$labelText.text(labelDefault);

    }
  });
  
// End loop of file input elements  
});