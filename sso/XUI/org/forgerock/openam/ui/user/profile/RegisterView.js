define("org/forgerock/openam/ui/user/profile/RegisterView",["org/forgerock/commons/ui/common/main/AbstractView","org/forgerock/commons/ui/common/main/ValidatorsManager","UserDelegate","org/forgerock/commons/ui/common/main/Configuration","org/forgerock/commons/ui/common/util/CookieHelper","org/forgerock/commons/ui/common/main/EventManager","org/forgerock/commons/ui/common/util/Constants","org/forgerock/commons/ui/common/util/UIUtils"],function(e,t,n,r,i,s,o,u){var a=e.extend({template:"templates/openam/RegisterTemplate.html",baseTemplate:"templates/common/MediumBaseTemplate.html",data:{},events:{"click #continue":"continueProcess","click #registerButton":"register",onValidate:"onValidate",customValidate:"customValidate","click .cancelButton":"cancel"},errorsHandlers:{"Bad Request":{status:"400"},"Not found":{status:"404"},Conflict:{status:"409"}},render:function(e,n){this.data.urlParams=u.convertCurrentUrlToJSON().params,this.data.isStageOne=!0,this.data.urlParams&&(this.data.isStageOne=!1),this.parentRender(function(){t.bindValidators(this.$el)})},continueProcess:function(e){e.preventDefault(),$("#email").prop("readonly",!0);var t=this,r={email:$("#email").val(),subject:$.t("templates.user.UserRegistrationTemplate.emailSubject"),message:$.t("templates.user.UserRegistrationTemplate.emailMessage")},i=function(){t.$el.find("#emailSent").slideDown(),t.$el.find("#step1").slideUp()},u=function(e){var n=JSON.parse(e.responseText);t.$el.find("input[type=submit]").prop("disabled",!0),$("#email").prop("readonly",!1),s.sendEvent(o.EVENT_DISPLAY_MESSAGE_REQUEST,"unableToRegister")};this.$el.find("input[type=submit]").prop("disabled",!0),n.doAction("register",r,i,u)},register:function(e){e.preventDefault();var t,i=this,u=_.extend(form2js(this.$el.find("#registration")[0]),{userpassword:this.$el.find("#password").val()}),a=function(){switch(r.globalData.successfulUserRegistrationDestination){case"login":s.sendEvent(o.EVENT_DISPLAY_MESSAGE_REQUEST,"afterRegistration"),i.cancel();break;case"autologin":s.sendEvent(o.EVENT_USER_SUCCESSFULLY_REGISTERED,{user:{userName:u.username,password:u.password},autoLogin:!0});break;default:i.$el.find("#step2").slideUp(),i.$el.find("#registerSuccess").fadeIn()}},f=function(e){var t=JSON.parse(e.responseText).message,n=JSON.parse(e.responseText).code;i.$el.find("input[type=submit]").prop("disabled",!1),t.indexOf("ldap exception")>-1?s.sendEvent(o.EVENT_DISPLAY_MESSAGE_REQUEST,"userAlreadyExists"):t.indexOf("Identity names may not have a space character")>-1?s.sendEvent(o.EVENT_DISPLAY_MESSAGE_REQUEST,"identityNoSpace"):n===400?(s.sendEvent(o.EVENT_DISPLAY_MESSAGE_REQUEST,"selfRegistrationDisabled"),i.$el.find("input[type=submit]").prop("disabled",!0)):n===409&&s.sendEvent(o.EVENT_DISPLAY_MESSAGE_REQUEST,"userAlreadyExists")};n.doAction("confirm",this.data.urlParams,function(e){_.extend(u,e),n.doAction("anonymousCreate",u,a,f,i.errorsHandlers)},function(e){s.sendEvent(o.EVENT_DISPLAY_MESSAGE_REQUEST,"unableToRegister")},i.errorsHandlers),this.$el.find("input[type=submit]").prop("disabled",!0)},cancel:function(e){e&&e.preventDefault();var t=i.getCookie("loginUrlParams");i.deleteCookie("loginUrlParams"),location.href="#login"+(t?t:"/"+r.globalData.auth.subRealm)},customValidate:function(){t.formValidated(this.$el.find("#registration"))||t.formValidated(this.$el.find("#forgotPassword"))?this.$el.find("input[type=submit]").prop("disabled",!1):this.$el.find("input[type=submit]").prop("disabled",!0)}});return new a})