(function(){var P$=Clazz.newPackage("org.scijava.app"),I$=[[0,'org.scijava.app.App']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "AppService", null, null, ['org.scijava.plugin.SingletonService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getApp$', function () {
var appList=this.getInstances$();
if (appList == null  || appList.isEmpty$() ) return null;
return appList.get$I(0);
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1),['about$','getArtifactId$','getBaseDirectory$','getGroupId$','getInfo$Z','getManifest$','getPOM$','getSystemProperty$','getTitle$','getVersion$','prefs$','quit$']);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
