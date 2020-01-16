(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DummyScreenCaptureService", null, 'org.scijava.service.AbstractService', 'net.imagej.display.ScreenCaptureService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'captureScreenRegion$I$I$I$I', function (x, y, width, height) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Dummy screen capture service is not functional"]);
});

Clazz.newMeth(C$, 'captureScreen$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Dummy screen capture service is not functional"]);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.DummyScreenCaptureService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
