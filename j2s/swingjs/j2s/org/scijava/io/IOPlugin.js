(function(){var P$=Clazz.newPackage("org.scijava.io"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "IOPlugin", null, null, 'org.scijava.plugin.HandlerPlugin');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'supportsOpen$S', function (source) {
return false;
});

Clazz.newMeth(C$, 'supportsSave$S', function (destination) {
return false;
});

Clazz.newMeth(C$, 'supportsSave$O$S', function (data, destination) {
return this.supportsSave$S(destination) && this.getDataType$().isInstance$O(data) ;
});

Clazz.newMeth(C$, 'open$S', function (source) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['save$TD$S'], function (data, destination) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, ['supports$S','supports$TT'], function (descriptor) {
return this.supportsOpen$S(descriptor) || this.supportsSave$S(descriptor) ;
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass(String);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
