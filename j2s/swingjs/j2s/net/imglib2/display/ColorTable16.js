(function(){var P$=Clazz.newPackage("net.imglib2.display"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ColorTable16", null, 'net.imglib2.display.AbstractArrayColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$TTA.apply(this,[C$.gray$()]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$HAA', function (values) {
;C$.superclazz.c$$TTA.apply(this,[values]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLength$', function () {
return this.values[0].length;
});

Clazz.newMeth(C$, 'getBits$', function () {
return 16;
});

Clazz.newMeth(C$, 'get$I$I', function (comp, bin) {
return this.getNative$I$I(comp, bin) >> 8;
});

Clazz.newMeth(C$, 'getNative$I$I', function (c, i) {
return this.values[c][i] & 65535;
});

Clazz.newMeth(C$, 'getResampled$I$I$I', function (comp, bins, bin) {
var newBin=(((this.getLength$() * bin/bins|0))|0);
return this.get$I$I(comp, newBin);
});

Clazz.newMeth(C$, 'gray$', function () {
var gray=Clazz.array(Short.TYPE, [3, 65536]);
for (var j=0; j < gray.length; j++) {
for (var i=0; i < gray[j].length; i++) {
gray[j][i]=(i|0);
}
}
return gray;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
