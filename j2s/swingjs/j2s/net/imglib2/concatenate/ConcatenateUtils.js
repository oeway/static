(function(){var P$=Clazz.newPackage("net.imglib2.concatenate"),I$=[[0,'net.imglib2.concatenate.Concatenable','net.imglib2.concatenate.PreConcatenable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConcatenateUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'print$java_util_List', function (concatenatables) {
var iterator=concatenatables.listIterator$();
System.out.print$S(" ====  ");
while (iterator.hasNext$()){
var a=iterator.next$();
System.out.print$O(a);
if (iterator.hasNext$()) System.out.print$S(" x ");
}
System.out.println$();
}, 1);

Clazz.newMeth(C$, 'join$java_util_List', function (objects) {
var oldConcatenablesSize;
do {
oldConcatenablesSize=objects.size$();
if (oldConcatenablesSize >= 2) {
var iterator=objects.listIterator$();
var c1=null;
var c2=iterator.next$();
while (iterator.hasNext$()){
c1=c2;
c2=iterator.next$();
if (Clazz.getClass($I$(1),['concatenate$TA','getConcatenableClass$']).isInstance$O(c1) && (c1).getConcatenableClass$().isInstance$O(c2) ) {
c2=(c1).concatenate$TA(c2);
iterator.remove$();
iterator.previous$();
iterator.set$TE(c2);
iterator.next$();
} else if (Clazz.getClass($I$(2),['getPreConcatenableClass$','preConcatenate$TA']).isInstance$O(c2) && (c2).getPreConcatenableClass$().isInstance$O(c1) ) {
c2=(c2).preConcatenate$TA(c1);
iterator.previous$();
iterator.previous$();
iterator.remove$();
iterator.next$();
iterator.set$TE(c2);
}}
}} while (oldConcatenablesSize != objects.size$());
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
