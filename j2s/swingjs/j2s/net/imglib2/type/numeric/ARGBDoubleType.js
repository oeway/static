(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ARGBDoubleType", null, 'net.imglib2.type.numeric.AbstractARGBDoubleType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['a','r','g','b']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D', function (a, r, g, b) {
Clazz.super_(C$, this);
this.set$D$D$D$D(a, r, g, b);
}, 1);

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$D$D$D$D,[this.a, this.r, this.g, this.b]);
});

Clazz.newMeth(C$, 'set$D$D$D$D', function (a, r, g, b) {
this.a=a;
this.r=r;
this.g=g;
this.b=b;
});

Clazz.newMeth(C$, ['set$net_imglib2_type_numeric_NativeARGBDoubleType','setnull'], function (c) {
this.set$D$D$D$D(c.getA$(), c.getR$(), c.getG$(), c.getB$());
});

Clazz.newMeth(C$, 'getA$', function () {
return this.a;
});

Clazz.newMeth(C$, 'getR$', function () {
return this.r;
});

Clazz.newMeth(C$, 'getG$', function () {
return this.g;
});

Clazz.newMeth(C$, 'getB$', function () {
return this.b;
});

Clazz.newMeth(C$, 'setA$D', function (a) {
this.a=a;
});

Clazz.newMeth(C$, 'setR$D', function (r) {
this.r=r;
});

Clazz.newMeth(C$, 'setG$D', function (g) {
this.g=g;
});

Clazz.newMeth(C$, 'setB$D', function (b) {
this.b=b;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
