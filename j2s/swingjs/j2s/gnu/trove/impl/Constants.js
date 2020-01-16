(function(){var P$=Clazz.newPackage("gnu.trove.impl"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Constants");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.VERBOSE=System.getProperty$S$S("gnu.trove.verbose", null) != null ;
{
var value;
var property=System.getProperty$S$S("gnu.trove.no_entry.byte", "0");
if ("MAX_VALUE".equalsIgnoreCase$S(property)) value=($b$[0] = 127, $b$[0]);
 else if ("MIN_VALUE".equalsIgnoreCase$S(property)) value=($b$[0] = -128, $b$[0]);
 else value=(Byte.valueOf$S(property)).valueOf();
if (value > 127) value=($b$[0] = 127, $b$[0]);
 else if (value < -128) value=($b$[0] = -128, $b$[0]);
C$.DEFAULT_BYTE_NO_ENTRY_VALUE=($b$[0] = value, $b$[0]);
if (C$.VERBOSE) {
System.out.println$S("DEFAULT_BYTE_NO_ENTRY_VALUE: " + C$.DEFAULT_BYTE_NO_ENTRY_VALUE);
}};
{
var value;
var property=System.getProperty$S$S("gnu.trove.no_entry.short", "0");
if ("MAX_VALUE".equalsIgnoreCase$S(property)) value=32767;
 else if ("MIN_VALUE".equalsIgnoreCase$S(property)) value=-32768;
 else value=(Short.valueOf$S(property)).valueOf();
if (value > 32767) value=32767;
 else if (value < -32768) value=-32768;
C$.DEFAULT_SHORT_NO_ENTRY_VALUE=value;
if (C$.VERBOSE) {
System.out.println$S("DEFAULT_SHORT_NO_ENTRY_VALUE: " + C$.DEFAULT_SHORT_NO_ENTRY_VALUE);
}};
{
var value;
var property=System.getProperty$S$S("gnu.trove.no_entry.char", "\u0000");
if ("MAX_VALUE".equalsIgnoreCase$S(property)) value="\uffff";
 else if ("MIN_VALUE".equalsIgnoreCase$S(property)) value="\u0000";
 else value=property.toCharArray$()[0];
if (value > "\uffff") value="\uffff";
 else if (value < "\u0000") value="\u0000";
C$.DEFAULT_CHAR_NO_ENTRY_VALUE=value;
if (C$.VERBOSE) {
System.out.println$S("DEFAULT_CHAR_NO_ENTRY_VALUE: " + Integer.valueOf$I(value.$c()));
}};
{
var value;
var property=System.getProperty$S$S("gnu.trove.no_entry.int", "0");
if ("MAX_VALUE".equalsIgnoreCase$S(property)) value=2147483647;
 else if ("MIN_VALUE".equalsIgnoreCase$S(property)) value=-2147483648;
 else value=(Integer.valueOf$S(property)).valueOf();
C$.DEFAULT_INT_NO_ENTRY_VALUE=value;
if (C$.VERBOSE) {
System.out.println$S("DEFAULT_INT_NO_ENTRY_VALUE: " + C$.DEFAULT_INT_NO_ENTRY_VALUE);
}};
{
var value;
var property=System.getProperty$S$S("gnu.trove.no_entry.long", "0");
if ("MAX_VALUE".equalsIgnoreCase$S(property)) value=9223372036854775807;
 else if ("MIN_VALUE".equalsIgnoreCase$S(property)) value=-9223372036854775808;
 else value=(Long.valueOf$S(property)).valueOf();
C$.DEFAULT_LONG_NO_ENTRY_VALUE=value;
if (C$.VERBOSE) {
System.out.println$S("DEFAULT_LONG_NO_ENTRY_VALUE: " + C$.DEFAULT_LONG_NO_ENTRY_VALUE);
}};
{
var value;
var property=System.getProperty$S$S("gnu.trove.no_entry.float", "0");
if ("MAX_VALUE".equalsIgnoreCase$S(property)) value=3.4028235E38;
 else if ("MIN_VALUE".equalsIgnoreCase$S(property)) value=1.4E-45;
 else if ("MIN_NORMAL".equalsIgnoreCase$S(property)) value=1.17549435E-38;
 else if ("NEGATIVE_INFINITY".equalsIgnoreCase$S(property)) value=-Infinity;
 else if ("POSITIVE_INFINITY".equalsIgnoreCase$S(property)) value=Infinity;
 else value=(Float.valueOf$S(property)).valueOf();
C$.DEFAULT_FLOAT_NO_ENTRY_VALUE=value;
if (C$.VERBOSE) {
System.out.println$S("DEFAULT_FLOAT_NO_ENTRY_VALUE: " + new Float(C$.DEFAULT_FLOAT_NO_ENTRY_VALUE).toString());
}};
{
var value;
var property=System.getProperty$S$S("gnu.trove.no_entry.double", "0");
if ("MAX_VALUE".equalsIgnoreCase$S(property)) value=1.7976931348623157E308;
 else if ("MIN_VALUE".equalsIgnoreCase$S(property)) value=4.9E-324;
 else if ("MIN_NORMAL".equalsIgnoreCase$S(property)) value=2.2250738585072014E-308;
 else if ("NEGATIVE_INFINITY".equalsIgnoreCase$S(property)) value=-Infinity;
 else if ("POSITIVE_INFINITY".equalsIgnoreCase$S(property)) value=Infinity;
 else value=(Double.valueOf$S(property)).valueOf();
C$.DEFAULT_DOUBLE_NO_ENTRY_VALUE=value;
if (C$.VERBOSE) {
System.out.println$S("DEFAULT_DOUBLE_NO_ENTRY_VALUE: " + new Double(C$.DEFAULT_DOUBLE_NO_ENTRY_VALUE).toString());
}};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['VERBOSE'],'B',['DEFAULT_BYTE_NO_ENTRY_VALUE'],'C',['DEFAULT_CHAR_NO_ENTRY_VALUE'],'D',['DEFAULT_DOUBLE_NO_ENTRY_VALUE'],'F',['DEFAULT_FLOAT_NO_ENTRY_VALUE'],'I',['DEFAULT_INT_NO_ENTRY_VALUE'],'L',['DEFAULT_LONG_NO_ENTRY_VALUE'],'H',['DEFAULT_SHORT_NO_ENTRY_VALUE']]]
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
