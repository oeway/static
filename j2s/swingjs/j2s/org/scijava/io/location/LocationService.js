(function(){var P$=Clazz.newPackage("org.scijava.io.location"),I$=[[0,'java.net.URI','java.io.File','org.scijava.io.location.LocationResolver']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "LocationService", null, null, ['org.scijava.plugin.HandlerService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'resolve$S', function (uriString) {
try {
return this.resolve$java_net_URI(Clazz.new_($I$(1,1).c$$S,[uriString]));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.URISyntaxException")){
return this.resolve$java_net_URI(Clazz.new_($I$(2,1).c$$S,[uriString]).toURI$());
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'resolve$java_net_URI', function (uri) {
if (uri.getScheme$() == null ) {
uri=Clazz.new_($I$(2,1).c$$S,[uri.getPath$()]).toURI$();
}var resolver=this.getResolver$java_net_URI(uri);
return resolver != null  ? resolver.resolve$java_net_URI(uri) : null;
});

Clazz.newMeth(C$, 'getResolver$java_net_URI', function (uri) {
return this.getHandler$TDT(uri);
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(3),['resolve$java_net_URI']);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(1));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
