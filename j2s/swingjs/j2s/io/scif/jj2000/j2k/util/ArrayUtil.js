(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ArrayUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'intArraySet$IA$I', function (arr, val) {
var i;
var len;
var len2;
len=arr.length;
if (len < 8) {
for (i=len - 1; i >= 0; i--) {
arr[i]=val;
}
} else {
len2=len >> 1;
for (i=0; i < 4; i++) {
arr[i]=val;
}
for (; i <= len2; i<<=1) {
System.arraycopy$O$I$O$I$I(arr, 0, arr, i, i);
}
if (i < len) {
System.arraycopy$O$I$O$I$I(arr, 0, arr, i, len - i);
}}}, 1);

Clazz.newMeth(C$, 'byteArraySet$BA$B', function (arr, val) {
var i;
var len;
var len2;
len=arr.length;
if (len < 8) {
for (i=len - 1; i >= 0; i--) {
arr[i]=(val|0);
}
} else {
len2=len >> 1;
for (i=0; i < 4; i++) {
arr[i]=(val|0);
}
for (; i <= len2; i<<=1) {
System.arraycopy$O$I$O$I$I(arr, 0, arr, i, i);
}
if (i < len) {
System.arraycopy$O$I$O$I$I(arr, 0, arr, i, len - i);
}}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
