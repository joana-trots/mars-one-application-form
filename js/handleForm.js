(function ($) {
  $(document).ready(function () {


    function serializeForm(formNode) {
  const data = new FormData(formNode);
  console.log(Array.from(data.entries()));
  return data;
}
function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(applicantForm);
  onSuccess(event.target);
}
function onSuccess(formNode) {
  alert('Ваша заявка отправлена!');
  formNode.classList.toggle('hidden');
}
const applicantForm = document.getElementById('mars-once');
applicantForm.addEventListener('submit', handleFormSubmit);


  //img

    uploadImage();
    function uploadImage() {
      var button = $(".images .pic");
      var uploader = $('<input type="file" accept="image/*" name="photo" required />');
      var images = $(".images");

      button.on("click", function () {
        uploader.click();
      });

      uploader.on("change", function () {
        var reader = new FileReader();
        reader.onload = function (event) {
          images.prepend(
            '<div class="img" style="background-image: url(\'' +
              event.target.result +
              '\');" rel="' +
              event.target.result +
              '"><span>remove</span></div>'
          );
        };
        reader.readAsDataURL(uploader[0].files[0]);
      });

      images.on("click", ".img", function () {
        $(this).remove();
      });
    }
  });
})(jQuery);




  