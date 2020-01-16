(function(){var P$=Clazz.newPackage("net.imagej.autoscale"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DataRange");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['min','max']]]

Clazz.newMeth(C$, 'c$$D$D', function (p1, p2) {
;C$.$init$.apply(this);
this.min=Math.min(p1, p2);
this.max=Math.max(p1, p2);
}, 1);

Clazz.newMeth(C$, 'getMin$', function () {
return this.min;
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'getExtent$', function () {
return this.max - this.min;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
