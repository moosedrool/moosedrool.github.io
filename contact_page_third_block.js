<script type="text/javascript">
document.addEventListener('DOMContentLoaded', (event) => {  


  

  document.getElementById('233031288507150').addEventListener('submit', function(event) {
      //event.preventDefault();  // Prevent the default form submission action

    var emailValue = document.getElementById('input_1').value;  // Capture email value
    var newsletterSubscription = document.getElementById('input_5_0').checked;  // Capture checkbox state
    var serviceLine = document.getElementById('input_6').value;
    var urgent = document.getElementById('input_7_0').checked; 
    var phone_number = document.getElementById('input_11').value;


    var dataObject = {
      $email: emailValue,  // Structure data into JSON object
      newsletter: newsletterSubscription,  // Add newsletter subscription status to JSON object
      serviceLine: serviceLine
    };

      //window.addEventListener('mpEZTrackLoaded', ()=>{
      // mixpanel.ez is always available in this scope
      mixpanel.identify(emailValue);
      mixpanel.people.set(dataObject);

      //mixpanel.ez.people.set({$email: emailValue});
      //mixpanel.ez.people.set({newsletter: newsletterSubscription});
      //mixpanel.ez.people.set({serviceLine: serviceLine});

      mixpanel.track('Contact', 
                     {"Channel": "Appointment request",
                      "Service Line": serviceLine, 
                      "URL": window.location.href, 
                      "Urgent": urgent,
                      "Phone Number": phone_number,
                      "$email" : emailValue});
                      
    if (newsletterSubscription) {
    console.log("Checkbox is checked. Doing some stuff...");
         mixpanel.track('Newsletter Sign Up', {
        		'Service Line': serviceLine, 
		        'newsletter': newsletterSubscription,
    		    'Phone Number': phone_number,
        		'$email' : emailValue});
		}


      //})


      // Convert JSON object to string and format it with indentation
      // Open a new window and write the JSON string to it
      //var jsonString = JSON.stringify(dataObject, null, 2);
      //var newWindow = window.open("", "_blank");
      //newWindow.document.write(`<pre>${jsonString}</pre>`);
      //newWindow.document.write(`<pre>${emailValue}</pre>`);
      //newWindow.document.write(`<pre>${serviceLine}</pre>`);

      setTimeout(() => {
        event.target.submit();
      }, 1000); // Adjust delay as needed


      //
      //return false;  // Prevent the default form submission action, if event.preventDefault() is not sufficient
    });
});





</script>
