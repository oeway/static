(function(){var P$=Clazz.newPackage("net.imglib2.roi.mask.integer"),I$=[[0,'net.imglib2.roi.mask.integer.MaskPredicateRandomAccess']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MaskAsRandomAccessible", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.RandomAccessible');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['mask','net.imglib2.roi.Mask','type','<B extends BooleanType<B>>']]]

Clazz.newMeth(C$, ['c$$net_imglib2_roi_Mask$TB'], function (mask, type) {
;C$.superclazz.c$$I.apply(this,[mask.numDimensions$()]);C$.$init$.apply(this);
this.mask=mask;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.mask;
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_(1,{B:"Object"},$I$(1,1).c$$net_imglib2_roi_Mask$TB,[this.mask, this.type]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
