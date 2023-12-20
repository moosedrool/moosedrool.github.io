<script type="text/javascript">
  
  
  function qsToObj(queryString) {
    try {
        // eslint-disable-next-line compat/compat
        const parsedQs = new URLSearchParams(queryString);
        const params = Object.fromEntries(parsedQs);
        console.log("Params: ",params);
        return params;
    } 
    catch (e) {
    return {};
    }
  }
            /**
             * Configuration Variables - CHANGE THESE!
             */
            const MIXPANEL_PROJECT_TOKEN = "aed2ccf5ed48e437de5177992acee3ef"; // e.g. "67e8bfdec29d84ab2d36ae18c57b8535"
            const MIXPANEL_PROXY_DOMAIN = "https://mixpanel-tracking-proxy-755brc6fta-uw.a.run.app"; // e.g. "https://proxy-eoca2pin3q-uc.a.run.app"
            
            /**
             * Set the MIXPANEL_CUSTOM_LIB_URL - No need to change this
             */
            const MIXPANEL_CUSTOM_LIB_URL = MIXPANEL_PROXY_DOMAIN + "/lib.min.js";
            
            /**
             * Load the Mixpanel JS library asyncronously via the js snippet
             */
            (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
            
            /**
             * Initialize a Mixpanel instance using your project token and proxy domain
             */
mixpanel.init(MIXPANEL_PROJECT_TOKEN, {
    debug: true,
    track_pageview: false,    //you may wish to turn this off so you don't duplicate page view events...
    api_host: MIXPANEL_PROXY_DOMAIN,
    loaded: function(mixpanel) {
        const urlParams = qsToObj(window.location.search);
        mixpanel.register(urlParams, {
            persistent: false
        });

      
        var pageTitle = document.title;
		console.log("The T I T L E of the page is: " + pageTitle);
      	var currentDomain = window.location.hostname;
		console.log("Current domain: " + currentDomain);
      	var currentPath = window.location.pathname;
		console.log("Current path: " + currentPath);
      	var currentProtocol = window.location.protocol;
		console.log("Current protocol: " + currentProtocol);
		var queryString = window.location.search;
		console.log("Query string: " + queryString);


      
        mixpanel.track('$mp_web_page_view', {
          	"event":		"$mp_web_page_view",
        	"current_page_title": 	pageTitle,
      		"current_domain":	currentDomain,
          	"current_url_path":	currentPath,
          	"current_url_protocol":	currentProtocol,
          	"current_url_search":	queryString              
        }); //should have all your URL params on there 
    }
});

</script>

  
<script type="text/javascript">  

if (document.readyState === "loading") {
    // The document is still loading, so listen for the DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', (event) => {
        initializeEventListeners();
    });
} else {
    // The DOMContentLoaded event has already fired, so run the function immediately
    initializeEventListeners();
}

function initializeEventListeners() {
    console.log("DOM Loaded");

    // Event listener for contact class
    document.querySelectorAll('.contact:not(div)').forEach(item => {
        item.addEventListener('click', event => {
            console.log("SUCESS");
        const clickedElement = event.target; // This is the element that was clicked
        // Using closest to ensure we get the <a> tag even if the click was on a descendant
        const actualLinkElement = clickedElement.closest('a');    
          //console.log("actualLinkElement: ", actualLinkElement);
          if (actualLinkElement) {
             // Get the href attribute of the closest <a> element
            const actualHref = actualLinkElement.getAttribute('href');
            //console.log(actualHref);
            mixpanel.track("Contact", {
                "Channel": actualHref,
                "URL Path": location.pathname
            });
            event.stopPropagation();
          }		
        });
    });


    // New event listener for submit button
    const submitButton = document.getElementById('233031288507150'); // Replace with your button's ID
    if (submitButton) {
        submitButton.addEventListener('submit', handleSubmitButtonClick);
    }	
}

function handleSubmitButtonClick(event) {
    console.log("Submit button clicked");
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
    
    var pageTitle = document.title;
    console.log("The title of the page is: " + pageTitle);
    var currentDomain = window.location.hostname;
    console.log("Current domain: " + currentDomain);
    var currentPath = window.location.pathname;
    console.log("Current path: " + currentPath);
    var currentProtocol = window.location.protocol;
    console.log("Current protocol: " + currentProtocol);
    var queryString = window.location.search;
    console.log("Query string: " + queryString);

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
                      "Urgent": urgent,
                      "Phone Number": phone_number,
                      "$email" : emailValue,
                      "current_page_title":   pageTitle,
                      "current_domain":   currentDomain,
                      "current_url_path":   currentPath,
                      "current_url_protocol": currentProtocol,
                      "current_url_search": queryString       
                      });
                      
    if (newsletterSubscription) {
    console.log("Checkbox is checked. Doing some stuff...");
    
         mixpanel.track('Newsletter Sign Up', {
            'Service Line': serviceLine, 
            'newsletter': newsletterSubscription,
            'Phone Number': phone_number,
            '$email' : emailValue,
           "current_page_title":  pageTitle,
           "current_domain":    currentDomain,
           "current_url_path":    currentPath,
           "current_url_protocol":  currentProtocol,
           "current_url_search":  queryString  });
    }
	
}
</script>
