(function(){var P$=Clazz.newPackage("java.time.chrono"),p$1={},I$=[[0,'sun.util.calendar.CalendarSystem','java.time.chrono.JapaneseDate','java.time.LocalDate','java.time.Clock','java.time.chrono.IsoChronology','java.time.chrono.JapaneseEra','java.util.Arrays','java.time.temporal.ChronoField','java.util.Calendar','java.time.temporal.ValueRange','java.time.format.ResolverStyle','java.time.temporal.ChronoUnit','java.time.temporal.TemporalAdjusters']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JapaneseChronology", null, 'java.time.chrono.AbstractChronology', 'java.io.Serializable');
C$.JCAL=null;
C$.LOCALE=null;
C$.INSTANCE=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.JCAL=$I$(1).forName$S("japanese");
C$.LOCALE=;
C$.INSTANCE=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return "Japanese";
});

Clazz.newMeth(C$, 'getCalendarType$', function () {
return "japanese";
});

Clazz.newMeth(C$, 'date$java_time_chrono_Era$I$I$I', function (era, yearOfEra, month, dayOfMonth) {
if (Clazz.instanceOf(era, "java.time.chrono.JapaneseEra") == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Era must be JapaneseEra"]);
}return $I$(2).of$java_time_chrono_JapaneseEra$I$I$I(era, yearOfEra, month, dayOfMonth);
});

Clazz.newMeth(C$, 'date$I$I$I', function (prolepticYear, month, dayOfMonth) {
return Clazz.new_($I$(2,1).c$$java_time_LocalDate,[$I$(3).of$I$I$I(prolepticYear, month, dayOfMonth)]);
});

Clazz.newMeth(C$, 'dateYearDay$java_time_chrono_Era$I$I', function (era, yearOfEra, dayOfYear) {
return $I$(2).ofYearDay$java_time_chrono_JapaneseEra$I$I(era, yearOfEra, dayOfYear);
});

Clazz.newMeth(C$, 'dateYearDay$I$I', function (prolepticYear, dayOfYear) {
return Clazz.new_($I$(2,1).c$$java_time_LocalDate,[$I$(3).ofYearDay$I$I(prolepticYear, dayOfYear)]);
});

Clazz.newMeth(C$, 'dateEpochDay$J', function (epochDay) {
return Clazz.new_($I$(2,1).c$$java_time_LocalDate,[$I$(3).ofEpochDay$J(epochDay)]);
});

Clazz.newMeth(C$, 'dateNow$', function () {
return this.dateNow$java_time_Clock($I$(4).systemDefaultZone$());
});

Clazz.newMeth(C$, 'dateNow$java_time_ZoneId', function (zone) {
return this.dateNow$java_time_Clock($I$(4).system$java_time_ZoneId(zone));
});

Clazz.newMeth(C$, 'dateNow$java_time_Clock', function (clock) {
return this.date$java_time_temporal_TemporalAccessor($I$(3).now$java_time_Clock(clock));
});

Clazz.newMeth(C$, 'date$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.chrono.JapaneseDate")) {
return temporal;
}return Clazz.new_($I$(2,1).c$$java_time_LocalDate,[$I$(3).from$java_time_temporal_TemporalAccessor(temporal)]);
});

Clazz.newMeth(C$, 'localDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
return C$.superclazz.prototype.localDateTime$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_temporal_TemporalAccessor', function (temporal) {
return C$.superclazz.prototype.zonedDateTime$java_time_temporal_TemporalAccessor.apply(this, [temporal]);
});

Clazz.newMeth(C$, 'zonedDateTime$java_time_Instant$java_time_ZoneId', function (instant, zone) {
return C$.superclazz.prototype.zonedDateTime$java_time_Instant$java_time_ZoneId.apply(this, [instant, zone]);
});

Clazz.newMeth(C$, 'isLeapYear$J', function (prolepticYear) {
return $I$(5).INSTANCE.isLeapYear$J(prolepticYear);
});

Clazz.newMeth(C$, 'prolepticYear$java_time_chrono_Era$I', function (era, yearOfEra) {
if (Clazz.instanceOf(era, "java.time.chrono.JapaneseEra") == false ) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Era must be JapaneseEra"]);
}var jera=era;
var gregorianYear=jera.getPrivateEra$().getSinceDate$().getYear$() + yearOfEra - 1;
if (yearOfEra == 1) {
return gregorianYear;
}if (gregorianYear >= -999999999 && gregorianYear <= 999999999 ) {
var jdate=C$.JCAL.newCalendarDate$java_util_TimeZone(null);
jdate.setEra$sun_util_calendar_Era(jera.getPrivateEra$()).setDate$I$I$I(yearOfEra, 1, 1);
if (C$.JCAL.validate$sun_util_calendar_CalendarDate(jdate)) {
return gregorianYear;
}}throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid yearOfEra value"]);
});

Clazz.newMeth(C$, 'eraOf$I', function (eraValue) {
return $I$(6).of$I(eraValue);
});

Clazz.newMeth(C$, 'eras$', function () {
return $I$(7).asList$TTA($I$(6).values$());
});

Clazz.newMeth(C$, 'getCurrentEra$', function () {
var eras=$I$(6).values$();
return eras[eras.length - 1];
});

Clazz.newMeth(C$, 'range$java_time_temporal_ChronoField', function (field) {
switch (field) {
case $I$(8).ALIGNED_DAY_OF_WEEK_IN_MONTH:
case $I$(8).ALIGNED_DAY_OF_WEEK_IN_YEAR:
case $I$(8).ALIGNED_WEEK_OF_MONTH:
case $I$(8).ALIGNED_WEEK_OF_YEAR:
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
case $I$(8).YEAR_OF_ERA:
{
var jcal=$I$(9).getInstance$java_util_Locale(C$.LOCALE);
var startYear=this.getCurrentEra$().getPrivateEra$().getSinceDate$().getYear$();
return $I$(10).of$J$J$J$J(1, jcal.getGreatestMinimum$I(1), jcal.getLeastMaximum$I(1) + 1, 999999999 - startYear);
}case $I$(8).DAY_OF_YEAR:
{
var jcal=$I$(9).getInstance$java_util_Locale(C$.LOCALE);
var fieldIndex=6;
return $I$(10).of$J$J$J$J(jcal.getMinimum$I(fieldIndex), jcal.getGreatestMinimum$I(fieldIndex), jcal.getLeastMaximum$I(fieldIndex), jcal.getMaximum$I(fieldIndex));
}case $I$(8).YEAR:
return $I$(10).of$J$J($I$(2).MEIJI_6_ISODATE.getYear$(), 999999999);
case $I$(8).ERA:
return $I$(10).of$J$J($I$(6).MEIJI.getValue$(), this.getCurrentEra$().getValue$());
default:
return field.range$();
}
});

Clazz.newMeth(C$, 'resolveDate$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
return C$.superclazz.prototype.resolveDate$java_util_Map$java_time_format_ResolverStyle.apply(this, [fieldValues, resolverStyle]);
});

Clazz.newMeth(C$, 'resolveYearOfEra$java_util_Map$java_time_format_ResolverStyle', function (fieldValues, resolverStyle) {
var eraLong=fieldValues.get$O($I$(8).ERA);
var era=null;
if (eraLong != null ) {
era=this.eraOf$I(this.range$java_time_temporal_ChronoField($I$(8).ERA).checkValidIntValue$J$java_time_temporal_TemporalField((eraLong).longValue$(), $I$(8).ERA));
}var yoeLong=fieldValues.get$O($I$(8).YEAR_OF_ERA);
var yoe=0;
if (yoeLong != null ) {
yoe=this.range$java_time_temporal_ChronoField($I$(8).YEAR_OF_ERA).checkValidIntValue$J$java_time_temporal_TemporalField((yoeLong).longValue$(), $I$(8).YEAR_OF_ERA);
}if (era == null  && yoeLong != null   && fieldValues.containsKey$O($I$(8).YEAR) == false   && resolverStyle !== $I$(11).STRICT  ) {
era=$I$(6).values$()[$I$(6).values$().length - 1];
}if (yoeLong != null  && era != null  ) {
if (fieldValues.containsKey$O($I$(8).MONTH_OF_YEAR)) {
if (fieldValues.containsKey$O($I$(8).DAY_OF_MONTH)) {
return p$1.resolveYMD$java_time_chrono_JapaneseEra$I$java_util_Map$java_time_format_ResolverStyle.apply(this, [era, yoe, fieldValues, resolverStyle]);
}}if (fieldValues.containsKey$O($I$(8).DAY_OF_YEAR)) {
return p$1.resolveYD$java_time_chrono_JapaneseEra$I$java_util_Map$java_time_format_ResolverStyle.apply(this, [era, yoe, fieldValues, resolverStyle]);
}}return null;
});

Clazz.newMeth(C$, 'prolepticYearLenient$java_time_chrono_JapaneseEra$I', function (era, yearOfEra) {
return era.getPrivateEra$().getSinceDate$().getYear$() + yearOfEra - 1;
}, p$1);

Clazz.newMeth(C$, 'resolveYMD$java_time_chrono_JapaneseEra$I$java_util_Map$java_time_format_ResolverStyle', function (era, yoe, fieldValues, resolverStyle) {
fieldValues.remove$O($I$(8).ERA);
fieldValues.remove$O($I$(8).YEAR_OF_ERA);
if (resolverStyle === $I$(11).LENIENT ) {
var y=p$1.prolepticYearLenient$java_time_chrono_JapaneseEra$I.apply(this, [era, yoe]);
var months=Math.subtractExact((fieldValues.remove$O($I$(8).MONTH_OF_YEAR)).longValue$(), 1);
var days=Math.subtractExact((fieldValues.remove$O($I$(8).DAY_OF_MONTH)).longValue$(), 1);
return this.date$I$I$I(y, 1, 1).plus$J$java_time_temporal_TemporalUnit(months, $I$(12).MONTHS).plus$J$java_time_temporal_TemporalUnit(days, $I$(12).DAYS);
}var moy=this.range$java_time_temporal_ChronoField($I$(8).MONTH_OF_YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(8).MONTH_OF_YEAR)).longValue$(), $I$(8).MONTH_OF_YEAR);
var dom=this.range$java_time_temporal_ChronoField($I$(8).DAY_OF_MONTH).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(8).DAY_OF_MONTH)).longValue$(), $I$(8).DAY_OF_MONTH);
if (resolverStyle === $I$(11).SMART ) {
if (yoe < 1) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid YearOfEra: " + yoe]);
}var y=p$1.prolepticYearLenient$java_time_chrono_JapaneseEra$I.apply(this, [era, yoe]);
var result;
try {
result=this.date$I$I$I(y, moy, dom);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
result=this.date$I$I$I(y, moy, 1).with$java_time_temporal_TemporalAdjuster($I$(13).lastDayOfMonth$());
} else {
throw ex;
}
}
if (result.getEra$() !== era  && result.get$java_time_temporal_TemporalField($I$(8).YEAR_OF_ERA) > 1  && yoe > 1 ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid YearOfEra for Era: " + era + " " + yoe ]);
}return result;
}return this.date$java_time_chrono_Era$I$I$I(era, yoe, moy, dom);
}, p$1);

Clazz.newMeth(C$, 'resolveYD$java_time_chrono_JapaneseEra$I$java_util_Map$java_time_format_ResolverStyle', function (era, yoe, fieldValues, resolverStyle) {
fieldValues.remove$O($I$(8).ERA);
fieldValues.remove$O($I$(8).YEAR_OF_ERA);
if (resolverStyle === $I$(11).LENIENT ) {
var y=p$1.prolepticYearLenient$java_time_chrono_JapaneseEra$I.apply(this, [era, yoe]);
var days=Math.subtractExact((fieldValues.remove$O($I$(8).DAY_OF_YEAR)).longValue$(), 1);
return this.dateYearDay$I$I(y, 1).plus$J$java_time_temporal_TemporalUnit(days, $I$(12).DAYS);
}var doy=this.range$java_time_temporal_ChronoField($I$(8).DAY_OF_YEAR).checkValidIntValue$J$java_time_temporal_TemporalField((fieldValues.remove$O($I$(8).DAY_OF_YEAR)).longValue$(), $I$(8).DAY_OF_YEAR);
return this.dateYearDay$java_time_chrono_Era$I$I(era, yoe, doy);
}, p$1);

Clazz.newMeth(C$, 'writeReplace$', function () {
return C$.superclazz.prototype.writeReplace$.apply(this, []);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:55 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
