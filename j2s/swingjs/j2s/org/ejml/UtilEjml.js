(function(){var P$=Clazz.newPackage("org.ejml"),I$=[[0,'org.ejml.data.DenseMatrix64F','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UtilEjml");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.VERSION="0.24";
C$.TOLERANCE=1.0E-8;
C$.EPS=Math.pow(2, -52);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['D',['TOLERANCE','EPS'],'S',['VERSION']]]

Clazz.newMeth(C$, 'isUncountable$D', function (val) {
return Double.isNaN$D(val) || Double.isInfinite$D(val) ;
}, 1);

Clazz.newMeth(C$, 'memset$DA$D', function (data, val) {
for (var i=0; i < data.length; i++) {
data[i]=val;
}
}, 1);

Clazz.newMeth(C$, 'memset$DA$D$I', function (data, val, length) {
for (var i=0; i < length; i++) {
data[i]=val;
}
}, 1);

Clazz.newMeth(C$, 'memset$IA$I$I', function (data, val, length) {
for (var i=0; i < length; i++) {
data[i]=val;
}
}, 1);

Clazz.newMeth(C$, 'setnull$TTA', function (array) {
for (var i=0; i < array.length; i++) {
array[i]=null;
}
}, 1);

Clazz.newMeth(C$, 'max$DA$I$I', function (array, start, length) {
var max=array[start];
var end=start + length;
for (var i=start + 1; i < end; i++) {
var v=array[i];
if (v > max ) {
max=v;
}}
return max;
}, 1);

Clazz.newMeth(C$, 'parseMatrix$S$I', function (s, numColumns) {
var vals=s.split$S("(\\s)+");
var start=vals[0].isEmpty$() ? 1 : 0;
var numRows=((vals.length - start)/numColumns|0);
var ret=Clazz.new_($I$(1,1).c$$I$I,[numRows, numColumns]);
var index=start;
for (var i=0; i < numRows; i++) {
for (var j=0; j < numColumns; j++) {
ret.set$I$I$D(i, j, Double.parseDouble$S(vals[index++]));
}
}
return ret;
}, 1);

Clazz.newMeth(C$, 'sortByIndex$DA$I', function (data, size) {
var idx=Clazz.array(Integer, [size]);
for (var i=0; i < size; i++) {
idx[i]=new Integer(i);
}
$I$(2).sort$TTA$java_util_Comparator(idx, ((P$.UtilEjml$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UtilEjml$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$Integer$Integer','compare$','compare$TT$TT'], function (o1, o2) {
return Double.compare$D$D(this.$finals$.data[(o1).valueOf()], this.$finals$.data[(o2).valueOf()]);
});
})()
), Clazz.new_(P$.UtilEjml$1.$init$, [this, {data:data}])));
return idx;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
