(function(){var P$=Clazz.newPackage("net.imglib2.roi.mask.real"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RealRandomAccessibleAsRealMask", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.roi.RealMask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['rra','net.imglib2.RealRandomAccessible']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealRandomAccessible', function (rra) {
;C$.superclazz.c$$I.apply(this,[rra.numDimensions$()]);C$.$init$.apply(this);
this.rra=rra;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.rra;
});

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (l) {
var accessor=this.rra.realRandomAccess$();
accessor.setPosition$net_imglib2_RealLocalizable(l);
return accessor.get$().get$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
