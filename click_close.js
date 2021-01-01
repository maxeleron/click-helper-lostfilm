'use strict'

//Selector of the 1080 link, I`ve got it from 'Inspect Element'
document.querySelector("div.inner-box--list > div:nth-child(2) > div.inner-box--link.main > a").click();

//trick move to close insearch.site window
setTimeout( ()=>{window.close()}, 200);



