(function(){var P$=Clazz.newPackage("net.imglib2.type"),I$=[[0,'net.imglib2.img.basictypeaccess.array.LongArray']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractBit64Type", null, 'net.imglib2.type.AbstractBitType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['mask','invMask']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg$I', function (bitStorage, nBits) {
;C$.superclazz.c$$net_imglib2_img_NativeImg$I.apply(this,[bitStorage, nBits]);C$.$init$.apply(this);
if (nBits < 1 || nBits > 64 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Supports only bit depths between 1 and 64, can't take " + nBits]);
 else if (nBits == 64) this.mask=-1;
 else this.mask=(((Math.pow(2, nBits) - 1)|0));
this.invMask=~this.mask;
}, 1);

Clazz.newMeth(C$, 'c$$J$I', function (value, nBits) {
C$.c$$net_imglib2_img_NativeImg$I.apply(this, [null, nBits]);
this.updateIndex$I(0);
this.dataAccess=Clazz.new_($I$(1,1).c$$I,[1]);
this.setBits$J(value);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_LongAccess$I', function (access, nBits) {
C$.c$$net_imglib2_img_NativeImg$I.apply(this, [null, nBits]);
this.updateIndex$I(0);
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (nBits) {
C$.c$$J$I.apply(this, [0, nBits]);
}, 1);

Clazz.newMeth(C$, 'getBits$', function () {
var k=this.i * this.nBits;
var i1=((k >>> 6)|0);
var shift=k & 63;
var v=this.dataAccess.getValue$I(i1);
if (0 == shift) {
return v & this.mask;
} else {
var antiShift=64 - shift;
if (antiShift < this.nBits) {
var v1=(v >>> shift) & (this.mask >>> (this.nBits - antiShift));
var v2=(this.dataAccess.getValue$I(i1 + 1) & (this.mask >>> antiShift)) << antiShift;
return v1 | v2;
} else {
return (v >>> shift) & this.mask;
}}});

Clazz.newMeth(C$, 'setBits$J', function (value) {
var k=this.i * this.nBits;
var i1=((k >>> 6)|0);
var shift=k & 63;
var safeValue=value & this.mask;
{
if (0 == shift) {
this.dataAccess.setValue$I$J(i1, (this.dataAccess.getValue$I(i1) & this.invMask) | safeValue);
} else {
var antiShift=64 - shift;
var v=this.dataAccess.getValue$I(i1);
if (antiShift < this.nBits) {
var v1=(v & (-1 >>> antiShift)) | ((safeValue & (this.mask >>> (this.nBits - antiShift))) << shift);
this.dataAccess.setValue$I$J(i1, v1);
var v2=(this.dataAccess.getValue$I(i1 + 1) & (-1 << (this.nBits - antiShift))) | (safeValue >>> antiShift);
this.dataAccess.setValue$I$J(i1 + 1, v2);
} else {
if (0 == v) {
this.dataAccess.setValue$I$J(i1, safeValue << shift);
} else {
this.dataAccess.setValue$I$J(i1, (v & ~(this.mask << shift)) | (safeValue << shift));
}}}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
