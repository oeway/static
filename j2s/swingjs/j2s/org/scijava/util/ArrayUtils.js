(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'java.util.Collection','org.scijava.util.CharArray','org.scijava.util.ByteArray','org.scijava.util.BoolArray','org.scijava.util.ShortArray','org.scijava.util.IntArray','org.scijava.util.LongArray','org.scijava.util.FloatArray','org.scijava.util.DoubleArray','org.scijava.util.ObjectArray','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArrayUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'array$TTA', function (values) {
return values;
}, 1);

Clazz.newMeth(C$, 'toCollection$O', function (value) {
if (value == null  || Clazz.getClass($I$(1),['add$TE','addAll$java_util_Collection','clear$','contains$O','containsAll$java_util_Collection','equals$O','hashCode$','isEmpty$','iterator$','parallelStream$','remove$O','removeAll$java_util_Collection','removeIf$java_util_function_Predicate','retainAll$java_util_Collection','size$','spliterator$','stream$','toArray$','toArray$TTA']).isAssignableFrom$Class(value.getClass$()) ) {
return value;
}if (Clazz.instanceOf(value, Clazz.array(Character.TYPE, -1))) {
return Clazz.new_($I$(2,1).c$$CA,[value]);
}if (Clazz.instanceOf(value, Clazz.array(Byte.TYPE, -1))) {
return Clazz.new_($I$(3,1).c$$BA,[value]);
}if (Clazz.instanceOf(value, Clazz.array(Boolean.TYPE, -1))) {
return Clazz.new_($I$(4,1).c$$ZA,[value]);
}if (Clazz.instanceOf(value, Clazz.array(Short.TYPE, -1))) {
return Clazz.new_($I$(5,1).c$$HA,[value]);
}if (Clazz.instanceOf(value, Clazz.array(Integer.TYPE, -1))) {
return Clazz.new_($I$(6,1).c$$IA,[value]);
}if (Clazz.instanceOf(value, Clazz.array(Long.TYPE, -1))) {
return Clazz.new_($I$(7,1).c$$JA,[value]);
}if (Clazz.instanceOf(value, Clazz.array(Float.TYPE, -1))) {
return Clazz.new_($I$(8,1).c$$FA,[value]);
}if (Clazz.instanceOf(value, Clazz.array(Double.TYPE, -1))) {
return Clazz.new_($I$(9,1).c$$DA,[value]);
}if (Clazz.instanceOf(value, Clazz.array(java.lang.Object, -1))) {
return Clazz.new_(1,{E:"java.lang.Object"},$I$(10,1).c$$TEA,[value]);
}var list=Clazz.new_(1,{E:"java.lang.Object"},$I$(10,1).c$$Class,[Clazz.getClass(java.lang.Object)]);
list.add$TE(value);
return list;
}, 1);

Clazz.newMeth(C$, 'allocate$JA', function (sizes) {
if (sizes == null ) return null;
if (sizes.length == 0) return Clazz.array(Byte.TYPE, [0]);
var total=C$.safeMultiply32$JA(sizes);
return Clazz.array(Byte.TYPE, [total]);
}, 1);

Clazz.newMeth(C$, 'safeMultiply32$JA', function (sizes) {
if (sizes.length == 0) return 0;
var total=1;
for (var size, $size = 0, $$size = sizes; $size<$$size.length&&((size=($$size[$size])),1);$size++) {
if (size < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid array size: " + C$.sizeAsProduct$JA(sizes)]);
}total*=size;
if (total > 2147483647) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array size too large: " + C$.sizeAsProduct$JA(sizes)]);
}}
return (total|0);
}, 1);

Clazz.newMeth(C$, 'safeMultiply64$JA', function (sizes) {
if (sizes.length == 0) return 0;
var total=1;
for (var size, $size = 0, $$size = sizes; $size<$$size.length&&((size=($$size[$size])),1);$size++) {
if (size < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid array size: " + C$.sizeAsProduct$JA(sizes)]);
}if (C$.willOverflow$J$J(total, size)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array size too large: " + C$.sizeAsProduct$JA(sizes)]);
}total*=size;
}
return total;
}, 1);

Clazz.newMeth(C$, 'contains$BA$B', function (array, value) {
return C$.indexOf$BA$B(array, ($b$[0] = value, $b$[0])) != -1;
}, 1);

Clazz.newMeth(C$, 'contains$ZA$Z', function (array, value) {
return C$.indexOf$ZA$Z(array, value) != -1;
}, 1);

Clazz.newMeth(C$, 'contains$CA$C', function (array, value) {
return C$.indexOf$CA$C(array, value) != -1;
}, 1);

Clazz.newMeth(C$, 'contains$DA$D', function (array, value) {
return C$.indexOf$DA$D(array, value) != -1;
}, 1);

Clazz.newMeth(C$, 'contains$FA$F', function (array, value) {
return C$.indexOf$FA$F(array, value) != -1;
}, 1);

Clazz.newMeth(C$, 'contains$IA$I', function (array, value) {
return C$.indexOf$IA$I(array, value) != -1;
}, 1);

Clazz.newMeth(C$, 'contains$JA$J', function (array, value) {
return C$.indexOf$JA$J(array, value) != -1;
}, 1);

Clazz.newMeth(C$, 'contains$HA$H', function (array, value) {
return C$.indexOf$HA$H(array, value) != -1;
}, 1);

Clazz.newMeth(C$, 'contains$OA$O', function (array, value) {
return C$.indexOf$OA$O(array, value) != -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$ZA$Z', function (array, value) {
for (var i=0; i < array.length; i++) {
if (array[i] == value ) return i;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$BA$B', function (array, value) {
for (var i=0; i < array.length; i++) {
if (array[i] == value) return i;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$CA$C', function (array, value) {
for (var i=0; i < array.length; i++) {
if (array[i] == value) return i;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$DA$D', function (array, value) {
for (var i=0; i < array.length; i++) {
if (array[i] == value ) return i;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$FA$F', function (array, value) {
for (var i=0; i < array.length; i++) {
if (array[i] == value ) return i;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$IA$I', function (array, value) {
for (var i=0; i < array.length; i++) {
if (array[i] == value) return i;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$JA$J', function (array, value) {
for (var i=0; i < array.length; i++) {
if (array[i] == value) return i;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$HA$H', function (array, value) {
for (var i=0; i < array.length; i++) {
if (array[i] == value) return i;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$OA$O', function (array, value) {
for (var i=0; i < array.length; i++) {
if (value == null ) {
if (array[i] == null ) return i;
} else if (value.equals$O(array[i])) return i;
}
return -1;
}, 1);

Clazz.newMeth(C$, 'sizeAsProduct$JA', function (sizes) {
var sb=Clazz.new_($I$(11,1));
var first=true;
for (var size, $size = 0, $$size = sizes; $size<$$size.length&&((size=($$size[$size])),1);$size++) {
if (first) first=false;
 else sb.append$S(" x ");
sb.append$J(size);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'willOverflow$J$J', function (v1, v2) {
{
return v1*v2 == v1*v2+1;
}
}, 1);
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[['M:array','_.T[]','array$TTA',['SafeVarargs']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
