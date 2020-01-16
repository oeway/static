(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.Axes','io.scif.util.FormatTools',['org.scijava.io.handle.DataHandle','.ByteOrder'],['io.scif.formats.MNGFormat','.MNGDatasetInfo'],['io.scif.formats.MNGFormat','.MNGImageInfo'],'java.util.Vector','java.util.Hashtable','io.scif.gui.AWTImageTools','javax.imageio.ImageIO','java.io.ByteArrayInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MNGFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['MNGDatasetInfo',10],['MNGImageInfo',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["mng"]);
});

Clazz.newMeth(C$, 'readImage$io_scif_formats_MNGFormat_Metadata$J', function (meta, end) {
var headerSize=meta.isJNG$() ? 0 : 8;
var b=Clazz.array(Byte.TYPE, [((end - meta.getSource$().offset$() + headerSize)|0)]);
meta.getSource$().read$BA$I$I(b, headerSize, b.length - headerSize);
if (!meta.isJNG$()) {
b[0]=(-119|0);
b[1]=(80|0);
b[2]=(78|0);
b[3]=(71|0);
b[4]=(13|0);
b[5]=(10|0);
b[6]=(26|0);
b[7]=(10|0);
}return $I$(9).read$java_io_InputStream(Clazz.new_($I$(10,1).c$$BA,[b]));
}, 1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.MNGFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Multiple Network Graphics" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.MNGFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isJNG=false;
}, 1);

C$.$fields$=[['Z',['isJNG'],'O',['datasetInfo','io.scif.formats.MNGFormat.MNGDatasetInfo']]]

Clazz.newMeth(C$, 'getDatasetInfo$', function () {
return this.datasetInfo;
});

Clazz.newMeth(C$, 'setDatasetInfo$io_scif_formats_MNGFormat_MNGDatasetInfo', function (datasetInfo) {
this.datasetInfo=datasetInfo;
});

Clazz.newMeth(C$, 'isJNG$', function () {
return this.isJNG;
});

Clazz.newMeth(C$, 'setJNG$Z', function (isJNG) {
this.isJNG=isJNG;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var keys=this.getDatasetInfo$().keys;
var imageCount=keys.length;
this.createImageMetadata$I(imageCount);
for (var i=0; i < this.getImageCount$(); i++) {
var tokens=keys[i].split$S("-");
this.get$I(i).setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, Integer.parseInt$S(tokens[0]));
this.get$I(i).setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, Integer.parseInt$S(tokens[1]));
this.get$I(i).setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, Integer.parseInt$S(tokens[2]));
this.get$I(i).setPlanarAxisCount$I(this.get$I(i).getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL) > 1 ? 3 : 2);
this.get$I(i).setPixelType$I(Integer.parseInt$S(tokens[3]));
this.get$I(i).setMetadataComplete$Z(true);
this.get$I(i).setIndexed$Z(false);
this.get$I(i).setLittleEndian$Z(false);
this.get$I(i).setFalseColor$Z(false);
this.get$I(i).setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, this.getDatasetInfo$().imageInfo.get$I(i).offsets.size$());
}
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.datasetInfo=null;
this.isJNG=false;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MNGFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var blockLen=8;
if (!$I$(2).validStream$org_scijava_io_handle_DataHandle$I$Z(stream, 8, false)) return false;
return stream.readLong$() == -8481036456200365558;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MNGFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_MNGFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
this.getSource$().setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(3).BIG_ENDIAN);
this.log$().info$O("Verifying MNG format");
var datasetInfo=Clazz.new_($I$(4,1));
datasetInfo.imageInfo.add$TE(Clazz.new_($I$(5,1)));
this.getSource$().skipBytes$I(12);
if (!"MHDR".equals$O(this.getSource$().readString$I(4))) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid MNG file."]);
}this.log$().info$O("Reading dimensions");
this.getSource$().skipBytes$I(32);
var stack=Clazz.new_(1,{E:"Long"},$I$(6,1));
var maxIterations=0;
var currentIteration=0;
this.log$().info$O("Finding image offsets");
while (this.getSource$().offset$() < this.getSource$().length$()){
var len=this.getSource$().readInt$();
var code=this.getSource$().readString$I(4);
var fp=this.getSource$().offset$();
if (code.equals$O("IHDR")) {
datasetInfo.imageInfo.get$I(0).offsets.add$TE(new Long(fp - 8));
} else if (code.equals$O("JDAT")) {
meta.setJNG$Z(true);
datasetInfo.imageInfo.get$I(0).offsets.add$TE(new Long(fp));
} else if (code.equals$O("IEND")) {
datasetInfo.imageInfo.get$I(0).lengths.add$TE(new Long(fp + len + 4 ));
} else if (code.equals$O("LOOP")) {
stack.add$TE(new Long(fp + len + 4 ));
this.getSource$().skipBytes$I(1);
maxIterations=this.getSource$().readInt$();
} else if (code.equals$O("ENDL")) {
var seek=stack.get$I(stack.size$() - 1).longValue$();
if (currentIteration < maxIterations) {
this.getSource$().seek$J(seek);
currentIteration++;
} else {
stack.remove$I(stack.size$() - 1);
maxIterations=0;
currentIteration=0;
}}this.getSource$().seek$J(fp + len + 4 );
}
this.log$().info$O("Populating metadata");
var imageOffsets=Clazz.new_(1,{K:"String",V:"java.util.Vector"},$I$(7,1));
var imageLengths=Clazz.new_(1,{K:"String",V:"java.util.Vector"},$I$(7,1));
var info=datasetInfo.imageInfo.get$I(0);
meta.getTable$().put$TK$TV("Number of frames", new Integer(info.offsets.size$()));
for (var i=0; i < info.offsets.size$(); i++) {
var offset=(info.offsets.get$I(i)).valueOf();
this.getSource$().seek$J(offset);
var end=(info.lengths.get$I(i)).valueOf();
if (end < offset) continue;
var img=P$.MNGFormat.readImage$io_scif_formats_MNGFormat_Metadata$J(meta, end);
var data=img.getWidth$() + "-" + img.getHeight$() + "-" + img.getRaster$().getNumBands$() + "-" + $I$(8).getPixelType$java_awt_image_BufferedImage(img) ;
var v=Clazz.new_(1,{E:"Long"},$I$(6,1));
if (imageOffsets.containsKey$O(data)) {
v=imageOffsets.get$O(data);
}v.add$TE( new Long(offset));
imageOffsets.put$TK$TV(data, v);
v=Clazz.new_(1,{E:"Long"},$I$(6,1));
if (imageLengths.containsKey$O(data)) {
v=imageLengths.get$O(data);
}v.add$TE( new Long(end));
imageLengths.put$TK$TV(data, v);
}
var keys=imageOffsets.keySet$().toArray$TTA(Clazz.array(String, [0]));
if (keys.length == 0) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Pixel data not found."]);
}datasetInfo.imageInfo.clear$();
var imageCount=keys.length;
for (var key, $key = 0, $$key = keys; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
var inf=Clazz.new_($I$(5,1));
inf.offsets=imageOffsets.get$O(key);
inf.lengths=imageLengths.get$O(key);
datasetInfo.imageInfo.add$TE(inf);
}
datasetInfo.keys=keys;
meta.setDatasetInfo$io_scif_formats_MNGFormat_MNGDatasetInfo(datasetInfo);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MNGFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.gui.BufferedImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_BufferedImagePlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var info=this.getMetadata$().getDatasetInfo$().imageInfo.get$I(imageIndex);
var offset=(info.offsets.get$I((planeIndex|0))).valueOf();
this.getHandle$().seek$J(offset);
var end=(info.lengths.get$I((planeIndex|0))).valueOf();
var img=P$.MNGFormat.readImage$io_scif_formats_MNGFormat_Metadata$J(this.getMetadata$(), end);
img=$I$(8).getSubimage$java_awt_image_BufferedImage$Z$net_imglib2_Interval(img, this.getMetadata$().get$I(imageIndex).isLittleEndian$(), bounds);
plane.setData$java_awt_image_BufferedImage(img);
return plane;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MNGFormat, "MNGDatasetInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.imageInfo=Clazz.new_(1,{E:"io.scif.formats.MNGFormat.MNGImageInfo"},$I$(6,1));
}, 1);

C$.$fields$=[['O',['imageInfo','java.util.Vector','keys','String[]']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MNGFormat, "MNGImageInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offsets=Clazz.new_(1,{E:"Long"},$I$(6,1));
this.lengths=Clazz.new_(1,{E:"Long"},$I$(6,1));
}, 1);

C$.$fields$=[['O',['offsets','java.util.Vector','+lengths']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
