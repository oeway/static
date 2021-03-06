(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'sun.security.x509.X509CRLEntryImpl']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "X509CRLEntry", null, null, 'java.security.cert.X509Extension');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'equals$O', function (other) {
if (this === other ) return true;
if (!(Clazz.instanceOf(other, "java.security.cert.X509CRLEntry"))) return false;
try {
var thisCRLEntry=this.getEncoded$();
var otherCRLEntry=(other).getEncoded$();
if (thisCRLEntry.length != otherCRLEntry.length) return false;
for (var i=0; i < thisCRLEntry.length; i++) if (thisCRLEntry[i] != otherCRLEntry[i]) return false;

} catch (ce) {
if (Clazz.exceptionOf(ce,"java.security.cert.CRLException")){
return false;
} else {
throw ce;
}
}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var retval=0;
try {
var entryData=this.getEncoded$();
for (var i=1; i < entryData.length; i++) retval+=entryData[i] * i;

} catch (ce) {
if (Clazz.exceptionOf(ce,"java.security.cert.CRLException")){
return (retval);
} else {
throw ce;
}
}
return (retval);
});

Clazz.newMeth(C$, 'getCertificateIssuer$', function () {
return null;
});

Clazz.newMeth(C$, 'getRevocationReason$', function () {
if (!this.hasExtensions$()) {
return null;
}return $I$(1).getRevocationReason$java_security_cert_X509CRLEntry(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:50 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
