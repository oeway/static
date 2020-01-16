(function(){var P$=Clazz.newPackage("net.imglib2.labeling"),I$=[[0,'net.imglib2.img.AbstractImg']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractLabeling", null, 'net.imglib2.AbstractInterval', 'net.imglib2.labeling.Labeling');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['size'],'O',['strategy','net.imglib2.labeling.LabelingROIStrategy']]]

Clazz.newMeth(C$, 'c$$JA$net_imglib2_labeling_LabelingROIStrategyFactory', function (size, factory) {
;C$.superclazz.c$$JA.apply(this,[size]);C$.$init$.apply(this);
this.size=$I$(1).numElements$JA(size);
this.strategy=factory.createLabelingROIStrategy$(this);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'setLabelingCursorStrategy$net_imglib2_labeling_LabelingROIStrategy', function (strategy) {
this.strategy=strategy;
});

Clazz.newMeth(C$, ['getRegionOfInterest$TT'], function (label) {
return this.strategy.createRegionOfInterest$TT(label);
});

Clazz.newMeth(C$, ['getIterableRegionOfInterest$TT'], function (label) {
return this.strategy.createIterableRegionOfInterest$TT(label);
});

Clazz.newMeth(C$, ['getExtents$TT$JA$JA'], function (label, minExtents, maxExtents) {
return this.strategy.getExtents$TT$JA$JA(label, minExtents, maxExtents);
});

Clazz.newMeth(C$, ['getRasterStart$TT$JA'], function (label, start) {
return this.strategy.getRasterStart$TT$JA(label, start);
});

Clazz.newMeth(C$, ['getArea$TT'], function (label) {
return this.strategy.getArea$TT(label);
});

Clazz.newMeth(C$, 'getLabels$', function () {
return this.strategy.getLabels$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:51 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
