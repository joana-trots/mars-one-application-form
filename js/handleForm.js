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
  const applicantForm = document.getElementById('mars-once')
  applicantForm.addEventListener('submit', handleFormSubmit)