(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),p$1={},I$=[[0,'java.io.ByteArrayOutputStream','java.io.DataOutputStream','java.io.DataInputStream','org.rcsb.cif.Platform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MessagePackCodec");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encode$java_util_Map', function (input) {
try {
var byteArrayOutputStream=Clazz.new_($I$(1,1));
var dataOutputStream=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[byteArrayOutputStream]);
p$1.encodeInternal$O$java_io_DataOutputStream.apply(this, [input, dataOutputStream]);
dataOutputStream.flush$();
dataOutputStream.close$();
return byteArrayOutputStream.toByteArray$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('java.io.UncheckedIOException').c$$java_io_IOException,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'encodeInternal$O$java_io_DataOutputStream', function (input, stream) {
if (Clazz.instanceOf(input, "java.lang.String")) {
var value=input;
var length=p$1.determineUTFSize$S.apply(this, [value]);
if (length < 32) {
stream.writeByte$I(length | 160);
} else if (length < 256) {
stream.writeByte$I(217);
stream.writeByte$I(length);
} else if (length < 65536) {
stream.writeByte$I(218);
stream.writeShort$I(length);
} else {
stream.writeByte$I(219);
stream.writeInt$I(length);
}p$1.writeUTF$S$java_io_DataOutputStream.apply(this, [value, stream]);
return;
}if (Clazz.instanceOf(input, Clazz.array(Byte.TYPE, -1))) {
var value=input;
var length=value.length;
if (length < 256) {
stream.writeByte$I(196);
stream.writeByte$I(length);
} else if (length < 65536) {
stream.writeByte$I(197);
stream.writeShort$I(length);
} else {
stream.writeByte$I(198);
stream.writeInt$I(length);
}stream.write$BA(value);
return;
}if (Clazz.instanceOf(input, "java.lang.Integer") || Clazz.instanceOf(input, "java.lang.Double") ) {
if (Clazz.instanceOf(input, "java.lang.Double") && Double.isInfinite$D((input).objectValue$()) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number not finite: " + input]);
}if (Clazz.instanceOf(input, "java.lang.Double")) {
var value=(input).objectValue$();
stream.writeByte$I(203);
stream.writeDouble$D(value);
return;
}var value=((input).objectValue$()|0);
if (value >= 0) {
if (value < 128) {
stream.writeByte$I(value);
} else if (value < 256) {
stream.writeByte$I(204);
stream.writeByte$I(value);
} else if (value < 65536) {
stream.writeByte$I(205);
stream.writeShort$I(value);
} else {
stream.writeByte$I(206);
stream.writeInt$I(value);
}return;
}if (value >= -32) {
stream.writeByte$I(value);
} else if (value >= -128) {
stream.writeByte$I(208);
stream.writeByte$I(value);
} else if (value >= -32768) {
stream.writeByte$I(209);
stream.writeShort$I(value);
} else {
stream.writeByte$I(210);
stream.writeInt$I(value);
}return;
}if (input == null ) {
stream.writeByte$I(192);
return;
}if (Clazz.instanceOf(input, "java.lang.Boolean")) {
var value=(input).objectValue$();
stream.writeByte$I(value ? 195 : 194);
return;
}var length;
var isArray=input.getClass$().isArray$();
if (isArray) {
length=(input).length;
} else {
length=(input).size$();
}if (length < 16) {
stream.writeByte$I(length | (isArray ? 144 : 128));
} else if (length < 65536) {
stream.writeByte$I(isArray ? 220 : 222);
stream.writeShort$I(length);
} else {
stream.writeByte$I(isArray ? 221 : 223);
stream.writeInt$I(length);
}if (isArray) {
var value=input;
for (var object, $object = 0, $$object = value; $object<$$object.length&&((object=($$object[$object])),1);$object++) {
p$1.encodeInternal$O$java_io_DataOutputStream.apply(this, [object, stream]);
}
} else {
var value=input;
for (var key, $key = value.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
p$1.encodeInternal$O$java_io_DataOutputStream.apply(this, [key, stream]);
p$1.encodeInternal$O$java_io_DataOutputStream.apply(this, [value.get$O(key), stream]);
}
}}, p$1);

Clazz.newMeth(C$, 'writeUTF$S$java_io_DataOutputStream', function (data, stream) {
stream.write$BA(data.getBytes$S("UTF-8"));
}, p$1);

Clazz.newMeth(C$, 'determineUTFSize$S', function (data) {
var bytes=0;
for (var i=0; i < data.length$(); i++) {
var codePoint=Character.codePointAt$CharSequence$I(data, i);
if (codePoint < 128) {
bytes+=1;
} else if (codePoint < 2048) {
bytes+=2;
} else if (codePoint < 65536) {
bytes+=3;
} else if (codePoint < 1114112) {
bytes+=4;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad codepoint " + codePoint]);
}}
return bytes;
}, p$1);

Clazz.newMeth(C$, 'decode$java_io_InputStream', function (inputStream) {
var dataInputStream=Clazz.new_($I$(3,1).c$$java_io_InputStream,[inputStream]);
var map=p$1.decodeInternal$java_io_DataInputStream$Z.apply(this, [dataInputStream, true]);
dataInputStream.close$();
return map;
});

Clazz.newMeth(C$, 'decodeInternal$java_io_DataInputStream$Z', function (inputStream, decodeString) {
var int8=inputStream.readByte$();
var type=int8 & 255;
if ((type & 128) == 0) {
return new Integer(type);
}if ((type & 240) == 128) {
return p$1.map$java_io_DataInputStream$I.apply(this, [inputStream, type & 15]);
}if ((type & 240) == 144) {
return p$1.array$java_io_DataInputStream$I.apply(this, [inputStream, type & 15]);
}if ((type & 224) == 160) {
return p$1.str$java_io_DataInputStream$I$Z.apply(this, [inputStream, type & 31, decodeString]);
}if ((type & 224) == 224) {
return new Integer(int8);
}switch (type) {
case 192:
return null;
case 194:
return new Boolean(false);
case 195:
return new Boolean(true);
case 196:
return p$1.bin$java_io_DataInputStream$I.apply(this, [inputStream, inputStream.read$() & 255]);
case 197:
return p$1.bin$java_io_DataInputStream$I.apply(this, [inputStream, inputStream.readShort$() & 65535]);
case 198:
return p$1.bin$java_io_DataInputStream$I.apply(this, [inputStream, p$1.readUnsignedInt$java_io_DataInputStream.apply(this, [inputStream])]);
case 202:
return new Double(inputStream.readFloat$());
case 203:
return new Double(inputStream.readDouble$());
case 204:
return new Integer(inputStream.readByte$() & 255);
case 205:
return new Integer(inputStream.readShort$() & 65535);
case 206:
return new Integer(p$1.readUnsignedInt$java_io_DataInputStream.apply(this, [inputStream]));
case 208:
return new Integer(inputStream.readByte$());
case 209:
return new Integer(inputStream.readShort$());
case 210:
return new Integer(inputStream.readInt$());
case 217:
return p$1.str$java_io_DataInputStream$I$Z.apply(this, [inputStream, inputStream.readByte$() & 255, decodeString]);
case 218:
return p$1.str$java_io_DataInputStream$I$Z.apply(this, [inputStream, inputStream.readShort$() & 65535, decodeString]);
case 219:
return p$1.str$java_io_DataInputStream$I$Z.apply(this, [inputStream, p$1.readUnsignedInt$java_io_DataInputStream.apply(this, [inputStream]), decodeString]);
case 220:
return p$1.array$java_io_DataInputStream$I.apply(this, [inputStream, inputStream.readShort$() & 65535]);
case 221:
return p$1.array$java_io_DataInputStream$I.apply(this, [inputStream, p$1.readUnsignedInt$java_io_DataInputStream.apply(this, [inputStream])]);
case 222:
return p$1.map$java_io_DataInputStream$I.apply(this, [inputStream, inputStream.readShort$() & 65535]);
case 223:
return p$1.map$java_io_DataInputStream$I.apply(this, [inputStream, p$1.readUnsignedInt$java_io_DataInputStream.apply(this, [inputStream])]);
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown MessagePack type 0x" + type]);
}, p$1);

Clazz.newMeth(C$, 'readUnsignedInt$java_io_DataInputStream', function (inputStream) {
return ((inputStream.readInt$() & 4294967295)|0);
}, p$1);

Clazz.newMeth(C$, 'map$java_io_DataInputStream$I', function (inputStream, length) {
var value=$I$(4).getMap$();
for (var i=0; i < length; i++) {
value.put$TK$TV(p$1.decodeInternal$java_io_DataInputStream$Z.apply(this, [inputStream, true]), p$1.decodeInternal$java_io_DataInputStream$Z.apply(this, [inputStream, false]));
}
return value;
}, p$1);

Clazz.newMeth(C$, 'bin$java_io_DataInputStream$I', function (inputStream, length) {
var tmp=Clazz.array(Byte.TYPE, [length]);
inputStream.readFully$BA(tmp);
return tmp;
}, p$1);

Clazz.newMeth(C$, 'str$java_io_DataInputStream$I$Z', function (inputStream, length, asString) {
var bytes=p$1.bin$java_io_DataInputStream$I.apply(this, [inputStream, length]);
return (asString ?  String.instantialize(bytes, "UTF-8") : bytes);
}, p$1);

Clazz.newMeth(C$, 'array$java_io_DataInputStream$I', function (inputStream, length) {
var value=Clazz.array(java.lang.Object, [length]);
for (var i=0; i < length; i++) {
value[i]=p$1.decodeInternal$java_io_DataInputStream$Z.apply(this, [inputStream, false]);
}
return value;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
