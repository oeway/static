(function(){var P$=Clazz.newPackage("net.imglib2.roi.mask.integer"),I$=[[0,'net.imglib2.util.Intervals']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessibleIntervalAsMaskInterval", null, 'net.imglib2.AbstractWrappedInterval', 'net.imglib2.roi.MaskInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval', function (rai) {
;C$.superclazz.c$$TI.apply(this,[rai]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['test$net_imglib2_Localizable','test$','test$TT'], function (l) {
if ($I$(1).contains$net_imglib2_Interval$net_imglib2_Localizable(this, l)) {
var accessor=this.sourceInterval.randomAccess$();
accessor.setPosition$net_imglib2_Localizable(l);
return accessor.get$().get$();
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
