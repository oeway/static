(function(){var P$=Clazz.newPackage("net.imagej.units"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LinearCalibrator", null, null, 'net.imagej.units.Calibrator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['scale','offset']]]

Clazz.newMeth(C$, 'c$$D$D', function (scale, offset) {
;C$.$init$.apply(this);
this.scale=scale;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'setScale$D', function (scale) {
this.scale=scale;
});

Clazz.newMeth(C$, 'setOffset$D', function (offset) {
this.offset=offset;
});

Clazz.newMeth(C$, 'scale$', function () {
return this.scale;
});

Clazz.newMeth(C$, 'offset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'toOutput$D', function (input) {
return (input * this.scale) + this.offset;
});

Clazz.newMeth(C$, 'toInput$D', function (output) {
return (output - this.offset) / this.scale;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
