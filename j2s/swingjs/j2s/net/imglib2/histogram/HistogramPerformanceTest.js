(function(){var P$=Clazz.newPackage("net.imglib2.histogram"),p$1={},I$=[[0,['.','.HistogramPerformanceTest'],'net.imglib2.type.numeric.integer.UnsignedByteType','net.imglib2.type.numeric.integer.UnsignedShortType','net.imglib2.img.array.ArrayImgFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HistogramPerformanceTest");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DIMS=Clazz.array(Integer.TYPE, -1, [1024, 1024, 3, 5]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['DIMS','int[]']]]

Clazz.newMeth(C$, 'main$SA', function (args) {
System.out.println$S("== UNSIGNED 8-BIT ==");
Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedByteType"},$I$(1,1)).run$TT$I(Clazz.new_($I$(2,1)), 256);
System.out.println$S("== UNSIGNED 16-BIT ==");
Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedShortType"},$I$(1,1)).run$TT$I(Clazz.new_($I$(3,1)), 65536);
}, 1);

Clazz.newMeth(C$, 'run$TT$I', function (type, max) {
var start;
var end;
System.out.print$S("Creating image... ");
start=System.currentTimeMillis$();
var img=p$1.createImage$TT$I.apply(this, [type, max]);
end=System.currentTimeMillis$();
var createMillis=end - start;
System.out.println$S(createMillis + " ms");
System.out.print$S("Counting pixel values manually... ");
start=System.currentTimeMillis$();
var bins=Clazz.array(Long.TYPE, [max]);
for (var t, $t = img.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
var v=t.getRealDouble$();
bins[(v|0)]++;
}
end=System.currentTimeMillis$();
var manualMillis=end - start;
System.out.println$S(manualMillis + " ms");
System.out.print$S("Building histogram... ");
start=System.currentTimeMillis$();
var ;
var ;
end=System.currentTimeMillis$();
var histMillis=end - start;
System.out.println$S(histMillis + " ms");
var val=img.firstElement$();
for (var i=0; i < max; i++) {
val.setReal$F(i);
var binPos;
var actual;
var expect=bins[i];
if (actual != expect) {
System.out.println$S("Error: for bin #" + i + ": expected=" + expect + ", actual=" + actual );
}}
});

Clazz.newMeth(C$, 'createImage$TT$I', function (type, max) {
var imFactory=Clazz.new_(1,{T:"Object"},$I$(4,1).c$$TT,[type]);
var img=imFactory.create$IA($I$(1).DIMS);
for (var t, $t = img.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) t.setReal$D(max * Math.random());

return img;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:15 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
