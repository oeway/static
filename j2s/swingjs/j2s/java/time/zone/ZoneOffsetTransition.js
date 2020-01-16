(function(){var P$=Clazz.newPackage("java.time.zone"),p$1={},I$=[[0,'java.util.Objects','java.time.LocalDateTime','java.time.zone.Ser','java.time.Duration','java.util.Collections','java.util.Arrays','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ZoneOffsetTransition", null, null, ['Comparable', 'java.io.Serializable']);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.transition=null;
this.offsetBefore=null;
this.offsetAfter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'of$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneOffset', function (transition, offsetBefore, offsetAfter) {
$I$(1).requireNonNull$TT$S(transition, "transition");
$I$(1).requireNonNull$TT$S(offsetBefore, "offsetBefore");
$I$(1).requireNonNull$TT$S(offsetAfter, "offsetAfter");
if (offsetBefore.equals$O(offsetAfter)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Offsets must not be equal"]);
}if (transition.getNano$() != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Nano-of-second must be zero"]);
}return Clazz.new_(C$.c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneOffset,[transition, offsetBefore, offsetAfter]);
}, 1);

Clazz.newMeth(C$, 'c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneOffset', function (transition, offsetBefore, offsetAfter) {
;C$.$init$.apply(this);
this.transition=transition;
this.offsetBefore=offsetBefore;
this.offsetAfter=offsetAfter;
}, 1);

Clazz.newMeth(C$, 'c$$J$java_time_ZoneOffset$java_time_ZoneOffset', function (epochSecond, offsetBefore, offsetAfter) {
;C$.$init$.apply(this);
this.transition=$I$(2).ofEpochSecond$J$I$java_time_ZoneOffset(epochSecond, 0, offsetBefore);
this.offsetBefore=offsetBefore;
this.offsetAfter=offsetAfter;
}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(3,1).c$$B$O,[($b$[0] = 2, $b$[0]), this]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
$I$(3).writeEpochSec$J$java_io_DataOutput(this.toEpochSecond$(), out);
$I$(3).writeOffset$java_time_ZoneOffset$java_io_DataOutput(this.offsetBefore, out);
$I$(3).writeOffset$java_time_ZoneOffset$java_io_DataOutput(this.offsetAfter, out);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var epochSecond=$I$(3).readEpochSec$java_io_DataInput($in);
var before=$I$(3).readOffset$java_io_DataInput($in);
var after=$I$(3).readOffset$java_io_DataInput($in);
if (before.equals$O(after)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Offsets must not be equal"]);
}return Clazz.new_(C$.c$$J$java_time_ZoneOffset$java_time_ZoneOffset,[epochSecond, before, after]);
}, 1);

Clazz.newMeth(C$, 'getInstant$', function () {
return this.transition.toInstant$java_time_ZoneOffset(this.offsetBefore);
});

Clazz.newMeth(C$, 'toEpochSecond$', function () {
return this.transition.toEpochSecond$java_time_ZoneOffset(this.offsetBefore);
});

Clazz.newMeth(C$, 'getDateTimeBefore$', function () {
return this.transition;
});

Clazz.newMeth(C$, 'getDateTimeAfter$', function () {
return this.transition.plusSeconds$J(p$1.getDurationSeconds.apply(this, []));
});

Clazz.newMeth(C$, 'getOffsetBefore$', function () {
return this.offsetBefore;
});

Clazz.newMeth(C$, 'getOffsetAfter$', function () {
return this.offsetAfter;
});

Clazz.newMeth(C$, 'getDuration$', function () {
return $I$(4).ofSeconds$J(p$1.getDurationSeconds.apply(this, []));
});

Clazz.newMeth(C$, 'getDurationSeconds', function () {
return this.getOffsetAfter$().getTotalSeconds$() - this.getOffsetBefore$().getTotalSeconds$();
}, p$1);

Clazz.newMeth(C$, 'isGap$', function () {
return this.getOffsetAfter$().getTotalSeconds$() > this.getOffsetBefore$().getTotalSeconds$();
});

Clazz.newMeth(C$, 'isOverlap$', function () {
return this.getOffsetAfter$().getTotalSeconds$() < this.getOffsetBefore$().getTotalSeconds$();
});

Clazz.newMeth(C$, 'isValidOffset$java_time_ZoneOffset', function (offset) {
return this.isGap$() ? false : (this.getOffsetBefore$().equals$O(offset) || this.getOffsetAfter$().equals$O(offset) );
});

Clazz.newMeth(C$, 'getValidOffsets$', function () {
if (this.isGap$()) {
return $I$(5).emptyList$();
}return $I$(6).asList$TTA([this.getOffsetBefore$(), this.getOffsetAfter$()]);
});

Clazz.newMeth(C$, ['compareTo$java_time_zone_ZoneOffsetTransition','compareTo$','compareTo$TT'], function (transition) {
return this.getInstant$().compareTo$java_time_Instant(transition.getInstant$());
});

Clazz.newMeth(C$, 'equals$O', function (other) {
if (other === this ) {
return true;
}if (Clazz.instanceOf(other, "java.time.zone.ZoneOffsetTransition")) {
var d=other;
return this.transition.equals$O(d.transition) && this.offsetBefore.equals$O(d.offsetBefore) && this.offsetAfter.equals$O(d.offsetAfter)  ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.transition.hashCode$() ^ this.offsetBefore.hashCode$() ^ Integer.rotateLeft$I$I(this.offsetAfter.hashCode$(), 16) ;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(7,1));
buf.append$S("Transition[").append$S(this.isGap$() ? "Gap" : "Overlap").append$S(" at ").append$O(this.transition).append$O(this.offsetBefore).append$S(" to ").append$O(this.offsetAfter).append$C("]");
return buf.toString();
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:59 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
