(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.fileformat.reader"),I$=[[0,'Error','java.util.Vector','io.scif.media.imageioimpl.plugins.jpeg2000.SignatureBox','io.scif.media.imageioimpl.plugins.jpeg2000.Box','io.scif.media.imageioimpl.plugins.jpeg2000.FileTypeBox','io.scif.media.imageioimpl.plugins.jpeg2000.HeaderBox','io.scif.media.imageioimpl.plugins.jpeg2000.XMLBox','io.scif.media.imageioimpl.plugins.jpeg2000.DataEntryURLBox','io.scif.media.imageioimpl.plugins.jpeg2000.UUIDBox','io.scif.media.imageioimpl.plugins.jpeg2000.UUIDListBox','io.scif.media.imageioimpl.plugins.jpeg2000.PaletteBox','io.scif.media.imageioimpl.plugins.jpeg2000.ComponentMappingBox','io.scif.media.imageioimpl.plugins.jpeg2000.ChannelDefinitionBox','io.scif.media.imageioimpl.plugins.jpeg2000.BitsPerComponentBox','java.awt.color.ICC_Profile','io.scif.media.imageioimpl.plugins.jpeg2000.ColorSpecificationBox','io.scif.media.imageioimpl.plugins.jpeg2000.ResolutionBox','java.awt.image.IndexColorModel','java.awt.color.ICC_ColorSpace','java.awt.color.ColorSpace','java.awt.image.ComponentColorModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileFormatReader", null, null, 'io.scif.jj2000.j2k.fileformat.FileFormatBoxes');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.colorModel=null;
}, 1);

C$.$fields$=[['I',['width','height','numComp','bitDepth','compressionType','unknownColor','intelProp','colorSpaceType'],'O',['$in','io.scif.jj2000.j2k.io.RandomAccessIO','codeStreamPos','java.util.Vector','+codeStreamLength','colorModel','java.awt.image.ColorModel','metadata','io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadata','bitDepths','byte[]','lut','byte[][]','compSize','byte[]','comps','short[]','type','byte[]','+maps','channels','short[]','+cType','+associations','profile','java.awt.color.ICC_Profile']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata', function ($in, metadata) {
;C$.$init$.apply(this);
this.$in=$in;
this.metadata=metadata;
}, 1);

Clazz.newMeth(C$, 'readFileFormat$', function () {
var foundCodeStreamBoxes=0;
var box;
var length;
var longLength=0;
var pos;
var marker;
var jp2HeaderBoxFound=false;
var lastBoxFound=false;
try {
pos=this.$in.getPos$();
if (this.$in.readInt$() != 12 || this.$in.readInt$() != 1783636000  || this.$in.readInt$() != 218793738 ) {
this.$in.seek$I(pos);
marker=this.$in.readShort$();
if (marker != -177) throw Clazz.new_($I$(1,1).c$$S,["File is neither valid JP2 file nor valid JPEG 2000 codestream"]);
this.$in.seek$I(pos);
if (this.codeStreamPos == null ) this.codeStreamPos=Clazz.new_($I$(2,1));
this.codeStreamPos.addElement$TE( new Integer(pos));
return;
}if (this.metadata != null ) this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(3,1)));
while (!lastBoxFound){
pos=this.$in.getPos$();
length=this.$in.readInt$();
if ((pos + length) == this.$in.length$()) lastBoxFound=true;
box=this.$in.readInt$();
if (length == 0) {
lastBoxFound=true;
length=this.$in.length$() - this.$in.getPos$();
} else if (length == 1) {
longLength=this.$in.readLong$();
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["File too long."]);
} else longLength=0;
pos=this.$in.getPos$();
length-=8;
switch (box) {
case 1718909296:
this.readFileTypeBox$I$J(length + 8, longLength);
break;
case 1785737827:
if (!jp2HeaderBoxFound) throw Clazz.new_($I$(1,1).c$$S,["Invalid JP2 file: JP2Header box not found before Contiguous codestream box "]);
this.readContiguousCodeStreamBox$I$J(length + 8, longLength);
break;
case 1785737832:
if (jp2HeaderBoxFound) throw Clazz.new_($I$(1,1).c$$S,["Invalid JP2 file: Multiple JP2Header boxes found"]);
this.readJP2HeaderBox$I(length + 8);
jp2HeaderBoxFound=true;
length=0;
break;
case 1768449138:
this.readImageHeaderBox$I(length);
break;
case 1685074537:
this.readIntPropertyBox$I(length);
break;
case 2020437024:
this.readXMLBox$I(length);
break;
case 1969843814:
length=0;
break;
case 1970628964:
this.readUUIDBox$I(length);
break;
case 1969451892:
this.readUUIDListBox$I(length);
break;
case 1970433056:
this.readURLBox$I(length);
break;
case 1885564018:
this.readPaletteBox$I(length + 8);
break;
case 1651532643:
this.readBitsPerComponentBox$I(length);
break;
case 1668112752:
this.readComponentMappingBox$I(length);
break;
case 1668246642:
this.readColourSpecificationBox$I(length);
break;
case 1667523942:
this.readChannelDefinitionBox$I(length);
break;
case 1919251232:
length=0;
break;
case 1919251299:
case 1919251300:
this.readResolutionBox$I$I(box, length);
break;
default:
if (this.metadata != null ) {
var data=Clazz.array(Byte.TYPE, [length]);
this.$in.readFully$BA$I$I(data, 0, length);
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(4,1).c$$I$I$J$BA,[length + 8, box, longLength, data]));
}}
if (!lastBoxFound) this.$in.seek$I(pos + length);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
throw Clazz.new_($I$(1,1).c$$S,["EOF reached before finding Contiguous Codestream Box"]);
} else {
throw e;
}
}
if (this.codeStreamPos.size$() == 0) {
throw Clazz.new_($I$(1,1).c$$S,["Invalid JP2 file: Contiguous codestream box missing"]);
}return;
});

Clazz.newMeth(C$, 'readFileTypeBox$I$J', function (length, longLength) {
var nComp;
var foundComp=false;
if (length == 1) {
longLength=this.$in.readLong$();
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["File too long."]);
}if (this.$in.readInt$() != 1785737760) return false;
var minorVersion=this.$in.readInt$();
nComp=((length - 16)/4|0);
var comp=Clazz.array(Integer.TYPE, [nComp]);
for (var i=0; i < nComp; i++) {
if ((comp[i]=this.$in.readInt$()) == 1785737760) foundComp=true;
}
if (!foundComp) return false;
if (this.metadata != null ) this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(5,1).c$$I$I$IA,[1785737760, minorVersion, comp]));
return true;
});

Clazz.newMeth(C$, 'readJP2HeaderBox$I', function (length) {
if (length == 0) throw Clazz.new_($I$(1,1).c$$S,["Zero-length of JP2Header Box"]);
return true;
});

Clazz.newMeth(C$, 'readImageHeaderBox$I', function (length) {
if (length == 0) throw Clazz.new_($I$(1,1).c$$S,["Zero-length of JP2Header Box"]);
this.height=this.$in.readInt$();
this.width=this.$in.readInt$();
this.numComp=this.$in.readShort$();
this.bitDepth=this.$in.readByte$();
this.compressionType=this.$in.readByte$();
this.unknownColor=this.$in.readByte$();
this.intelProp=this.$in.readByte$();
if (this.metadata != null ) {
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(6,1).c$$I$I$I$I$I$I$I,[this.height, this.width, this.numComp, this.bitDepth, this.compressionType, this.unknownColor, this.intelProp]));
}return true;
});

Clazz.newMeth(C$, 'readContiguousCodeStreamBox$I$J', function (length, longLength) {
var ccpos=this.$in.getPos$();
if (this.codeStreamPos == null ) this.codeStreamPos=Clazz.new_($I$(2,1));
this.codeStreamPos.addElement$TE( new Integer(ccpos));
if (this.codeStreamLength == null ) this.codeStreamLength=Clazz.new_($I$(2,1));
this.codeStreamLength.addElement$TE( new Integer(length));
return true;
});

Clazz.newMeth(C$, 'readIntPropertyBox$I', function (length) {
if (this.metadata != null ) {
var data=Clazz.array(Byte.TYPE, [length]);
this.$in.readFully$BA$I$I(data, 0, length);
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(4,1).c$$I$I$BA,[length + 8, 1785737833, data]));
}});

Clazz.newMeth(C$, 'readXMLBox$I', function (length) {
if (this.metadata != null ) {
var data=Clazz.array(Byte.TYPE, [length]);
this.$in.readFully$BA$I$I(data, 0, length);
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(7,1).c$$BA,[data]));
}});

Clazz.newMeth(C$, 'readURLBox$I', function (length) {
if (this.metadata != null ) {
var data=Clazz.array(Byte.TYPE, [length]);
this.$in.readFully$BA$I$I(data, 0, length);
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(8,1).c$$BA,[data]));
}});

Clazz.newMeth(C$, 'readUUIDBox$I', function (length) {
if (this.metadata != null ) {
var data=Clazz.array(Byte.TYPE, [length]);
this.$in.readFully$BA$I$I(data, 0, length);
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(9,1).c$$BA,[data]));
}});

Clazz.newMeth(C$, 'readUUIDListBox$I', function (length) {
if (this.metadata != null ) {
var data=Clazz.array(Byte.TYPE, [length]);
this.$in.readFully$BA$I$I(data, 0, length);
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(10,1).c$$BA,[data]));
}});

Clazz.newMeth(C$, 'readPaletteBox$I', function (length) {
var pos=this.$in.getPos$();
var lutSize=this.$in.readShort$();
var numComp=this.$in.readByte$();
this.compSize=Clazz.array(Byte.TYPE, [numComp]);
for (var i=0; i < numComp; i++) {
this.compSize[i]=(this.$in.readByte$()|0);
}
this.lut=Clazz.array(Byte.TYPE, [numComp, lutSize]);
for (var n=0; n < lutSize; n++) {
for (var c=0; c < numComp; c++) {
var depth=1 + (this.compSize[c] & 127);
if (depth > 32) depth=32;
var numBytes=(depth + 7) >> 3;
var mask=(1 << depth) - 1;
var buf=Clazz.array(Byte.TYPE, [numBytes]);
this.$in.readFully$BA$I$I(buf, 0, numBytes);
var val=0;
for (var k=0; k < numBytes; k++) {
val=buf[k] + (val << 8);
}
this.lut[c][n]=((val|0)|0);
}
}
if (this.metadata != null ) {
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(11,1).c$$I$BA$BAA,[length, this.compSize, this.lut]));
}});

Clazz.newMeth(C$, 'readComponentMappingBox$I', function (length) {
var num=(length/4|0);
this.comps=Clazz.array(Short.TYPE, [num]);
this.type=Clazz.array(Byte.TYPE, [num]);
this.maps=Clazz.array(Byte.TYPE, [num]);
for (var i=0; i < num; i++) {
this.comps[i]=this.$in.readShort$();
this.type[i]=(this.$in.readByte$()|0);
this.maps[i]=(this.$in.readByte$()|0);
}
if (this.metadata != null ) {
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(12,1).c$$HA$BA$BA,[this.comps, this.type, this.maps]));
}});

Clazz.newMeth(C$, 'readChannelDefinitionBox$I', function (length) {
var num=this.$in.readShort$();
this.channels=Clazz.array(Short.TYPE, [num]);
this.cType=Clazz.array(Short.TYPE, [num]);
this.associations=Clazz.array(Short.TYPE, [num]);
for (var i=0; i < num; i++) {
this.channels[i]=this.$in.readShort$();
this.cType[i]=this.$in.readShort$();
this.associations[i]=this.$in.readShort$();
}
if (this.metadata != null ) {
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(13,1).c$$HA$HA$HA,[this.channels, this.cType, this.associations]));
}});

Clazz.newMeth(C$, 'readBitsPerComponentBox$I', function (length) {
this.bitDepths=Clazz.array(Byte.TYPE, [length]);
this.$in.readFully$BA$I$I(this.bitDepths, 0, length);
if (this.metadata != null ) {
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(14,1).c$$BA,[this.bitDepths]));
}});

Clazz.newMeth(C$, 'readColourSpecificationBox$I', function (length) {
var method=($b$[0] = this.$in.readByte$(), $b$[0]);
var prec=($b$[0] = this.$in.readByte$(), $b$[0]);
var approx=($b$[0] = this.$in.readByte$(), $b$[0]);
if (method == 2) {
var data=Clazz.array(Byte.TYPE, [length - 3]);
this.$in.readFully$BA$I$I(data, 0, data.length);
this.profile=$I$(15).getInstance$BA(data);
} else this.colorSpaceType=this.$in.readInt$();
if (this.metadata != null ) {
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(16,1).c$$B$B$B$I$java_awt_color_ICC_Profile,[($b$[0] = method, $b$[0]), ($b$[0] = prec, $b$[0]), ($b$[0] = approx, $b$[0]), this.colorSpaceType, this.profile]));
}});

Clazz.newMeth(C$, 'readResolutionBox$I$I', function (type, length) {
var data=Clazz.array(Byte.TYPE, [length]);
this.$in.readFully$BA$I$I(data, 0, length);
if (this.metadata != null ) {
this.metadata.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(17,1).c$$I$BA,[type, data]));
}});

Clazz.newMeth(C$, 'getCodeStreamPos$', function () {
var size=this.codeStreamPos.size$();
var pos=Clazz.array(Long.TYPE, [size]);
for (var i=0; i < size; i++) pos[i]=((this.codeStreamPos.elementAt$I(i))).longValue$();

return pos;
});

Clazz.newMeth(C$, 'getFirstCodeStreamPos$', function () {
return ((this.codeStreamPos.elementAt$I(0))).intValue$();
});

Clazz.newMeth(C$, 'getFirstCodeStreamLength$', function () {
return ((this.codeStreamLength.elementAt$I(0))).intValue$();
});

Clazz.newMeth(C$, 'getColorModel$', function () {
if (this.lut != null  && this.numComp == 1 ) {
var numComp=this.lut.length;
var maxDepth=1 + (this.bitDepth & 127);
if (this.maps == null ) {
this.maps=Clazz.array(Byte.TYPE, [numComp]);
for (var i=0; i < numComp; i++) this.maps[i]=((i|0)|0);

}if (numComp == 3) this.colorModel=Clazz.new_($I$(18,1).c$$I$I$BA$BA$BA,[maxDepth, this.lut[0].length, this.lut[this.maps[0]], this.lut[this.maps[1]], this.lut[this.maps[2]]]);
 else if (numComp == 4) this.colorModel=Clazz.new_($I$(18,1).c$$I$I$BA$BA$BA$BA,[maxDepth, this.lut[0].length, this.lut[this.maps[0]], this.lut[this.maps[1]], this.lut[this.maps[2]], this.lut[this.maps[3]]]);
} else if (this.channels != null ) {
var hasAlpha=false;
var alphaChannel=this.numComp - 1;
for (var i=0; i < this.channels.length; i++) {
if (this.cType[i] == 1 && this.channels[i] == alphaChannel ) hasAlpha=true;
}
var isPremultiplied=Clazz.array(Boolean.TYPE, -1, [false]);
if (hasAlpha) {
isPremultiplied=Clazz.array(Boolean.TYPE, [alphaChannel]);
for (var i=0; i < alphaChannel; i++) isPremultiplied[i]=false;

for (var i=0; i < this.channels.length; i++) {
if (this.cType[i] == 2) isPremultiplied[this.associations[i] - 1]=true;
}
for (var i=1; i < alphaChannel; i++) isPremultiplied[0]&=isPremultiplied[i];

}var cs=null;
if (this.profile != null ) cs=Clazz.new_($I$(19,1).c$$java_awt_color_ICC_Profile,[this.profile]);
 else if (this.colorSpaceType == 16) cs=$I$(20).getInstance$I(1000);
 else if (this.colorSpaceType == 17) cs=$I$(20).getInstance$I(1003);
 else if (this.colorSpaceType == 18) cs=$I$(20).getInstance$I(1002);
var bits=Clazz.array(Integer.TYPE, [this.numComp]);
for (var i=0; i < this.numComp; i++) if (this.bitDepths != null ) bits[i]=(this.bitDepths[i] & 127) + 1;
 else bits[i]=(this.bitDepth & 127) + 1;

var maxBitDepth=1 + (this.bitDepth & 127);
var isSigned=(this.bitDepth & 128) == 128;
if (this.bitDepths != null ) isSigned=(this.bitDepths[0] & 128) == 128;
if (this.bitDepths != null ) for (var i=0; i < this.numComp; i++) if (bits[i] > maxBitDepth) maxBitDepth=bits[i];

var type=-1;
if (maxBitDepth <= 8) type=0;
 else if (maxBitDepth <= 16) type=isSigned ? 2 : 1;
 else if (maxBitDepth <= 32) type=3;
if (type == -1) return null;
if (cs != null ) {
this.colorModel=Clazz.new_($I$(21,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, bits, hasAlpha, isPremultiplied[0], hasAlpha ? 3 : 1, type]);
}}return this.colorModel;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
