(function(){var P$=Clazz.newPackage("net.imglib2.display.projector"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractProjector2D", null, 'net.imglib2.Point', 'net.imglib2.display.projector.Projector');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['min','long[]','+max']]]

Clazz.newMeth(C$, 'c$$I', function (numDims) {
;C$.superclazz.c$$I.apply(this,[Math.max(2, numDims)]);C$.$init$.apply(this);
this.min=Clazz.array(Long.TYPE, [this.n]);
this.max=Clazz.array(Long.TYPE, [this.n]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
