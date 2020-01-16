(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'net.imglib2.img.array.ArrayImgFactory','net.imglib2.type.numeric.integer.IntType','net.imglib2.img.cell.CellImgFactory','java.util.Random','net.imglib2.util.IntervalIndexer',['.','.RandomAccessibleIntervalCursorBenchmark'],'net.imglib2.util.BenchmarkHelper']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessibleIntervalCursorBenchmark");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numValues'],'O',['dimensions','long[]','intData','int[]','array1','net.imglib2.img.array.ArrayImg','+array2','cell','net.imglib2.img.cell.CellImg']]]

Clazz.newMeth(C$, 'setUp$', function () {
this.dimensions=Clazz.array(Long.TYPE, -1, [207, 103, 1021]);
this.array1=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.IntType"},$I$(1,1).c$$TT,[Clazz.new_($I$(2,1))]).create$JA(this.dimensions);
this.array2=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.IntType"},$I$(1,1).c$$TT,[Clazz.new_($I$(2,1))]).create$JA(this.dimensions);
this.cell=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.IntType"},$I$(3,1).c$$TT,[Clazz.new_($I$(2,1))]).create$JA(this.dimensions);
this.numValues=1;
for (var d=0; d < this.dimensions.length; ++d) this.numValues*=this.dimensions[d];

this.intData=Clazz.array(Integer.TYPE, [this.numValues]);
var random=Clazz.new_($I$(4,1).c$$J,[0]);
for (var i=0; i < this.numValues; ++i) this.intData[i]=random.nextInt$();

var pos=Clazz.array(Long.TYPE, [this.dimensions.length]);
var a=this.array1.randomAccess$();
for (var i=0; i < this.numValues; ++i) {
$I$(5).indexToPosition$J$JA$JA(i, this.dimensions, pos);
a.setPosition$JA(pos);
a.get$().set$I(this.intData[i]);
}
});

Clazz.newMeth(C$, 'copy$TC$TD', function (src, dst) {
while (src.hasNext$())dst.next$().set$I(src.next$().get$());

}, 1);

Clazz.newMeth(C$, 'getImgAsInts$net_imglib2_img_Img', function (img) {
var a=img.randomAccess$();
var N=(img.size$()|0);
var data=Clazz.array(Integer.TYPE, [N]);
var dim=Clazz.array(Long.TYPE, [img.numDimensions$()]);
var pos=Clazz.array(Long.TYPE, [img.numDimensions$()]);
img.dimensions$JA(dim);
for (var i=0; i < N; ++i) {
$I$(5).indexToPosition$J$JA$JA(i, dim, pos);
a.setPosition$JA(pos);
data[i]=a.get$().get$();
}
return data;
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var b=Clazz.new_($I$(6,1));
b.setUp$();
for (var iteration=0; iteration < 10; ++iteration) {
System.out.println$S("array to RandomAccessibleIntervalCursor( array ) copy");
$I$(7).benchmarkAndPrint$I$Z$Runnable(20, false, ((P$._.RandomAccessibleIntervalCursorBenchmark$4645||
(function(){/*a*/var C$=Clazz.newClass(P$, "_.RandomAccessibleIntervalCursorBenchmark$4645", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
_.RandomAccessibleIntervalCursorBenchmark.copy$TC$TD(this.$finals$.b.array1.cursor$(), );
});
})()
), Clazz.new_(_.RandomAccessibleIntervalCursorBenchmark$4645.$init$, [this, {b:b}])));
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:18 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
