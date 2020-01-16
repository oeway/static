(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[[0,'net.imglib2.roi.util.SamplingIterableInterval','net.imglib2.roi.util.IterableRandomAccessibleRegion','net.imglib2.view.Views']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Regions");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'sample$net_imglib2_IterableInterval$net_imglib2_RandomAccessible', function (region, img) {
return $I$(1).create$net_imglib2_IterableInterval$net_imglib2_RandomAccessible(region, img);
}, 1);

Clazz.newMeth(C$, 'iterable$net_imglib2_RandomAccessibleInterval', function (region) {
if (Clazz.instanceOf(region, "net.imglib2.roi.IterableRegion")) return region;
 else return $I$(2).create$net_imglib2_RandomAccessibleInterval(region);
}, 1);

Clazz.newMeth(C$, 'countTrue$net_imglib2_RandomAccessibleInterval', function (interval) {
var sum=0;
for (var t, $t = $I$(3).iterable$net_imglib2_RandomAccessibleInterval(interval).iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) if (t.get$()) ++sum;

return sum;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
