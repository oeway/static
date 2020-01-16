(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.BoundaryType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ClosedWritableSuperEllipsoid", null, 'net.imglib2.roi.geom.real.AbstractWritableSuperEllipsoid');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA$D', function (center, semiAxisLengths, exponent) {
;C$.superclazz.c$$DA$DA$D.apply(this,[center, semiAxisLengths, exponent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (l) {
return this.distancePowered$net_imglib2_RealLocalizable(l) <= 1.0 ;
});

Clazz.newMeth(C$, 'boundaryType$', function () {
return $I$(1).CLOSED;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
