(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'io.scif.media.imageio.plugins.tiff.TIFFTagSet','java.util.Arrays','io.scif.media.imageio.plugins.tiff.TIFFTag','java.util.Vector','io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','java.util.ArrayList','io.scif.media.imageio.plugins.tiff.TIFFField']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFIFD", null, 'io.scif.media.imageio.plugins.tiff.TIFFDirectory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stripOrTileByteCountsPosition=-1;
this.stripOrTileOffsetsPosition=-1;
this.lastPosition=-1;
}, 1);

C$.$fields$=[['L',['stripOrTileByteCountsPosition','stripOrTileOffsetsPosition','lastPosition']]]

Clazz.newMeth(C$, 'getTag$I$java_util_List', function (tagNumber, tagSets) {
var iter=tagSets.iterator$();
while (iter.hasNext$()){
var tagSet=iter.next$();
var tag=tagSet.getTag$I(tagNumber);
if (tag != null ) {
return tag;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getTag$S$java_util_List', function (tagName, tagSets) {
var iter=tagSets.iterator$();
while (iter.hasNext$()){
var tagSet=iter.next$();
var tag=tagSet.getTag$S(tagName);
if (tag != null ) {
return tag;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'writeTIFFFieldToStream$io_scif_media_imageio_plugins_tiff_TIFFField$javax_imageio_stream_ImageOutputStream', function (field, stream) {
var count=field.getCount$();
var data=field.getData$();
switch (field.getType$()) {
case 2:
for (var i=0; i < count; i++) {
var s=(data)[i];
var length=s.length$();
for (var j=0; j < length; j++) {
stream.writeByte$I((s.charCodeAt$I(j)) & 255);
}
stream.writeByte$I(0);
}
break;
case 7:
case 1:
case 6:
stream.write$BA(data);
break;
case 3:
stream.writeChars$CA$I$I(data, 0, (data).length);
break;
case 8:
stream.writeShorts$HA$I$I(data, 0, (data).length);
break;
case 9:
stream.writeInts$IA$I$I(data, 0, (data).length);
break;
case 4:
for (var i=0; i < count; i++) {
stream.writeInt$I((((data)[i])|0));
}
break;
case 13:
stream.writeInt$I(0);
break;
case 11:
stream.writeFloats$FA$I$I(data, 0, (data).length);
break;
case 12:
stream.writeDoubles$DA$I$I(data, 0, (data).length);
break;
case 10:
for (var i=0; i < count; i++) {
stream.writeInt$I((data)[i][0]);
stream.writeInt$I((data)[i][1]);
}
break;
case 5:
for (var i=0; i < count; i++) {
var num=(data)[i][0];
var den=(data)[i][1];
stream.writeInt$I((num|0));
stream.writeInt$I((den|0));
}
break;
default:
}
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$io_scif_media_imageio_plugins_tiff_TIFFTag', function (tagSets, parentTag) {
;C$.superclazz.c$$io_scif_media_imageio_plugins_tiff_TIFFTagSetA$io_scif_media_imageio_plugins_tiff_TIFFTag.apply(this,[tagSets.toArray$TTA(Clazz.array($I$(1), [tagSets.size$()])), parentTag]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (tagSets) {
C$.c$$java_util_List$io_scif_media_imageio_plugins_tiff_TIFFTag.apply(this, [tagSets, null]);
}, 1);

Clazz.newMeth(C$, 'getTagSetList$', function () {
return $I$(2).asList$TTA(this.getTagSets$());
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(2).asList$TTA(this.getTIFFFields$()).iterator$();
});

Clazz.newMeth(C$, 'initialize$javax_imageio_stream_ImageInputStream$Z', function (stream, ignoreUnknownFields) {
this.removeTIFFFields$();
var tagSetList=this.getTagSetList$();
var numEntries=stream.readUnsignedShort$();
for (var i=0; i < numEntries; i++) {
var tag=stream.readUnsignedShort$();
var type=stream.readUnsignedShort$();
var count=(stream.readUnsignedInt$()|0);
var tiffTag=C$.getTag$I$java_util_List(tag, tagSetList);
if (ignoreUnknownFields && tiffTag == null  ) {
stream.skipBytes$I(4);
continue;
}var nextTagOffset=stream.getStreamPosition$() + 4;
var sizeOfType=$I$(3).getSizeOfType$I(type);
if (count * sizeOfType > 4) {
var value=stream.readUnsignedInt$();
stream.seek$J(value);
}if (tag == 279 || tag == 325  || tag == 514 ) {
this.stripOrTileByteCountsPosition=stream.getStreamPosition$();
} else if (tag == 273 || tag == 324  || tag == 513 ) {
this.stripOrTileOffsetsPosition=stream.getStreamPosition$();
}var obj=null;
try {
switch (type) {
case 1:
case 6:
case 7:
case 2:
var bvalues=Clazz.array(Byte.TYPE, [count]);
stream.readFully$BA$I$I(bvalues, 0, count);
if (type == 2) {
var v=Clazz.new_($I$(4,1));
var inString=false;
var prevIndex=0;
for (var index=0; index <= count; index++) {
if (index < count && bvalues[index] != 0 ) {
if (!inString) {
prevIndex=index;
inString=true;
}} else {
if (inString) {
var s= String.instantialize(bvalues, prevIndex, index - prevIndex);
v.add$TE(s);
inString=false;
}}}
count=v.size$();
var strings;
if (count != 0) {
strings=Clazz.array(String, [count]);
for (var c=0; c < count; c++) {
strings[c]=v.elementAt$I(c);
}
} else {
count=1;
strings=Clazz.array(String, -1, [""]);
}obj=strings;
} else {
obj=bvalues;
}break;
case 3:
var cvalues=Clazz.array(Character.TYPE, [count]);
for (var j=0; j < count; j++) {
cvalues[j]=String.fromCharCode((stream.readUnsignedShort$()));
}
obj=cvalues;
break;
case 4:
case 13:
var lvalues=Clazz.array(Long.TYPE, [count]);
for (var j=0; j < count; j++) {
lvalues[j]=stream.readUnsignedInt$();
}
obj=lvalues;
break;
case 5:
var llvalues=Clazz.array(Long.TYPE, [count, 2]);
for (var j=0; j < count; j++) {
llvalues[j][0]=stream.readUnsignedInt$();
llvalues[j][1]=stream.readUnsignedInt$();
}
obj=llvalues;
break;
case 8:
var svalues=Clazz.array(Short.TYPE, [count]);
for (var j=0; j < count; j++) {
svalues[j]=stream.readShort$();
}
obj=svalues;
break;
case 9:
var ivalues=Clazz.array(Integer.TYPE, [count]);
for (var j=0; j < count; j++) {
ivalues[j]=stream.readInt$();
}
obj=ivalues;
break;
case 10:
var iivalues=Clazz.array(Integer.TYPE, [count, 2]);
for (var j=0; j < count; j++) {
iivalues[j][0]=stream.readInt$();
iivalues[j][1]=stream.readInt$();
}
obj=iivalues;
break;
case 11:
var fvalues=Clazz.array(Float.TYPE, [count]);
for (var j=0; j < count; j++) {
fvalues[j]=stream.readFloat$();
}
obj=fvalues;
break;
case 12:
var dvalues=Clazz.array(Double.TYPE, [count]);
for (var j=0; j < count; j++) {
dvalues[j]=stream.readDouble$();
}
obj=dvalues;
break;
default:
break;
}
} catch (eofe) {
if (Clazz.exceptionOf(eofe,"java.io.EOFException")){
if ($I$(5).getInstance$().getTag$I(tag) == null ) {
throw eofe;
}} else {
throw eofe;
}
}
if (tiffTag == null ) {
} else if (!tiffTag.isDataTypeOK$I(type)) {
} else if (tiffTag.isIFDPointer$() && obj != null  ) {
stream.mark$();
stream.seek$J((obj)[0]);
var tagSets=Clazz.new_($I$(6,1).c$$I,[1]);
tagSets.add$TE(tiffTag.getTagSet$());
var subIFD=Clazz.new_(C$.c$$java_util_List,[tagSets]);
subIFD.initialize$javax_imageio_stream_ImageInputStream$Z(stream, ignoreUnknownFields);
obj=subIFD;
stream.reset$();
}if (tiffTag == null ) {
tiffTag=Clazz.new_($I$(3,1).c$$S$I$I$io_scif_media_imageio_plugins_tiff_TIFFTagSet,[null, tag, 1 << type, null]);
}if (obj != null ) {
var f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[tiffTag, type, count, obj]);
this.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}stream.seek$J(nextTagOffset);
}
this.lastPosition=stream.getStreamPosition$();
});

Clazz.newMeth(C$, 'writeToStream$javax_imageio_stream_ImageOutputStream', function (stream) {
var numFields=this.getNumTIFFFields$();
stream.writeShort$I(numFields);
var nextSpace=stream.getStreamPosition$() + 12 * numFields + 4;
var iter=this.iterator$();
while (iter.hasNext$()){
var f=iter.next$();
var tag=f.getTag$();
var type=f.getType$();
var count=f.getCount$();
if (type == 0) {
type=7;
}var size=count * $I$(3).getSizeOfType$I(type);
if (type == 2) {
var chars=0;
for (var i=0; i < count; i++) {
chars+=f.getAsString$I(i).length$() + 1;
}
count=chars;
size=count;
}var tagNumber=f.getTagNumber$();
stream.writeShort$I(tagNumber);
stream.writeShort$I(type);
stream.writeInt$I(count);
stream.writeInt$I(0);
stream.mark$();
stream.skipBytes$I(-4);
var pos;
if (size > 4 || tag.isIFDPointer$() ) {
nextSpace=(nextSpace + 3) & ~3;
stream.writeInt$I((nextSpace|0));
stream.seek$J(nextSpace);
pos=nextSpace;
if (tag.isIFDPointer$()) {
var subIFD=f.getData$();
subIFD.writeToStream$javax_imageio_stream_ImageOutputStream(stream);
nextSpace=subIFD.lastPosition;
} else {
C$.writeTIFFFieldToStream$io_scif_media_imageio_plugins_tiff_TIFFField$javax_imageio_stream_ImageOutputStream(f, stream);
nextSpace=stream.getStreamPosition$();
}} else {
pos=stream.getStreamPosition$();
C$.writeTIFFFieldToStream$io_scif_media_imageio_plugins_tiff_TIFFField$javax_imageio_stream_ImageOutputStream(f, stream);
}if (tagNumber == 279 || tagNumber == 325  || tagNumber == 514 ) {
this.stripOrTileByteCountsPosition=pos;
} else if (tagNumber == 273 || tagNumber == 324  || tagNumber == 513 ) {
this.stripOrTileOffsetsPosition=pos;
}stream.reset$();
}
this.lastPosition=nextSpace;
});

Clazz.newMeth(C$, 'getStripOrTileByteCountsPosition$', function () {
return this.stripOrTileByteCountsPosition;
});

Clazz.newMeth(C$, 'getStripOrTileOffsetsPosition$', function () {
return this.stripOrTileOffsetsPosition;
});

Clazz.newMeth(C$, 'getLastPosition$', function () {
return this.lastPosition;
});

Clazz.newMeth(C$, 'setPositions$J$J$J', function (stripOrTileOffsetsPosition, stripOrTileByteCountsPosition, lastPosition) {
this.stripOrTileOffsetsPosition=stripOrTileOffsetsPosition;
this.stripOrTileByteCountsPosition=stripOrTileByteCountsPosition;
this.lastPosition=lastPosition;
});

Clazz.newMeth(C$, 'getShallowClone$', function () {
var baselineTagSet=$I$(5).getInstance$();
var tagSetList=this.getTagSetList$();
if (!tagSetList.contains$O(baselineTagSet)) {
return this;
}var shallowClone=Clazz.new_(C$.c$$java_util_List$io_scif_media_imageio_plugins_tiff_TIFFTag,[tagSetList, this.getParentTag$()]);
var baselineTagNumbers=baselineTagSet.getTagNumbers$();
var fields=this.iterator$();
while (fields.hasNext$()){
var field=fields.next$();
var tagNumber= new Integer(field.getTagNumber$());
var fieldClone;
if (baselineTagNumbers.contains$O(tagNumber)) {
var fieldData=field.getData$();
var fieldType=field.getType$();
try {
switch (fieldType) {
case 1:
case 6:
case 7:
fieldData=(fieldData).clone$();
break;
case 2:
fieldData=(fieldData).clone$();
break;
case 3:
fieldData=(fieldData).clone$();
break;
case 4:
case 13:
fieldData=(fieldData).clone$();
break;
case 5:
fieldData=(fieldData).clone$();
break;
case 8:
fieldData=(fieldData).clone$();
break;
case 9:
fieldData=(fieldData).clone$();
break;
case 10:
fieldData=(fieldData).clone$();
break;
case 11:
fieldData=(fieldData).clone$();
break;
case 12:
fieldData=(fieldData).clone$();
break;
default:
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
fieldClone=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[field.getTag$(), fieldType, field.getCount$(), fieldData]);
} else {
fieldClone=field;
}shallowClone.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(fieldClone);
}
shallowClone.setPositions$J$J$J(this.stripOrTileOffsetsPosition, this.stripOrTileByteCountsPosition, this.lastPosition);
return shallowClone;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
