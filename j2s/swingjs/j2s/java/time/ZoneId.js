(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.util.HashMap','java.util.Collections','java.time.zone.ZoneRulesProvider','java.util.Objects','java.time.ZoneRegion','java.time.ZoneOffset','java.time.temporal.TemporalQueries','AssertionError','java.time.format.DateTimeFormatterBuilder','java.time.Instant','java.time.Ser']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ZoneId", null, null, 'java.io.Serializable');
C$.SHORT_IDS=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
{
var map=Clazz.new_($I$(1,1).c$$I,[64]);
map.put$TK$TV("ACT", "Australia/Darwin");
map.put$TK$TV("AET", "Australia/Sydney");
map.put$TK$TV("AGT", "America/Argentina/Buenos_Aires");
map.put$TK$TV("ART", "Africa/Cairo");
map.put$TK$TV("AST", "America/Anchorage");
map.put$TK$TV("BET", "America/Sao_Paulo");
map.put$TK$TV("BST", "Asia/Dhaka");
map.put$TK$TV("CAT", "Africa/Harare");
map.put$TK$TV("CNT", "America/St_Johns");
map.put$TK$TV("CST", "America/Chicago");
map.put$TK$TV("CTT", "Asia/Shanghai");
map.put$TK$TV("EAT", "Africa/Addis_Ababa");
map.put$TK$TV("ECT", "Europe/Paris");
map.put$TK$TV("IET", "America/Indiana/Indianapolis");
map.put$TK$TV("IST", "Asia/Kolkata");
map.put$TK$TV("JST", "Asia/Tokyo");
map.put$TK$TV("MIT", "Pacific/Apia");
map.put$TK$TV("NET", "Asia/Yerevan");
map.put$TK$TV("NST", "Pacific/Auckland");
map.put$TK$TV("PLT", "Asia/Karachi");
map.put$TK$TV("PNT", "America/Phoenix");
map.put$TK$TV("PRT", "America/Puerto_Rico");
map.put$TK$TV("PST", "America/Los_Angeles");
map.put$TK$TV("SST", "Pacific/Guadalcanal");
map.put$TK$TV("VST", "Asia/Ho_Chi_Minh");
map.put$TK$TV("EST", "-05:00");
map.put$TK$TV("MST", "-07:00");
map.put$TK$TV("HST", "-10:00");
C$.SHORT_IDS=$I$(2).unmodifiableMap$java_util_Map(map);
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'systemDefault$', function () {
return ;
}, 1);

Clazz.newMeth(C$, 'getAvailableZoneIds$', function () {
return $I$(3).getAvailableZoneIds$();
}, 1);

Clazz.newMeth(C$, 'of$S$java_util_Map', function (zoneId, aliasMap) {
$I$(4).requireNonNull$TT$S(zoneId, "zoneId");
$I$(4).requireNonNull$TT$S(aliasMap, "aliasMap");
var id=aliasMap.get$O(zoneId);
id=(id != null  ? id : zoneId);
return C$.of$S(id);
}, 1);

Clazz.newMeth(C$, 'of$S', function (zoneId) {
return C$.of$S$Z(zoneId, true);
}, 1);

Clazz.newMeth(C$, 'ofOffset$S$java_time_ZoneOffset', function (prefix, offset) {
$I$(4).requireNonNull$TT$S(prefix, "prefix");
$I$(4).requireNonNull$TT$S(offset, "offset");
if (prefix.length$() == 0) {
return offset;
}if (!prefix.equals$O("GMT") && !prefix.equals$O("UTC") && !prefix.equals$O("UT")  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["prefix should be GMT, UTC or UT, is: " + prefix]);
}if (offset.getTotalSeconds$() != 0) {
prefix=prefix.concat$S(offset.getId$());
}return Clazz.new_($I$(5,1).c$$S$java_time_zone_ZoneRules,[prefix, offset.getRules$()]);
}, 1);

Clazz.newMeth(C$, 'of$S$Z', function (zoneId, checkAvailable) {
$I$(4).requireNonNull$TT$S(zoneId, "zoneId");
if (zoneId.length$() <= 1 || zoneId.startsWith$S("+")  || zoneId.startsWith$S("-") ) {
return $I$(6).of$S(zoneId);
} else if (zoneId.startsWith$S("UTC") || zoneId.startsWith$S("GMT") ) {
return C$.ofWithPrefix$S$I$Z(zoneId, 3, checkAvailable);
} else if (zoneId.startsWith$S("UT")) {
return C$.ofWithPrefix$S$I$Z(zoneId, 2, checkAvailable);
}return $I$(5).ofId$S$Z(zoneId, checkAvailable);
}, 1);

Clazz.newMeth(C$, 'ofWithPrefix$S$I$Z', function (zoneId, prefixLength, checkAvailable) {
var prefix=zoneId.substring$I$I(0, prefixLength);
if (zoneId.length$() == prefixLength) {
return C$.ofOffset$S$java_time_ZoneOffset(prefix, $I$(6).UTC);
}if (zoneId.charAt$I(prefixLength) != "+" && zoneId.charAt$I(prefixLength) != "-" ) {
return $I$(5).ofId$S$Z(zoneId, checkAvailable);
}try {
var offset=$I$(6).of$S(zoneId.substring$I(prefixLength));
if (offset === $I$(6).UTC ) {
return C$.ofOffset$S$java_time_ZoneOffset(prefix, offset);
}return C$.ofOffset$S$java_time_ZoneOffset(prefix, offset);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Invalid ID for offset-based ZoneId: " + zoneId, ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor', function (temporal) {
var obj=temporal.query$java_time_temporal_TemporalQuery($I$(7).zone$());
if (obj == null ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to obtain ZoneId from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() ]);
}return obj;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
if (this.getClass$() !== Clazz.getClass($I$(6))  && this.getClass$() !== Clazz.getClass($I$(5))  ) {
throw Clazz.new_($I$(8,1).c$$O,["Invalid subclass"]);
}}, 1);

Clazz.newMeth(C$, 'getDisplayName$java_time_format_TextStyle$java_util_Locale', function (style, locale) {
return Clazz.new_($I$(9,1)).appendZoneText$java_time_format_TextStyle(style).toFormatter$java_util_Locale(locale).format$java_time_temporal_TemporalAccessor(p$1.toTemporal.apply(this, []));
});

Clazz.newMeth(C$, 'toTemporal', function () {
return ((P$.ZoneId$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ZoneId$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAccessor', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField', function (field) {
return false;
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField', function (field) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery', function (query) {
if (query === $I$(7).zoneId$() ) {
return this.b$['java.time.ZoneId'];
}return C$.superclazz.prototype.query$java_time_temporal_TemporalQuery.apply(this, [query]);
});
})()
), Clazz.new_(P$.ZoneId$1.$init$, [this, null]));
}, p$1);

Clazz.newMeth(C$, 'normalized$', function () {
try {
var rules=this.getRules$();
if (rules.isFixedOffset$()) {
return rules.getOffset$java_time_Instant($I$(10).EPOCH);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.zone.ZoneRulesException")){
} else {
throw ex;
}
}
return this;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.ZoneId")) {
var other=obj;
return this.getId$().equals$O(other.getId$());
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getId$().hashCode$();
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.getId$();
});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(11,1).c$$B$O,[($b$[0] = 7, $b$[0]), this]);
}, p$1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:52 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
