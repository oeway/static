(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),I$=[[0,['org.scijava.io.handle.DataHandle','.ByteOrder'],'StringBuilder','java.io.InputStreamReader','org.scijava.io.handle.DataHandleInputStream','org.scijava.util.Bytes','java.io.DataInputStream','org.scijava.io.handle.DataHandles']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "DataHandle", function(){
}, null, ['org.scijava.plugin.WrapperPlugin', 'java.io.DataInput', 'java.io.DataOutput', 'java.io.Closeable']);
C$.$classes$=[['ByteOrder',25]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DEFAULT_BLOCK_SIZE=262144;
C$.MAX_SEARCH_SIZE=536870912;
}

C$.$fields$=[[]
,['I',['DEFAULT_BLOCK_SIZE','MAX_SEARCH_SIZE']]]
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'lastModified$', function () {
return null;
});

Clazz.newMeth(C$, 'checksum$', function () {
return null;
});

Clazz.newMeth(C$, 'available$J', function (count) {
var remain=this.length$() - this.offset$();
return remain < count ? remain : count;
});

Clazz.newMeth(C$, 'ensureReadable$J', function (count) {
if (!this.isReadable$()) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["This handle is write-only."]);
if (this.available$J(count) < count) throw Clazz.new_(Clazz.load('java.io.EOFException'));
});

Clazz.newMeth(C$, 'ensureWritable$J', function (count) {
if (!this.isWritable$()) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["This handle is read-only."]);
var minLength=this.offset$() + count;
if (this.length$() < minLength) {
this.setLength$J(minLength);
return false;
}return true;
});

Clazz.newMeth(C$, 'isBigEndian$', function () {
return this.getOrder$() === $I$(1).BIG_ENDIAN ;
});

Clazz.newMeth(C$, 'isLittleEndian$', function () {
return this.getOrder$() === $I$(1).LITTLE_ENDIAN ;
});

Clazz.newMeth(C$, 'setLittleEndian$Z', function (little) {
this.setOrder$org_scijava_io_handle_DataHandle_ByteOrder(little ? $I$(1).LITTLE_ENDIAN : $I$(1).BIG_ENDIAN);
});

Clazz.newMeth(C$, 'readCString$', function () {
var line=this.findString$SA(["\u0000"]);
return line.length$() == 0 ? null : line;
});

Clazz.newMeth(C$, 'readString$I', function (n) {
var r=(this.available$J(n)|0);
var b=Clazz.array(Byte.TYPE, [r]);
this.readFully$BA(b);
return  String.instantialize(b, this.getEncoding$());
});

Clazz.newMeth(C$, 'readString$S', function (lastChars) {
if (lastChars.length$() == 1) return this.findString$SA([lastChars]);
var terminators=Clazz.array(String, [lastChars.length$()]);
for (var i=0; i < terminators.length; i++) {
terminators[i]=lastChars.substring$I$I(i, i + 1);
}
return this.findString$SA(terminators);
});

Clazz.newMeth(C$, 'findString$SA', function (terminators) {
return this.findString$Z$I$SA(true, 262144, terminators);
});

Clazz.newMeth(C$, 'findString$Z$SA', function (saveString, terminators) {
return this.findString$Z$I$SA(saveString, 262144, terminators);
});

Clazz.newMeth(C$, 'findString$I$SA', function (blockSize, terminators) {
return this.findString$Z$I$SA(true, blockSize, terminators);
});

Clazz.newMeth(C$, 'findString$Z$I$SA', function (saveString, blockSize, terminators) {
var out=Clazz.new_($I$(2,1));
var startPos=this.offset$();
var bytesDropped=0;
var maxLen=saveString ? 536870912 : 9223372036854775807;
var match=false;
var maxTermLen=0;
for (var term, $term = 0, $$term = terminators; $term<$$term.length&&((term=($$term[$term])),1);$term++) {
var len=term.length$();
if (len > maxTermLen) maxTermLen=len;
}
var $in=Clazz.new_($I$(3,1).c$$java_io_InputStream$S,[Clazz.new_(1,{L:"Object"},$I$(4,1).c$$org_scijava_io_handle_DataHandle,[this]), this.getEncoding$()]);
var buf=Clazz.array(Character.TYPE, [blockSize]);
var loc=0;
var r=0;
while (loc < maxLen && ((r=$in.read$CA$I$I(buf, 0, blockSize)) > 1) ){
if (!saveString) {
var outLen=out.length$();
if (outLen >= maxTermLen) {
var dropIndex=outLen - maxTermLen + 1;
var last=out.substring$I$I(dropIndex, outLen);
out.setLength$I(0);
out.append$S(last);
bytesDropped+=dropIndex;
}}out.append$CA$I$I(buf, 0, r);
var min=2147483647;
var tagLen=0;
for (var t, $t = 0, $$t = terminators; $t<$$t.length&&((t=($$t[$t])),1);$t++) {
var len=t.length$();
var start=((loc - bytesDropped - len )|0);
var value=out.indexOf$S$I(t, start < 0 ? 0 : start);
if (value >= 0 && value < min ) {
match=true;
min=value;
tagLen=len;
}}
if (match) {
this.seek$J(startPos + bytesDropped + min + tagLen );
if (saveString) {
out.setLength$I(min + tagLen);
return out.toString();
}return null;
}loc+=r;
}
if (loc > 536870912) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Maximum search length reached."]);
}return saveString ? out.toString() : null;
});

Clazz.newMeth(C$, 'writeLine$S', function (string) {
this.writeBytes$S(string);
this.writeBytes$S("\n");
});

Clazz.newMeth(C$, 'read$', function () {
return this.offset$() < this.length$() ? this.readByte$() & 255 : -1;
});

Clazz.newMeth(C$, 'read$BA', function (b) {
return this.read$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'skip$J', function (n) {
var skip=this.available$J(n);
if (skip <= 0) return 0;
this.seek$J(this.offset$() + skip);
return skip;
});

Clazz.newMeth(C$, 'readFully$BA', function (b) {
this.readFully$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'readFully$BA$I$I', function (b, off, len) {
if (len < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
var n=0;
while (n < len){
var count=this.read$BA$I$I(b, off + n, len - n);
if (count < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
n+=count;
}
});

Clazz.newMeth(C$, 'skipBytes$I', function (n) {
var skip=(this.available$J(n)|0);
if (skip < 0) return 0;
this.seek$J(this.offset$() + skip);
return skip;
});

Clazz.newMeth(C$, 'readBoolean$', function () {
return this.readByte$() != 0;
});

Clazz.newMeth(C$, 'readUnsignedByte$', function () {
return this.readByte$() & 255;
});

Clazz.newMeth(C$, 'readShort$', function () {
var buf=this.conversionBuffer$();
var read=this.read$BA$I$I(buf, 0, 2);
if (read < 2) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return $I$(5).toShort$BA$Z(buf, this.isLittleEndian$());
});

Clazz.newMeth(C$, 'readUnsignedShort$', function () {
return this.readShort$() & 65535;
});

Clazz.newMeth(C$, 'readChar$', function () {
return String.fromCharCode(this.readShort$());
});

Clazz.newMeth(C$, 'readInt$', function () {
var buf=this.conversionBuffer$();
var read=this.read$BA$I$I(buf, 0, 4);
if (read < 4) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return $I$(5).toInt$BA$Z(buf, this.isLittleEndian$());
});

Clazz.newMeth(C$, 'readLong$', function () {
var buf=this.conversionBuffer$();
var read=this.read$BA$I$I(buf, 0, 8);
if (read < 8) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}return $I$(5).toLong$BA$Z(buf, this.isLittleEndian$());
});

Clazz.newMeth(C$, 'readFloat$', function () {
return Float.intBitsToFloat$I(this.readInt$());
});

Clazz.newMeth(C$, 'readDouble$', function () {
return Double.longBitsToDouble$J(this.readLong$());
});

Clazz.newMeth(C$, 'readLine$', function () {
var input=Clazz.new_($I$(2,1));
var c=-1;
var eol=false;
while (!eol){
switch (c=this.read$()) {
case -1:
case 10:
eol=true;
break;
case 13:
eol=true;
var cur=this.offset$();
if (this.read$() != 10 ) this.seek$J(cur);
break;
default:
input.append$C(String.fromCharCode(c));
break;
}
}
if (c == -1 && input.length$() == 0 ) {
return null;
}return input.toString();
});

Clazz.newMeth(C$, 'readUTF$', function () {
return $I$(6).readUTF$java_io_DataInput(this);
});

Clazz.newMeth(C$, 'write$BA', function (b) {
this.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'writeBoolean$Z', function (v) {
this.write$I(v ? 1 : 0);
});

Clazz.newMeth(C$, 'writeByte$I', function (v) {
this.write$I(v);
});

Clazz.newMeth(C$, 'writeShort$I', function (v) {
var buf=this.conversionBuffer$();
$I$(5).unpack$J$BA$I$I$Z(v, buf, 0, 2, this.isLittleEndian$());
this.write$BA$I$I(buf, 0, 2);
});

Clazz.newMeth(C$, 'writeChar$I', function (v) {
this.writeShort$I(v);
});

Clazz.newMeth(C$, 'writeInt$I', function (v) {
var buf=this.conversionBuffer$();
$I$(5).unpack$J$BA$I$I$Z(v, buf, 0, 4, this.isLittleEndian$());
this.write$BA$I$I(buf, 0, 4);
});

Clazz.newMeth(C$, 'writeLong$J', function (v) {
var buf=this.conversionBuffer$();
$I$(5).unpack$J$BA$I$I$Z(v, buf, 0, 8, this.isLittleEndian$());
this.write$BA$I$I(buf, 0, 8);
});

Clazz.newMeth(C$, 'writeFloat$F', function (v) {
var buf=this.conversionBuffer$();
$I$(5).unpack$J$BA$I$I$Z(Float.floatToIntBits$F(v), buf, 0, 4, this.isLittleEndian$());
this.write$BA$I$I(buf, 0, 4);
});

Clazz.newMeth(C$, 'writeDouble$D', function (v) {
var buf=this.conversionBuffer$();
$I$(5).unpack$J$BA$I$I$Z(Double.doubleToLongBits$D(v), buf, 0, 8, this.isLittleEndian$());
this.write$BA$I$I(buf, 0, 8);
});

Clazz.newMeth(C$, 'writeBytes$S', function (s) {
this.write$BA(s.getBytes$S("UTF-8"));
});

Clazz.newMeth(C$, 'writeChars$S', function (s) {
var len=s.length$();
for (var i=0; i < len; i++) {
this.writeChar$I(s.charAt$I(i).$c());
}
});

Clazz.newMeth(C$, 'writeUTF$S', function (str) {
$I$(7).writeUTF$S$java_io_DataOutput(str, this);
});
};;
(function(){/*e*/var C$=Clazz.newClass(P$.DataHandle, "ByteOrder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "LITTLE_ENDIAN", 0, []);
Clazz.newEnumConst($vals, C$.c$, "BIG_ENDIAN", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
