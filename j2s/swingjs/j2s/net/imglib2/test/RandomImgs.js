(function(){var P$=Clazz.newPackage("net.imglib2.test"),p$1={},I$=[[0,'java.util.Random','net.imglib2.util.Intervals','net.imglib2.view.Views','net.imglib2.img.array.ArrayImgFactory','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RandomImgs");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['random','java.util.Random']]]

Clazz.newMeth(C$, 'seed$I', function (seed) {
return Clazz.new_(C$.c$$I,[seed]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (seed) {
;C$.$init$.apply(this);
this.random=Clazz.new_($I$(1,1).c$$J,[seed]);
}, 1);

Clazz.newMeth(C$, 'nextImage$TT$net_imglib2_Interval', function (type, interval) {
var sizes=$I$(2).dimensionsAsLongArray$net_imglib2_Dimensions(interval);
var min=$I$(2).minAsLongArray$net_imglib2_Interval(interval);
return $I$(3).translate$net_imglib2_RandomAccessibleInterval$JA(this.nextImage$TT$JA(type, sizes), min);
});

Clazz.newMeth(C$, 'nextImage$TT$JA', function (type, dims) {
var result=Clazz.new_(1,{T:"Object"},$I$(4,1).c$$TT,[type]).create$JA(dims);
return this.randomize$TI(result);
});

Clazz.newMeth(C$, 'randomize$TI', function (image) {
var type=$I$(5).getTypeFromInterval$TF(image);
$I$(3).iterable$net_imglib2_RandomAccessibleInterval(image).forEach$java_util_function_Consumer(p$1.randomSetter$TT.apply(this, [type]));
return image;
});

Clazz.newMeth(C$, 'randomSetter$TT', function (type) {
if ((Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.UnsignedByteType")) || (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.ByteType")) || (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.ShortType")) || (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.UnsignedShortType")) || (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.IntType"))  ) return (P$.RandomImgs$lambda1$||(P$.RandomImgs$lambda1$=(((P$.RandomImgs$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RandomImgs$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (b) { return ((b).setInteger$I(this.b$['net.imglib2.test.RandomImgs'].random.nextInt$()));});
})()
), Clazz.new_(1,{T:"Object"},P$.RandomImgs$lambda1.$init$, [this, null])))));
if ((Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.UnsignedLongType")) || (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.UnsignedIntType")) || (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.AbstractIntegerBitType")) || (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.UnsignedVariableBitLengthType")) || (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.LongType"))  ) return (P$.RandomImgs$lambda2$||(P$.RandomImgs$lambda2$=(((P$.RandomImgs$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RandomImgs$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (b) { return ((b).setInteger$J(this.b$['net.imglib2.test.RandomImgs'].random.nextLong$()));});
})()
), Clazz.new_(1,{T:"Object"},P$.RandomImgs$lambda2.$init$, [this, null])))));
if (Clazz.instanceOf(type, "net.imglib2.type.numeric.ARGBType")) return (P$.RandomImgs$lambda3$||(P$.RandomImgs$lambda3$=(((P$.RandomImgs$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "RandomImgs$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (b) { return ((b).set$I(this.b$['net.imglib2.test.RandomImgs'].random.nextInt$()));});
})()
), Clazz.new_(1,{T:"Object"},P$.RandomImgs$lambda3.$init$, [this, null])))));
if (Clazz.instanceOf(type, "net.imglib2.type.numeric.real.FloatType")) return (P$.RandomImgs$lambda4$||(P$.RandomImgs$lambda4$=(((P$.RandomImgs$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "RandomImgs$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (b) { return ((b).setReal$F(this.b$['net.imglib2.test.RandomImgs'].random.nextFloat$()));});
})()
), Clazz.new_(1,{T:"Object"},P$.RandomImgs$lambda4.$init$, [this, null])))));
if (Clazz.instanceOf(type, "net.imglib2.type.numeric.real.DoubleType")) return (P$.RandomImgs$lambda5$||(P$.RandomImgs$lambda5$=(((P$.RandomImgs$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "RandomImgs$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (b) { return ((b).setReal$D(this.b$['net.imglib2.test.RandomImgs'].random.nextDouble$()));});
})()
), Clazz.new_(1,{T:"Object"},P$.RandomImgs$lambda5.$init$, [this, null])))));
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Randomization of type: " + type.getClass$() + " is not supported." ]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
