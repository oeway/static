(function(){var P$=Clazz.newPackage("java.time.format"),p$1={},I$=[[0,'java.util.HashMap','java.util.ArrayList','java.util.Collections','java.time.format.DateTimeTextProvider','java.util.concurrent.ConcurrentHashMap','java.time.chrono.IsoChronology','java.time.temporal.ChronoField','java.time.chrono.JapaneseChronology','sun.util.locale.provider.CalendarDataUtility','java.time.format.TextStyle',['java.time.format.DateTimeTextProvider','.LocaleStore'],'java.time.temporal.IsoFields',['java.util.AbstractMap','.SimpleImmutableEntry'],'sun.util.locale.provider.LocaleProviderAdapter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DateTimeTextProvider", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.CACHE=null;
C$.COMPARATOR=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.CACHE=Clazz.new_($I$(5,1).c$$I$F$I,[16, 0.75, 2]);
C$.COMPARATOR=((P$.DateTimeTextProvider$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DateTimeTextProvider$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$java_util_Map_Entry$java_util_Map_Entry','compare$','compare$TT$TT'], function (obj1, obj2) {
return obj2.getKey$().length$() - obj1.getKey$().length$();
});
})()
), Clazz.new_(P$.DateTimeTextProvider$1.$init$, [this, null]));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getText$java_time_temporal_TemporalField$J$java_time_format_TextStyle$java_util_Locale', function (field, value, style, locale) {
var store=p$1.findStore$java_time_temporal_TemporalField$java_util_Locale.apply(this, [field, locale]);
if (Clazz.instanceOf(store, "java.time.format.DateTimeTextProvider.LocaleStore")) {
return (store).getText$J$java_time_format_TextStyle(value, style);
}return null;
});

Clazz.newMeth(C$, 'getText$java_time_chrono_Chronology$java_time_temporal_TemporalField$J$java_time_format_TextStyle$java_util_Locale', function (chrono, field, value, style, locale) {
if (chrono === $I$(6).INSTANCE  || !(Clazz.instanceOf(field, "java.time.temporal.ChronoField")) ) {
return this.getText$java_time_temporal_TemporalField$J$java_time_format_TextStyle$java_util_Locale(field, value, style, locale);
}var fieldIndex;
var fieldValue;
if (field === $I$(7).ERA ) {
fieldIndex=0;
if (chrono === $I$(8).INSTANCE ) {
if (value == -999) {
fieldValue=0;
} else {
fieldValue=(value|0) + 2;
}} else {
fieldValue=(value|0);
}} else if (field === $I$(7).MONTH_OF_YEAR ) {
fieldIndex=2;
fieldValue=(value|0) - 1;
} else if (field === $I$(7).DAY_OF_WEEK ) {
fieldIndex=7;
fieldValue=(value|0) + 1;
if (fieldValue > 7) {
fieldValue=1;
}} else if (field === $I$(7).AMPM_OF_DAY ) {
fieldIndex=9;
fieldValue=(value|0);
} else {
return null;
}return $I$(9).retrieveJavaTimeFieldValueName$S$I$I$I$java_util_Locale(chrono.getCalendarType$(), fieldIndex, fieldValue, style.toCalendarStyle$(), locale);
});

Clazz.newMeth(C$, 'getTextIterator$java_time_temporal_TemporalField$java_time_format_TextStyle$java_util_Locale', function (field, style, locale) {
var store=p$1.findStore$java_time_temporal_TemporalField$java_util_Locale.apply(this, [field, locale]);
if (Clazz.instanceOf(store, "java.time.format.DateTimeTextProvider.LocaleStore")) {
return (store).getTextIterator$java_time_format_TextStyle(style);
}return null;
});

Clazz.newMeth(C$, 'getTextIterator$java_time_chrono_Chronology$java_time_temporal_TemporalField$java_time_format_TextStyle$java_util_Locale', function (chrono, field, style, locale) {
if (chrono === $I$(6).INSTANCE  || !(Clazz.instanceOf(field, "java.time.temporal.ChronoField")) ) {
return this.getTextIterator$java_time_temporal_TemporalField$java_time_format_TextStyle$java_util_Locale(field, style, locale);
}var fieldIndex;
switch (field) {
case $I$(7).ERA:
fieldIndex=0;
break;
case $I$(7).MONTH_OF_YEAR:
fieldIndex=2;
break;
case $I$(7).DAY_OF_WEEK:
fieldIndex=7;
break;
case $I$(7).AMPM_OF_DAY:
fieldIndex=9;
break;
default:
return null;
}
var calendarStyle=(style == null ) ? 0 : style.toCalendarStyle$();
var map=$I$(9).retrieveJavaTimeFieldValueNames$S$I$I$java_util_Locale(chrono.getCalendarType$(), fieldIndex, calendarStyle, locale);
if (map == null ) {
return null;
}var list=Clazz.new_($I$(2,1).c$$I,[map.size$()]);
switch (fieldIndex) {
case 0:
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var era=(entry.getValue$()).intValue$();
if (chrono === $I$(8).INSTANCE ) {
if (era == 0) {
era=-999;
} else {
era-=2;
}}list.add$TE(C$.createEntry$TA$TB(entry.getKey$(), new Long(era)));
}
break;
case 2:
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
list.add$TE(C$.createEntry$TA$TB(entry.getKey$(), new Long(((entry.getValue$()).intValue$() + 1))));
}
break;
case 7:
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
list.add$TE(C$.createEntry$TA$TB(entry.getKey$(), new Long(C$.toWeekDay$I((entry.getValue$()).intValue$()))));
}
break;
default:
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
list.add$TE(C$.createEntry$TA$TB(entry.getKey$(), new Long(((entry.getValue$()).intValue$()|0))));
}
break;
}
return list.iterator$();
});

Clazz.newMeth(C$, 'findStore$java_time_temporal_TemporalField$java_util_Locale', function (field, locale) {
var key=C$.createEntry$TA$TB(field, locale);
var store=C$.CACHE.get$O(key);
if (store == null ) {
store=p$1.createStore$java_time_temporal_TemporalField$java_util_Locale.apply(this, [field, locale]);
C$.CACHE.putIfAbsent$TK$TV(key, store);
store=C$.CACHE.get$O(key);
}return store;
}, p$1);

Clazz.newMeth(C$, 'toWeekDay$I', function (calWeekDay) {
if (calWeekDay == 1) {
return 7;
} else {
return calWeekDay - 1;
}}, 1);

Clazz.newMeth(C$, 'createStore$java_time_temporal_TemporalField$java_util_Locale', function (field, locale) {
var styleMap=Clazz.new_($I$(1,1));
if (field === $I$(7).ERA ) {
for (var textStyle, $textStyle = 0, $$textStyle = $I$(10).values$(); $textStyle<$$textStyle.length&&((textStyle=($$textStyle[$textStyle])),1);$textStyle++) {
if (textStyle.isStandalone$()) {
continue;
}var displayNames=$I$(9).retrieveJavaTimeFieldValueNames$S$I$I$java_util_Locale("gregory", 0, textStyle.toCalendarStyle$(), locale);
if (displayNames != null ) {
var map=Clazz.new_($I$(1,1));
for (var entry, $entry = displayNames.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
map.put$TK$TV(new Long(((entry.getValue$()).intValue$()|0)), entry.getKey$());
}
if (!map.isEmpty$()) {
styleMap.put$TK$TV(textStyle, map);
}}}
return Clazz.new_($I$(11,1).c$$java_util_Map,[styleMap]);
}if (field === $I$(7).MONTH_OF_YEAR ) {
for (var textStyle, $textStyle = 0, $$textStyle = $I$(10).values$(); $textStyle<$$textStyle.length&&((textStyle=($$textStyle[$textStyle])),1);$textStyle++) {
var displayNames=$I$(9).retrieveJavaTimeFieldValueNames$S$I$I$java_util_Locale("gregory", 2, textStyle.toCalendarStyle$(), locale);
var map=Clazz.new_($I$(1,1));
if (displayNames != null ) {
for (var entry, $entry = displayNames.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
map.put$TK$TV(new Long(((entry.getValue$()).intValue$() + 1)), entry.getKey$());
}
} else {
for (var month=0; month <= 11; month++) {
var name;
name=$I$(9).retrieveJavaTimeFieldValueName$S$I$I$I$java_util_Locale("gregory", 2, month, textStyle.toCalendarStyle$(), locale);
if (name == null ) {
break;
}map.put$TK$TV(new Long((month + 1)), name);
}
}if (!map.isEmpty$()) {
styleMap.put$TK$TV(textStyle, map);
}}
return Clazz.new_($I$(11,1).c$$java_util_Map,[styleMap]);
}if (field === $I$(7).DAY_OF_WEEK ) {
for (var textStyle, $textStyle = 0, $$textStyle = $I$(10).values$(); $textStyle<$$textStyle.length&&((textStyle=($$textStyle[$textStyle])),1);$textStyle++) {
var displayNames=$I$(9).retrieveJavaTimeFieldValueNames$S$I$I$java_util_Locale("gregory", 7, textStyle.toCalendarStyle$(), locale);
var map=Clazz.new_($I$(1,1));
if (displayNames != null ) {
for (var entry, $entry = displayNames.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
map.put$TK$TV(new Long(C$.toWeekDay$I((entry.getValue$()).intValue$())), entry.getKey$());
}
} else {
for (var wday=1; wday <= 7; wday++) {
var name;
name=$I$(9).retrieveJavaTimeFieldValueName$S$I$I$I$java_util_Locale("gregory", 7, wday, textStyle.toCalendarStyle$(), locale);
if (name == null ) {
break;
}map.put$TK$TV(new Long(C$.toWeekDay$I(wday)), name);
}
}if (!map.isEmpty$()) {
styleMap.put$TK$TV(textStyle, map);
}}
return Clazz.new_($I$(11,1).c$$java_util_Map,[styleMap]);
}if (field === $I$(7).AMPM_OF_DAY ) {
for (var textStyle, $textStyle = 0, $$textStyle = $I$(10).values$(); $textStyle<$$textStyle.length&&((textStyle=($$textStyle[$textStyle])),1);$textStyle++) {
if (textStyle.isStandalone$()) {
continue;
}var displayNames=$I$(9).retrieveJavaTimeFieldValueNames$S$I$I$java_util_Locale("gregory", 9, textStyle.toCalendarStyle$(), locale);
if (displayNames != null ) {
var map=Clazz.new_($I$(1,1));
for (var entry, $entry = displayNames.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
map.put$TK$TV(new Long(((entry.getValue$()).intValue$()|0)), entry.getKey$());
}
if (!map.isEmpty$()) {
styleMap.put$TK$TV(textStyle, map);
}}}
return Clazz.new_($I$(11,1).c$$java_util_Map,[styleMap]);
}if (field === $I$(12).QUARTER_OF_YEAR ) {
var keys=Clazz.array(String, -1, ["QuarterNames", "standalone.QuarterNames", "QuarterAbbreviations", "standalone.QuarterAbbreviations", "QuarterNarrows", "standalone.QuarterNarrows"]);
for (var i=0; i < keys.length; i++) {
var names=C$.getLocalizedResource$S$java_util_Locale(keys[i], locale);
if (names != null ) {
var map=Clazz.new_($I$(1,1));
for (var q=0; q < names.length; q++) {
map.put$TK$TV(new Long((q + 1)), names[q]);
}
styleMap.put$TK$TV($I$(10).values$()[i], map);
}}
return Clazz.new_($I$(11,1).c$$java_util_Map,[styleMap]);
}return "";
}, p$1);

Clazz.newMeth(C$, 'createEntry$TA$TB', function (text, field) {
return Clazz.new_($I$(13,1).c$$TK$TV,[text, field]);
}, 1);

Clazz.newMeth(C$, 'getLocalizedResource$S$java_util_Locale', function (key, locale) {
var lr=$I$(14).getResourceBundleBased$().getLocaleResources$java_util_Locale(locale);
var rb=lr.getJavaTimeFormatData$();
return rb.containsKey$S(key) ? rb.getObject$S(key) : null;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeTextProvider, "LocaleStore", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.valueTextMap=null;
this.parsable=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (valueTextMap) {
;C$.$init$.apply(this);
this.valueTextMap=valueTextMap;
var map=Clazz.new_($I$(1,1));
var allList=Clazz.new_($I$(2,1));
for (var vtmEntry, $vtmEntry = valueTextMap.entrySet$().iterator$(); $vtmEntry.hasNext$()&&((vtmEntry=($vtmEntry.next$())),1);) {
var reverse=Clazz.new_($I$(1,1));
for (var entry, $entry = vtmEntry.getValue$().entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (reverse.put$TK$TV(entry.getValue$(), P$.DateTimeTextProvider.createEntry$TA$TB(entry.getValue$(), entry.getKey$())) != null ) {
continue;
}}
var list=Clazz.new_($I$(2,1).c$$java_util_Collection,[reverse.values$()]);
$I$(3).sort$java_util_List$java_util_Comparator(list, $I$(4).COMPARATOR);
map.put$TK$TV(vtmEntry.getKey$(), list);
allList.addAll$java_util_Collection(list);
map.put$TK$TV(null, allList);
}
$I$(3).sort$java_util_List$java_util_Comparator(allList, $I$(4).COMPARATOR);
this.parsable=map;
}, 1);

Clazz.newMeth(C$, 'getText$J$java_time_format_TextStyle', function (value, style) {
var map=this.valueTextMap.get$O(style);
return map != null  ? map.get$O(new Long(value)) : null;
});

Clazz.newMeth(C$, 'getTextIterator$java_time_format_TextStyle', function (style) {
var list=this.parsable.get$O(style);
return list != null  ? list.iterator$() : null;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:57 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
