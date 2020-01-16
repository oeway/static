(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.Axes','io.scif.util.FormatTools',['org.scijava.io.handle.DataHandle','.ByteOrder'],'java.util.StringTokenizer','org.scijava.io.location.BytesLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PGMFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["pgm"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.PGMFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Portable Gray Map" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.PGMFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['rawBits'],'L',['offset']]]

Clazz.newMeth(C$, 'isRawBits$', function () {
return this.rawBits;
});

Clazz.newMeth(C$, 'setRawBits$Z', function (rawBits) {
this.rawBits=rawBits;
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'setOffset$J', function (offset) {
this.offset=offset;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
iMeta.setPlanarAxisCount$I(iMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL) == 3 ? 3 : 2);
iMeta.setLittleEndian$Z(false);
iMeta.setIndexed$Z(false);
iMeta.setFalseColor$Z(false);
iMeta.setMetadataComplete$Z(true);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.setRawBits$Z(false);
this.setOffset$J(0);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PGMFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var blockLen=2;
if (!$I$(2).validStream$org_scijava_io_handle_DataHandle$I$Z(stream, 2, false)) return false;
return stream.read$() == 80  && Character.isDigit$C(String.fromCharCode(stream.read$())) ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PGMFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_PGMFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
var height=-1;
var width=-1;
var max=-1;
var magic=null;
var isBlackAndWhite=false;
var varsRead=0;
var numVars=4;
while (varsRead < numVars){
var line=stream.readLine$();
if (line == null ) throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Read entire file without finding complete PGM metadata."]);
if (line.contains$CharSequence("#")) line=line.substring$I$I(0, line.indexOf$S("#"));
line=line.replaceAll$S$S("[^P0-9]", " ");
var vars=line.split$S(" ");
for (var $var, $$var = 0, $$$var = vars; $$var<$$$var.length&&(($var=($$$var[$$var])),1);$$var++) {
varsRead++;
switch (varsRead) {
case 1:
magic=$var;
if (magic.equals$O("P1") || magic.equals$O("P4") ) {
numVars=3;
isBlackAndWhite=true;
}break;
case 2:
width=Integer.parseInt$S($var);
break;
case 3:
height=Integer.parseInt$S($var);
break;
case 4:
max=Integer.parseInt$S($var);
break;
}
}
}
if (magic == null  || height == -1  || width == -1  || (!isBlackAndWhite && max == -1 ) ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Incomplete PGM metadata found. Read the following metadata: magic = " + magic + "; height = " + height + "; width = " + width + "; max = " + max ]);
}meta.createImageMetadata$I(1);
var iMeta=meta.get$I(0);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, width);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, height);
meta.setRawBits$Z(magic.equals$O("P4") || magic.equals$O("P5") || magic.equals$O("P6")  );
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, (magic.equals$O("P3") || magic.equals$O("P6") ) ? 3 : 1);
if (!isBlackAndWhite) {
if (max > 255) iMeta.setPixelType$I(3);
 else iMeta.setPixelType$I(1);
}meta.setOffset$J(stream.offset$());
meta.getTable$().put$TK$TV("Black and white", new Boolean(isBlackAndWhite));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PGMFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var buf=plane.getData$();
var meta=this.getMetadata$();
$I$(2).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
this.getHandle$().seek$J(meta.getOffset$());
if (meta.isRawBits$()) {
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(this.getHandle$(), imageIndex, bounds, plane);
} else {
try {
var bytes=this.dataHandleService.create$TD(Clazz.new_($I$(5,1).c$$I,[0]));
/*try*/ {
var littleEndian=meta.get$I(imageIndex).isLittleEndian$();
bytes.setOrder$org_scijava_io_handle_DataHandle_ByteOrder(littleEndian ? $I$(3).LITTLE_ENDIAN : $I$(3).BIG_ENDIAN);
while (this.getHandle$().offset$() < this.getHandle$().length$()){
var line=this.getHandle$().readLine$().trim$();
line=line.replaceAll$S$S("[^0-9]", " ");
var t=Clazz.new_($I$(4,1).c$$S$S,[line, " "]);
while (t.hasMoreTokens$()){
var q=Integer.parseInt$S(t.nextToken$().trim$());
if (meta.get$I(imageIndex).getPixelType$() == 3) {
bytes.writeShort$I(q);
} else bytes.writeByte$I(q);
}
}
bytes.seek$J(0);
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(bytes, imageIndex, bounds, plane);
}
}finally{/*res*/
try{bytes&&bytes.close$&&bytes.close$()}catch(_){}}
}return plane;
});
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
