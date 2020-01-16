(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.common");
/*c*/var C$=Clazz.newClass(P$, "LZWStringTable");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['H',['numStrings_'],'O',['strChr_','byte[]','strNxt_','short[]','+strHsh_','strLen_','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.strChr_=Clazz.array(Byte.TYPE, [4096]);
this.strNxt_=Clazz.array(Short.TYPE, [4096]);
this.strLen_=Clazz.array(Integer.TYPE, [4096]);
this.strHsh_=Clazz.array(Short.TYPE, [9973]);
}, 1);

Clazz.newMeth(C$, 'AddCharString$H$B', function (index, b) {
var hshidx;
if (this.numStrings_ >= 4096) {
return 65535;
}hshidx=C$.Hash$H$B(index, ($b$[0] = b, $b$[0]));
while (this.strHsh_[hshidx] != -1)hshidx=(hshidx + 2039) % 9973;

this.strHsh_[hshidx]=this.numStrings_;
this.strChr_[this.numStrings_]=(b|0);
if (index == -1) {
this.strNxt_[this.numStrings_]=-1;
this.strLen_[this.numStrings_]=1;
} else {
this.strNxt_[this.numStrings_]=index;
this.strLen_[this.numStrings_]=this.strLen_[index] + 1;
}return ($s$[0]=this.numStrings_,this.numStrings_=(++$s$[0],$s$[0]),--$s$[0],$s$[0]);
});

Clazz.newMeth(C$, 'FindCharString$H$B', function (index, b) {
var hshidx;
var nxtidx;
if (index == -1) return ($s$[0] = (b & 255), $s$[0]);
hshidx=C$.Hash$H$B(index, ($b$[0] = b, $b$[0]));
while ((nxtidx=this.strHsh_[hshidx]) != -1){
if (this.strNxt_[nxtidx] == index && this.strChr_[nxtidx] == b ) return ($s$[0] = nxtidx, $s$[0]);
hshidx=(hshidx + 2039) % 9973;
}
return -1;
});

Clazz.newMeth(C$, 'ClearTable$I', function (codesize) {
this.numStrings_=($s$[0] = 0, $s$[0]);
for (var q=0; q < 9973; q++) this.strHsh_[q]=-1;

var w=(1 << codesize) + 2;
for (var q=0; q < w; q++) this.AddCharString$H$B(-1, ($b$[0] = (q|0), $b$[0]));

});

Clazz.newMeth(C$, 'Hash$H$B', function (index, lastbyte) {
return ((($s$[0] = (lastbyte << 8), $s$[0]) ^ index) & 65535) % 9973;
}, 1);

Clazz.newMeth(C$, 'expandCode$BA$I$H$I', function (buf, offset, code, skipHead) {
if (offset == -2) {
if (skipHead == 1) skipHead=0;
}if (code == -1 || skipHead == this.strLen_[code] ) return 0;
var expandLen;
var codeLen=this.strLen_[code] - skipHead;
var bufSpace=buf.length - offset;
if (bufSpace > codeLen) expandLen=codeLen;
 else expandLen=bufSpace;
var skipTail=codeLen - expandLen;
var idx=offset + expandLen;
while ((idx > offset) && (code != -1) ){
if (--skipTail < 0) {
buf[--idx]=(this.strChr_[code]|0);
}code=this.strNxt_[code];
}
if (codeLen > expandLen) return -expandLen;
 else return expandLen;
});

Clazz.newMeth(C$, 'dump$java_io_PrintStream', function (out) {
var i;
for (i=258; i < this.numStrings_; ++i) out.println$S(" strNxt_[" + i + "] = " + this.strNxt_[i] + " strChr_ " + Integer.toHexString$I(this.strChr_[i] & 255) + " strLen_ " + Integer.toHexString$I(this.strLen_[i]) );

});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
