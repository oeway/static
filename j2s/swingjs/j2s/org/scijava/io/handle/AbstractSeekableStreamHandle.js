(function(){var P$=Clazz.newPackage("org.scijava.io.handle");
/*c*/var C$=Clazz.newClass(P$, "AbstractSeekableStreamHandle", null, 'org.scijava.io.handle.AbstractStreamHandle', 'org.scijava.io.handle.SeekableStreamHandle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.jumpCutoff=10000;
}, 1);

C$.$fields$=[['L',['jumpCutoff']]]

Clazz.newMeth(C$, 'seek$J', function (pos) {
var delta=pos - this.offset$();
if (delta == 0) {
return;
} else if (delta > 0) {
if (this.recreatePossible$() && delta > this.jumpCutoff ) {
this.recreateStreamFromPos$J(pos);
} else {
this.jump$J(delta);
}} else {
if (this.recreatePossible$()) {
this.recreateStreamFromPos$J(pos);
} else {
this.resetStream$();
this.jump$J(pos);
}}this.setOffset$J(pos);
});

Clazz.newMeth(C$, 'setJumpCutoff$J', function (jumpCutoff) {
this.jumpCutoff=jumpCutoff;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
