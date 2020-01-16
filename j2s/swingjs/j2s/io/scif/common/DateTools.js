(function(){var P$=Clazz.newPackage("io.scif.common"),I$=[[0,'java.text.SimpleDateFormat','java.util.TimeZone','StringBuffer','java.util.Date','java.text.FieldPosition','java.text.ParsePosition']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DateTools");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMillisFromTicks$J$J', function (hi, lo) {
var ticks=((hi << 32) | lo);
return (ticks/10000|0);
}, 1);

Clazz.newMeth(C$, 'convertDate$J$I', function (stamp, format) {
return C$.convertDate$J$I$S(stamp, format, "yyyy-MM-dd\'T\'HH:mm:ss");
}, 1);

Clazz.newMeth(C$, 'convertDate$J$I$S', function (stamp, format, outputFormat) {
return C$.convertDate$J$I$S$Z(stamp, format, outputFormat, false);
}, 1);

Clazz.newMeth(C$, 'convertDate$J$I$S$Z', function (stamp, format, outputFormat, correctTimeZoneForGMT) {
var ms=stamp;
switch (format) {
case 0:
ms-=0;
break;
case 1:
ms-=11644473600000;
break;
case 2:
ms-=2209143600000;
break;
case 3:
ms-=2921084975759000;
break;
case 4:
ms-=2921084284761000;
break;
}
var fmt=Clazz.new_($I$(1,1).c$$S,[outputFormat]);
if (correctTimeZoneForGMT) {
var tz=$I$(2).getDefault$();
ms-=tz.getOffset$J(ms);
}var sb=Clazz.new_($I$(3,1));
var d=Clazz.new_($I$(4,1).c$$J,[ms]);
fmt.format$java_util_Date$StringBuffer$java_text_FieldPosition(d, sb, Clazz.new_($I$(5,1).c$$I,[0]));
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'formatDate$S$S', function (date, format) {
return C$.formatDate$S$S$Z(date, format, false);
}, 1);

Clazz.newMeth(C$, 'formatDate$S$S$Z', function (date, format, lenient) {
if (date == null ) return null;
var sdf=Clazz.new_($I$(1,1).c$$S,[format]);
sdf.setLenient$Z(lenient);
var d=sdf.parse$S$java_text_ParsePosition(date, Clazz.new_($I$(6,1).c$$I,[0]));
if (d == null ) return null;
sdf=Clazz.new_($I$(1,1).c$$S,["yyyy-MM-dd\'T\'HH:mm:ss"]);
return sdf.format$java_util_Date(d);
}, 1);

Clazz.newMeth(C$, 'formatDate$S$SA', function (date, formats) {
return C$.formatDate$S$SA$Z(date, formats, false);
}, 1);

Clazz.newMeth(C$, 'formatDate$S$SA$Z', function (date, formats, lenient) {
for (var format, $format = 0, $$format = formats; $format<$$format.length&&((format=($$format[$format])),1);$format++) {
var result=C$.formatDate$S$S$Z(date, format, lenient);
if (result != null ) return result;
}
return null;
}, 1);

Clazz.newMeth(C$, 'getTime$S$S', function (date, format) {
var f=Clazz.new_($I$(1,1).c$$S,[format]);
var d=f.parse$S$java_text_ParsePosition(date, Clazz.new_($I$(6,1).c$$I,[0]));
if (d == null ) return -1;
return d.getTime$();
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
