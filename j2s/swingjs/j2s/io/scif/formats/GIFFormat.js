(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},I$=[[0,'net.imagej.axis.Axes','net.imglib2.display.ColorTable8','io.scif.util.FormatTools',['org.scijava.io.handle.DataHandle','.ByteOrder'],'java.util.Vector']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GIFFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["gif"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.GIFFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Graphics Interchange Format" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.GIFFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata', 'io.scif.HasColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dBlock=Clazz.array(Byte.TYPE, [256]);
this.blockSize=0;
this.dispose=0;
this.lastDispose=0;
this.transparency=false;
}, 1);

C$.$fields$=[['Z',['interlace','transparency'],'I',['ix','iy','iw','ih','blockSize','dispose','lastDispose','transIndex'],'O',['cachedTable','net.imglib2.display.ColorTable8','gct','int[]','+act','dBlock','byte[]','prefix','short[]','suffix','byte[]','+pixelStack','+pixels','images','java.util.Vector','+colorTables']]]

Clazz.newMeth(C$, 'getGct$', function () {
return this.gct;
});

Clazz.newMeth(C$, 'setGct$IA', function (gct) {
this.gct=gct;
});

Clazz.newMeth(C$, 'getAct$', function () {
return this.act;
});

Clazz.newMeth(C$, 'setAct$IA', function (act) {
this.act=act;
});

Clazz.newMeth(C$, 'isInterlace$', function () {
return this.interlace;
});

Clazz.newMeth(C$, 'setInterlace$Z', function (interlace) {
this.interlace=interlace;
});

Clazz.newMeth(C$, 'getIx$', function () {
return this.ix;
});

Clazz.newMeth(C$, 'setIx$I', function (ix) {
this.ix=ix;
});

Clazz.newMeth(C$, 'getIy$', function () {
return this.iy;
});

Clazz.newMeth(C$, 'setIy$I', function (iy) {
this.iy=iy;
});

Clazz.newMeth(C$, 'getIw$', function () {
return this.iw;
});

Clazz.newMeth(C$, 'setIw$I', function (iw) {
this.iw=iw;
});

Clazz.newMeth(C$, 'getIh$', function () {
return this.ih;
});

Clazz.newMeth(C$, 'setIh$I', function (ih) {
this.ih=ih;
});

Clazz.newMeth(C$, 'getdBlock$', function () {
return this.dBlock;
});

Clazz.newMeth(C$, 'setdBlock$BA', function (dBlock) {
this.dBlock=dBlock;
});

Clazz.newMeth(C$, 'getBlockSize$', function () {
return this.blockSize;
});

Clazz.newMeth(C$, 'setBlockSize$I', function (blockSize) {
this.blockSize=blockSize;
});

Clazz.newMeth(C$, 'getDispose$', function () {
return this.dispose;
});

Clazz.newMeth(C$, 'setDispose$I', function (dispose) {
this.dispose=dispose;
});

Clazz.newMeth(C$, 'getLastDispose$', function () {
return this.lastDispose;
});

Clazz.newMeth(C$, 'setLastDispose$I', function (lastDispose) {
this.lastDispose=lastDispose;
});

Clazz.newMeth(C$, 'isTransparency$', function () {
return this.transparency;
});

Clazz.newMeth(C$, 'setTransparency$Z', function (transparency) {
this.transparency=transparency;
});

Clazz.newMeth(C$, 'getTransIndex$', function () {
return this.transIndex;
});

Clazz.newMeth(C$, 'setTransIndex$I', function (transIndex) {
this.transIndex=transIndex;
});

Clazz.newMeth(C$, 'getPrefix$', function () {
return this.prefix;
});

Clazz.newMeth(C$, 'setPrefix$HA', function (prefix) {
this.prefix=prefix;
});

Clazz.newMeth(C$, 'getSuffix$', function () {
return this.suffix;
});

Clazz.newMeth(C$, 'setSuffix$BA', function (suffix) {
this.suffix=suffix;
});

Clazz.newMeth(C$, 'getPixelStack$', function () {
return this.pixelStack;
});

Clazz.newMeth(C$, 'setPixelStack$BA', function (pixelStack) {
this.pixelStack=pixelStack;
});

Clazz.newMeth(C$, 'getPixels$', function () {
return this.pixels;
});

Clazz.newMeth(C$, 'setPixels$BA', function (pixels) {
this.pixels=pixels;
});

Clazz.newMeth(C$, 'getImages$', function () {
return this.images;
});

Clazz.newMeth(C$, 'setImages$java_util_Vector', function (images) {
this.images=images;
});

Clazz.newMeth(C$, 'getColorTables$', function () {
return this.colorTables;
});

Clazz.newMeth(C$, 'setColorTables$java_util_Vector', function (colorTables) {
this.colorTables=colorTables;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, 1);
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(1).CHANNEL, $I$(1).X, $I$(1).Y, $I$(1).TIME]);
iMeta.setPlanarAxisCount$I(3);
iMeta.setLittleEndian$Z(true);
iMeta.setMetadataComplete$Z(true);
iMeta.setIndexed$Z(true);
iMeta.setFalseColor$Z(false);
iMeta.setPixelType$I(1);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
var length=this.dBlock.length;
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.interlace=this.transparency=false;
this.ix=this.iy=this.iw=this.ih=this.blockSize=0;
this.dispose=this.lastDispose=this.transIndex=0;
this.gct=this.act;
this.prefix=null;
this.suffix=this.pixelStack=this.pixels=null;
this.images=null;
this.colorTables=null;
this.dBlock=Clazz.array(Byte.TYPE, [length]);
}});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
if (this.cachedTable == null ) {
var table=Clazz.array(Byte.TYPE, [3, this.act.length]);
for (var i=0; i < this.act.length; i++) {
table[0][i]=((((this.act[i] >> 16) & 255)|0)|0);
table[1][i]=((((this.act[i] >> 8) & 255)|0)|0);
table[2][i]=(((this.act[i] & 255)|0)|0);
}
this.cachedTable=Clazz.new_($I$(2,1).c$$BAA,[table]);
}return this.cachedTable;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GIFFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function ($in) {
var blockLen="GIF".length$();
if (!$I$(3).validStream$org_scijava_io_handle_DataHandle$I$Z($in, blockLen, false)) return false;
return $in.readString$I(blockLen).startsWith$S("GIF");
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GIFFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_GIFFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
this.log$().info$O("Verifying GIF format");
stream.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(4).LITTLE_ENDIAN);
meta.setImages$java_util_Vector(Clazz.new_(1,{E:"byte[]"},$I$(5,1)));
meta.setColorTables$java_util_Vector(Clazz.new_(1,{E:"int[]"},$I$(5,1)));
var ident=this.getSource$().readString$I(6);
if (!ident.startsWith$S("GIF")) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Not a valid GIF file."]);
}this.log$().info$O("Reading dimensions");
meta.createImageMetadata$I(1);
var iMeta=meta.get$I(0);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, stream.readShort$());
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, stream.readShort$());
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, 0);
var packed=stream.read$() & 255;
var gctFlag=(packed & 128) != 0;
var gctSize=2 << (packed & 7);
stream.skipBytes$I(2);
meta.getTable$().put$TK$TV("Global lookup table size", new Integer(gctSize));
if (gctFlag) {
meta.setGct$IA(p$1.readLut$I.apply(this, [gctSize]));
}this.log$().info$O("Reading data blocks");
var done=false;
while (!done){
var code=stream.read$() & 255;
switch (code) {
case 44:
p$1.readImageBlock.apply(this, []);
break;
case 33:
code=stream.read$() & 255;
switch (code) {
case 249:
stream.skipBytes$I(1);
packed=stream.read$() & 255;
meta.setDispose$I((packed & 28) >> 1);
meta.setTransparency$Z((packed & 1) != 0);
stream.skipBytes$I(2);
meta.setTransIndex$I(stream.read$() & 255);
stream.skipBytes$I(1);
break;
default:
if (p$1.readBlock.apply(this, []) == -1) {
done=true;
break;
}p$1.skipBlocks.apply(this, []);
}
break;
case 59:
done=true;
break;
}
}
meta.setAct$IA(meta.getColorTables$().get$I(0));
});

Clazz.newMeth(C$, 'skipBlocks', function () {
var check=0;
do {
check=p$1.readBlock.apply(this, []);
} while (this.getMetadata$().getBlockSize$() > 0 && check != -1 );
}, p$1);

Clazz.newMeth(C$, 'readImageBlock', function () {
var metadata=this.getMetadata$();
metadata.setIx$I(this.getSource$().readShort$());
metadata.setIy$I(this.getSource$().readShort$());
metadata.setIw$I(this.getSource$().readShort$());
metadata.setIh$I(this.getSource$().readShort$());
var packed=this.getSource$().read$();
var lctFlag=(packed & 128) != 0;
metadata.setInterlace$Z((packed & 64) != 0);
var lctSize=2 << (packed & 7);
metadata.setAct$IA(lctFlag ? p$1.readLut$I.apply(this, [lctSize]) : metadata.getGct$());
if (metadata.getAct$() == null ) throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Color table not found."]);
var save=0;
if (metadata.isTransparency$()) {
save=metadata.getAct$()[metadata.getTransIndex$()];
metadata.getAct$()[metadata.getTransIndex$()]=0;
}p$1.decodeImageData.apply(this, []);
p$1.skipBlocks.apply(this, []);
metadata.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, metadata.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).TIME) + 1);
if (metadata.isTransparency$()) metadata.getAct$()[metadata.getTransIndex$()]=save;
metadata.setLastDispose$I(metadata.getDispose$());
}, p$1);

Clazz.newMeth(C$, 'decodeImageData', function () {
var nullCode=-1;
var npix=this.getMetadata$().getIw$() * this.getMetadata$().getIh$();
var pixels=this.getMetadata$().getPixels$();
if (pixels == null  || pixels.length < npix ) pixels=Clazz.array(Byte.TYPE, [npix]);
var prefix=this.getMetadata$().getPrefix$();
var suffix=this.getMetadata$().getSuffix$();
var pixelStack=this.getMetadata$().getPixelStack$();
if (prefix == null ) prefix=Clazz.array(Short.TYPE, [4096]);
if (suffix == null ) suffix=Clazz.array(Byte.TYPE, [4096]);
if (pixelStack == null ) pixelStack=Clazz.array(Byte.TYPE, [4097]);
this.getMetadata$().setPrefix$HA(prefix);
this.getMetadata$().setSuffix$BA(suffix);
this.getMetadata$().setPixelStack$BA(pixelStack);
var read=this.getSource$().read$();
var dataSize=read & 255;
var clear=1 << dataSize;
var eoi=clear + 1;
var available=clear + 2;
var oldCode=-1;
var codeSize=dataSize + 1;
var codeMask=(1 << codeSize) - 1;
var code=0;
var inCode=0;
for (code=0; code < clear; code++) {
prefix[code]=(0|0);
suffix[code]=((code|0)|0);
}
var datum=0;
var first=0;
var top=0;
var pi=0;
var bi=0;
var bits=0;
var count=0;
var i=0;
for (i=0; i < npix; ) {
if (top == 0) {
if (bits < codeSize) {
if (count == 0) {
count=p$1.readBlock.apply(this, []);
if (count <= 0) break;
bi=0;
}datum+=(this.getMetadata$().getdBlock$()[bi] & 255) << bits;
bits+=8;
bi++;
count--;
continue;
}code=datum & codeMask;
datum>>=codeSize;
bits-=codeSize;
if ((code > available) || (code == eoi) ) {
break;
}if (code == clear) {
codeSize=dataSize + 1;
codeMask=(1 << codeSize) - 1;
available=clear + 2;
oldCode=-1;
continue;
}if (oldCode == -1) {
pixelStack[top++]=(suffix[code]|0);
oldCode=code;
first=code;
continue;
}inCode=code;
if (code == available) {
pixelStack[top++]=((first|0)|0);
code=oldCode;
}while (code > clear){
pixelStack[top++]=(suffix[code]|0);
code=prefix[code];
}
first=suffix[code] & 255;
if (available >= 4096) break;
pixelStack[top++]=((first|0)|0);
prefix[available]=(oldCode|0);
suffix[available]=((first|0)|0);
available++;
if (((available & codeMask) == 0) && (available < 4096) ) {
codeSize++;
codeMask+=available;
}oldCode=inCode;
}top--;
pixels[pi++]=(pixelStack[top]|0);
i++;
}
for (i=pi; i < npix; i++) pixels[i]=(0|0);

this.getMetadata$().setPixels$BA(pixels);
p$1.setPixels.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setPixels', function () {
var dest=Clazz.array(Byte.TYPE, [((this.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).X) * this.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).Y))|0)]);
var lastImage=-1;
if (this.getMetadata$().getLastDispose$() > 0) {
if (this.getMetadata$().getLastDispose$() == 3) {
var n=this.getMetadata$().get$I(0).getPlaneCount$() - 2;
if (n > 0) lastImage=n - 1;
}if (lastImage != -1) {
var prev=this.getMetadata$().getImages$().get$I((lastImage|0));
System.arraycopy$O$I$O$I$I(prev, 0, dest, 0, ((this.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).X) * this.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).Y))|0));
}}var pass=1;
var inc=8;
var iline=0;
for (var i=0; i < this.getMetadata$().getIh$(); i++) {
var line=i;
if (this.getMetadata$().isInterlace$()) {
if (iline >= this.getMetadata$().getIh$()) {
pass++;
switch (pass) {
case 2:
iline=4;
break;
case 3:
iline=2;
inc=4;
break;
case 4:
iline=1;
inc=2;
break;
}
}line=iline;
iline+=inc;
}line+=this.getMetadata$().getIy$();
if (line < this.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).Y)) {
var k=line * (this.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0);
var dx=k + this.getMetadata$().getIx$();
var dlim=dx + this.getMetadata$().getIw$();
if ((k + this.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).X)) < dlim) dlim=k + (this.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0);
var sx=i * this.getMetadata$().getIw$();
while (dx < dlim){
var index=this.getMetadata$().getPixels$()[sx++] & 255;
dest[dx++]=((index|0)|0);
}
}}
this.getMetadata$().getColorTables$().add$TE(this.getMetadata$().getAct$());
this.getMetadata$().getImages$().add$TE(dest);
}, p$1);

Clazz.newMeth(C$, 'readBlock', function () {
if (this.getSource$().offset$() == this.getSource$().length$()) return -1;
this.getMetadata$().setBlockSize$I(this.getSource$().read$() & 255);
var n=0;
var count;
if (this.getMetadata$().getBlockSize$() > 0) {
try {
while (n < this.getMetadata$().getBlockSize$()){
count=this.getSource$().read$BA$I$I(this.getMetadata$().getdBlock$(), n, this.getMetadata$().getBlockSize$() - n);
if (count == -1) break;
n+=count;
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log$().trace$O$Throwable("Truncated block", e);
} else {
throw e;
}
}
}return n;
}, p$1);

Clazz.newMeth(C$, 'readLut$I', function (size) {
var nbytes=3 * size;
var c=Clazz.array(Byte.TYPE, [nbytes]);
var n=0;
try {
n=this.getSource$().read$BA(c);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if (n < nbytes) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Color table not found"]);
}var lut=Clazz.array(Integer.TYPE, [256]);
var j=0;
for (var i=0; i < size; i++) {
var r=c[j++] & 255;
var g=c[j++] & 255;
var b=c[j++] & 255;
lut[i]=-16777216 | (r << 16) | (g << 8) | b ;
}
return lut;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GIFFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var buf=plane.getData$();
var meta=this.getMetadata$();
var xIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).X);
var yIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).Y);
plane.setColorTable$net_imglib2_display_ColorTable(meta.getColorTable$I$J(0, 0));
$I$(3).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
var x=(bounds.min$I(xIndex)|0);
var y=(bounds.min$I(yIndex)|0);
var w=(bounds.dimension$I(xIndex)|0);
var h=(bounds.dimension$I(yIndex)|0);
var act=meta.getColorTables$().get$I((planeIndex|0));
var b=meta.getImages$().get$I((planeIndex|0));
if (planeIndex > 0 && meta.isTransparency$() ) {
var prev=meta.getImages$().get$I((planeIndex|0) - 1);
var idx=meta.getTransIndex$();
if (idx >= 127) idx=0;
for (var i=0; i < b.length; i++) {
if ((act[b[i] & 255] & 16777215) == idx) {
b[i]=(prev[i]|0);
}}
meta.getImages$().setElementAt$TE$I(b, (planeIndex|0));
}for (var row=0; row < h; row++) {
System.arraycopy$O$I$O$I$I(b, (row + y) * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0) + x, buf, row * w, w);
}
return plane;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
