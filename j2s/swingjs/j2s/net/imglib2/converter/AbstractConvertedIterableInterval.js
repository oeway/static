(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractConvertedIterableInterval", null, 'net.imglib2.AbstractWrappedInterval', ['net.imglib2.IterableInterval', 'net.imglib2.View']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_IterableInterval', function (source) {
;C$.superclazz.c$$TI.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.sourceInterval.size$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.sourceInterval.iterationOrder$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.cursor$().next$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
