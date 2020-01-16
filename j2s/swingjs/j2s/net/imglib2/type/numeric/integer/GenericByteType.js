(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.img.basictypeaccess.array.ByteArray','net.imglib2.util.Fraction','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GenericByteType", null, 'net.imglib2.type.numeric.integer.AbstractIntegerType', 'net.imglib2.type.NativeType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
}, 1);

C$.$fields$=[['I',['i'],'O',['img','net.imglib2.img.NativeImg','dataAccess','net.imglib2.img.basictypeaccess.ByteAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (byteStorage) {
Clazz.super_(C$, this);
this.img=byteStorage;
}, 1);

Clazz.newMeth(C$, 'c$$B', function (value) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(1,1).c$$I,[1]);
this.setByte$B(($b$[0] = value, $b$[0]));
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_ByteAccess', function (access) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$B.apply(this, [($b$[0] = 0, $b$[0])]);
}, 1);

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'updateContainer$O', function (c) {
this.dataAccess=this.img.update$O(c);
});

Clazz.newMeth(C$, 'getValue$', function () {
return $b$[0] = this.dataAccess.getValue$I(this.i), $b$[0];
});

Clazz.newMeth(C$, 'setValue$B', function (f) {
this.dataAccess.setValue$I$B(this.i, ($b$[0] = f, $b$[0]));
});

Clazz.newMeth(C$, 'getByte$', function () {
return $b$[0] = this.dataAccess.getValue$I(this.i), $b$[0];
});

Clazz.newMeth(C$, 'setByte$B', function (f) {
this.dataAccess.setValue$I$B(this.i, ($b$[0] = f, $b$[0]));
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
var a=($b$[0] = this.getByte$(), $b$[0]);
this.setByte$B(($b$[0] = ($I$(3).round$F(a * c)|0), $b$[0]));
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
var a=($b$[0] = this.getByte$(), $b$[0]);
this.setByte$B(($b$[0] = ($I$(3).round$D(a * c)|0), $b$[0]));
});

Clazz.newMeth(C$, ['add$TT','add$'], function (c) {
var a=($b$[0] = this.getByte$(), $b$[0]);
this.setByte$B(($b$[0] = ((a + c.getByte$())|0), $b$[0]));
});

Clazz.newMeth(C$, ['div$TT','div$'], function (c) {
var a=($b$[0] = this.getByte$(), $b$[0]);
this.setByte$B(($b$[0] = (((a/c.getByte$()|0))|0), $b$[0]));
});

Clazz.newMeth(C$, ['mul$TT','mul$'], function (c) {
var a=($b$[0] = this.getByte$(), $b$[0]);
this.setByte$B(($b$[0] = ((a * c.getByte$())|0), $b$[0]));
});

Clazz.newMeth(C$, ['sub$TT','sub$'], function (c) {
var a=($b$[0] = this.getByte$(), $b$[0]);
this.setByte$B(($b$[0] = ((a - c.getByte$())|0), $b$[0]));
});

Clazz.newMeth(C$, ['set$TT'], function (c) {
this.setByte$B(($b$[0] = c.getByte$(), $b$[0]));
});

Clazz.newMeth(C$, 'setOne$', function () {
this.setByte$B(($b$[0] = 1, $b$[0]));
});

Clazz.newMeth(C$, 'setZero$', function () {
this.setByte$B(($b$[0] = 0, $b$[0]));
});

Clazz.newMeth(C$, 'inc$', function () {
var a=($b$[0] = this.getByte$(), $b$[0]);
this.setByte$B(($b$[0] = (($b$[0]=++a,a=$b$[0],$b$[0])), $b$[0]));
});

Clazz.newMeth(C$, 'dec$', function () {
var a=($b$[0] = this.getByte$(), $b$[0]);
this.setByte$B(($b$[0] = (($b$[0]=--a,a=$b$[0],$b$[0])), $b$[0]));
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this.getByte$();
});

Clazz.newMeth(C$, 'updateIndex$I', function (index) {
this.i=index;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.i;
});

Clazz.newMeth(C$, 'incIndex$', function () {
++this.i;
});

Clazz.newMeth(C$, 'incIndex$I', function (increment) {
this.i+=increment;
});

Clazz.newMeth(C$, 'decIndex$', function () {
--this.i;
});

Clazz.newMeth(C$, 'decIndex$I', function (decrement) {
this.i-=decrement;
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return 8;
});

Clazz.newMeth(C$, ['compareTo$TT','compareTo$'], function (other) {
return Byte.compare$B$B(($b$[0] = this.getByte$(), $b$[0]), ($b$[0] = other.getByte$(), $b$[0]));
});

Clazz.newMeth(C$, ['valueEquals$TT','valueEquals$'], function (t) {
return this.getByte$() == t.getByte$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!this.getClass$().isInstance$O(obj)) return false;
var t=obj;
return this.valueEquals$TT(t);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Byte.hashCode$B(($b$[0] = this.getByte$(), $b$[0]));
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
