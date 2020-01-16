(function(){var P$=Clazz.newPackage("org.scijava.io.handle");
/*i*/var C$=Clazz.newInterface(P$, "ResettableStreamHandle", null, null, 'org.scijava.io.handle.StreamHandle');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'seek$J', function (pos) {
var off=this.offset$();
if (pos == off) return;
if (pos > off) {
this.jump$J(pos - off);
} else {
this.resetStream$();
this.jump$J(pos);
}this.setOffset$J(pos);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
