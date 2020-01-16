(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'java.util.Random','org.scijava.io.location.BytesLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractCodec", null, 'io.scif.AbstractSCIFIOPlugin', 'io.scif.codec.Codec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['handles','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'test$', function () {
var testdata=Clazz.array(Byte.TYPE, [50000]);
var r=Clazz.new_($I$(1,1));
this.log$().info$O("Testing " + this.getClass$().getName$());
this.log$().info$O("Generating random data");
r.nextBytes$BA(testdata);
this.log$().info$O("Compressing data");
var compressed=this.compress$BA$io_scif_codec_CodecOptions(testdata, null);
this.log$().info$O("Compressed size: " + compressed.length);
this.log$().info$O("Decompressing data");
var decompressed=this.decompress$BA(compressed);
this.log$().info$O("Comparing data...");
if (testdata.length != decompressed.length) {
this.log$().info$O("Test data differs in length from uncompressed data");
this.log$().info$O("Exiting...");
System.exit$I(-1);
} else {
var equalsFlag=true;
for (var i=0; i < testdata.length; i++) {
if (testdata[i] != decompressed[i]) {
this.log$().info$O("Test data and uncompressed data differ at byte " + i);
equalsFlag=false;
}}
if (!equalsFlag) {
this.log$().info$O("Comparison failed. Exiting...");
System.exit$I(-1);
}}this.log$().info$O("Success.");
this.log$().info$O("Generating 2D byte array test");
var twoDtest=Clazz.array(Byte.TYPE, [100, 500]);
for (var i=0; i < 100; i++) {
System.arraycopy$O$I$O$I$I(testdata, 500 * i, twoDtest[i], 0, 500);
}
var twoDcompressed=this.compress$BAA$io_scif_codec_CodecOptions(twoDtest, null);
this.log$().info$O("Comparing compressed data...");
if (twoDcompressed.length != compressed.length) {
this.log$().info$O("1D and 2D compressed data not same length");
this.log$().info$O("Exiting...");
System.exit$I(-1);
}var equalsFlag=true;
for (var i=0; i < twoDcompressed.length; i++) {
if (twoDcompressed[i] != compressed[i]) {
this.log$().info$O("1D data and 2D compressed data differs at byte " + i);
equalsFlag=false;
}if (!equalsFlag) {
this.log$().info$O("Comparison failed. Exiting...");
System.exit$I(-1);
}}
this.log$().info$O("Success.");
this.log$().info$O("Test complete.");
});

Clazz.newMeth(C$, 'compress$BAA$io_scif_codec_CodecOptions', function (data, options) {
var len=0;
for (var i=0; i < data.length; i++) {
len+=data[i].length;
}
var toCompress=Clazz.array(Byte.TYPE, [len]);
var curPos=0;
for (var i=0; i < data.length; i++) {
System.arraycopy$O$I$O$I$I(data[i], 0, toCompress, curPos, data[i].length);
curPos+=data[i].length;
}
return this.compress$BA$io_scif_codec_CodecOptions(toCompress, options);
});

Clazz.newMeth(C$, 'decompress$BA', function (data) {
return this.decompress$BA$io_scif_codec_CodecOptions(data, null);
});

Clazz.newMeth(C$, 'decompress$BAA', function (data) {
return this.decompress$BAA$io_scif_codec_CodecOptions(data, null);
});

Clazz.newMeth(C$, 'decompress$BA$io_scif_codec_CodecOptions', function (data, options) {
try {
var handle=this.handles.create$TD(Clazz.new_($I$(2,1).c$$BA,[data]));
try {
return this.decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions(handle, options);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[e]);
} else {
throw e;
}
}
}finally{/*res*/
try{handle&&handle.close$&&handle.close$()}catch(_){}}
});

Clazz.newMeth(C$, 'decompress$BAA$io_scif_codec_CodecOptions', function (data, options) {
if (data == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
var len=0;
for (var aData1, $aData1 = 0, $$aData1 = data; $aData1<$$aData1.length&&((aData1=($$aData1[$aData1])),1);$aData1++) {
len+=aData1.length;
}
var toDecompress=Clazz.array(Byte.TYPE, [len]);
var curPos=0;
for (var aData, $aData = 0, $$aData = data; $aData<$$aData.length&&((aData=($$aData[$aData])),1);$aData++) {
System.arraycopy$O$I$O$I$I(aData, 0, toDecompress, curPos, aData.length);
curPos+=aData.length;
}
return this.decompress$BA$io_scif_codec_CodecOptions(toDecompress, options);
});
C$.$getAnn$ = function(){ return [
[['handles','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
