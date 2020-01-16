(function(){var P$=Clazz.newPackage("net.imglib2.roi.mask.integer"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RandomAccessibleAsMask", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.roi.Mask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ra','net.imglib2.RandomAccessible']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible', function (ra) {
;C$.superclazz.c$$I.apply(this,[ra.numDimensions$()]);C$.$init$.apply(this);
this.ra=ra;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.ra;
});

Clazz.newMeth(C$, ['test$net_imglib2_Localizable','test$','test$TT'], function (l) {
var accessor=this.ra.randomAccess$();
accessor.setPosition$net_imglib2_Localizable(l);
return accessor.get$().get$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
