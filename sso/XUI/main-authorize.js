require.config({paths:{underscore:"libs/lodash-2.4.1-min",spin:"libs/spin-2.0.1-min",jquery:"libs/jquery-1.11.1-min",ThemeManager:"org/forgerock/openam/ui/common/util/ThemeManager"},shim:{underscore:{exports:"_"},spin:{exports:"spin"}}}),require(["jquery","underscore","org/forgerock/commons/ui/common/main/Configuration","org/forgerock/openam/ui/common/util/Constants","org/forgerock/commons/ui/common/main/SpinnerManager","ThemeManager"],function(e,t,n,r,i,s){i.showSpinner(),window.$=e,window._=t,n.globalData={auth:{subRealm:window.realm}},s.getTheme().then(function(){i.hideSpinner(),e("#login-base,#footer").removeClass("hidden")}).fail(function(){i.hideSpinner(),e("#login-base,#footer").removeClass("hidden")})})