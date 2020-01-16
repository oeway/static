(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'org.scijava.util.ConversionUtils','org.scijava.util.Types','java.math.BigInteger','java.math.BigDecimal']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NumberUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toNumber$O$Class', function (value, type) {
var num=$I$(1).convert$O$Class(value, type);
return num == null  ? null : $I$(2).cast$O$Class(num, Clazz.getClass(Number));
}, 1);

Clazz.newMeth(C$, 'asBigDecimal$Number', function (n) {
if (Clazz.getClass($I$(3)).isInstance$O(n)) {
return Clazz.new_($I$(4,1).c$$java_math_BigInteger,[n]);
} else if (Clazz.getClass(Long).isInstance$O(n)) {
return Clazz.new_($I$(4,1).c$$J,[n.longValue$()]);
}return Clazz.new_($I$(4,1).c$$D,[n.doubleValue$()]);
}, 1);

Clazz.newMeth(C$, 'asBigInteger$Number', function (n) {
return $I$(3).valueOf$J(n.longValue$());
}, 1);

Clazz.newMeth(C$, 'getMinimumNumber$Class', function (type) {
if ($I$(2).isByte$Class(type)) return new Byte(-128);
if ($I$(2).isShort$Class(type)) return new Short(-32768);
if ($I$(2).isInteger$Class(type)) return new Integer(-2147483648);
if ($I$(2).isLong$Class(type)) return new Long(-9223372036854775808);
if ($I$(2).isFloat$Class(type)) return new Float(-3.4028235E38);
if ($I$(2).isDouble$Class(type)) return new Double(-1.7976931348623157E308);
return null;
}, 1);

Clazz.newMeth(C$, 'getMaximumNumber$Class', function (type) {
if ($I$(2).isByte$Class(type)) return new Byte(127);
if ($I$(2).isShort$Class(type)) return new Short(32767);
if ($I$(2).isInteger$Class(type)) return new Integer(2147483647);
if ($I$(2).isLong$Class(type)) return new Long(9223372036854775807);
if ($I$(2).isFloat$Class(type)) return new Float(3.4028235E38);
if ($I$(2).isDouble$Class(type)) return new Double(1.7976931348623157E308);
return null;
}, 1);

Clazz.newMeth(C$, 'getDefaultValue$Number$Number$Class', function (min, max, type) {
if (min != null ) return min;
if (max != null ) return max;
return C$.toNumber$O$Class("0", type);
}, 1);

Clazz.newMeth(C$, 'clampToRange$Class$Number$Number$Number', function (type, value, min, max) {
if (value == null ) return C$.getDefaultValue$Number$Number$Class(min, max, type);
if (Clazz.getClass(Comparable,['compareTo$TT']).isAssignableFrom$Class(type)) {
var cValue=value;
if (min != null  && cValue.compareTo$(min) < 0 ) return min;
if (max != null  && cValue.compareTo$(max) > 0 ) return max;
}return value;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
