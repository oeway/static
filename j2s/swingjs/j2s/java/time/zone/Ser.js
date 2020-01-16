(function(){var P$=Clazz.newPackage("java.time.zone"),p$1={},I$=[[0,'java.time.zone.ZoneRules','java.time.zone.ZoneOffsetTransition','java.time.zone.ZoneOffsetTransitionRule','java.time.ZoneOffset']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
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
C$.writeInternal$B$O$java_io_DataOutput(($b$[0] = this.type, $b$[0]), this.object, out);
});

Clazz.newMeth(C$, 'write$O$java_io_DataOutput', function (object, out) {
C$.writeInternal$B$O$java_io_DataOutput(($b$[0] = 1, $b$[0]), object, out);
}, 1);

Clazz.newMeth(C$, 'writeInternal$B$O$java_io_DataOutput', function (type, object, out) {
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
default:
throw Clazz.new_(Clazz.load('java.io.InvalidClassException').c$$S,["Unknown serialized type"]);
}
}, 1);

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
this.type=($b$[0] = $in.readByte$(), $b$[0]);
this.object=C$.readInternal$B$java_io_DataInput(($b$[0] = this.type, $b$[0]), $in);
});

Clazz.newMeth(C$, 'read$java_io_DataInput', function ($in) {
var type=($b$[0] = $in.readByte$(), $b$[0]);
return C$.readInternal$B$java_io_DataInput(($b$[0] = type, $b$[0]), $in);
}, 1);

Clazz.newMeth(C$, 'readInternal$B$java_io_DataInput', function (type, $in) {
switch (type) {
case 1:
return $I$(1).readExternal$java_io_DataInput($in);
case 2:
return $I$(2).readExternal$java_io_DataInput($in);
case 3:
return $I$(3).readExternal$java_io_DataInput($in);
default:
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["Unknown serialized type"]);
}
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
return this.object;
}, p$1);

Clazz.newMeth(C$, 'writeOffset$java_time_ZoneOffset$java_io_DataOutput', function (offset, out) {
var offsetSecs=offset.getTotalSeconds$();
var offsetByte=offsetSecs % 900 == 0 ? (offsetSecs/900|0) : 127;
out.writeByte$I(offsetByte);
if (offsetByte == 127) {
out.writeInt$I(offsetSecs);
}}, 1);

Clazz.newMeth(C$, 'readOffset$java_io_DataInput', function ($in) {
var offsetByte=$in.readByte$();
return (offsetByte == 127 ? $I$(4).ofTotalSeconds$I($in.readInt$()) : $I$(4).ofTotalSeconds$I(offsetByte * 900));
}, 1);

Clazz.newMeth(C$, 'writeEpochSec$J$java_io_DataOutput', function (epochSec, out) {
if (epochSec >= -4575744000 && epochSec < 10413792000  && epochSec % 900 == 0 ) {
var store=((((epochSec + 4575744000)/900|0))|0);
out.writeByte$I((store >>> 16) & 255);
out.writeByte$I((store >>> 8) & 255);
out.writeByte$I(store & 255);
} else {
out.writeByte$I(255);
out.writeLong$J(epochSec);
}}, 1);

Clazz.newMeth(C$, 'readEpochSec$java_io_DataInput', function ($in) {
var hiByte=$in.readByte$() & 255;
if (hiByte == 255) {
return $in.readLong$();
} else {
var midByte=$in.readByte$() & 255;
var loByte=$in.readByte$() & 255;
var tot=((hiByte << 16) + (midByte << 8) + loByte );
return (tot * 900) - 4575744000;
}}, 1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:58 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
