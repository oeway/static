(function(){var P$=Clazz.newPackage("net.imglib2.type.logic"),I$=[[0,'java.math.BigInteger','Boolean','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BoolType", null, 'net.imglib2.type.numeric.integer.AbstractIntegerType', 'net.imglib2.type.BooleanType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['value']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (value) {
Clazz.super_(C$, this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'c$$TT', function (type) {
C$.c$$Z.apply(this, [type.get$()]);
}, 1);

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$TT,[this]);
});

Clazz.newMeth(C$, ['set$net_imglib2_type_logic_BoolType','set$TT'], function (c) {
this.value=c.get$();
});

Clazz.newMeth(C$, 'get$', function () {
return this.value;
});

Clazz.newMeth(C$, ['set$Z','setnull'], function (value) {
this.value=value;
});

Clazz.newMeth(C$, ['and$Z','andnull'], function (b) {
this.value&=b;
});

Clazz.newMeth(C$, ['or$Z','ornull'], function (b) {
this.value|=b;
});

Clazz.newMeth(C$, ['xor$Z','xornull'], function (b) {
this.value=this.value!=(b);
});

Clazz.newMeth(C$, ['and$net_imglib2_type_logic_BoolType','and$TT'], function (c) {
this.and$Z(c.value);
});

Clazz.newMeth(C$, ['or$net_imglib2_type_logic_BoolType','or$TT'], function (c) {
this.or$Z(c.value);
});

Clazz.newMeth(C$, ['xor$net_imglib2_type_logic_BoolType','xor$TT'], function (c) {
this.xor$Z(c.value);
});

Clazz.newMeth(C$, 'not$', function () {
this.value=!this.value;
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 1;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return 0;
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return 1;
});

Clazz.newMeth(C$, 'getInteger$', function () {
return this.get$() ? 1 : 0;
});

Clazz.newMeth(C$, 'getIntegerLong$', function () {
return this.get$() ? 1 : 0;
});

Clazz.newMeth(C$, 'getBigInteger$', function () {
return this.get$() ? $I$(1).ONE : $I$(1).ZERO;
});

Clazz.newMeth(C$, 'setInteger$I', function (f) {
this.set$Z(f >= 1);
});

Clazz.newMeth(C$, 'setInteger$J', function (f) {
this.set$Z(f >= 1);
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (b) {
this.set$Z(b.compareTo$java_math_BigInteger($I$(1).ZERO) > 0);
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_logic_BoolType','compareTo$','compareTo$TT'], function (other) {
return $I$(2).compare$Z$Z(this.get$(), other.get$());
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_type_logic_BoolType','valueEquals$','valueEquals$TT'], function (t) {
return this.get$() == t.get$() ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return $I$(3).valueEqualsObject$TT$O(this, obj);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(2).hashCode$Z(this.get$());
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
