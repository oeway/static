(function(){var P$=Clazz.newPackage("io.scif.util"),I$=[[0,'java.security.MessageDigest','java.nio.ByteBuffer','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImageHash");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hashImg$net_imglib2_IterableInterval', function (img) {
var digest=null;
try {
digest=$I$(1).getInstance$S("SHA-1");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.security.NoSuchAlgorithmException")){
throw Clazz.new_(Clazz.load('IllegalStateException'));
} else {
throw exc;
}
}
var buffer=$I$(2).allocate$I(5000);
var c=img.cursor$();
while (c.hasNext$()){
if (buffer.remaining$() > 8) {
buffer.putDouble$D(c.next$().getRealDouble$());
} else {
digest.update$BA(buffer.array$());
buffer.rewind$();
}}
return C$.convertByteArrayToHexString$BA(digest.digest$());
}, 1);

Clazz.newMeth(C$, 'convertByteArrayToHexString$BA', function (arrayBytes) {
var builder=Clazz.new_($I$(3,1));
for (var i=0; i < arrayBytes.length; i++) {
builder.append$S(Integer.toString$I$I((arrayBytes[i] & 255) + 256, 16).substring$I(1));
}
return builder.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
