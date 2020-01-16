(function(){var P$=Clazz.newPackage("sun.util.calendar"),I$=[[0,'java.util.HashMap','StringBuilder','swingjs.api.Interface']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CalendarSystem");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.initialized=false;
C$.namePairs=Clazz.array(String, -1, ["gregorian", "Gregorian", "japanese", "LocalGregorianCalendar", "julian", "JulianCalendar"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['initialized'],'O',['names','java.util.Map','+calendars','namePairs','String[]','GREGORIAN_INSTANCE','sun.util.calendar.Gregorian']]]

Clazz.newMeth(C$, 'initNames$', function () {
var nameMap=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
var clName=Clazz.new_($I$(2,1));
for (var i=0; i < C$.namePairs.length; i+=2) {
clName.setLength$I(0);
var cl=clName.append$S("sun.util.calendar.").append$S(C$.namePairs[i + 1]).toString();
nameMap.put$TK$TV(C$.namePairs[i], cl);
}
{
if (!C$.initialized) {
C$.names=nameMap;
C$.calendars=Clazz.new_(1,{K:"String",V:"sun.util.calendar.CalendarSystem"},$I$(1,1));
C$.initialized=true;
}}}, 1);

Clazz.newMeth(C$, 'getGregorianCalendar$', function () {
if (C$.GREGORIAN_INSTANCE == null ) C$.GREGORIAN_INSTANCE=$I$(3).getInstance$S$Z("sun.util.calendar.Gregorian", false);
return C$.GREGORIAN_INSTANCE;
}, 1);

Clazz.newMeth(C$, 'forName$S', function (calendarName) {
if ("gregorian".equals$O(calendarName)) {
return C$.GREGORIAN_INSTANCE;
}if (!C$.initialized) {
C$.initNames$();
}var cal=C$.calendars.get$O(calendarName);
if (cal != null ) {
return cal;
}var className=C$.names.get$O(calendarName);
if (className == null ) {
return null;
}try {
var cl=Clazz.forName(className);
cal=cl.newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["internal error", e]);
} else {
throw e;
}
}
if (cal == null ) {
return null;
}var cs=C$.calendars.put$TK$TV(calendarName, cal);
return (cs == null ) ? cal : cs;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
