'use strict'

const link1080 = document.querySelector("div.inner-box--list > div:nth-child(2) > div.inner-box--link.main > a");
const link720 = null;
const linkSD = null;

link1080.click();

// Trick move to close insearch.site window
setTimeout( ()=>{window.close()}, 200);
