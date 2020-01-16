(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "WrapperService", null, null, 'org.scijava.plugin.TypedService');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['create$TD'], function (data) {
var instance=this.find$TDT(data);
if (instance != null ) instance.set$TD(data);
if (Clazz.instanceOf(instance, "org.scijava.io.handle.FileHandle")) {
System.out.println$S("creating " + data);
try {
(instance).writeBytes$S("");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}return instance;
});

Clazz.newMeth(C$, 'initialize$', function () {
if (this.log$() != null ) {
this.log$().debug$O("Found " + this.getPlugins$().size$() + " " + this.getPluginType$().getSimpleName$() + " plugins." );
}});

Clazz.newMeth(C$, ['supports$TDT','supports$TT'], function (data) {
return this.find$TDT(data) != null ;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
