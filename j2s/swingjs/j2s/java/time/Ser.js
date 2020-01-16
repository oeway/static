(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.Duration','java.time.Instant','java.time.LocalDate','java.time.LocalDateTime','java.time.LocalTime','java.time.ZonedDateTime','java.time.ZoneOffset','java.time.ZoneRegion','java.time.OffsetTime','java.time.OffsetDateTime','java.time.Year','java.time.YearMonth','java.time.MonthDay','java.time.Period']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Ser", null, null, 'java.io.Externalizable');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=0;
this.object=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$B$O', function (type, object) {
;C$.$init$.apply(this);
this.type=($b$[0] = type, $b$[0]);
this.object=object;
}, 1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.writeInternal$B$O$java_io_ObjectOutput(($b$[0] = this.type, $b$[0]), this.object, out);
});

Clazz.newMeth(C$, 'writeInternal$B$O$java_io_ObjectOutput', function (type, object, out) {
out.writeByte$I(type);
switch (type) {
case 1:
(object).writeExternal$java_io_DataOutput(out);
break;
case 2:
(object).writeExternal$java_io_DataOutput(out);
break;
case 3:
(object).writeExternal$java_io_DataOutput(out);
break;
case 5:
(object).writeExternal$java_io_DataOutput(out);
break;
case 4:
(object).writeExternal$java_io_DataOutput(out);
break;
case 7:
(object).writeExternal$java_io_DataOutput(out);
break;
case 8:
(object).writeExternal$java_io_DataOutput(out);
break;
case 6:
(object).writeExternal$java_io_DataOutput(out);
break;
case 9:
(object).writeExternal$java_io_ObjectOutput(out);
break;
case 10:
(object).writeExternal$java_io_ObjectOutput(out);
break;
case 11:
(object).writeExternal$java_io_DataOutput(out);
break;
case 12:
(object).writeExternal$java_io_DataOutput(out);
break;
case 13:
(object).writeExternal$java_io_DataOutput(out);
break;
case 14:
(object).writeExternal$java_io_DataOutput(out);
break;
default:
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["Unknown serialized type"]);
}
}, 1);

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
this.type=($b$[0] = $in.readByte$(), $b$[0]);
this.object=C$.readInternal$B$java_io_ObjectInput(($b$[0] = this.type, $b$[0]), $in);
});

Clazz.newMeth(C$, 'read$java_io_ObjectInput', function ($in) {
var type=($b$[0] = $in.readByte$(), $b$[0]);
return C$.readInternal$B$java_io_ObjectInput(($b$[0] = type, $b$[0]), $in);
}, 1);

Clazz.newMeth(C$, 'readInternal$B$java_io_ObjectInput', function (type, $in) {
switch (type) {
case 1:
return $I$(1).readExternal$java_io_DataInput($in);
case 2:
return $I$(2).readExternal$java_io_DataInput($in);
case 3:
return $I$(3).readExternal$java_io_DataInput($in);
case 5:
return $I$(4).readExternal$java_io_DataInput($in);
case 4:
return $I$(5).readExternal$java_io_DataInput($in);
case 6:
return $I$(6).readExternal$java_io_ObjectInput($in);
case 8:
return $I$(7).readExternal$java_io_DataInput($in);
case 7:
return $I$(8).readExternal$java_io_DataInput($in);
case 9:
return $I$(9).readExternal$java_io_ObjectInput($in);
case 10:
return $I$(10).readExternal$java_io_ObjectInput($in);
case 11:
return $I$(11).readExternal$java_io_DataInput($in);
case 12:
return $I$(12).readExternal$java_io_DataInput($in);
case 13:
return $I$(13).readExternal$java_io_DataInput($in);
case 14:
return $I$(14).readExternal$java_io_DataInput($in);
default:
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["Unknown serialized type"]);
}
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
return this.object;
}, p$1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:52 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
