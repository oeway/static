(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),I$=[[0,'net.imglib2.interpolation.randomaccess.ClampingNLinearInterpolatorVolatileRealType','net.imglib2.interpolation.randomaccess.ClampingNLinearInterpolatorRealType','net.imglib2.type.numeric.ARGBType','net.imglib2.interpolation.randomaccess.NLinearInterpolatorARGB','net.imglib2.type.volatiles.VolatileARGBType','net.imglib2.interpolation.randomaccess.ClampingNLinearInterpolatorVolatileARGB','net.imglib2.interpolation.randomaccess.NLinearInterpolator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ClampingNLinearInterpolatorFactory", null, null, 'net.imglib2.interpolation.InterpolatorFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['create$net_imglib2_RandomAccessible','create$TF'], function (randomAccessible) {
var type=randomAccessible.randomAccess$().get$();
if (Clazz.instanceOf(type, "net.imglib2.type.numeric.RealType")) {
if (Clazz.instanceOf(type, "net.imglib2.Volatile")) return Clazz.new_($I$(1,1).c$$net_imglib2_RandomAccessible,[randomAccessible]);
 else return Clazz.new_($I$(2,1).c$$net_imglib2_RandomAccessible,[randomAccessible]);
} else if (Clazz.getClass($I$(3)).isInstance$O(type)) {
return Clazz.new_($I$(4,1).c$$net_imglib2_RandomAccessible,[randomAccessible]);
} else if (Clazz.getClass($I$(5)).isInstance$O(type)) {
return Clazz.new_(1,{T:"net.imglib2.type.volatiles.VolatileARGBType"},$I$(6,1).c$$net_imglib2_RandomAccessible,[randomAccessible]);
} else return Clazz.new_(1,{T:"Object"},$I$(7,1).c$$net_imglib2_RandomAccessible,[randomAccessible]);
});

Clazz.newMeth(C$, ['create$net_imglib2_RandomAccessible$net_imglib2_RealInterval','create$TF$net_imglib2_RealInterval'], function (randomAccessible, interval) {
return this.create$net_imglib2_RandomAccessible(randomAccessible);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
