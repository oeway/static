(function(){var P$=Clazz.newPackage("net.imglib2.roi.mask.real"),I$=[[0,'net.imglib2.roi.mask.real.MaskPredicateRealRandomAccess']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealMaskRealIntervalAsRealRandomAccessibleRealInterval", null, 'net.imglib2.AbstractWrappedRealInterval', 'net.imglib2.RealRandomAccessibleRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['type','<B extends BooleanType<B>>']]]

Clazz.newMeth(C$, ['c$$net_imglib2_roi_RealMaskRealInterval$TB'], function (mask, type) {
;C$.superclazz.c$$TI.apply(this,[mask]);C$.$init$.apply(this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'realRandomAccess$', function () {
return Clazz.new_(1,{B:"Object"},$I$(1,1).c$$net_imglib2_roi_MaskPredicate$TB,[this.sourceInterval, this.type]);
});

Clazz.newMeth(C$, 'realRandomAccess$net_imglib2_RealInterval', function (interval) {
return this.realRandomAccess$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
