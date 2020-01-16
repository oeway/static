(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[[0,'org.scijava.log.LogService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "RichPlugin", null, null, ['org.scijava.plugin.SciJavaPlugin', 'org.scijava.Contextual', 'org.scijava.Prioritized', 'org.scijava.plugin.HasPluginInfo', 'org.scijava.log.Logged', 'org.scijava.Identifiable', 'org.scijava.Locatable', 'org.scijava.Versioned']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getIdentifier$', function () {
return "plugin:" + this.getClass$().getName$();
});

Clazz.newMeth(C$, 'log$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(1),['setLevel$I','setLevel$S$I','setLevelForLogger$S$I']));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
