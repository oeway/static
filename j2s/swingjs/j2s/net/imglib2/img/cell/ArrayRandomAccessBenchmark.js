(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),I$=[[0,'java.util.Random','net.imglib2.img.array.ArrayImgFactory','net.imglib2.type.numeric.integer.IntType','net.imglib2.util.IntervalIndexer','java.util.Collections','java.util.ArrayList',['.','.ArrayRandomAccessBenchmark']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArrayRandomAccessBenchmark", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Benchmark',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numValues'],'L',['intDataSum'],'O',['dimensions','long[]','intData','int[]','intImg','net.imglib2.img.array.ArrayImg','+intImgCopy']]]

Clazz.newMeth(C$, 'createSourceData$', function () {
this.dimensions=Clazz.array(Long.TYPE, -1, [480, 480, 102]);
this.numValues=1;
for (var d=0; d < this.dimensions.length; ++d) this.numValues*=this.dimensions[d];

this.intData=Clazz.array(Integer.TYPE, [this.numValues]);
this.intDataSum=0;
var random=Clazz.new_($I$(1,1).c$$J,[0]);
for (var i=0; i < this.numValues; ++i) {
this.intData[i]=random.nextInt$();
this.intDataSum+=this.intData[i];
}
this.intImg=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.IntType"},$I$(2,1).c$$TT,[Clazz.new_($I$(3,1))]).create$JA(this.dimensions);
});

Clazz.newMeth(C$, 'fillImage$', function () {
var pos=Clazz.array(Integer.TYPE, [this.dimensions.length]);
var a=this.intImg.randomAccess$();
var idim=Clazz.array(Integer.TYPE, [this.dimensions.length]);
for (var d=0; d < this.dimensions.length; ++d) idim[d]=(this.dimensions[d]|0);

for (var i=0; i < this.numValues; ++i) {
$I$(4).indexToPosition$I$IA$IA(i, idim, pos);
a.setPosition$IA(pos);
a.get$().set$I(this.intData[i]);
}
});

Clazz.newMeth(C$, 'copyWithSourceIteration$net_imglib2_img_Img$net_imglib2_img_Img', function (srcImg, dstImg) {
var pos=Clazz.array(Integer.TYPE, [this.dimensions.length]);
var src=srcImg.localizingCursor$();
var dst=dstImg.randomAccess$();
while (src.hasNext$()){
src.fwd$();
src.localize$IA(pos);
dst.setPosition$IA(pos);
dst.get$().set$TT(src.get$());
}
});

Clazz.newMeth(C$, 'copyWithIterationBoth$net_imglib2_img_Img$net_imglib2_img_Img', function (srcImg, dstImg) {
var src=srcImg.cursor$();
var dst=dstImg.cursor$();
while (src.hasNext$()){
dst.next$().set$I(src.next$().get$());
}
});

Clazz.newMeth(C$, 'median$java_util_ArrayList', function (values) {
$I$(5).sort$java_util_List(values);
if (values.size$() % 2 == 1) return values.get$I(((values.size$() + 1)/2|0) - 1);
var lower=(values.get$I((values.size$()/2|0) - 1)).valueOf();
var upper=(values.get$I((values.size$()/2|0))).valueOf();
return new Long(((lower + upper)/2|0));
}, 1);

Clazz.newMeth(C$, 'benchmark$ArrayRandomAccessBenchmark_Benchmark', function (b) {
var times=Clazz.new_(1,{E:"Long"},$I$(6,1).c$$I,[100]);
var numRuns=20;
for (var i=0; i < 20; ++i) {
var startTime=System.currentTimeMillis$();
b.run$();
var endTime=System.currentTimeMillis$();
times.add$TE(new Long(endTime - startTime));
}
for (var i=0; i < 20; ++i) {
System.out.println$S("run " + i + ": " + times.get$I(i) + " ms" );
}
System.out.println$();
System.out.println$S("median: " + _.ArrayRandomAccessBenchmark.median$java_util_ArrayList(times) + " ms" );
System.out.println$();
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var randomAccessBenchmark=Clazz.new_($I$(7,1));
randomAccessBenchmark.createSourceData$();
System.out.println$S("benchmarking fill");
_.ArrayRandomAccessBenchmark.benchmark$ArrayRandomAccessBenchmark_Benchmark(((P$._.ArrayRandomAccessBenchmark$5342||
(function(){/*a*/var C$=Clazz.newClass(P$, "_.ArrayRandomAccessBenchmark$5342", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['_.ArrayRandomAccessBenchmark','ArrayRandomAccessBenchmark.Benchmark']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.randomAccessBenchmark.fillImage$();
});
})()
), Clazz.new_(_.ArrayRandomAccessBenchmark$5342.$init$, [this, {randomAccessBenchmark:randomAccessBenchmark}])));
randomAccessBenchmark.intData=null;
randomAccessBenchmark.intImgCopy=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.IntType"},$I$(2,1).c$$TT,[Clazz.new_($I$(3,1))]).create$JA(randomAccessBenchmark.dimensions);
System.out.println$S("benchmarking copy to array");
_.ArrayRandomAccessBenchmark.benchmark$ArrayRandomAccessBenchmark_Benchmark(((P$._.ArrayRandomAccessBenchmark$5680||
(function(){/*a*/var C$=Clazz.newClass(P$, "_.ArrayRandomAccessBenchmark$5680", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['_.ArrayRandomAccessBenchmark','ArrayRandomAccessBenchmark.Benchmark']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.randomAccessBenchmark.copyWithSourceIteration$net_imglib2_img_Img$net_imglib2_img_Img(this.$finals$.randomAccessBenchmark.intImg, this.$finals$.randomAccessBenchmark.intImgCopy);
});
})()
), Clazz.new_(_.ArrayRandomAccessBenchmark$5680.$init$, [this, {randomAccessBenchmark:randomAccessBenchmark}])));
System.out.println$S("benchmarking copy from array");
_.ArrayRandomAccessBenchmark.benchmark$ArrayRandomAccessBenchmark_Benchmark(((P$._.ArrayRandomAccessBenchmark$5938||
(function(){/*a*/var C$=Clazz.newClass(P$, "_.ArrayRandomAccessBenchmark$5938", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['_.ArrayRandomAccessBenchmark','ArrayRandomAccessBenchmark.Benchmark']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.randomAccessBenchmark.copyWithSourceIteration$net_imglib2_img_Img$net_imglib2_img_Img(this.$finals$.randomAccessBenchmark.intImgCopy, this.$finals$.randomAccessBenchmark.intImg);
});
})()
), Clazz.new_(_.ArrayRandomAccessBenchmark$5938.$init$, [this, {randomAccessBenchmark:randomAccessBenchmark}])));
System.out.println$S("benchmarking copy array to array using iteration");
_.ArrayRandomAccessBenchmark.benchmark$ArrayRandomAccessBenchmark_Benchmark(((P$._.ArrayRandomAccessBenchmark$6216||
(function(){/*a*/var C$=Clazz.newClass(P$, "_.ArrayRandomAccessBenchmark$6216", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['_.ArrayRandomAccessBenchmark','ArrayRandomAccessBenchmark.Benchmark']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.randomAccessBenchmark.copyWithIterationBoth$net_imglib2_img_Img$net_imglib2_img_Img(this.$finals$.randomAccessBenchmark.intImg, this.$finals$.randomAccessBenchmark.intImgCopy);
});
})()
), Clazz.new_(_.ArrayRandomAccessBenchmark$6216.$init$, [this, {randomAccessBenchmark:randomAccessBenchmark}])));
randomAccessBenchmark.intImgCopy=null;
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ArrayRandomAccessBenchmark, "Benchmark", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:16 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
