(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},I$=[[0,['io.scif.formats.OBFFormat','.Frame'],'java.util.zip.Inflater','java.util.ArrayList',['io.scif.formats.OBFFormat','.OBFUtilities'],'net.imagej.axis.Axes',['io.scif.formats.OBFFormat','.Stack'],'Boolean','io.scif.util.FormatTools',['org.scijava.io.handle.DataHandle','.ByteOrder']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OBFFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['OBFUtilities',10],['Stack',10],['Frame',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["obf", "msr"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.OBFFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="OBF" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.OBFFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentInflatedFrame=Clazz.new_($I$(1,1));
this.inflater=Clazz.new_($I$(2,1));
this.stacks=Clazz.new_(1,{E:"io.scif.formats.OBFFormat.Stack"},$I$(3,1));
}, 1);

C$.$fields$=[['O',['currentInflatedFrame','io.scif.formats.OBFFormat.Frame','inflater','java.util.zip.Inflater','stacks','java.util.List']]]

Clazz.newMeth(C$, 'getCurrentInflatedFrame$', function () {
return this.currentInflatedFrame;
});

Clazz.newMeth(C$, 'setCurrentInflatedFrame$io_scif_formats_OBFFormat_Frame', function (currentInflatedFrame) {
this.currentInflatedFrame=currentInflatedFrame;
});

Clazz.newMeth(C$, 'getInflater$', function () {
return this.inflater;
});

Clazz.newMeth(C$, 'setInflater$java_util_zip_Inflater', function (inflater) {
this.inflater=inflater;
});

Clazz.newMeth(C$, 'getStacks$', function () {
return this.stacks;
});

Clazz.newMeth(C$, 'setStacks$java_util_List', function (stacks) {
this.stacks=stacks;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
iMeta.setPlanarAxisCount$I(2);
iMeta.setIndexed$Z(false);
iMeta.setOrderCertain$Z(false);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
this.stacks=Clazz.new_(1,{E:"io.scif.formats.OBFFormat.Stack"},$I$(3,1));
this.currentInflatedFrame=Clazz.new_($I$(1,1));
this.inflater=Clazz.new_($I$(2,1));
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OBFFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'suffixSufficient$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var fileVersion=$I$(4).getFileVersion$org_scijava_io_handle_DataHandle(stream);
return fileVersion >= 0 && fileVersion <= 1 ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OBFFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_OBFFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
meta.getCurrentInflatedFrame$().setImageIndex$I(-1);
meta.getCurrentInflatedFrame$().setNumber$I(-1);
var fileVersion=$I$(4).getFileVersion$org_scijava_io_handle_DataHandle(stream);
var stackPosition=stream.readLong$();
var lengthOfDescription=stream.readInt$();
var description=stream.readString$I(lengthOfDescription);
meta.getTable$().put$TK$TV("Description", description);
if (stackPosition != 0) {
meta.createImageMetadata$I(1);
do {
stackPosition=p$1.initStack$J$I.apply(this, [stackPosition, fileVersion]);
} while (stackPosition != 0);
}});

Clazz.newMeth(C$, 'initStack$J$I', function (current, fileVersion) {
this.getSource$().seek$J(current);
var magicString=this.getSource$().readString$I("OMAS_BF_STACK\n".length$());
var magicNumber=this.getSource$().readShort$();
var version=this.getSource$().readInt$();
if (magicString.equals$O("OMAS_BF_STACK\n") && magicNumber == -1  && version <= 3 ) {
var iMeta=this.getMetadata$().get$I(0);
iMeta.setLittleEndian$Z(true);
iMeta.setThumbnail$Z(false);
var numberOfDimensions=this.getSource$().readInt$();
if (numberOfDimensions > 5) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported number of " + numberOfDimensions + " dimensions" ]);
}var sizes=Clazz.array(Integer.TYPE, [15]);
for (var dimension=0; dimension != 15; ++dimension) {
var size=this.getSource$().readInt$();
sizes[dimension]=dimension < numberOfDimensions ? size : 1;
}
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(5).X, sizes[0]);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(5).Y, sizes[1]);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(5).Z, sizes[2]);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(5).CHANNEL, sizes[3]);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(5).TIME, sizes[4]);
var lengths=Clazz.new_(1,{E:"Double"},$I$(3,1));
for (var dimension=0; dimension != 15; ++dimension) {
var length=this.getSource$().readDouble$();
if (dimension < numberOfDimensions) {
lengths.add$TE( new Double(length));
}}
iMeta.getTable$().put$TK$TV("Lengths", lengths);
var offsets=Clazz.new_(1,{E:"Double"},$I$(3,1));
for (var dimension=0; dimension != 15; ++dimension) {
var offset=this.getSource$().readDouble$();
if (dimension < numberOfDimensions) {
offsets.add$TE( new Double(offset));
}}
iMeta.getTable$().put$TK$TV("Offsets", offsets);
var type=this.getSource$().readInt$();
iMeta.setPixelType$I($I$(4).getPixelType$I(type));
iMeta.setPixelType$I($I$(4).getBitsPerPixel$I(type));
var stack=Clazz.new_($I$(6,1));
var compression=this.getSource$().readInt$();
stack.setCompression$Z(p$1.getCompression$I.apply(this, [compression]));
this.getSource$().skipBytes$I(4);
var lengthOfName=this.getSource$().readInt$();
var lengthOfDescription=this.getSource$().readInt$();
this.getSource$().skipBytes$I(8);
var lengthOfData=this.getSource$().readLong$();
stack.setLength$J(p$1.getLength$J.apply(this, [lengthOfData]));
var next=this.getSource$().readLong$();
var name=this.getSource$().readString$I(lengthOfName);
iMeta.getTable$().put$TK$TV("Name", name);
var description=this.getSource$().readString$I(lengthOfDescription);
iMeta.getTable$().put$TK$TV("Description", description);
stack.setPosition$J(this.getSource$().offset$());
this.getMetadata$().getStacks$().add$TE(stack);
if (fileVersion >= 1) {
this.getSource$().skip$J(lengthOfData);
var footer=this.getSource$().offset$();
var offset=this.getSource$().readInt$();
var stepsPresent=Clazz.new_(1,{E:"Boolean"},$I$(3,1));
for (var dimension=0; dimension != 15; ++dimension) {
var present=this.getSource$().readInt$();
if (dimension < numberOfDimensions) {
stepsPresent.add$TE($I$(7).valueOf$Z(present != 0));
}}
var stepLabelsPresent=Clazz.new_(1,{E:"Boolean"},$I$(3,1));
for (var dimension=0; dimension != 15; ++dimension) {
var present=this.getSource$().readInt$();
if (dimension < numberOfDimensions) {
stepLabelsPresent.add$TE($I$(7).valueOf$Z(present != 0));
}}
this.getSource$().seek$J(footer + offset);
var labels=Clazz.new_(1,{E:"String"},$I$(3,1));
for (var dimension=0; dimension != numberOfDimensions; ++dimension) {
var length=this.getSource$().readInt$();
var label=this.getSource$().readString$I(length);
labels.add$TE(label);
}
iMeta.getTable$().put$TK$TV("Labels", labels);
var steps=Clazz.new_(1,{E:"java.util.List"},$I$(3,1));
for (var dimension=0; dimension != numberOfDimensions; ++dimension) {
var list=Clazz.new_(1,{E:"Double"},$I$(3,1));
if ((stepsPresent.get$I(dimension)).valueOf()) {
for (var position=0; position != sizes[dimension]; ++position) {
var step=this.getSource$().readDouble$();
list.add$TE( new Double(step));
}
}steps.add$TE(list);
}
iMeta.getTable$().put$TK$TV("Steps", steps);
var stepLabels=Clazz.new_(1,{E:"java.util.List"},$I$(3,1));
for (var dimension=0; dimension != numberOfDimensions; ++dimension) {
var list=Clazz.new_(1,{E:"String"},$I$(3,1));
if ((stepLabelsPresent.get$I(dimension)).valueOf()) {
for (var position=0; position != sizes[dimension]; ++position) {
var length=this.getSource$().readInt$();
var label=this.getSource$().readString$I(length);
list.add$TE(label);
}
}stepLabels.add$TE(list);
}
iMeta.getTable$().put$TK$TV("StepLabels", stepLabels);
}return next;
}throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported stack format"]);
}, p$1);

Clazz.newMeth(C$, 'getLength$J', function (length) {
if (length >= 0) return length;
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Negative stack length on disk"]);
}, p$1);

Clazz.newMeth(C$, 'getCompression$I', function (compression) {
switch (compression) {
case 0:
return false;
case 1:
return true;
default:
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported compression " + compression]);
}
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OBFFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Unknown"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var meta=this.getMetadata$();
var buffer=plane.getBytes$();
var imageMetadata=meta.get$I(imageIndex);
var xIndex=imageMetadata.getAxisIndex$net_imagej_axis_AxisType($I$(5).X);
var yIndex=imageMetadata.getAxisIndex$net_imagej_axis_AxisType($I$(5).Y);
var x=(bounds.min$I(xIndex)|0);
var y=(bounds.min$I(yIndex)|0);
var w=(bounds.dimension$I(xIndex)|0);
var h=(bounds.dimension$I(yIndex)|0);
var rows=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(5).Y)|0);
var columns=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(5).X)|0);
var bytesPerPixel=(imageMetadata.getBitsPerPixel$()/8|0);
var stack=meta.getStacks$().get$I(imageIndex);
if (stack.isCompression$()) {
var cInflatedFrame=meta.getCurrentInflatedFrame$();
if (imageIndex != cInflatedFrame.getImageIndex$()) {
cInflatedFrame.setBytes$BA(Clazz.array(Byte.TYPE, [rows * columns * bytesPerPixel ]));
cInflatedFrame.setImageIndex$I(imageIndex);
cInflatedFrame.setNumber$I(-1);
}var bytes=cInflatedFrame.getBytes$();
if (planeIndex != cInflatedFrame.getNumber$()) {
if (planeIndex < cInflatedFrame.getNumber$()) {
cInflatedFrame.setNumber$I(-1);
}if (cInflatedFrame.getNumber$() == -1) {
this.getHandle$().seek$J(stack.getPosition$());
meta.getInflater$().reset$();
}var input=Clazz.array(Byte.TYPE, [8192]);
while (planeIndex != cInflatedFrame.getNumber$()){
var offset=0;
while (offset != bytes.length){
if (meta.getInflater$().needsInput$()) {
var remainder=stack.getPosition$() + stack.getLength$() - this.getHandle$().offset$();
if (remainder > 0) {
var length=remainder > input.length ? input.length : (remainder|0);
this.getHandle$().read$BA$I$I(input, 0, length);
meta.getInflater$().setInput$BA$I$I(input, 0, length);
} else {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Corrupted zlib compression"]);
}} else if (meta.getInflater$().needsDictionary$()) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported zlib compression"]);
}try {
offset+=meta.getInflater$().inflate$BA$I$I(bytes, offset, bytes.length - offset);
} catch (exception) {
if (Clazz.exceptionOf(exception,"java.util.zip.DataFormatException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,[exception.getMessage$()]);
} else {
throw exception;
}
}
}
cInflatedFrame.setNumber$I(cInflatedFrame.getNumber$() + 1);
}
}for (var row=0; row != h; ++row) {
System.arraycopy$O$I$O$I$I(bytes, ((row + y) * columns + x) * bytesPerPixel, buffer, row * w * bytesPerPixel , w * bytesPerPixel);
}
} else {
for (var row=0; row != h; ++row) {
this.getHandle$().seek$J(stack.getPosition$() + ((planeIndex * rows + row + y) * columns + x) * bytesPerPixel);
this.getHandle$().read$BA$I$I(buffer, row * w * bytesPerPixel , w * bytesPerPixel);
}
}return plane;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OBFFormat, "OBFUtilities", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPixelType$I', function (type) {
switch (type) {
case 1:
return 1;
case 2:
return 0;
case 4:
return 3;
case 8:
return 2;
case 16:
return 5;
case 32:
return 4;
case 64:
return 6;
case 128:
return 7;
default:
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported data type " + type]);
}
}, 1);

Clazz.newMeth(C$, 'getBitsPerPixel$I', function (type) {
switch (type) {
case 1:
case 2:
return 8;
case 4:
case 8:
return 16;
case 16:
case 32:
return 32;
case 64:
return 32;
case 128:
return 64;
default:
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported data type " + type]);
}
}, 1);

Clazz.newMeth(C$, 'getFileVersion$org_scijava_io_handle_DataHandle', function (stream) {
if (!$I$(8).validStream$org_scijava_io_handle_DataHandle$I$Z(stream, "OMAS_BF\n".length$(), false)) return -1;
stream.seek$J(0);
stream.setOrder$org_scijava_io_handle_DataHandle_ByteOrder(true ? $I$(9).LITTLE_ENDIAN : $I$(9).BIG_ENDIAN);
try {
var magicString=stream.readString$I("OMAS_BF\n".length$());
var magicNumber=stream.readShort$();
var version=stream.readInt$();
if (magicString.equals$O("OMAS_BF\n") && magicNumber == -1 ) {
return version;
}} catch (exception) {
if (Clazz.exceptionOf(exception,"java.io.IOException")){
} else {
throw exception;
}
}
return -1;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OBFFormat, "Stack", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['compression'],'L',['position','length']]]

Clazz.newMeth(C$, 'getPosition$', function () {
return this.position;
});

Clazz.newMeth(C$, 'setPosition$J', function (position) {
this.position=position;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$J', function (length) {
this.length=length;
});

Clazz.newMeth(C$, 'isCompression$', function () {
return this.compression;
});

Clazz.newMeth(C$, 'setCompression$Z', function (compression) {
this.compression=compression;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.OBFFormat, "Frame", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['imageIndex','number'],'O',['bytes','byte[]']]]

Clazz.newMeth(C$, 'getBytes$', function () {
return this.bytes;
});

Clazz.newMeth(C$, 'setBytes$BA', function (bytes) {
this.bytes=bytes;
});

Clazz.newMeth(C$, 'getImageIndex$', function () {
return this.imageIndex;
});

Clazz.newMeth(C$, 'setImageIndex$I', function (series) {
this.imageIndex=series;
});

Clazz.newMeth(C$, 'getNumber$', function () {
return this.number;
});

Clazz.newMeth(C$, 'setNumber$I', function (number) {
this.number=number;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
