<script type="text/javascript">
console.log("Second javascript here");
  document.addEventListener('DOMContentLoaded', (event) => {  
	  console.log("Listener loaded");
    document.querySelectorAll('.contact').forEach(item => {
      item.addEventListener('click', event => {
        console.log("Linked Clicked");
        const clickedElement = event.target; // This is the element that was clicked
        // Using closest to ensure we get the <a> tag even if the click was on a descendant
        const actualLinkElement = clickedElement.closest('a');    
                console.log("actualLinkElement: ", actualLinkElement);
          if (actualLinkElement) {
             // Get the href attribute of the closest <a> element
            const actualHref = actualLinkElement.getAttribute('href');
            console.log(actualHref);
            console.log("Contact", {
                                                                "Channel": actualHref,
                                                                "URL Path": location.pathname
                                                });
            event.stopPropagation();
          }
    });
});
 });  
</script>
