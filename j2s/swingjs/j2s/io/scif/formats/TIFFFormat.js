(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},p$2={},I$=[[0,'java.util.ArrayList','net.imglib2.display.ColorTable8','io.scif.util.FormatTools','net.imagej.axis.Axes','org.scijava.io.location.Location','io.scif.MetadataLevel','org.scijava.util.StringUtils','net.imagej.axis.DefaultLinearAxis','io.scif.formats.TIFFFormat','java.util.StringTokenizer','java.util.HashSet','io.scif.formats.tiff.TiffCompression','io.scif.formats.tiff.IFDList','io.scif.formats.tiff.IFD','net.imagej.axis.CalibratedAxis','io.scif.formats.tiff.PhotoInterp','io.scif.common.DateTools','io.scif.codec.CompressionType','io.scif.formats.tiff.TiffParser','io.scif.gui.AWTImageTools','io.scif.formats.tiff.TiffRational','io.scif.formats.tiff.TiffSaver','java.util.stream.Collectors','io.scif.Metadata',['io.scif.formats.TIFFFormat','.Metadata'],'io.scif.HasColorTable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['BaseTIFFParser',1033],['Reader',9],['Writer',9],['TIFFTranslator',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.COMPANION_SUFFIXES=Clazz.array(String, -1, ["xml", "txt"]);
C$.TIFF_SUFFIXES=Clazz.array(String, -1, ["tif", "tiff", "tf2", "tf8", "btf"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['COMPANION_SUFFIXES','String[]','+TIFF_SUFFIXES']]]

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return C$.TIFF_SUFFIXES;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.TIFFFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Tagged Image File Format" priority="-9999.0" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.MinimalTIFFFormat','.Metadata']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.populateImageMetadata=true;
}, 1);

C$.$fields$=[['Z',['populateImageMetadata'],'S',['creationDate','experimenterFirstName','experimenterLastName','experimenterEmail','imageDescription','description','calibrationUnit'],'O',['companionFile','org.scijava.io.location.Location','timeIncrement','Double','xOrigin','Integer','+yOrigin','lut','byte[][]','colorTable','java.util.List']]]

Clazz.newMeth(C$, 'getCompanionFile$', function () {
return this.companionFile;
});

Clazz.newMeth(C$, 'setCompanionFile$org_scijava_io_location_Location', function (companionFile) {
this.companionFile=companionFile;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'getCalibrationUnit$', function () {
return this.calibrationUnit;
});

Clazz.newMeth(C$, 'setCalibrationUnit$S', function (calibrationUnit) {
this.calibrationUnit=calibrationUnit;
});

Clazz.newMeth(C$, 'getTimeIncrement$', function () {
return new Double(this.timeIncrement == null  ? 1.0 : (this.timeIncrement).valueOf());
});

Clazz.newMeth(C$, 'setTimeIncrement$Double', function (timeIncrement) {
this.timeIncrement=timeIncrement;
});

Clazz.newMeth(C$, 'getxOrigin$', function () {
return this.xOrigin;
});

Clazz.newMeth(C$, 'setxOrigin$Integer', function (xOrigin) {
this.xOrigin=xOrigin;
});

Clazz.newMeth(C$, 'getyOrigin$', function () {
return this.yOrigin;
});

Clazz.newMeth(C$, 'setyOrigin$Integer', function (yOrigin) {
this.yOrigin=yOrigin;
});

Clazz.newMeth(C$, 'getCreationDate$', function () {
return this.creationDate;
});

Clazz.newMeth(C$, 'setCreationDate$S', function (creationDate) {
this.creationDate=creationDate;
});

Clazz.newMeth(C$, 'getExperimenterFirstName$', function () {
return this.experimenterFirstName;
});

Clazz.newMeth(C$, 'getLut$', function () {
return this.lut;
});

Clazz.newMeth(C$, 'setLut$BAA', function (lut) {
this.lut=lut;
});

Clazz.newMeth(C$, 'setExperimenterFirstName$S', function (experimenterFirstName) {
this.experimenterFirstName=experimenterFirstName;
});

Clazz.newMeth(C$, 'getExperimenterLastName$', function () {
return this.experimenterLastName;
});

Clazz.newMeth(C$, 'setExperimenterLastName$S', function (experimenterLastName) {
this.experimenterLastName=experimenterLastName;
});

Clazz.newMeth(C$, 'getExperimenterEmail$', function () {
return this.experimenterEmail;
});

Clazz.newMeth(C$, 'setExperimenterEmail$S', function (experimenterEmail) {
this.experimenterEmail=experimenterEmail;
});

Clazz.newMeth(C$, 'getImageDescription$', function () {
return this.imageDescription;
});

Clazz.newMeth(C$, 'setImageDescription$S', function (imageDescription) {
this.imageDescription=imageDescription;
});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
var ct=C$.superclazz.prototype.getColorTable$I$J.apply(this, [imageIndex, planeIndex]);
if (ct == null ) {
if (this.colorTable == null  && this.getLut$() != null  ) {
this.colorTable=Clazz.new_(1,{E:"net.imglib2.display.ColorTable"},$I$(1,1));
var ij1Lut=this.getLut$();
for (var i=0; i < ij1Lut.length; i++) {
if (ij1Lut[i].length != 768) this.colorTable.add$TE(null);
 else {
var currentLut=Clazz.array(Byte.TYPE, [3, 256]);
for (var j=0; j < 3; j++) {
System.arraycopy$O$I$O$I$I(ij1Lut[i], j * 256, currentLut[j], 0, 256);
}
this.colorTable.add$TE(Clazz.new_($I$(2,1).c$$BAA,[currentLut]));
}}
}if (this.colorTable != null ) {
var ctIndex=($I$(3).getNonPlanarAxisPosition$io_scif_Metadata$I$J$net_imagej_axis_AxisType(this, imageIndex, planeIndex, $I$(4).CHANNEL)|0);
return this.colorTable.get$I(ctIndex);
}}return ct;
});

Clazz.newMeth(C$, 'createImageMetadata$I', function (imageCount) {
this.populateImageMetadata=true;
C$.superclazz.prototype.createImageMetadata$I.apply(this, [imageCount]);
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
if (this.populateImageMetadata) C$.superclazz.prototype.populateImageMetadata$.apply(this, []);
var m=this.get$I(0);
if (this.getIfds$().size$() > 1) m.setOrderCertain$Z(false);
try {
var pixX=this.getIfds$().get$I(0).getXResolution$();
var pixY=this.getIfds$().get$I(0).getYResolution$();
if (pixX == null ) {
} else if ((pixX).valueOf() > 0  && (pixX).valueOf() < Infinity  ) {
$I$(3).calibrate$net_imagej_axis_CalibratedAxis$D$D(m.getAxis$net_imagej_axis_AxisType($I$(4).X), (pixX).valueOf(), 0);
} else {
this.log$().warn$O("Expected positive value for PhysicalSizeX; got " + pixX.toString());
}if (pixY == null ) {
} else if ((pixY).valueOf() > 0  && (pixY).valueOf() < Infinity  ) {
$I$(3).calibrate$net_imagej_axis_CalibratedAxis$D$D(m.getAxis$net_imagej_axis_AxisType($I$(4).Y), (pixY).valueOf(), 0);
} else {
this.log$().warn$O("Expected positive value for PhysicalSizeY; got " + pixY.toString());
}} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().error$O$Throwable("Failed to get x, y pixel sizes", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.companionFile=null;
this.description=null;
this.calibrationUnit=null;
this.timeIncrement=null;
this.xOrigin=null;
this.yOrigin=null;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.TIFFFormat','.BaseTIFFParser']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['xmlService','io.scif.xml.XMLService']]]

Clazz.newMeth(C$, 'getImageUsedFiles$I$Z', function (ImageIndex, noPixels) {
if (noPixels) {
return this.getMetadata$().getCompanionFile$() == null  ? null : Clazz.array($I$(5), -1, [this.getMetadata$().getCompanionFile$()]);
}if (this.getMetadata$().getCompanionFile$() != null ) return Clazz.array($I$(5), -1, [this.getMetadata$().getCompanionFile$(), this.getSource$().get$()]);
return Clazz.array($I$(5), -1, [this.getSource$().get$()]);
});

Clazz.newMeth(C$, 'initMetadata$io_scif_formats_TIFFFormat_Metadata$io_scif_config_SCIFIOConfig', function (meta, config) {
var ifds=meta.getIfds$();
var comment=ifds.get$I(0).getComment$();
var table=meta.getTable$();
this.log$().debug$O("Checking comment style");
var level=config.parserGetLevel$();
if (level !== $I$(6).MINIMUM ) {
var tags=ifds.get$I(0).keySet$().toArray$TTA(Clazz.array(Integer, [0]));
for (var tag, $tag = 0, $$tag = tags; $tag<$$tag.length&&((tag=($$tag[$tag])),1);$tag++) {
if (tag.intValue$() >= 65000) {
var value=ifds.get$I(0).get$O(tag);
if (Clazz.instanceOf(value, Clazz.array(Short.TYPE, -1))) {
var s=value;
var b=Clazz.array(Byte.TYPE, [s.length]);
for (var i=0; i < b.length; i++) {
b[i]=((s[i]|0)|0);
}
var metadata=$I$(7).stripNulls$S( String.instantialize(b, "UTF-8"));
if (metadata.contains$CharSequence("xml")) {
metadata=metadata.substring$I(metadata.indexOf$S("<"));
metadata="<root>" + this.xmlService.sanitizeXML$S(metadata) + "</root>" ;
try {
var xmlMetadata=this.xmlService.parseXML$S(metadata);
for (var key, $key = xmlMetadata.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
table.put$TK$TV(key, xmlMetadata.get$O(key));
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
} else {
table.put$TK$TV(tag.toString(), metadata);
}}}}
}var scifio=p$1.checkCommentSCIFIO$S.apply(this, [comment]);
if (scifio) p$1.parseCommentSCIFIO$io_scif_formats_TIFFFormat_Metadata$S.apply(this, [meta, comment]);
var ij=p$1.checkCommentImageJ$S.apply(this, [comment]);
if (ij) p$1.parseCommentImageJ$io_scif_formats_TIFFFormat_Metadata$S.apply(this, [meta, comment]);
var metamorph=p$1.checkCommentMetamorph$io_scif_formats_TIFFFormat_Metadata$S.apply(this, [meta, comment]);
if (metamorph && level !== $I$(6).MINIMUM  ) {
p$1.parseCommentMetamorph$io_scif_formats_TIFFFormat_Metadata$S.apply(this, [meta, comment]);
}table.put$TK$TV("MetaMorph", metamorph ? "yes" : "no");
if (!ij && !metamorph && level !== $I$(6).MINIMUM   ) {
p$1.parseCommentGeneric$io_scif_formats_TIFFFormat_Metadata$S.apply(this, [meta, comment]);
}if (!scifio && !ij && !metamorph  ) {
meta.populateImageMetadata$();
var type=$I$(4).unknown$();
var axis=Clazz.new_($I$(8,1).c$$net_imagej_axis_AxisType,[type]);
var axisIndex=meta.get$I(0).getAxisIndex$net_imagej_axis_AxisType(type);
if (axisIndex < 0) {
meta.get$I(0).addAxis$net_imagej_axis_CalibratedAxis(axis);
}meta.get$I(0).setAxisLength$net_imagej_axis_CalibratedAxis$J(axis, meta.getIfds$().size$());
}if (config.groupableIsGroupFiles$()) {
var currentFile=this.asBrowsableLocation$org_scijava_io_handle_DataHandle(this.getSource$());
var currentName=currentFile.getName$();
var directory=currentFile.parent$();
var files=directory.children$();
if (!files.isEmpty$()) {
for (var file, $file = files.iterator$(); $file.hasNext$()&&((file=($file.next$())),1);) {
var name=file.getName$();
if (name.contains$CharSequence(".")) {
name=name.substring$I$I(0, name.indexOf$I("."));
}if (currentName.startsWith$S(name) && $I$(3).checkSuffix$S$SA(file.getName$(), $I$(9).COMPANION_SUFFIXES) ) {
meta.setCompanionFile$org_scijava_io_location_Location(file);
break;
}}
}}C$.superclazz.prototype.initMetadata$io_scif_formats_TIFFFormat_Metadata$io_scif_config_SCIFIOConfig.apply(this, [meta, config]);
});

Clazz.newMeth(C$, 'checkCommentSCIFIO$S', function (comment) {
return comment != null  && comment.startsWith$S("SCIFIO=") ;
}, p$1);

Clazz.newMeth(C$, 'checkCommentImageJ$S', function (comment) {
return comment != null  && comment.startsWith$S("ImageJ=") ;
}, p$1);

Clazz.newMeth(C$, 'checkCommentMetamorph$io_scif_formats_TIFFFormat_Metadata$S', function (meta, comment) {
var software=meta.getIfds$().get$I(0).getIFDTextValue$I(305);
return comment != null  && software != null   && software.contains$CharSequence("MetaMorph") ;
}, p$1);

Clazz.newMeth(C$, 'parseCommentSCIFIO$io_scif_formats_TIFFFormat_Metadata$S', function (meta, comment) {
var table=meta.getTable$();
table.remove$O("Comment");
meta.setDescription$S("");
meta.populateImageMetadata$();
meta.populateImageMetadata=false;
var axes=null;
var lengths=null;
var scales=null;
var units=null;
var st=Clazz.new_($I$(10,1).c$$S$S,[comment, "\n"]);
while (st.hasMoreTokens$()){
var token=st.nextToken$();
var eq=token.indexOf$S("=");
if (eq < 0) continue;
var value=token.substring$I(eq + 1);
if (token.startsWith$S("axes=")) axes=value.split$S(",");
 else if (token.startsWith$S("lengths=")) lengths=value.split$S(",");
 else if (token.startsWith$S("scales=")) scales=value.split$S(",");
 else if (token.startsWith$S("units=")) units=value.split$S(",");
}
if (axes == null  || lengths == null   || scales == null   || units == null  ) {
return;
}for (var i=0; i < axes.length; i++) {
var type=$I$(4).get$S(axes[i]);
var unit=(units[i] != null ) ? units[i].replace$CharSequence$CharSequence("\\u00B5", "\u00b5") : null;
var scale=Double.parseDouble$S(scales[i]);
var axis=Clazz.new_($I$(8,1).c$$net_imagej_axis_AxisType$S$D,[type, unit, scale]);
var axisIndex=meta.get$I(0).getAxisIndex$net_imagej_axis_AxisType(type);
if (axisIndex < 0) {
meta.get$I(0).addAxis$net_imagej_axis_CalibratedAxis(axis);
} else {
meta.get$I(0).setAxis$I$net_imagej_axis_CalibratedAxis(axisIndex, axis);
}var length=Long.parseLong$S(lengths[i]);
meta.get$I(0).setAxisLength$net_imagej_axis_CalibratedAxis$J(axis, length);
}
}, p$1);

Clazz.newMeth(C$, 'parseCommentImageJ$io_scif_formats_TIFFFormat_Metadata$S', function (meta, comment) {
meta.populateImageMetadata$();
meta.populateImageMetadata=false;
var table=meta.getTable$();
var nl=comment.indexOf$S("\n");
table.put$TK$TV("ImageJ", nl < 0 ? comment.substring$I(7) : comment.substring$I$I(7, nl));
table.remove$O("Comment");
meta.setDescription$S("");
var z=1;
var t=1;
var c=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(4).CHANNEL)|0);
var ifds=meta.getIfds$();
if (ifds.get$I(0).containsKey$O(new Integer(50839))) {
comment += "\n" + ifds.get$I(0).getIFDTextValue$I(50839);
p$1.populateIJNonTextAttributes$io_scif_formats_TIFFFormat_Metadata$io_scif_formats_tiff_IFDList.apply(this, [meta, ifds]);
}var unit=null;
var spacing=1;
var st=Clazz.new_($I$(10,1).c$$S$S,[comment, "\n"]);
while (st.hasMoreTokens$()){
var token=st.nextToken$();
var value=null;
var eq=token.indexOf$S("=");
if (eq >= 0) value=token.substring$I(eq + 1);
if (token.startsWith$S("channels=")) c=p$1.parseInt$S.apply(this, [value]);
 else if (token.startsWith$S("slices=")) z=p$1.parseInt$S.apply(this, [value]);
 else if (token.startsWith$S("frames=")) t=p$1.parseInt$S.apply(this, [value]);
 else if (token.startsWith$S("mode=")) {
table.put$TK$TV("Color mode", value);
} else if (token.startsWith$S("unit=")) {
unit=value;
meta.setCalibrationUnit$S(unit);
for (var iMeta, $iMeta = meta.getAll$().iterator$(); $iMeta.hasNext$()&&((iMeta=($iMeta.next$())),1);) {
for (var axis, $axis = iMeta.getAxes$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
axis.setUnit$S(unit);
}
}
table.put$TK$TV("Unit", meta.getCalibrationUnit$());
} else if (token.startsWith$S("finterval=")) {
meta.setTimeIncrement$Double(new Double(p$1.parseDouble$S.apply(this, [value])));
table.put$TK$TV("Frame Interval", meta.getTimeIncrement$());
} else if (token.startsWith$S("spacing=")) {
spacing=p$1.parseDouble$S.apply(this, [value]);
table.put$TK$TV("Spacing", new Double(spacing));
} else if (token.startsWith$S("xorigin=")) {
meta.setxOrigin$Integer(new Integer(p$1.parseInt$S.apply(this, [value])));
table.put$TK$TV("X Origin", meta.getxOrigin$());
} else if (token.startsWith$S("yorigin=")) {
meta.setyOrigin$Integer(new Integer(p$1.parseInt$S.apply(this, [value])));
table.put$TK$TV("Y Origin", meta.getyOrigin$());
} else if (eq > 0) {
table.put$TK$TV(token.substring$I$I(0, eq).trim$(), value);
}}
if (z * c * t  == c && meta.get$I(0).isMultichannel$() ) {
t=(meta.get$I(0).getPlaneCount$()|0);
}var m=meta.get$I(0);
var predefinedAxes=Clazz.new_(1,{E:"net.imagej.axis.CalibratedAxis"},$I$(11,1).c$$java_util_Collection,[m.getAxes$()]);
m.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(4).X, $I$(4).Y, $I$(4).CHANNEL, $I$(4).Z, $I$(4).TIME]);
if (z * t * (m.isMultichannel$() ? 1 : c)  == ifds.size$()) {
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).Z, z);
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).TIME, t);
if (!m.isMultichannel$()) {
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).CHANNEL, c);
}} else if (z * c * t  == ifds.size$() && m.isMultichannel$() ) {
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).Z, z);
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).TIME, t);
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).CHANNEL, m.getAxisLength$net_imagej_axis_AxisType($I$(4).CHANNEL) * c);
} else if (ifds.size$() == 1 && z * t > ifds.size$()  && ifds.get$I(0).getCompression$() === $I$(12).UNCOMPRESSED  ) {
var firstIFD=ifds.get$I(0);
var planeSize=((m.getAxisLength$net_imagej_axis_AxisType($I$(4).X) * m.getAxisLength$net_imagej_axis_AxisType($I$(4).Y) * m.getAxisLength$net_imagej_axis_AxisType($I$(4).CHANNEL) * $I$(3).getBytesPerPixel$I(m.getPixelType$()) )|0);
var stripOffsets=firstIFD.getStripOffsets$();
var stripByteCounts=firstIFD.getStripByteCounts$();
var endOfFirstPlane=stripOffsets[stripOffsets.length - 1] + stripByteCounts[stripByteCounts.length - 1];
var totalBytes=this.getSource$().length$() - endOfFirstPlane;
var totalPlanes=(((totalBytes/planeSize|0))|0) + 1;
ifds=Clazz.new_($I$(13,1));
ifds.add$TE(firstIFD);
for (var i=1; i < totalPlanes; i++) {
var ifd=Clazz.new_($I$(14,1).c$$io_scif_formats_tiff_IFD$org_scijava_log_LogService,[firstIFD, this.log$()]);
ifds.add$TE(ifd);
var prevOffsets=ifds.get$I(i - 1).getStripOffsets$();
var offsets=Clazz.array(Long.TYPE, [stripOffsets.length]);
offsets[0]=prevOffsets[prevOffsets.length - 1] + stripByteCounts[stripByteCounts.length - 1];
for (var j=1; j < offsets.length; j++) {
offsets[j]=offsets[j - 1] + stripByteCounts[j - 1];
}
ifd.putIFDValue$I$O(273, offsets);
}
if (z * c * t  == ifds.size$()) {
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).Z, z);
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).TIME, t);
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).CHANNEL, c);
} else if (z * t == ifds.size$()) {
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).Z, z);
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).TIME, t);
} else m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).Z, ifds.size$());
} else {
m.setAxisLength$net_imagej_axis_AxisType$J($I$(4).TIME, ifds.size$());
}var validAxes=Clazz.new_(1,{E:"net.imagej.axis.CalibratedAxis"},$I$(1,1));
for (var axis, $axis = m.getAxes$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
if (predefinedAxes.contains$O(axis) || m.getAxisLength$net_imagej_axis_CalibratedAxis(axis) > 1 ) {
validAxes.add$TE(axis);
}}
m.setAxes$net_imagej_axis_CalibratedAxisA(validAxes.toArray$TTA(Clazz.array($I$(15), [validAxes.size$()])));
var zAxis=meta.get$I(0).getAxis$net_imagej_axis_AxisType($I$(4).Z);
if (zAxis != null ) {
if (unit != null ) zAxis.setUnit$S(unit);
if (spacing >= 0 ) $I$(3).calibrate$net_imagej_axis_CalibratedAxis$D$D(zAxis, spacing, 0);
}}, p$1);

Clazz.newMeth(C$, 'populateIJNonTextAttributes$io_scif_formats_TIFFFormat_Metadata$io_scif_formats_tiff_IFDList', function (meta, ifds) {
var metaDataCounts=null;
var imagejTags=null;
var littleEndian=false;
try {
metaDataCounts=ifds.get$I(0).getIFDIntArray$I(50838);
imagejTags=ifds.get$I(0).getIFDShortArray$I(50839);
littleEndian=ifds.get$I(0).isLittleEndian$();
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
return null;
} else {
throw e;
}
}
var hdrSize=metaDataCounts[0];
if (hdrSize < 12 || hdrSize > 804 ) return null;
var sPos=Clazz.array(Integer.TYPE, [1]);
var magicNum=p$1.getInt$IA$HA$Z.apply(this, [sPos, imagejTags, littleEndian]);
if (magicNum != 1229605194) return null;
var nTypes=((hdrSize - 4)/8|0);
var types=Clazz.array(Integer.TYPE, [nTypes]);
var counts=Clazz.array(Integer.TYPE, [nTypes]);
for (var i=0; i < nTypes; i++) {
types[i]=p$1.getInt$IA$HA$Z.apply(this, [sPos, imagejTags, littleEndian]);
counts[i]=p$1.getInt$IA$HA$Z.apply(this, [sPos, imagejTags, littleEndian]);
}
var start=1;
for (var i=0; i < nTypes; i++) {
if (types[i] == 1819636851) {
var luts=p$1.getLUTs$I$I$IA$HA$IA.apply(this, [start, start + counts[i] - 1, metaDataCounts, imagejTags, sPos]);
meta.setLut$BAA(luts);
} else if (types[i] == 1818321516) {
meta.get$I(0).getTable$().put$TK$TV("SliceLabels", p$1.getSliceLabels$I$I$IA$HA$IA$Z.apply(this, [start, start + counts[i] - 1, metaDataCounts, imagejTags, sPos, littleEndian]));
} else {
p$1.skipUnknownType$I$I$IA$IA.apply(this, [start, start + counts[i] - 1, metaDataCounts, sPos]);
}start+=counts[i];
}
return null;
}, p$1);

Clazz.newMeth(C$, 'getLUTs$I$I$IA$HA$IA', function (first, last, metaDataCounts, imagejTags, sPos) {
var channelLuts=Clazz.array(Byte.TYPE, [last - first + 1, null]);
var index=0;
for (var i=first; i <= last; i++) {
var len=metaDataCounts[i];
channelLuts[index]=Clazz.array(Byte.TYPE, [len]);
for (var j=0; j < len; j++) {
channelLuts[index][j]=((imagejTags[sPos[0]++]|0)|0);
}
index++;
}
return channelLuts;
}, p$1);

Clazz.newMeth(C$, 'getSliceLabels$I$I$IA$HA$IA$Z', function (first, last, metaDataCounts, imagejTags, position, littleEndian) {
var result=Clazz.array(String, [last - first + 1]);
for (var i=first; i <= last; i++) {
var len=(metaDataCounts[i]/2|0);
var buffer=Clazz.array(Character.TYPE, [len]);
for (var j=0; j < len; j++) {
buffer[j]=p$1.getChar$IA$HA$Z.apply(this, [position, imagejTags, littleEndian]);
}
result[i - first]= String.instantialize(buffer);
}
return result;
}, p$1);

Clazz.newMeth(C$, 'skipUnknownType$I$I$IA$IA', function (first, last, metaDataCounts, position) {
for (var i=first; i <= last; i++) {
var len=metaDataCounts[i];
position[0]+=len;
}
}, p$1);

Clazz.newMeth(C$, 'getChar$IA$HA$Z', function (start, imageJTags, littleEndian) {
var b1=imageJTags[start[0]++];
var b2=imageJTags[start[0]++];
if (littleEndian) return String.fromCharCode(((b2 << 8) | b1));
return String.fromCharCode(((b1 << 8) | b2));
}, p$1);

Clazz.newMeth(C$, 'getInt$IA$HA$Z', function (start, imageJTags, littleEndian) {
var b1=imageJTags[start[0]++];
var b2=imageJTags[start[0]++];
var b3=imageJTags[start[0]++];
var b4=imageJTags[start[0]++];
if (littleEndian) return ((b4 << 24) + (b3 << 16) + (b2 << 8) + (b1 << 0) );
return ((b1 << 24) + (b2 << 16) + (b3 << 8) + b4 );
}, p$1);

Clazz.newMeth(C$, 'parseCommentMetamorph$io_scif_formats_TIFFFormat_Metadata$S', function (meta, comment) {
var st=Clazz.new_($I$(10,1).c$$S$S,[comment, "\n"]);
while (st.hasMoreTokens$()){
var line=st.nextToken$();
var colon=line.indexOf$S(":");
if (colon < 0) {
meta.getTable$().put$TK$TV("Comment", line);
meta.setDescription$S(line);
continue;
}var key=line.substring$I$I(0, colon);
var value=line.substring$I(colon + 1);
meta.getTable$().put$TK$TV(key, value);
}
}, p$1);

Clazz.newMeth(C$, 'parseCommentGeneric$io_scif_formats_TIFFFormat_Metadata$S', function (meta, comment) {
if (comment == null ) return;
var lines=comment.split$S("\n");
if (lines.length > 1) {
comment="";
for (var line, $line = 0, $$line = lines; $line<$$line.length&&((line=($$line[$line])),1);$line++) {
var eq=line.indexOf$S("=");
if (eq != -1) {
var key=line.substring$I$I(0, eq).trim$();
var value=line.substring$I(eq + 1).trim$();
meta.getTable$().put$TK$TV(key, value);
} else if (!line.startsWith$S("[")) {
comment += line + "\n";
}}
meta.getTable$().put$TK$TV("Comment", comment);
meta.setDescription$S(comment);
}}, p$1);

Clazz.newMeth(C$, 'parseInt$S', function (s) {
try {
return Integer.parseInt$S(s);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Failed to parse integer value", e);
} else {
throw e;
}
}
return 0;
}, p$1);

Clazz.newMeth(C$, 'parseDouble$S', function (s) {
try {
return Double.parseDouble$S(s);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Failed to parse floating point value", e);
} else {
throw e;
}
}
return 0;
}, p$1);
C$.$getAnn$ = function(){ return [
[['xmlService','io.scif.xml.XMLService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFFormat, "BaseTIFFParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.MinimalTIFFFormat','.Parser']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DATE_FORMATS=Clazz.array(String, -1, ["yyyy:MM:dd HH:mm:ss", "dd/MM/yyyy HH:mm:ss.SS", "MM/dd/yyyy hh:mm:ss.SSS aa", "yyyyMMdd HH:mm:ss.SSS", "yyyy/MM/dd HH:mm:ss"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['DATE_FORMATS','String[]']]]

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_TIFFFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
C$.superclazz.prototype.typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig.apply(this, [stream, meta, config]);
this.initMetadata$io_scif_formats_TIFFFormat_Metadata$io_scif_config_SCIFIOConfig(meta, config);
});

Clazz.newMeth(C$, 'initMetadata$io_scif_formats_TIFFFormat_Metadata$io_scif_config_SCIFIOConfig', function (meta, config) {
if (config.parserGetLevel$() === $I$(6).MINIMUM ) {
return;
}var ifds=meta.getIfds$();
var table=meta.getTable$();
for (var i=0; i < ifds.size$(); i++) {
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "PageName #" + i, ifds.get$I(i), 285);
}
var firstIFD=ifds.get$I(0);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "ImageWidth", firstIFD, 256);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "ImageLength", firstIFD, 257);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "BitsPerSample", firstIFD, 258);
if (ifds.get$I(0).containsKey$O(new Integer(34665))) {
var exifIFDs=meta.getTiffParser$().getExifIFDs$();
if (exifIFDs.size$() > 0) {
var exif=exifIFDs.get$I(0);
for (var key, $key = exif.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var k=key.intValue$();
table.put$TK$TV(C$.getExifTagName$I(k), exif.get$O(key));
}
}}var comp=firstIFD.getCompression$();
table.put$TK$TV("Compression", comp.getCodecName$());
var photo=firstIFD.getPhotometricInterpretation$();
var photoInterp=photo.getName$();
var metaDataPhotoInterp=photo.getMetadataType$();
table.put$TK$TV("PhotometricInterpretation", photoInterp);
table.put$TK$TV("MetaDataPhotometricInterpretation", metaDataPhotoInterp);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "CellWidth", firstIFD, 264);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "CellLength", firstIFD, 265);
var or=firstIFD.getIFDIntValue$I(274);
if (or == 8) {
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "ImageWidth", firstIFD, 257);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "ImageLength", firstIFD, 256);
}var orientation=null;
switch (or) {
case 1:
orientation="1st row -> top; 1st column -> left";
break;
case 2:
orientation="1st row -> top; 1st column -> right";
break;
case 3:
orientation="1st row -> bottom; 1st column -> right";
break;
case 4:
orientation="1st row -> bottom; 1st column -> left";
break;
case 5:
orientation="1st row -> left; 1st column -> top";
break;
case 6:
orientation="1st row -> right; 1st column -> top";
break;
case 7:
orientation="1st row -> right; 1st column -> bottom";
break;
case 8:
orientation="1st row -> left; 1st column -> bottom";
break;
}
table.put$TK$TV("Orientation", orientation);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "SamplesPerPixel", firstIFD, 277);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "Software", firstIFD, 305);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "Instrument Make", firstIFD, 271);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "Instrument Model", firstIFD, 272);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "Document Name", firstIFD, 269);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "DateTime", firstIFD, 306);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "Artist", firstIFD, 315);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "HostComputer", firstIFD, 316);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "Copyright", firstIFD, 33432);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "NewSubfileType", firstIFD, 254);
var thresh=firstIFD.getIFDIntValue$I(263);
var threshholding=null;
switch (thresh) {
case 1:
threshholding="No dithering or halftoning";
break;
case 2:
threshholding="Ordered dithering or halftoning";
break;
case 3:
threshholding="Randomized error diffusion";
break;
}
table.put$TK$TV("Threshholding", threshholding);
var fill=firstIFD.getIFDIntValue$I(266);
var fillOrder=null;
switch (fill) {
case 1:
fillOrder="Pixels with lower column values are stored in the higher order bits of a byte";
break;
case 2:
fillOrder="Pixels with lower column values are stored in the lower order bits of a byte";
break;
}
table.put$TK$TV("FillOrder", fillOrder);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "Make", firstIFD, 271);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "Model", firstIFD, 272);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "MinSampleValue", firstIFD, 280);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "MaxSampleValue", firstIFD, 281);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "XResolution", firstIFD, 282);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "YResolution", firstIFD, 283);
var planar=firstIFD.getIFDIntValue$I(284);
var planarConfig=null;
switch (planar) {
case 1:
planarConfig="Chunky";
break;
case 2:
planarConfig="Planar";
break;
}
table.put$TK$TV("PlanarConfiguration", planarConfig);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "XPosition", firstIFD, 286);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "YPosition", firstIFD, 287);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "FreeOffsets", firstIFD, 288);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "FreeByteCounts", firstIFD, 289);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "GrayResponseUnit", firstIFD, 290);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "GrayResponseCurve", firstIFD, 291);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "T4Options", firstIFD, 292);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "T6Options", firstIFD, 293);
var res=firstIFD.getIFDIntValue$I(296);
var resUnit=null;
switch (res) {
case 1:
resUnit="None";
break;
case 2:
resUnit="Inch";
break;
case 3:
resUnit="Centimeter";
break;
}
table.put$TK$TV("ResolutionUnit", resUnit);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "PageNumber", firstIFD, 297);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "TransferFunction", firstIFD, 301);
var predict=firstIFD.getIFDIntValue$I(317);
var predictor=null;
switch (predict) {
case 1:
predictor="No prediction scheme";
break;
case 2:
predictor="Horizontal differencing";
break;
}
table.put$TK$TV("Predictor", predictor);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "WhitePoint", firstIFD, 318);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "PrimaryChromacities", firstIFD, 319);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "HalftoneHints", firstIFD, 321);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "TileWidth", firstIFD, 322);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "TileLength", firstIFD, 323);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "TileOffsets", firstIFD, 324);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "TileByteCounts", firstIFD, 325);
var ink=firstIFD.getIFDIntValue$I(332);
var inkSet=null;
switch (ink) {
case 1:
inkSet="CMYK";
break;
case 2:
inkSet="Other";
break;
}
table.put$TK$TV("InkSet", inkSet);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "InkNames", firstIFD, 333);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "NumberOfInks", firstIFD, 334);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "DotRange", firstIFD, 336);
this.put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "TargetPrinter", firstIFD, 337);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "ExtraSamples", firstIFD, 338);
var fmt=firstIFD.getIFDIntValue$I(339);
var sampleFormat=null;
switch (fmt) {
case 1:
sampleFormat="unsigned integer";
break;
case 2:
sampleFormat="two\'s complement signed integer";
break;
case 3:
sampleFormat="IEEE floating point";
break;
case 4:
sampleFormat="undefined";
break;
}
table.put$TK$TV("SampleFormat", sampleFormat);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "SMinSampleValue", firstIFD, 340);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "SMaxSampleValue", firstIFD, 341);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "TransferRange", firstIFD, 342);
var jpeg=firstIFD.getIFDIntValue$I(512);
var jpegProc=null;
switch (jpeg) {
case 1:
jpegProc="baseline sequential process";
break;
case 14:
jpegProc="lossless process with Huffman coding";
break;
}
table.put$TK$TV("JPEGProc", jpegProc);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "JPEGInterchangeFormat", firstIFD, 513);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "JPEGRestartInterval", firstIFD, 515);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "JPEGLosslessPredictors", firstIFD, 517);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "JPEGPointTransforms", firstIFD, 518);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "JPEGQTables", firstIFD, 519);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "JPEGDCTables", firstIFD, 520);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "JPEGACTables", firstIFD, 521);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "YCbCrCoefficients", firstIFD, 529);
var ycbcr=firstIFD.getIFDIntValue$I(530);
var subSampling=null;
switch (ycbcr) {
case 1:
subSampling="chroma image dimensions = luma image dimensions";
break;
case 2:
subSampling="chroma image dimensions are half the luma image dimensions";
break;
case 4:
subSampling="chroma image dimensions are 1/4 the luma image dimensions";
break;
}
table.put$TK$TV("YCbCrSubSampling", subSampling);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "YCbCrPositioning", firstIFD, 531);
this.putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I(table, "ReferenceBlackWhite", firstIFD, 532);
var q=firstIFD.getBitsPerSample$();
var bps=q[0];
var numC=q.length;
if (photo === $I$(16).RGB_PALETTE  || photo === $I$(16).CFA_ARRAY  ) {
numC=3;
}table.put$TK$TV("BitsPerSample", new Integer(bps));
table.put$TK$TV("NumberOfChannels", new Integer(numC));
var creationDate=this.getImageCreationDate$io_scif_formats_TIFFFormat_Metadata(meta);
var date=$I$(17).formatDate$S$SA(creationDate, C$.DATE_FORMATS);
if (creationDate != null  && date == null  ) {
this.log$().warn$O("unknown creation date format: " + creationDate);
}meta.setCreationDate$S(date);
var artist=firstIFD.getIFDTextValue$I(315);
if (artist != null ) {
var firstName=null;
var lastName=null;
var ndx=artist.indexOf$S(" ");
if (ndx < 0) lastName=artist;
 else {
firstName=artist.substring$I$I(0, ndx);
lastName=artist.substring$I(ndx + 1);
}var email=firstIFD.getIFDStringValue$I(316);
meta.setExperimenterFirstName$S(firstName);
meta.setExperimenterLastName$S(lastName);
meta.setExperimenterEmail$S(email);
}meta.setImageDescription$S(firstIFD.getComment$());
});

Clazz.newMeth(C$, 'getImageCreationDate$io_scif_formats_TIFFFormat_Metadata', function (meta) {
var o=meta.getIfds$().get$I(0).getIFDValue$I(306);
if (Clazz.instanceOf(o, "java.lang.String")) return o;
if (Clazz.instanceOf(o, Clazz.array(String, -1))) return (o)[0];
return null;
});

Clazz.newMeth(C$, 'put$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I', function (table, key, ifd, tag) {
table.put$TK$TV(key, ifd.getIFDValue$I(tag));
});

Clazz.newMeth(C$, 'putInt$io_scif_MetaTable$S$io_scif_formats_tiff_IFD$I', function (table, key, ifd, tag) {
table.put$TK$TV(key, new Integer(ifd.getIFDIntValue$I(tag)));
});

Clazz.newMeth(C$, 'getExifTagName$I', function (tag) {
return $I$(14).getIFDTagName$I(tag);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.MinimalTIFFFormat','.Reader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFFormat, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractWriter');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.COMPRESSION_UNCOMPRESSED=$I$(18).UNCOMPRESSED.getCompression$();
C$.COMPRESSION_LZW=$I$(18).LZW.getCompression$();
C$.COMPRESSION_J2K=$I$(18).J2K.getCompression$();
C$.COMPRESSION_J2K_LOSSY=$I$(18).J2K_LOSSY.getCompression$();
C$.COMPRESSION_JPEG=$I$(18).JPEG.getCompression$();
}

Clazz.newMeth(C$, '$init$', function () {
this.isBigTIFF=null;
this.checkParams=true;
}, 1);

C$.$fields$=[['Z',['checkParams'],'O',['dataHandleService','org.scijava.io.handle.DataHandleService','isBigTIFF','Boolean','tiffSaver','io.scif.formats.tiff.TiffSaver','$in','org.scijava.io.handle.DataHandle']]
,['S',['COMPRESSION_UNCOMPRESSED','COMPRESSION_LZW','COMPRESSION_J2K','COMPRESSION_J2K_LOSSY','COMPRESSION_JPEG']]]

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
return Clazz.array(String, -1, [C$.COMPRESSION_UNCOMPRESSED, C$.COMPRESSION_LZW, C$.COMPRESSION_J2K, C$.COMPRESSION_J2K_LOSSY, C$.COMPRESSION_JPEG]);
});

Clazz.newMeth(C$, 'setBigTiff$Z', function (bigTiff) {
this.isBigTIFF=new Boolean(bigTiff);
});

Clazz.newMeth(C$, 'isBigTiff$', function () {
return this.isBigTIFF == null  ? false : (this.isBigTIFF).valueOf();
});

Clazz.newMeth(C$, 'savePlane$I$J$io_scif_Plane$io_scif_formats_tiff_IFD$net_imglib2_Interval', function (imageIndex, planeIndex, plane, ifd, bounds) {
var buf=plane.getBytes$();
if (true) this.checkParams$I$J$BA$net_imglib2_Interval(imageIndex, planeIndex, buf, bounds);
var xAxis=this.getMetadata$().get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(4).X);
var yAxis=this.getMetadata$().get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(4).Y);
var x=(bounds.min$I(xAxis)|0);
var y=(bounds.min$I(yAxis)|0);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
if (ifd == null ) ifd=Clazz.new_($I$(14,1).c$$org_scijava_log_LogService,[this.log$()]);
var type=this.getMetadata$().get$I(imageIndex).getPixelType$();
var index=planeIndex;
{
{
p$2.prepareToWritePlane$I$J$io_scif_Plane$io_scif_formats_tiff_IFD$I$I$I$I.apply(this, [imageIndex, planeIndex, plane, ifd, x, y, w, h]);
}}this.tiffSaver.writeImage$BA$io_scif_formats_tiff_IFD$J$I$I$I$I$I$Z(buf, ifd, index, type, x, y, w, h, planeIndex == this.getMetadata$().get$I(imageIndex).getPlaneCount$() - 1 && imageIndex == this.getMetadata$().getImageCount$() - 1 );
});

Clazz.newMeth(C$, 'initialize$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
{
if (!this.isInitialized$I$J(imageIndex, (planeIndex|0))) {
try {
var tmp=this.dataHandleService.create$TD(this.getHandle$().get$());
/*try*/ {
if (tmp.length$() == 0) {
this.tiffSaver.writeHeader$();
}}
}finally{/*res*/
try{tmp&&tmp.close$&&tmp.close$()}catch(_){}}
}}});

Clazz.newMeth(C$, 'setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig', function (dest, imageIndex, config) {
C$.superclazz.prototype.setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig.apply(this, [dest, imageIndex, config]);
{
p$2.setupTiffSaver$org_scijava_io_handle_DataHandle$I.apply(this, [dest, imageIndex]);
}this.isBigTIFF=null;
if (config.containsKey$O("WRITE_BIG_TIFF")) {
var o=config.get$O("WRITE_BIG_TIFF");
if (Clazz.instanceOf(o, "java.lang.Boolean")) {
this.isBigTIFF=o;
} else {
var v=String.valueOf$O(o).toLowerCase$();
if (v.startsWith$S("t")) {
this.isBigTIFF=new Boolean(true);
} else if (v.startsWith$S("f")) {
this.isBigTIFF=new Boolean(false);
}}}if (this.isBigTIFF == null  && this.getMetadata$().getDatasetSize$() > 2147483648 ) {
this.isBigTIFF=new Boolean(true);
}});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
var ifd=Clazz.new_($I$(14,1).c$$org_scijava_log_LogService,[this.log$()]);
if (!this.writeSequential$()) {
var parser=Clazz.new_($I$(19,1).c$$org_scijava_Context$org_scijava_io_location_Location,[this.getContext$(), this.getHandle$().get$()]);
try {
var ifdOffsets=parser.getIFDOffsets$();
if (planeIndex < ifdOffsets.length) {
ifd=parser.getIFD$J(ifdOffsets[(planeIndex|0)]);
}} finally {
var tiffHandle=parser.getStream$();
if (tiffHandle != null ) {
tiffHandle.close$();
}}
}if (planeIndex == 0) p$2.addDimensionalAxisInfo$io_scif_formats_tiff_IFD$I.apply(this, [ifd, imageIndex]);
this.savePlane$I$J$io_scif_Plane$io_scif_formats_tiff_IFD$net_imglib2_Interval(imageIndex, planeIndex, plane, ifd, bounds);
});

Clazz.newMeth(C$, 'canDoStacks$', function () {
return true;
});

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
if (codec != null  && codec.equals$O(C$.COMPRESSION_JPEG) ) {
return Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3]);
} else if (codec != null  && codec.equals$O(C$.COMPRESSION_J2K) ) {
return Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6]);
}return Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7]);
});

Clazz.newMeth(C$, 'close$', function () {
C$.superclazz.prototype.close$.apply(this, []);
if (this.$in != null ) {
this.$in.close$();
}});

Clazz.newMeth(C$, 'formatCompression$io_scif_formats_tiff_IFD', function (ifd) {
var compressType=$I$(12).UNCOMPRESSED;
if (this.getCompression$() != null ) {
if (this.getCompression$().equals$O(C$.COMPRESSION_LZW)) {
compressType=$I$(12).LZW;
} else if (this.getCompression$().equals$O(C$.COMPRESSION_J2K)) {
compressType=$I$(12).JPEG_2000;
} else if (this.getCompression$().equals$O(C$.COMPRESSION_J2K_LOSSY)) {
compressType=$I$(12).JPEG_2000_LOSSY;
} else if (this.getCompression$().equals$O(C$.COMPRESSION_JPEG)) {
compressType=$I$(12).JPEG;
}}var v=ifd.get$O(new Integer(259));
if (v == null ) ifd.put$TK$TV(new Integer(259), new Integer(compressType.getCode$()));
}, p$2);

Clazz.newMeth(C$, 'prepareToWritePlane$I$J$io_scif_Plane$io_scif_formats_tiff_IFD$I$I$I$I', function (imageIndex, planeIndex, plane, ifd, x, y, w, h) {
var buf=plane.getBytes$();
var meta=this.getMetadata$();
var bigEndian=new Boolean(!meta.get$I(imageIndex).isLittleEndian$());
var littleEndian=!bigEndian.booleanValue$();
var interleaved=meta.get$I(imageIndex).getInterleavedAxisCount$() > 0;
var type=meta.get$I(imageIndex).getPixelType$();
var c=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(4).CHANNEL)|0);
var bytesPerPixel=$I$(3).getBytesPerPixel$I(type);
var blockSize=w * h * c * bytesPerPixel ;
if (blockSize > buf.length) {
c=(buf.length/(w * h * bytesPerPixel )|0);
}p$2.formatCompression$io_scif_formats_tiff_IFD.apply(this, [ifd]);
var lut=$I$(20).get8BitLookupTable$java_awt_image_ColorModel(this.getColorModel$());
if (lut != null ) {
var colorMap=Clazz.array(Integer.TYPE, [lut.length * lut[0].length]);
for (var i=0; i < lut.length; i++) {
for (var j=0; j < lut[0].length; j++) {
colorMap[i * lut[0].length + j]=(lut[i][j] & 255) << 8;
}
}
ifd.putIFDValue$I$O(320, colorMap);
}var width=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(4).X)|0);
var height=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(4).Y)|0);
ifd.put$TK$TV( new Integer(256),  new Long(width));
ifd.put$TK$TV( new Integer(257),  new Long(height));
var avgScaleX=meta.get$I(0).getAxis$net_imagej_axis_AxisType($I$(4).X).averageScale$D$D(0, 1);
var physicalSizeX=avgScaleX == 0  ? 0 : 1 / avgScaleX;
var avgScaleY=meta.get$I(0).getAxis$net_imagej_axis_AxisType($I$(4).Y).averageScale$D$D(0, 1);
var physicalSizeY=avgScaleY == 0  ? 0 : 1 / avgScaleY;
ifd.put$TK$TV(new Integer(296), new Integer(3));
ifd.put$TK$TV(new Integer(282), Clazz.new_($I$(21,1).c$$J$J,[((physicalSizeX * 1000 * 10000 )|0), 1000]));
ifd.put$TK$TV(new Integer(283), Clazz.new_($I$(21,1).c$$J$J,[((physicalSizeY * 1000 * 10000 )|0), 1000]));
var handle=this.getHandle$();
if (!this.isBigTiff$()) {
this.isBigTIFF=new Boolean((handle.length$() + 2 * (width * height * c * bytesPerPixel )) >= 4294967296);
if (this.isBigTiff$()) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["File is too large for 32-bit TIFF but BigTIFF support was disabled. Please enable by using setBigTiff(true) or passing a SCIFIOConfig object with the appropriate BIG_TIFF_KEY,true pair."]);
}}ifd.put$TK$TV(new Integer(0), new Boolean(littleEndian));
if (!ifd.containsKey$O(new Integer(3))) {
ifd.put$TK$TV(new Integer(3), new Long(handle.length$()));
if (handle.length$() != -1) {
handle.seek$J(handle.length$());
}} else {
handle.seek$J((ifd.get$O(new Integer(3))).valueOf());
}ifd.putIFDValue$I$I(284, interleaved || meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(4).CHANNEL) == 1  ? 1 : 2);
var sampleFormat=1;
if ($I$(3).isSigned$I(type)) sampleFormat=2;
if ($I$(3).isFloatingPoint$I(type)) sampleFormat=3;
ifd.putIFDValue$I$I(339, sampleFormat);
var index=planeIndex;
var realSeries=imageIndex;
for (var i=0; i < realSeries; i++) {
index+=meta.get$I(i).getPlaneCount$();
}
return index;
}, p$2);

Clazz.newMeth(C$, 'setupTiffSaver$org_scijava_io_handle_DataHandle$I', function (handle, imageIndex) {
var meta=this.getMetadata$();
this.tiffSaver=Clazz.new_($I$(22,1).c$$org_scijava_Context$org_scijava_io_handle_DataHandle,[this.getContext$(), handle]);
var littleEndian=meta.get$I(imageIndex).isLittleEndian$();
this.tiffSaver.setWritingSequentially$Z(this.writeSequential$());
this.tiffSaver.setLittleEndian$Z(littleEndian);
this.tiffSaver.setBigTiff$Z(this.isBigTiff$());
this.tiffSaver.setCodecOptions$io_scif_codec_CodecOptions(this.getCodecOptions$());
}, p$2);

Clazz.newMeth(C$, 'addDimensionalAxisInfo$io_scif_formats_tiff_IFD$I', function (ifd, imageIndex) {
var imageMeta=this.getMetadata$().get$I(imageIndex);
var cAxis=imageMeta.getAxis$net_imagej_axis_AxisType($I$(4).CHANNEL);
var zAxis=imageMeta.getAxis$net_imagej_axis_AxisType($I$(4).Z);
var tAxis=imageMeta.getAxis$net_imagej_axis_AxisType($I$(4).TIME);
var axes=imageMeta.getAxes$();
var types=p$2.list$java_util_List$java_util_function_Function.apply(this, [axes, (P$.TIFFFormat$Writer$lambda1$||(P$.TIFFFormat$Writer$lambda1$=(((P$.TIFFFormat$Writer$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TIFFFormat$Writer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (a) { return (a.type$().toString());});
})()
), Clazz.new_(1,{T:"net.imagej.axis.CalibratedAxis",R:"String"},P$.TIFFFormat$Writer$lambda1.$init$, [this, null])))))]);
var lengths=p$2.list$java_util_List$java_util_function_Function.apply(this, [axes, ((P$.TIFFFormat$Writer$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TIFFFormat$Writer$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (a) { return ("" + this.$finals$.imageMeta.getAxisLength$net_imagej_axis_CalibratedAxis(a));});
})()
), Clazz.new_(1,{T:"net.imagej.axis.CalibratedAxis",R:"String"},P$.TIFFFormat$Writer$lambda2.$init$, [this, {imageMeta:imageMeta}]))]);
var scales=p$2.list$java_util_List$java_util_function_Function.apply(this, [axes, (P$.TIFFFormat$Writer$lambda3$||(P$.TIFFFormat$Writer$lambda3$=(((P$.TIFFFormat$Writer$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TIFFFormat$Writer$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (a) { return ("" + new Double(a.averageScale$D$D(0, 1)).toString());});
})()
), Clazz.new_(1,{T:"net.imagej.axis.CalibratedAxis",R:"String"},P$.TIFFFormat$Writer$lambda3.$init$, [this, null])))))]);
var units=p$2.list$java_util_List$java_util_function_Function.apply(this, [axes, (P$.TIFFFormat$Writer$lambda4$||(P$.TIFFFormat$Writer$lambda4$=(((P$.TIFFFormat$Writer$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TIFFFormat$Writer$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (a) { return (p$2.replaceMu$S.apply(this.b$['io.scif.formats.TIFFFormat.Writer'], [a.unit$()]));});
})()
), Clazz.new_(1,{T:"net.imagej.axis.CalibratedAxis",R:"String"},P$.TIFFFormat$Writer$lambda4.$init$, [this, null])))))]);
var comment="SCIFIO=" + this.getVersion$() + "\n" + "axes=" + types + "\n" + "lengths=" + lengths + "\n" + "scales=" + scales + "\n" + "units=" + units + "\n" + "bitsPerPixel=" + imageMeta.getBitsPerPixel$() + "\n" + "images=" + imageMeta.getPlaneCount$() + "\n" + "channels=" + imageMeta.getAxisLength$net_imagej_axis_CalibratedAxis(cAxis) + "\n" + "slices=" + imageMeta.getAxisLength$net_imagej_axis_CalibratedAxis(zAxis) + "\n" + "frames=" + imageMeta.getAxisLength$net_imagej_axis_CalibratedAxis(tAxis) + "\n" + "hyperstack=true\n" + "mode=composite\n" + "unit=" + p$2.replaceMu$S.apply(this, [axes.get$I(0).unit$()]) + "\n" ;
ifd.putIFDValue$I$O(270, comment);
}, p$2);

Clazz.newMeth(C$, 'list$java_util_List$java_util_function_Function', function (l, f) {
return String.join$CharSequence$Iterable(",", l.stream$().map$java_util_function_Function(f).collect$java_util_stream_Collector($I$(23).toList$()));
}, p$2);

Clazz.newMeth(C$, 'replaceMu$S', function (unit) {
return (unit != null ) ? unit.replace$CharSequence$CharSequence("\u00b5", "\\u00B5") : null;
}, p$2);
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFFormat, "TIFFTranslator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(24),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(25));
});

Clazz.newMeth(C$, ['translateImageMetadata$java_util_List$io_scif_formats_TIFFFormat_Metadata','translateImageMetadata$java_util_List$TN'], function (source, dest) {
var ifds=Clazz.new_($I$(13,1));
dest.setIfds$io_scif_formats_tiff_IFDList(ifds);
var m=source.get$I(0);
var planeCount=m.getPlaneCount$();
if (m.getAxisIndex$net_imagej_axis_AxisType($I$(4).CHANNEL) >= m.getPlanarAxisCount$()) {
planeCount=(planeCount/(m.getAxisLength$net_imagej_axis_AxisType($I$(4).CHANNEL))|0);
}for (var i=0; i < planeCount; i++) ifds.add$TE(Clazz.new_($I$(14,1).c$$org_scijava_log_LogService,[this.log$()]));

var firstIFD=ifds.get$I(0);
var sampleFormat;
if ($I$(3).isFloatingPoint$I(m.getPixelType$())) {
sampleFormat=3;
} else if ($I$(3).isSigned$I(m.getPixelType$())) {
sampleFormat=2;
} else {
sampleFormat=1;
}firstIFD.putIFDValue$I$O(258, Clazz.array(Integer.TYPE, -1, [m.getBitsPerPixel$()]));
firstIFD.putIFDValue$I$I(339, sampleFormat);
firstIFD.putIFDValue$I$O(0, new Boolean(m.isLittleEndian$()));
firstIFD.putIFDValue$I$J(256, m.getAxisLength$net_imagej_axis_AxisType($I$(4).X));
firstIFD.putIFDValue$I$J(257, m.getAxisLength$net_imagej_axis_AxisType($I$(4).Y));
firstIFD.putIFDValue$I$J(277, m.getAxisLength$net_imagej_axis_AxisType($I$(4).CHANNEL));
firstIFD.putIFDValue$I$O(262, $I$(16).BLACK_IS_ZERO);
if (m.isMultichannel$()) firstIFD.putIFDValue$I$O(262, $I$(16).RGB);
if (m.isIndexed$() && Clazz.getClass($I$(26),['getColorTable$I$J']).isAssignableFrom$Class(source.getClass$()) ) {
firstIFD.putIFDValue$I$O(262, $I$(16).RGB_PALETTE);
var table=(source).getColorTable$(0, 0);
var flattenedTable=Clazz.array(Integer.TYPE, [table.getComponentCount$() * table.getLength$()]);
for (var i=0; i < table.getComponentCount$(); i++) {
for (var j=0; j < table.getLength$(); j++) {
flattenedTable[(i * table.getLength$()) + j]=table.get$I$I(i, j);
}
}
firstIFD.putIFDValue$I$O(320, flattenedTable);
}});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.TIFFFormat.TIFFTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-9999.0" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
