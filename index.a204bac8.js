var e=function(e,t,i,n,s){var a=document.querySelector("body"),o=document.createElement("div");o.classList.add("notification",s),o.style.top=e+"px",o.style.right=t+"px";var c=n.replace(/\n/g,"<br>");o.innerHTML='\n    <h2 class="title" >'.concat(i,"</h2>\n    <p>").concat(c,"</p>\n  "),a.insertAdjacentElement("afterbegin",o),setTimeout(function(){o.style.visibility="hidden"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.a204bac8.js.map
