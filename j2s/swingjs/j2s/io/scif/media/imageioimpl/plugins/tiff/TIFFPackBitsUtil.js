(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "TIFFPackBitsUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dstData=Clazz.array(Byte.TYPE, [8192]);
this.dstIndex=0;
}, 1);

C$.$fields$=[['I',['dstIndex'],'O',['dstData','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'ensureCapacity$I', function (bytesToAdd) {
if (this.dstIndex + bytesToAdd > this.dstData.length) {
var newDstData=Clazz.array(Byte.TYPE, [Math.max(((this.dstData.length * 1.2)|0), this.dstIndex + bytesToAdd)]);
System.arraycopy$O$I$O$I$I(this.dstData, 0, newDstData, 0, this.dstData.length);
this.dstData=newDstData;
}}, p$1);

Clazz.newMeth(C$, 'decode$BA', function (srcData) {
var inIndex=0;
while (inIndex < srcData.length){
var b=($b$[0] = srcData[inIndex++], $b$[0]);
if (b >= 0 && b <= 127 ) {
p$1.ensureCapacity$I.apply(this, [b + 1]);
for (var i=0; i < b + 1; i++) {
this.dstData[this.dstIndex++]=(srcData[inIndex++]|0);
}
} else if (b <= -1 && b >= -127 ) {
var repeat=($b$[0] = srcData[inIndex++], $b$[0]);
p$1.ensureCapacity$I.apply(this, [(($b$[0]=-b,b=$b$[0],$b$[0])) + 1]);
for (var i=0; i < ((($b$[0]=-b,b=$b$[0],$b$[0])) + 1); i++) {
this.dstData[this.dstIndex++]=(repeat|0);
}
} else {
++inIndex;
}}
var newDstData=Clazz.array(Byte.TYPE, [this.dstIndex]);
System.arraycopy$O$I$O$I$I(this.dstData, 0, newDstData, 0, this.dstIndex);
return newDstData;
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
