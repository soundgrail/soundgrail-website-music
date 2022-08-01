!function(){"use strict";window.Element.prototype.removeClass=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this;return t instanceof HTMLElement||null===t||(t=document.querySelector(t)),this.isVariableDefined(t)&&e&&t.classList.remove(e),this},window.Element.prototype.addClass=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this;return t instanceof HTMLElement||null===t||(t=document.querySelector(t)),this.isVariableDefined(t)&&e&&t.classList.add(e),this},window.Element.prototype.toggleClass=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this;return t instanceof HTMLElement||null===t||(t=document.querySelector(t)),this.isVariableDefined(t)&&e&&t.classList.toggle(e),this},window.Element.prototype.isVariableDefined=function(){return!!this&&void 0!==this&&null!=this};var e={init:function(){e.preLoader(),e.megaMenu(),e.stickyHeader(),e.tinySlider(),e.parallaxBG(),e.stickyBar(),e.toolTipFunc(),e.popOverFunc(),e.backTotop(),e.stickyPost(),e.stickyFooter(),e.lightBox(),e.enableIsotope(),e.darkMode(),e.zooming(),e.lazyLoading()},isVariableDefined:function(e){return typeof!!e&&"undefined"!=e&&null!=e},getParents:function(t,a,i){const o=[],n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;for(t=t.parentElement;t&&!n.call(t,a);){if(i)n.call(t,i)&&o.push(t);else if(a){if(n.call(t,a))return o.push(t)}else o.push(t);if(t=t.parentElement,e.isVariableDefined(t)&&n.call(t,a))return t}return o},getNextSiblings:function(e,t,a){let i=[],o=e.parentNode.firstChild;const n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;do{if(3!==o.nodeType&&o!==e&&o===e.nextElementSibling&&(!a||a(e))){if(t){if(n.call(o,t))return o}else i.push(o);e=o}}while(o=o.nextSibling);return i},on:function(e,t,a){document.addEventListener("DOMContentLoaded",(()=>{e instanceof HTMLElement||null===e||(e=document.querySelector(e)),e.addEventListener(t,a)}))},onAll:function(e,t,a){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(e).forEach((e=>{if(t.indexOf(",")>-1){t.split(",").forEach((t=>{e.addEventListener(t,a)}))}else e.addEventListener(t,a)}))}))},removeClass:function(t,a){t instanceof HTMLElement||null===t||(t=document.querySelector(t)),e.isVariableDefined(t)&&t.removeClass(a)},removeAllClass:function(t,a){e.isVariableDefined(t)&&t instanceof HTMLElement&&document.querySelectorAll(t).forEach((e=>{e.removeClass(a)}))},toggleClass:function(t,a){t instanceof HTMLElement||null===t||(t=document.querySelector(t)),e.isVariableDefined(t)&&t.toggleClass(a)},toggleAllClass:function(t,a){e.isVariableDefined(t)&&t instanceof HTMLElement&&document.querySelectorAll(t).forEach((e=>{e.toggleClass(a)}))},addClass:function(t,a){t instanceof HTMLElement||null===t||(t=document.querySelector(t)),e.isVariableDefined(t)&&t.addClass(a)},select:function(e){return document.querySelector(e)},selectAll:function(e){return document.querySelectorAll(e)},preLoader:function(){window.onload=function(){var t=e.select(".preloader");e.isVariableDefined(t)&&(t.className+=" animate__animated animate__fadeOut",setTimeout((function(){t.style.display="none"}),200))}},megaMenu:function(){e.onAll(".dropdown-menu a.dropdown-item.dropdown-toggle","click",(function(t){var a=this;if(t.preventDefault(),t.stopImmediatePropagation(),e.isVariableDefined(a.nextElementSibling)&&!a.nextElementSibling.classList.contains("show")){const t=e.getParents(a,".dropdown-menu");e.removeClass(t.querySelector(".show"),"show"),e.isVariableDefined(t.querySelector(".dropdown-opened"))&&e.removeClass(t.querySelector(".dropdown-opened"),"dropdown-opened")}var i=e.getNextSiblings(a,".dropdown-menu");e.toggleClass(i,"show"),i.previousElementSibling.toggleClass("dropdown-opened");var o=e.getParents(a,"li.nav-item.dropdown.show");e.isVariableDefined(o)&&o.length>0&&e.on(o,"hidden.bs.dropdown",(function(t){e.removeAllClass(".dropdown-submenu .show")}))}))},stickyHeader:function(){var t=e.select(".navbar-sticky");if(e.isVariableDefined(t)){var a=t.offsetHeight;t.insertAdjacentHTML("afterend",'<div id="sticky-space"></div>');var i=e.select("#sticky-space");e.isVariableDefined(i)&&document.addEventListener("scroll",(function(o){(window.pageYOffset||document.documentElement.scrollTop)>=400?(i.addClass("active"),e.select("#sticky-space.active").style.height=a+"px",t.addClass("navbar-sticky-on")):(i.removeClass("active"),i.style.height="0px",t.removeClass("navbar-sticky-on"))}))}},tinySlider:function(){var t=e.select(".tiny-slider-inner");e.isVariableDefined(t)&&e.selectAll(".tiny-slider-inner").forEach((t=>{var a=t,i=a.getAttribute("data-mode")?a.getAttribute("data-mode"):"carousel",o=a.getAttribute("data-axis")?a.getAttribute("data-axis"):"horizontal",n=a.getAttribute("data-gutter")?a.getAttribute("data-gutter"):30,s=a.getAttribute("data-edge")?a.getAttribute("data-edge"):0,l=a.getAttribute("data-items")?a.getAttribute("data-items"):4,r=a.getAttribute("data-items-xl")?a.getAttribute("data-items-xl"):Number(l),d=a.getAttribute("data-items-lg")?a.getAttribute("data-items-lg"):Number(r),c=a.getAttribute("data-items-md")?a.getAttribute("data-items-md"):Number(d),u=a.getAttribute("data-items-sm")?a.getAttribute("data-items-sm"):Number(c),m=a.getAttribute("data-items-xs")?a.getAttribute("data-items-xs"):Number(u),f=a.getAttribute("data-speed")?a.getAttribute("data-speed"):500,g="true"===a.getAttribute("data-autowidth"),b="false"!==a.getAttribute("data-arrow"),p="false"!==a.getAttribute("data-dots"),h="false"!==a.getAttribute("data-autoplay"),v=a.getAttribute("data-autoplaytime")?a.getAttribute("data-autoplaytime"):4e3,y="true"===a.getAttribute("data-hoverpause");if(e.isVariableDefined(e.select(".custom-thumb")))var w=e.select(".custom-thumb");var A,E="false"!==a.getAttribute("data-loop"),S="true"===a.getAttribute("data-rewind"),k="true"===a.getAttribute("data-autoheight"),L="true"===a.getAttribute("data-fixedwidth"),D="false"!==a.getAttribute("data-touch"),C="false"!==a.getAttribute("data-drag");"rtl"===document.getElementsByTagName("html")[0].getAttribute("dir")&&(A="rtl");tns({container:t,mode:i,axis:o,gutter:n,edgePadding:s,speed:f,autoWidth:g,controls:b,nav:p,autoplay:h,autoplayTimeout:v,autoplayHoverPause:y,autoplayButton:!1,autoplayButtonOutput:!1,controlsPosition:top,navContainer:w,navPosition:top,autoplayPosition:top,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],loop:E,rewind:S,autoHeight:k,fixedWidth:L,touch:D,mouseDrag:C,arrowKeys:!0,items:l,textDirection:A,lazyload:!0,lazyloadSelector:".lazy",responsive:{0:{items:Number(m)},576:{items:Number(u)},768:{items:Number(c)},992:{items:Number(d)},1200:{items:Number(r)}}})}))},parallaxBG:function(){var t=e.select(".bg-parallax");e.isVariableDefined(t)&&jarallax(e.selectAll(".bg-parallax"),{speed:.6})},stickyBar:function(){var t=e.select("[data-sticky]");if(e.isVariableDefined(t))new Sticky("[data-sticky]")},toolTipFunc:function(){[].slice.call(e.selectAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)}))},popOverFunc:function(){[].slice.call(e.selectAll('[data-bs-toggle="popover"]')).map((function(e){return new bootstrap.Popover(e)}))},backTotop:function(){window.scrollY;var t=e.select(".back-top");if(e.isVariableDefined(t)){window.addEventListener("scroll",(function(){window.scrollY>=800?t.addClass("back-top-show"):t.removeClass("back-top-show")})),t.addEventListener("click",(()=>window.scrollTo({top:0,behavior:"smooth"})))}},stickyPost:function(){window.scrollY;var t=e.select(".sticky-post");if(e.isVariableDefined(t)){window.addEventListener("scroll",(function(){window.scrollY>=1400?t.addClass("sticky-post-stick"):t.removeClass("sticky-post-stick")}))}},stickyFooter:function(){var t=e.select(".footer-sticky");e.isVariableDefined(t)&&(window.addEventListener("load",(function(){window.dispatchEvent(new Event("resize"))})),window.addEventListener("resize",(function(e){var a=window.outerWidth,i=t.offsetHeight-1;a>=768&&(document.getElementsByTagName("main")[0].style.marginBottom=i+"px")})))},lightBox:function(){var t=e.select("[data-glightbox]");if(e.isVariableDefined(t))GLightbox({selector:"*[data-glightbox]",openEffect:"fade",closeEffect:"fade"})},enableIsotope:function(){var t=e.select(".grid-item");if(e.isVariableDefined(t)){var a=e.select("[data-isotope]");if(e.isVariableDefined(a))e.selectAll("[data-isotope]").forEach((e=>{var t=e.getAttribute("data-isotope"),a=JSON.parse(t),i=new Isotope(e,{itemSelector:".grid-item",layoutMode:a.layoutMode});imagesLoaded(e).on("progress",(function(){i.layout()}))}));var i=e.select(".grid-menu");if(e.isVariableDefined(i))e.selectAll(".grid-menu").forEach((t=>{var a=t.getAttribute("data-target"),i=t.dataset.target,o=e.select(i).getAttribute("data-isotope"),n=JSON.parse(o),s=new Isotope(a,{itemSelector:".grid-item",transitionDuration:"0.7s",layoutMode:n.layoutMode}),l=t.querySelectorAll("li a");l.forEach((e=>{e.addEventListener("click",(function(t){var a=e.getAttribute("data-filter");s.arrange({filter:a}),l.forEach((e=>e.removeClass("active"))),e.addClass("active")}))})),imagesLoaded(a).on("progress",(function(){s.layout()}))}))}},darkMode:function(){var t=e.select("#darkModeSwitch");if(e.isVariableDefined(t)){let e=localStorage.getItem("data-theme");var a=document.getElementById("style-switch"),i=document.getElementsByTagName("html")[0].getAttribute("dir"),o=()=>{document.documentElement.setAttribute("data-theme","dark"),"rtl"==i?a.setAttribute("href","assets/css/style-dark-rtl.css"):a.setAttribute("href","assets/css/style-dark.css"),localStorage.setItem("data-theme","dark")},n=()=>{document.documentElement.setAttribute("data-theme","light"),"rtl"==i?a.setAttribute("href","assets/css/style-rtl.css"):a.setAttribute("href","assets/css/style.css"),localStorage.setItem("data-theme","light")};"dark"===e?o():null!=e&&"light"!==e||n();document.querySelector("#darkModeSwitch").addEventListener("click",(()=>{"dark"===localStorage.getItem("data-theme")?n():o()}))}},zooming:function(){const e=document.documentElement;document.querySelectorAll('input[type=radio][name="fntradio"]').forEach((t=>{t.addEventListener("change",(function(){var a=t.getAttribute("id");"font-sm"==a?(e.classList.remove("font-lg"),e.classList.add("font-sm")):"font-default"==a?e.classList.remove("font-sm","font-lg"):"font-lg"==a&&(e.classList.remove("font-sm"),e.classList.add("font-lg"))}))}))},lazyLoading:function(){var t=e.select(".lazy");if(e.isVariableDefined(t))new LazyLoad({})}};e.init()}();