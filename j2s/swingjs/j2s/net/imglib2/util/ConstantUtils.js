(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[[0,'net.imglib2.util.ConstantUtils$1$ConstantRandomAccess','net.imglib2.view.Views','net.imglib2.util.ConstantUtils$2$ConstantRealRandomAccess']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConstantUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'constantRandomAccessible$TT$I', function (constant, numDimensions) {
return ((P$.ConstantUtils$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ConstantUtils$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'net.imglib2.RandomAccessible', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.$finals$.numDimensions;
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});
})()
), Clazz.new_(P$.ConstantUtils$1.$init$, [this, {numDimensions:numDimensions}]));
}, 1);

Clazz.newMeth(C$, 'constantRandomAccessibleInterval$TT$I$net_imglib2_Interval', function (constant, numDimensions, interval) {
return $I$(2).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.constantRandomAccessible$TT$I(constant, numDimensions), interval);
}, 1);

Clazz.newMeth(C$, 'constantRealRandomAccessible$TT$I', function (constant, numDimensions) {
return ((P$.ConstantUtils$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ConstantUtils$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'net.imglib2.RealRandomAccessible', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.$finals$.numDimensions;
});

Clazz.newMeth(C$, 'realRandomAccess$', function () {
return Clazz.new_($I$(3,1), [this, null]);
});

Clazz.newMeth(C$, 'realRandomAccess$net_imglib2_RealInterval', function (interval) {
return this.realRandomAccess$();
});
})()
), Clazz.new_(P$.ConstantUtils$2.$init$, [this, {numDimensions:numDimensions}]));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
