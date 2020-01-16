(function(){var P$=Clazz.newPackage("gnu.trove.impl"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HashFunctions");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hash$D', function (value) {
Clazz.assert(C$, this, function(){return !Double.isNaN$D(value)}, function(){return "Values of NaN are not supported."});
var bits=Double.doubleToLongBits$D(value);
return ((bits ^ (bits >>> 32))|0);
}, 1);

Clazz.newMeth(C$, 'hash$F', function (value) {
Clazz.assert(C$, this, function(){return !Float.isNaN$F(value)}, function(){return "Values of NaN are not supported."});
return Float.floatToIntBits$F(value * 6.6360896E8);
}, 1);

Clazz.newMeth(C$, 'hash$I', function (value) {
return value;
}, 1);

Clazz.newMeth(C$, 'hash$J', function (value) {
return (((value ^ (value >>> 32))|0));
}, 1);

Clazz.newMeth(C$, 'hash$O', function (object) {
return object == null  ? 0 : object.hashCode$();
}, 1);

Clazz.newMeth(C$, 'fastCeil$F', function (v) {
var possible_result=(v|0);
if (v - possible_result > 0 ) possible_result++;
return possible_result;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
