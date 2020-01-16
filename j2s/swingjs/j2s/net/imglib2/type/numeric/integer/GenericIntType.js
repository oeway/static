(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.img.basictypeaccess.array.IntArray','net.imglib2.util.Fraction','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GenericIntType", null, 'net.imglib2.type.numeric.integer.AbstractIntegerType', 'net.imglib2.type.NativeType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
}, 1);

C$.$fields$=[['I',['i'],'O',['img','net.imglib2.img.NativeImg','dataAccess','net.imglib2.img.basictypeaccess.IntAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (intStorage) {
Clazz.super_(C$, this);
this.img=intStorage;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (value) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(1,1).c$$I,[1]);
this.setInt$I(value);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_IntAccess', function (access) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'updateContainer$O', function (c) {
this.dataAccess=this.img.update$O(c);
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.dataAccess.getValue$I(this.i);
});

Clazz.newMeth(C$, 'setValue$I', function (f) {
this.dataAccess.setValue$I$I(this.i, f);
});

Clazz.newMeth(C$, 'getInt$', function () {
return this.dataAccess.getValue$I(this.i);
});

Clazz.newMeth(C$, 'setInt$I', function (f) {
this.dataAccess.setValue$I$I(this.i, f);
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
var a=this.getInt$();
this.setInt$I($I$(3).round$F(a * c));
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
var a=this.getInt$();
this.setInt$I(($I$(3).round$D(a * c)|0));
});

Clazz.newMeth(C$, ['add$TT','add$'], function (c) {
var a=this.getInt$();
this.setInt$I(a + c.getInt$());
});

Clazz.newMeth(C$, ['div$TT','div$'], function (c) {
var a=this.getInt$();
this.setInt$I((a/c.getInt$()|0));
});

Clazz.newMeth(C$, ['mul$TT','mul$'], function (c) {
var a=this.getInt$();
this.setInt$I(a * c.getInt$());
});

Clazz.newMeth(C$, ['sub$TT','sub$'], function (c) {
var a=this.getInt$();
this.setInt$I(a - c.getInt$());
});

Clazz.newMeth(C$, ['set$TT'], function (c) {
this.setInt$I(c.getInt$());
});

Clazz.newMeth(C$, 'setOne$', function () {
this.setInt$I(1);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.setInt$I(0);
});

Clazz.newMeth(C$, 'inc$', function () {
var a=this.getInt$();
this.setInt$I(++a);
});

Clazz.newMeth(C$, 'dec$', function () {
var a=this.getInt$();
this.setInt$I(--a);
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this.getInt$();
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
return 32;
});

Clazz.newMeth(C$, ['compareTo$TT','compareTo$'], function (other) {
return Integer.compare$I$I(this.getInt$(), other.getInt$());
});

Clazz.newMeth(C$, ['valueEquals$TT','valueEquals$'], function (t) {
return this.getInt$() == t.getInt$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!this.getClass$().isInstance$O(obj)) return false;
var t=obj;
return this.valueEquals$TT(t);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Integer.hashCode$I(this.getInt$());
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
