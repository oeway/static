(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'javax.xml.bind.DatatypeConverter','java.security.MessageDigest']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DigestUtils");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.hex=Clazz.array(Character.TYPE, -1, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['hex','char[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'string$BA', function (bytes) {
try {
return  String.instantialize(bytes, "UTF-8");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.UnsupportedEncodingException")){
return  String.instantialize(bytes);
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'bytes$S', function (s) {
try {
return s.getBytes$S("UTF-8");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.UnsupportedEncodingException")){
return s.getBytes$();
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'bytes$I', function (i) {
return Clazz.array(Byte.TYPE, -1, [($b$[0] = (255 & (i >>> 24)), $b$[0]), ($b$[0] = (255 & (i >>> 16)), $b$[0]), ($b$[0] = (255 & (i >>> 8)), $b$[0]), ($b$[0] = (255 & i), $b$[0])]);
}, 1);

Clazz.newMeth(C$, 'hex$BA', function (bytes) {
var buffer=Clazz.array(Character.TYPE, [bytes.length * 2]);
for (var i=0; i < bytes.length; i++) {
buffer[i * 2]=C$.hex[(bytes[i] & 240) >> 4];
buffer[i * 2 + 1]=C$.hex[bytes[i] & 15];
}
return  String.instantialize(buffer);
}, 1);

Clazz.newMeth(C$, 'base64$BA', function (bytes) {
return $I$(1).printBase64Binary$BA(bytes);
}, 1);

Clazz.newMeth(C$, 'hash$S', function (s) {
return C$.bytes$I(s.hashCode$());
}, 1);

Clazz.newMeth(C$, 'hash$BA', function (bytes) {
return C$.hash$S(C$.string$BA(bytes));
}, 1);

Clazz.newMeth(C$, 'sha1$BA', function (bytes) {
return C$.digest$S$BA("SHA-1", bytes);
}, 1);

Clazz.newMeth(C$, 'md5$BA', function (bytes) {
return C$.digest$S$BA("MD5", bytes);
}, 1);

Clazz.newMeth(C$, 'digest$S$BA', function (algorithm, bytes) {
try {
var digest=$I$(2).getInstance$S(algorithm);
digest.update$BA(bytes);
return digest.digest$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.security.NoSuchAlgorithmException")){
return null;
} else {
throw exc;
}
}
}, 1);

Clazz.newMeth(C$, 'best$S', function (s) {
var bytes=C$.bytes$S(s);
var best=C$.sha1$BA(bytes);
if (best == null ) best=C$.md5$BA(bytes);
if (best == null ) best=C$.hash$S(s);
return best;
}, 1);

Clazz.newMeth(C$, 'best$BA', function (bytes) {
var best=C$.sha1$BA(bytes);
if (best == null ) best=C$.md5$BA(bytes);
if (best == null ) best=C$.hash$BA(bytes);
return best;
}, 1);

Clazz.newMeth(C$, 'bestHex$S', function (text) {
return C$.hex$BA(C$.best$S(text));
}, 1);

Clazz.newMeth(C$, 'bestHex$BA', function (bytes) {
return C$.hex$BA(C$.best$BA(bytes));
}, 1);

Clazz.newMeth(C$, 'bestBase64$S', function (text) {
return C$.base64$BA(C$.best$S(text));
}, 1);

Clazz.newMeth(C$, 'bestBase64$BA', function (bytes) {
return C$.base64$BA(C$.best$BA(bytes));
}, 1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
