(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),I$=[[0,'net.imglib2.interpolation.randomaccess.NLinearInterpolatorARGB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NLinearInterpolatorARGBFactory", null, null, 'net.imglib2.interpolation.InterpolatorFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['create$net_imglib2_RandomAccessible','create$TF'], function (randomAccessible) {
return Clazz.new_($I$(1,1).c$$net_imglib2_RandomAccessible,[randomAccessible]);
});

Clazz.newMeth(C$, ['create$net_imglib2_RandomAccessible$net_imglib2_RealInterval','create$TF$net_imglib2_RealInterval'], function (randomAccessible, interval) {
return this.create$net_imglib2_RandomAccessible(randomAccessible);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
