(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractARGBDoubleType", null, null, 'net.imglib2.type.numeric.NumericType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'set$D$D$D$D', function (a, r, g, b) {
this.setA$D(a);
this.setR$D(r);
this.setG$D(g);
this.setB$D(b);
});

Clazz.newMeth(C$, ['set$TT'], function (c) {
this.set$D$D$D$D(c.getA$(), c.getR$(), c.getG$(), c.getB$());
});

Clazz.newMeth(C$, ['add$TT','add$'], function (c) {
this.set$D$D$D$D(this.getA$() + c.getA$(), this.getR$() + c.getR$(), this.getG$() + c.getG$(), this.getB$() + c.getB$());
});

Clazz.newMeth(C$, ['sub$TT','sub$'], function (c) {
this.set$D$D$D$D(this.getA$() - c.getA$(), this.getR$() - c.getR$(), this.getG$() - c.getG$(), this.getB$() - c.getB$());
});

Clazz.newMeth(C$, ['mul$TT','mul$'], function (c) {
this.set$D$D$D$D(this.getA$() * c.getA$(), this.getR$() * c.getR$(), this.getG$() * c.getG$(), this.getB$() * c.getB$());
});

Clazz.newMeth(C$, ['div$TT','div$'], function (c) {
this.set$D$D$D$D(this.getA$() / c.getA$(), this.getR$() / c.getR$(), this.getG$() / c.getG$(), this.getB$() / c.getB$());
});

Clazz.newMeth(C$, 'setZero$', function () {
this.set$D$D$D$D(0, 0, 0, 0);
});

Clazz.newMeth(C$, 'setOne$', function () {
this.set$D$D$D$D(1, 1, 1, 1);
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.set$D$D$D$D(this.getA$() * c, this.getR$() * c, this.getG$() * c, this.getB$() * c);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.set$D$D$D$D(this.getA$() * c, this.getR$() * c, this.getG$() * c, this.getB$() * c);
});

Clazz.newMeth(C$, 'toARGBInt$', function () {
var a=(Math.max(0, Math.min(255, $I$(1).round$D(this.getA$() * 255)))|0);
var r=(Math.max(0, Math.min(255, $I$(1).round$D(this.getR$() * 255)))|0);
var g=(Math.max(0, Math.min(255, $I$(1).round$D(this.getG$() * 255)))|0);
var b=(Math.max(0, Math.min(255, $I$(1).round$D(this.getB$() * 255)))|0);
return (((((a << 8) | r) << 8) | g) << 8) | b;
});

Clazz.newMeth(C$, ['valueEquals$TT','valueEquals$'], function (t) {
return (this.getA$() == t.getA$() ) && (this.getR$() == t.getR$() ) && (this.getG$() == t.getG$() ) && (this.getB$() == t.getB$() )  ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!this.getClass$().isInstance$O(obj)) return false;
var t=obj;
return this.valueEquals$TT(t);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=31 + Double.hashCode$D(this.getA$());
result=31 * result + Double.hashCode$D(this.getR$());
result=31 * result + Double.hashCode$D(this.getG$());
result=31 * result + Double.hashCode$D(this.getB$());
return result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
