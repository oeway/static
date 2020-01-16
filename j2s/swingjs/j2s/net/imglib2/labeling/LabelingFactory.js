(function(){var P$=Clazz.newPackage("net.imglib2.labeling"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelingFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'create$IA', function (dim) {
return this.create$JA($I$(1).int2long$IA(dim));
});

Clazz.newMeth(C$, 'create$net_imglib2_Interval', function (interval) {
var dim=Clazz.array(Long.TYPE, [interval.numDimensions$()]);
interval.dimensions$JA(dim);
return this.create$JA(dim);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
