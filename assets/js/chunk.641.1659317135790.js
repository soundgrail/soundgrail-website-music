(self.webpackChunkultimate_jekyll=self.webpackChunkultimate_jekyll||[]).push([[641],{641:function(t){var a,n;function r(e){var t=this;e=e||{},t.properties={},t.accountPageInitialized=!1;try{a=e.dom||t.Manager.dom(),n=e.utilities||t.Manager.utilities(),new URL(window.location.href).pathname.includes("account")&&t.initializeAccountPage()}catch(e){console.error("Failed to initialize libraries")}}function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}r.prototype.initializeAccountPage=function(e){var t=this;t.accountPageInitialized||(document.addEventListener("click",(function(e){e.target.matches(".auth-delete-account-btn")&&t.delete().catch((function(e){}))}),!1),t.accountPageInitialized=!0)},r.prototype.delete=function(t){var r=this,i=firebase.auth().currentUser,o=a.select(".auth-delete-account-error-message-element"),l=a.select(".auth-delete-account-confirmation-input").getValue(),s=a.select(".auth-delete-account-btn");return s.setAttribute("disabled",!0).addClass("disabled"),o.setAttribute("hidden",!0),new Promise((function(t,a){function p(e){var t=new Error(e);return o.removeAttribute("hidden").setInnerHTML(t),s.removeAttribute("disabled").removeClass("disabled"),a(t)}return l?i?void i.getIdToken(!1).then((function(e){fetch("https://us-central1-"+n.get(r.Manager,"properties.options.libraries.firebase_app.config.projectId","unknown")+".cloudfunctions.net/bm_api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({authenticationToken:e,command:"delete-user",payload:{}})}).then((function(e){if(!e.ok)return e.text().then((function(t){throw new Error(t||e.statusText||"Unknown error.")}));e.json().then((function(e){return console.log("Successfully deleted account",e),r.Manager.auth().signOut(),t(e)}))})).catch((function(e){return p(e)}))})).catch((function(){return p(e)})):p("Please log in first."):p("Please confirm that you wish to have your account deleted.")}))},r.prototype.resolve=function(e,t){var a=this;return new Promise((function(n,r){var i=firebase.auth().currentUser;return e&&e.auth?i?n(a._resolveAccount(i,e,t)):r(new Error("No currently authenticated user")):i?void firebase.firestore().doc("users/"+i.uid).get().then((function(e){return n(a._resolveAccount(i,e.data(),t))})).catch(r):r(new Error("Malformed <account> input and no currently authenticated user"))}))},r.prototype._resolveAccount=function(e,t,r){var o=this;e=e||{},t=t||{};var l,s,p=(r=r||{}).defaultPlanId||"basic";t.auth=t.auth||{},t.auth.email=t.auth.email||e.email||null,t.auth.uid=t.auth.uid||e.uid||null,t.auth.temporary=t.auth.temporary||!1,t.plan=t.plan||{},t.plan.id=t.plan.id||p,t.plan.expires=t.plan.expires||{},t.plan.expires.timestamp=new Date(t.plan.expires.timestamp||0).toISOString(),t.plan.expires.timestampUNIX=Math.round(new Date(t.plan.expires.timestamp||0).getTime()/1e3),t.plan.limits=t.plan.limits||{},t.plan.payment=t.plan.payment||{},t.plan.payment.startDate=t.plan.payment.startDate||{},t.plan.payment.startDate.timestamp=t.plan.payment.startDate.timestamp||"1970-01-01T00:00:00.000Z",t.plan.payment.startDate.timestampUNIX=t.plan.payment.startDate.timestampUNIX||0,t.plan.payment.frequency=t.plan.payment.frequency||"unknown",t.plan.payment.orderId=t.plan.payment.orderId||"unknown",t.plan.payment.resourceId=t.plan.payment.resourceId||"unknown",t.plan.payment.active=t.plan.payment.active||!1,t.plan.payment.updatedBy=t.plan.payment.updatedBy||{},t.plan.payment.updatedBy.event=t.plan.payment.updatedBy.event||{},t.plan.payment.updatedBy.event.id=t.plan.payment.updatedBy.event.id||"unknown",t.plan.payment.updatedBy.event.name=t.plan.payment.updatedBy.event.name||"unknown",t.plan.payment.updatedBy.date=t.plan.payment.updatedBy.date||{},t.plan.payment.updatedBy.date.timestamp=t.plan.payment.updatedBy.date.timestamp||"1970-01-01T00:00:00.000Z",t.plan.payment.updatedBy.date.timestampUNIX=t.plan.payment.updatedBy.date.timestampUNIX||0;try{l=new URL(window.location.href),s="development"===n.get(o.Manager,"properties.meta.environment",""),n.get(s)&&l.searchParams.forEach((function(e,a){void 0!==typeof n.get(t,a,void 0)&&("true"===e&&(e=!0),"false"===e&&(e=!1),n.set(t,a,e))}))}catch(e){"undefined"!=typeof window&&console.error("Unable to check query strings",e)}var c,u,d=new Date(t.plan.expires.timestamp),m=new Date,h=Math.floor((d-m)/864e5),y=(d.getTime()-m.getTime())/864e5,f=new Date(t.plan.payment.startDate.timestamp),b=y>-1&&t.plan.id!==p;t.plan.id=b?t.plan.id:p,t.oauth2=t.oauth2||{},t.oauth2.discord=t.oauth2.discord||{},t.oauth2.discord.user=t.oauth2.discord.user||{},t.roles=t.roles||{},t.roles.betaTester=t.plan.id!==p&&(!0===t.roles.betaTester||"true"===t.roles.betaTester),t.roles.developer=!0===t.roles.developer||"true"===t.roles.developer,t.roles.admin=!0===t.roles.admin||"true"===t.roles.admin,t.roles.vip=!0===t.roles.vip||"true"===t.roles.vip,t.roles.promoExempt=!0===t.roles.promoExempt||"true"===t.roles.promoExempt,t.affiliate=t.affiliate||{},t.affiliate.code=t.affiliate.code||"unknown",t.affiliate.referrals=t.affiliate.referrals||[],t.affiliate.referrer=t.affiliate.referrer||"unknown",t.activity=t.activity||{},t.activity.lastActivity=t.activity.lastActivity||{},t.activity.lastActivity.timestamp=t.activity.lastActivity.timestamp||"1970-01-01T00:00:00.000Z",t.activity.lastActivity.timestampUNIX=t.activity.lastActivity.timestampUNIX||0,t.activity.created=t.activity.created||{},t.activity.created.timestamp=t.activity.created.timestamp||"1970-01-01T00:00:00.000Z",t.activity.created.timestampUNIX=t.activity.created.timestampUNIX||0,t.api=t.api||{},t.api.clientId=t.api.clientId||"unknown",t.api.privateKey=t.api.privateKey||"unknown",t.personal=t.personal||{},t.personal.name=t.personal.name||{},t.personal.name.first=t.personal.name.first||"",t.personal.name.last=t.personal.name.last||"",t.personal.telephone=t.personal.telephone||{},t.personal.telephone.countryCode=t.personal.telephone.countryCode||0,t.personal.telephone.national=t.personal.telephone.national||0,t.personal.birthday=t.personal.birthday||{},t.personal.birthday.timestamp=t.personal.birthday.timestamp||"1970-01-01T00:00:00.000Z",t.personal.birthday.timestampUNIX=t.personal.birthday.timestampUNIX||0,t.personal.gender=t.personal.gender||"",t.personal.location=t.personal.location||{},t.personal.location.country=t.personal.location.country||"";try{var v=s?"http://localhost:4001/cancel/":"https://itwcreativeworks.com/portal/account/manage/",g=a.select(".auth-billing-subscribe-btn"),w=a.select(".auth-billing-update-btn"),I=a.select(".auth-billing-plan-id-element"),k=a.select(".auth-billing-frequency-element"),A=a.select(".auth-billing-start-date-element"),T=a.select(".auth-billing-expiration-date-element"),U=a.select(".auth-referral-count-element"),M=a.select(".auth-referral-code-element"),P=(a.select(".auth-referral-link-element"),a.select("a.auth-referral-social-link[data-provider]")),x=a.select(".auth-created-element"),N=a.select(".auth-phone-input"),L=new URL(v),D=new URL(window.location.origin||window.location.host);D.pathname="/",D.searchParams.set("aff",t.affiliate.code),x.setInnerHTML(new Date(parseInt(n.get(e,"metadata.a","0"))).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})),N.setInnerHTML(e.phoneNumber).setValue(e.phoneNumber),g.setAttribute("hidden",!0),w.setAttribute("hidden",!0),b?(L.searchParams.set("appName",n.get(o.Manager,"properties.global.brand.name","Unknown")),L.searchParams.set("supportUrl",l.origin+"/support"),L.searchParams.set("supportEmail",n.get(o.Manager,"properties.contact.emailSupport","unknown@email.com")),L.searchParams.set("userEmail",e.email),L.searchParams.set("userId",e.uid),L.searchParams.set("orderId",t.plan.payment.orderId),L.searchParams.set("resourceId",t.plan.payment.resourceId),w.removeAttribute("hidden").setAttribute("href",L.toString())):g.removeAttribute("hidden"),I.setInnerHTML(i(t.plan.id)),k.setInnerHTML(t.plan.id!==p?" (billed "+i(t.plan.payment.frequency)+")":""),A.setInnerHTML(t.plan.id!==p?" - Purchased "+(["January","February","March","April","May","June","July","August","September","October","November","December"][f.getMonth()]+" ")+f.getDate()+", "+f.getFullYear():""),T.setInnerHTML(t.plan.id!==p&&h<366?'<i class="fas fa-exclamation-triangle mr-1"></i> Expires in '+h+" days ":""),c=".auth-apikey-element",u=n.get(t,"api.privateKey","n/a"),a.select(c).each((function(e,t){"INPUT"===e.tagName?a.select(e).setValue(u):a.select(e).setInnerHTML(u)})),U.setInnerHTML(t.affiliate.referrals.length),M.setInnerHTML(t.affiliate.code).setValue(t.affiliate.code),M.setInnerHTML(D.toString()).setValue(D.toString());var B=encodeURIComponent(D.toString()),S=encodeURIComponent("Sign up for "+n.get(o.Manager,"properties.global.brand.name","this")+", a useful service:");P.each((function(e){var t=e.dataset.provider,a=encodeURIComponent(e.dataset.shareText||"");e.setAttribute("target","_blank"),"facebook"===t?e.setAttribute("href","https://www.facebook.com/sharer.php?u="+B):"twitter"===t?e.setAttribute("href","https://twitter.com/share?url="+B+"&text="+(a||S)):"pinterest"===t?e.setAttribute("href","https://pinterest.com/pin/create/button/?url="+B+"&description="+(a||S)):"tumblr"===t?e.setAttribute("href","https://www.tumblr.com/share/link?url="+B+"&text="+(a||S)):"linkedin"===t?e.setAttribute("href","https://www.linkedin.com/sharing/share-offsite/?url="+B+"&title="+(a||S)):"reddit"===t&&e.setAttribute("href","http://www.reddit.com/submit?url="+B+"&title="+(a||S))}))}catch(e){"undefined"!=typeof window&&console.error("Unable to set DOM elements",e)}return o.properties=t,o.properties},t.exports=r}}]);