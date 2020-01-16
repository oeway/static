(function(){var P$=Clazz.newPackage("net.imglib2.roi.mask.real"),I$=[[0,'net.imglib2.util.Intervals']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealRandomAccessibleRealIntervalAsRealMaskRealInterval", null, 'net.imglib2.AbstractWrappedRealInterval', 'net.imglib2.roi.RealMaskRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealRandomAccessibleRealInterval', function (rrari) {
;C$.superclazz.c$$TI.apply(this,[rrari]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_RealLocalizable','test$','test$TT'], function (l) {
if ($I$(1).contains$net_imglib2_RealInterval$net_imglib2_RealLocalizable(this, l)) {
var accessor=this.sourceInterval.realRandomAccess$();
accessor.setPosition$net_imglib2_RealLocalizable(l);
return accessor.get$().get$();
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
