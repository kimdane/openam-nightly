define("org/forgerock/commons/ui/common/main/GenericRouteInterfaceMap",["underscore","org/forgerock/commons/ui/common/main/AbstractConfigurationAware"],function(e,t){var n=new t;return n.updateConfigurationCallback=function(t){e.each(t,function(e,t){define(t,require(e)),require([t])})},n})