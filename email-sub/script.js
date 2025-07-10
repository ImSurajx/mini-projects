const scriptURL = 'https://script.google.com/macros/s/AKfycbyuX7Vt8ss4TFh_3EcM7VqhUgr-W1k2z3SKNnSb4lxmSaffPwjN2k1G0D4etLAflYpA/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "ThankYou for Subscribing!"
        setTimeout(function(){
            msg.innerHTML = " "
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })