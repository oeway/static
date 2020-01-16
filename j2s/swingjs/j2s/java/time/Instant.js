(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.Clock','java.util.Objects','java.time.temporal.ChronoField','java.time.format.DateTimeFormatter','java.time.temporal.ChronoUnit','java.time.temporal.TemporalQueries','java.time.OffsetDateTime','java.time.ZonedDateTime','java.time.Ser']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Instant", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'Comparable', 'java.io.Serializable']);
C$.EPOCH=null;
C$.MIN=null;
C$.MAX=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.EPOCH=Clazz.new_(C$.c$$J$I,[0, 0]);
C$.MIN=C$.ofEpochSecond$J$J(-31557014167219200, 0);
C$.MAX=C$.ofEpochSecond$J$J(31556889864403199, 999999999);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.seconds=0;
this.nanos=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'now$', function () {
return $I$(1).systemUTC$().instant$();
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock', function (clock) {
$I$(2).requireNonNull$TT$S(clock, "clock");
return clock.instant$();
}, 1);

Clazz.newMeth(C$, 'ofEpochSecond$J', function (epochSecond) {
return C$.create$J$I(epochSecond, 0);
}, 1);

Clazz.newMeth(C$, 'ofEpochSecond$J$J', function (epochSecond, nanoAdjustment) {
var secs=Math.addExact(epochSecond, Math.floorDiv(nanoAdjustment, 1000000000));
var nos=(Math.floorMod(nanoAdjustment, 1000000000)|0);
return C$.create$J$I(secs, nos);
}, 1);

Clazz.newMeth(C$, 'ofEpochMilli$J', function (epochMilli) {
var secs=Math.floorDiv(epochMilli, 1000);
var mos=(Math.floorMod(epochMilli, 1000)|0);
return C$.create$J$I(secs, mos * 1000000);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.Instant")) {
return temporal;
}$I$(2).requireNonNull$TT$S(temporal, "temporal");
try {
var instantSecs=temporal.getLong$java_time_temporal_TemporalField($I$(3).INSTANT_SECONDS);
var nanoOfSecond=temporal.get$java_time_temporal_TemporalField($I$(3).NANO_OF_SECOND);
return C$.ofEpochSecond$J$J(instantSecs, nanoOfSecond);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain Instant from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence', function (text) {
return $I$(4).ISO_INSTANT.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.Instant$lambda1$||(P$.Instant$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Instant$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'queryFrom$', function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.Instant$lambda1.$init$, [this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'create$J$I', function (seconds, nanoOfSecond) {
if ((seconds | nanoOfSecond) == 0) {
return C$.EPOCH;
}if (seconds < -31557014167219200 || seconds > 31556889864403199 ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Instant exceeds minimum or maximum instant"]);
}return Clazz.new_(C$.c$$J$I,[seconds, nanoOfSecond]);
}, 1);

Clazz.newMeth(C$, 'c$$J$I', function (epochSecond, nanos) {
;C$.$init$.apply(this);
this.seconds=epochSecond;
this.nanos=nanos;
}, 1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field === $I$(3).INSTANT_SECONDS  || field === $I$(3).NANO_OF_SECOND   || field === $I$(3).MICRO_OF_SECOND   || field === $I$(3).MILLI_OF_SECOND  ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit', function (unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return unit.isTimeBased$() || unit === $I$(5).DAYS  ;
}return unit != null  && unit.isSupportedBy$java_time_temporal_Temporal(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
return C$.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(3).NANO_OF_SECOND:
return this.nanos;
case $I$(3).MICRO_OF_SECOND:
return (this.nanos/1000|0);
case $I$(3).MILLI_OF_SECOND:
return (this.nanos/1000000|0);
case $I$(3).INSTANT_SECONDS:
$I$(3).INSTANT_SECONDS.checkValidIntValue$J(this.seconds);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return this.range$java_time_temporal_TemporalField(field).checkValidIntValue$J$java_time_temporal_TemporalField(field.getFrom$java_time_temporal_TemporalAccessor(this), field);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(3).NANO_OF_SECOND:
return this.nanos;
case $I$(3).MICRO_OF_SECOND:
return (this.nanos/1000|0);
case $I$(3).MILLI_OF_SECOND:
return (this.nanos/1000000|0);
case $I$(3).INSTANT_SECONDS:
return this.seconds;
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getEpochSecond$', function () {
return this.seconds;
});

Clazz.newMeth(C$, 'getNano$', function () {
return this.nanos;
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster', function (adjuster) {
return adjuster.adjustInto$(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J', function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
f.checkValidValue$J(newValue);
switch (f) {
case $I$(3).MILLI_OF_SECOND:
{
var nval=(newValue|0) * 1000000;
return (nval != this.nanos ? C$.create$J$I(this.seconds, nval) : this);
}case $I$(3).MICRO_OF_SECOND:
{
var nval=(newValue|0) * 1000;
return (nval != this.nanos ? C$.create$J$I(this.seconds, nval) : this);
}case $I$(3).NANO_OF_SECOND:
return (newValue != this.nanos ? C$.create$J$I(this.seconds, (newValue|0)) : this);
case $I$(3).INSTANT_SECONDS:
return (newValue != this.seconds ? C$.create$J$I(newValue, this.nanos) : this);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.adjustInto$TR$J(this, newValue);
});

Clazz.newMeth(C$, 'truncatedTo$java_time_temporal_TemporalUnit', function (unit) {
if (unit === $I$(5).NANOS ) {
return this;
}var unitDur=unit.getDuration$();
if (unitDur.getSeconds$() > 86400) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unit is too large to be used for truncation"]);
}var dur=unitDur.toNanos$();
if ((86400000000000 % dur) != 0) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unit must divide into a standard day without remainder"]);
}var nod=(this.seconds % 86400) * 1000000000 + this.nanos;
var result=((nod/dur|0)) * dur;
return this.plusNanos$J(result - nod);
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount', function (amountToAdd) {
return amountToAdd.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit', function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
switch (unit) {
case $I$(5).NANOS:
return this.plusNanos$J(amountToAdd);
case $I$(5).MICROS:
return p$1.plus$J$J.apply(this, [(amountToAdd/1000000|0), (amountToAdd % 1000000) * 1000]);
case $I$(5).MILLIS:
return this.plusMillis$J(amountToAdd);
case $I$(5).SECONDS:
return this.plusSeconds$J(amountToAdd);
case $I$(5).MINUTES:
return this.plusSeconds$J(Math.multiplyExact(amountToAdd, 60));
case $I$(5).HOURS:
return this.plusSeconds$J(Math.multiplyExact(amountToAdd, 3600));
case $I$(5).HALF_DAYS:
return this.plusSeconds$J(Math.multiplyExact(amountToAdd, 43200));
case $I$(5).DAYS:
return this.plusSeconds$J(Math.multiplyExact(amountToAdd, 86400));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.addTo$TR$J(this, amountToAdd);
});

Clazz.newMeth(C$, 'plusSeconds$J', function (secondsToAdd) {
return p$1.plus$J$J.apply(this, [secondsToAdd, 0]);
});

Clazz.newMeth(C$, 'plusMillis$J', function (millisToAdd) {
return p$1.plus$J$J.apply(this, [(millisToAdd/1000|0), (millisToAdd % 1000) * 1000000]);
});

Clazz.newMeth(C$, 'plusNanos$J', function (nanosToAdd) {
return p$1.plus$J$J.apply(this, [0, nanosToAdd]);
});

Clazz.newMeth(C$, 'plus$J$J', function (secondsToAdd, nanosToAdd) {
if ((secondsToAdd | nanosToAdd) == 0) {
return this;
}var epochSec=Math.addExact(this.seconds, secondsToAdd);
epochSec=Math.addExact(epochSec, (nanosToAdd/1000000000|0));
nanosToAdd=nanosToAdd % 1000000000;
var nanoAdjustment=this.nanos + nanosToAdd;
return C$.ofEpochSecond$J$J(epochSec, nanoAdjustment);
}, p$1);

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount', function (amountToSubtract) {
return amountToSubtract.subtractFrom$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit', function (amountToSubtract, unit) {
return (amountToSubtract == -9223372036854775808 ? this.plus$J$java_time_temporal_TemporalUnit(9223372036854775807, unit).plus$J$java_time_temporal_TemporalUnit(1, unit) : this.plus$J$java_time_temporal_TemporalUnit(-amountToSubtract, unit));
});

Clazz.newMeth(C$, 'minusSeconds$J', function (secondsToSubtract) {
if (secondsToSubtract == -9223372036854775808) {
return this.plusSeconds$J(9223372036854775807).plusSeconds$J(1);
}return this.plusSeconds$J(-secondsToSubtract);
});

Clazz.newMeth(C$, 'minusMillis$J', function (millisToSubtract) {
if (millisToSubtract == -9223372036854775808) {
return this.plusMillis$J(9223372036854775807).plusMillis$J(1);
}return this.plusMillis$J(-millisToSubtract);
});

Clazz.newMeth(C$, 'minusNanos$J', function (nanosToSubtract) {
if (nanosToSubtract == -9223372036854775808) {
return this.plusNanos$J(9223372036854775807).plusNanos$J(1);
}return this.plusNanos$J(-nanosToSubtract);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(6).precision$() ) {
return $I$(5).NANOS;
}if (query === $I$(6).chronology$()  || query === $I$(6).zoneId$()   || query === $I$(6).zone$()   || query === $I$(6).offset$()   || query === $I$(6).localDate$()   || query === $I$(6).localTime$()  ) {
return null;
}return query.queryFrom$(this);
});

Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$'], function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(3).INSTANT_SECONDS, this.seconds).with$java_time_temporal_TemporalField$J($I$(3).NANO_OF_SECOND, this.nanos);
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit', function (endExclusive, unit) {
var end=C$.from$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
var f=unit;
switch (f) {
case $I$(5).NANOS:
return p$1.nanosUntil$java_time_Instant.apply(this, [end]);
case $I$(5).MICROS:
return (p$1.nanosUntil$java_time_Instant.apply(this, [end])/1000|0);
case $I$(5).MILLIS:
return Math.subtractExact(end.toEpochMilli$(), this.toEpochMilli$());
case $I$(5).SECONDS:
return p$1.secondsUntil$java_time_Instant.apply(this, [end]);
case $I$(5).MINUTES:
return (p$1.secondsUntil$java_time_Instant.apply(this, [end])/60|0);
case $I$(5).HOURS:
return (p$1.secondsUntil$java_time_Instant.apply(this, [end])/3600|0);
case $I$(5).HALF_DAYS:
return (p$1.secondsUntil$java_time_Instant.apply(this, [end])/(43200)|0);
case $I$(5).DAYS:
return (p$1.secondsUntil$java_time_Instant.apply(this, [end])/(86400)|0);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'nanosUntil$java_time_Instant', function (end) {
var secsDiff=Math.subtractExact(end.seconds, this.seconds);
var totalNanos=Math.multiplyExact(secsDiff, 1000000000);
return Math.addExact(totalNanos, end.nanos - this.nanos);
}, p$1);

Clazz.newMeth(C$, 'secondsUntil$java_time_Instant', function (end) {
var secsDiff=Math.subtractExact(end.seconds, this.seconds);
var nanosDiff=end.nanos - this.nanos;
if (secsDiff > 0 && nanosDiff < 0 ) {
secsDiff--;
} else if (secsDiff < 0 && nanosDiff > 0 ) {
secsDiff++;
}return secsDiff;
}, p$1);

Clazz.newMeth(C$, 'atOffset$java_time_ZoneOffset', function (offset) {
return $I$(7).ofInstant$java_time_Instant$java_time_ZoneId(this, offset);
});

Clazz.newMeth(C$, 'atZone$java_time_ZoneId', function (zone) {
return $I$(8).ofInstant$java_time_Instant$java_time_ZoneId(this, zone);
});

Clazz.newMeth(C$, 'toEpochMilli$', function () {
var millis=Math.multiplyExact(this.seconds, 1000);
return millis + (this.nanos/1000000|0);
});

Clazz.newMeth(C$, ['compareTo$java_time_Instant','compareTo$','compareTo$TT'], function (otherInstant) {
var cmp=Long.compare$J$J(this.seconds, otherInstant.seconds);
if (cmp != 0) {
return cmp;
}return this.nanos - otherInstant.nanos;
});

Clazz.newMeth(C$, 'isAfter$java_time_Instant', function (otherInstant) {
return this.compareTo$java_time_Instant(otherInstant) > 0;
});

Clazz.newMeth(C$, 'isBefore$java_time_Instant', function (otherInstant) {
return this.compareTo$java_time_Instant(otherInstant) < 0;
});

Clazz.newMeth(C$, 'equals$O', function (otherInstant) {
if (this === otherInstant ) {
return true;
}if (Clazz.instanceOf(otherInstant, "java.time.Instant")) {
var other=otherInstant;
return this.seconds == other.seconds && this.nanos == other.nanos ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (((this.seconds ^ (this.seconds >>> 32))|0)) + 51 * this.nanos;
});

Clazz.newMeth(C$, 'toString', function () {
return $I$(4).ISO_INSTANT.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(9,1).c$$B$O,[($b$[0] = 2, $b$[0]), this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeLong$J(this.seconds);
out.writeInt$I(this.nanos);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var seconds=$in.readLong$();
var nanos=$in.readInt$();
return C$.ofEpochSecond$J$J(seconds, nanos);
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:50 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
