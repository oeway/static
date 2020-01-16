(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,'net.imglib2.roi.BoundaryType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OpenWritableSphere", null, 'net.imglib2.roi.geom.real.AbstractWritableSphere');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA$D', function (center, radius) {
;C$.superclazz.c$$DA$D.apply(this,[center, radius]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (l) {
return this.distancePowered$net_imglib2_RealLocalizable(l) < this.radius * this.radius ;
});

Clazz.newMeth(C$, 'boundaryType$', function () {
return $I$(1).OPEN;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
