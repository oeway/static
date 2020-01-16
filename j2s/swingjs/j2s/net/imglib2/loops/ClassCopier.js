(function(){var P$=Clazz.newPackage("net.imglib2.loops"),p$1={},p$2={},I$=[[0,['net.imglib2.loops.ClassCopier','.ClassCopyLoader'],'java.io.DataInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ClassCopier", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ClassCopyLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['original','Class','bytes','byte[]']]]

Clazz.newMeth(C$, 'c$$Class$Class', function (original, interfaceOfOriginal) {
;C$.$init$.apply(this);
if (!interfaceOfOriginal.isAssignableFrom$Class(original) || interfaceOfOriginal.equals$O(original) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\"original\" must be a implementation of interface \"interfaceOfOriginal\""]);
this.original=original;
this.bytes=p$2.classToBytes$Class.apply(this, [original]);
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
var copy=p$1.bytesToClass$S$BA.apply(Clazz.new_($I$(1,1)), [this.original.getName$(), this.bytes]);
return copy;
});

Clazz.newMeth(C$, 'classToBytes$Class', function (aClass) {
var className=aClass.getName$();
var classAsPath=className.replace$C$C(".", "/") + ".class";
try {
var stream=Clazz.new_($I$(2,1).c$$java_io_InputStream,[aClass.getClassLoader$().getResourceAsStream$S(classAsPath)]);
try {
var bytes=Clazz.array(Byte.TYPE, [stream.available$()]);
stream.readFully$BA(bytes);
return bytes;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}finally{/*res*/
try{stream&&stream.close$&&stream.close$()}catch(_){}}
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ClassCopier, "ClassCopyLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'ClassLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'bytesToClass$S$BA', function (className, bytes) {
var copiedClass=C$.superclazz.prototype.defineClass$S$BA$I$I.apply(this, [className, bytes, 0, bytes.length]);
C$.superclazz.prototype.resolveClass$Class.apply(this, [copiedClass]);
return copiedClass;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
