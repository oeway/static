(function(){var P$=Clazz.newPackage("org.scijava.options"),I$=[[0,'org.scijava.options.OptionsPlugin']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "OptionsService", null, null, ['org.scijava.plugin.SingletonService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'reset$', function () {
var optionsPlugins=this.getInstances$();
for (var plugin, $plugin = optionsPlugins.iterator$(); $plugin.hasNext$()&&((plugin=($plugin.next$())),1);) {
plugin.reset$();
}
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
