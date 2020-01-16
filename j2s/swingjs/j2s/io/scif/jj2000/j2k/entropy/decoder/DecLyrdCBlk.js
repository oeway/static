(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.decoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DecLyrdCBlk", null, 'io.scif.jj2000.j2k.entropy.CodedCBlk');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['prog'],'I',['ulx','uly','w','h','dl','nl','ftpIdx','nTrunc'],'O',['tsLengths','int[]']]]

Clazz.newMeth(C$, 'toString', function () {
var str="Coded code-block (" + this.m + "," + this.n + "): " + this.skipMSBP + " MSB skipped, " + this.dl + " bytes, " + this.nTrunc + " truncation points, " + this.nl + " layers, " + "progressive= " + this.prog + ", ulx= " + this.ulx + ", uly= " + this.uly + ", w= " + this.w + ", h= " + this.h + ", ftpIdx=" + this.ftpIdx ;
if (this.tsLengths != null ) {
str += " {";
for (var i=0; i < this.tsLengths.length; i++) str += " " + this.tsLengths[i];

str += " }";
}return str;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
