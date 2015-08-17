define("org/forgerock/openam/ui/common/util/RealmHelper",["org/forgerock/commons/ui/common/main/Configuration","org/forgerock/commons/ui/common/util/UIUtils"],function(e,t){var n={};return n.decorateURLWithOverrideRealm=function(e){var t=n.getOverrideRealm(),r;return t&&(r=e.indexOf("?")===-1?"?":"&",e=e+r+"realm="+t),e},n.decorateURIWithRealm=function(e){return e=n.decorateURIWithSubRealm(e),e=n.decorateURLWithOverrideRealm(e),e},n.decorateURIWithSubRealm=function(t){e.globalData&&e.globalData.auth&&typeof e.globalData.auth.subRealm!="string"&&console.warn("Unable to decorate URI, Configuration.globalData.auth.subRealm not yet set");var n=e.globalData&&e.globalData.auth?e.globalData.auth.subRealm:"",r=n?n+"/":"";return t=t.replace("__subrealm__/",r),t},n.getOverrideRealm=function(){var e=t.convertQueryParametersToJSON(n.getURIQueryString())||{},r=t.convertQueryParametersToJSON(n.getURIFragmentQueryString())||{},i=e.realm||"",s=r.realm||"";return i?i:s},n.getSubRealm=function(){var t,r,i;return i=n.getURIFragment().split("/"),t=i.shift().split("&")[0],t&&_.include(["login","forgotPassword"],t)?r=i.join("/").split("&")[0]:e.globalData.auth.subRealm?r=e.globalData.auth.subRealm:(console.warn("Unable to determine realm outside of sub realm aware view (login)"),r=""),r},n.getURIQueryString=function(){var e=window.location.search;return e.substr(1,e.length)},n.getURIFragment=function(){return t.getUrl().split("#")[1]||""},n.getURIFragmentQueryString=function(){var e=n.getURIFragment(),t="";return e.indexOf("&")>-1&&(t=e.substring(e.indexOf("&")+1)),t},n})