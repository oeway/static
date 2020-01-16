(function(){var P$=Clazz.newPackage("io.scif.formats.tiff"),I$=[[0,'io.scif.codec.PassthroughCodec','io.scif.codec.LZWCodec','io.scif.codec.JPEGCodec','io.scif.codec.PackbitsCodec','io.scif.codec.ZlibCodec','io.scif.codec.JPEG2000CodecOptions','io.scif.codec.JPEG2000Codec','io.scif.codec.NikonCodec','io.scif.codec.LuraWaveCodec','java.util.HashMap','java.util.EnumSet','io.scif.codec.CodecOptions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "TiffCompression", null, 'Enum', 'io.scif.enumeration.CodedEnum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "DEFAULT_UNCOMPRESSED", 0, [0, Clazz.getClass($I$(1)), "Uncompressed"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "UNCOMPRESSED", 1, [1, Clazz.getClass($I$(1)), "Uncompressed"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "CCITT_1D", 2, [2, null, "CCITT Group 3 1-Dimensional Modified Huffman"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "GROUP_3_FAX", 3, [3, null, "CCITT T.4 bi-level encoding (Group 3 Fax)"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "GROUP_4_FAX", 4, [4, null, "CCITT T.6 bi-level encoding (Group 4 Fax)"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "LZW", 5, [5, Clazz.getClass($I$(2)), "LZW"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "OLD_JPEG", 6, [6, Clazz.getClass($I$(3)), "Old JPEG"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "JPEG", 7, [7, Clazz.getClass($I$(3)), "JPEG"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "PACK_BITS", 8, [32773, Clazz.getClass($I$(4)), "PackBits"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "PROPRIETARY_DEFLATE", 9, [32946, Clazz.getClass($I$(5)), "Deflate (Zlib)"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "DEFLATE", 10, [8, Clazz.getClass($I$(5)), "Deflate (Zlib)"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "THUNDERSCAN", 11, [32809, null, "Thunderscan"]);
(P$.TiffCompression$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TiffCompression$1", null, Clazz.load('io.scif.formats.tiff.TiffCompression'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD', function (ifd) {
return this.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions(ifd, null);
});

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions', function (ifd, opt) {
var options=C$.superclazz.prototype.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions.apply(this, [ifd, opt]);
options.lossless=true;
var j2k=$I$(6).getDefaultOptions$io_scif_codec_CodecOptions(options);
if (Clazz.instanceOf(opt, "io.scif.codec.JPEG2000CodecOptions")) {
var o=opt;
j2k.numDecompositionLevels=o.numDecompositionLevels;
j2k.resolution=o.resolution;
if (o.codeBlockSize != null ) j2k.codeBlockSize=o.codeBlockSize;
if (o.quality > 0 ) j2k.quality=o.quality;
}return j2k;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "JPEG_2000", 12, [33003, Clazz.getClass($I$(7)), "JPEG-2000"], io.scif.formats.tiff.TiffCompression$1);
(P$.TiffCompression$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TiffCompression$2", null, Clazz.load('io.scif.formats.tiff.TiffCompression'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD', function (ifd) {
return this.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions(ifd, null);
});

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions', function (ifd, opt) {
var options=C$.superclazz.prototype.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions.apply(this, [ifd, opt]);
options.lossless=false;
var j2k=$I$(6).getDefaultOptions$io_scif_codec_CodecOptions(options);
if (Clazz.instanceOf(opt, "io.scif.codec.JPEG2000CodecOptions")) {
var o=opt;
j2k.numDecompositionLevels=o.numDecompositionLevels;
j2k.resolution=o.resolution;
if (o.codeBlockSize != null ) j2k.codeBlockSize=o.codeBlockSize;
if (o.quality > 0 ) j2k.quality=o.quality;
}return j2k;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "JPEG_2000_LOSSY", 13, [33004, Clazz.getClass($I$(7)), "JPEG-2000 Lossy"], io.scif.formats.tiff.TiffCompression$2);
(P$.TiffCompression$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TiffCompression$3", null, Clazz.load('io.scif.formats.tiff.TiffCompression'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD', function (ifd) {
return this.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions(ifd, null);
});

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions', function (ifd, opt) {
var options=C$.superclazz.prototype.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions.apply(this, [ifd, opt]);
options.lossless=true;
var j2k=$I$(6).getDefaultOptions$io_scif_codec_CodecOptions(options);
if (Clazz.instanceOf(opt, "io.scif.codec.JPEG2000CodecOptions")) {
var o=opt;
j2k.numDecompositionLevels=o.numDecompositionLevels;
j2k.resolution=o.resolution;
if (o.codeBlockSize != null ) j2k.codeBlockSize=o.codeBlockSize;
if (o.quality > 0 ) j2k.quality=o.quality;
}return j2k;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "ALT_JPEG2000", 14, [33005, Clazz.getClass($I$(7)), "JPEG-2000"], io.scif.formats.tiff.TiffCompression$3);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "ALT_JPEG", 15, [33007, Clazz.getClass($I$(3)), "JPEG"]);
(P$.TiffCompression$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TiffCompression$4", null, Clazz.load('io.scif.formats.tiff.TiffCompression'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD', function (ifd) {
return this.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions(ifd, null);
});

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions', function (ifd, opt) {
var options=C$.superclazz.prototype.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions.apply(this, [ifd, opt]);
options.lossless=true;
var j2k=$I$(6).getDefaultOptions$io_scif_codec_CodecOptions(options);
if (Clazz.instanceOf(opt, "io.scif.codec.JPEG2000CodecOptions")) {
var o=opt;
j2k.numDecompositionLevels=o.numDecompositionLevels;
j2k.resolution=o.resolution;
if (o.codeBlockSize != null ) j2k.codeBlockSize=o.codeBlockSize;
if (o.quality > 0 ) j2k.quality=o.quality;
}return j2k;
});
})()
)
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "OLYMPUS_JPEG2000", 16, [34712, Clazz.getClass($I$(7)), "JPEG-2000"], io.scif.formats.tiff.TiffCompression$4);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "NIKON", 17, [34713, Clazz.getClass($I$(8)), "Nikon"]);
Clazz.newEnumConst($vals, C$.c$$I$Class$S, "LURAWAVE", 18, [65535, Clazz.getClass($I$(9)), "LuraWave"]);
C$.lookup=C$.getCompressionMap$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['code'],'S',['codecName'],'O',['codecClass','Class']]
,['O',['lookup','java.util.Map']]]

Clazz.newMeth(C$, 'getCompressionMap$', function () {
var lookup=Clazz.new_(1,{K:"Integer",V:"io.scif.formats.tiff.TiffCompression"},$I$(10,1));
for (var v, $v = $I$(11).allOf$Class(Clazz.getClass(C$)).iterator$(); $v.hasNext$()&&((v=($v.next$())),1);) {
lookup.put$TK$TV(new Integer(v.getCode$()), v);
}
return lookup;
}, 1);

Clazz.newMeth(C$, 'c$$I$Class$S', function (code, codecClass, codecName) {
;C$.$init$.apply(this);
this.code=code;
this.codecClass=codecClass;
this.codecName=codecName;
}, 1);

Clazz.newMeth(C$, 'get$I', function (code) {
var toReturn=C$.lookup.get$O(new Integer(code));
if (toReturn == null ) {
throw Clazz.new_(Clazz.load('io.scif.enumeration.EnumException').c$$S,["Unable to find TiffCompresssion with code: " + code]);
}return toReturn;
}, 1);

Clazz.newMeth(C$, 'getCode$', function () {
return this.code;
});

Clazz.newMeth(C$, 'getCodecName$', function () {
return this.codecName;
});

Clazz.newMeth(C$, 'decompress$io_scif_codec_CodecService$BA$io_scif_codec_CodecOptions', function (codecService, input, options) {
if (this.codecClass == null ) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Sorry, " + this.getCodecName$() + " compression mode is not supported" ]);
}var codec=codecService.getCodec$Class(this.codecClass);
return codec.decompress$BA$io_scif_codec_CodecOptions(input, options);
});

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD', function (ifd) {
return this.getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions(ifd, null);
});

Clazz.newMeth(C$, 'getCompressionCodecOptions$io_scif_formats_tiff_IFD$io_scif_codec_CodecOptions', function (ifd, opt) {
if (ifd == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No IFD specified."]);
if (opt == null ) opt=$I$(12).getDefaultOptions$();
var options=Clazz.new_($I$(12,1).c$$io_scif_codec_CodecOptions,[opt]);
options.width=(ifd.getImageWidth$()|0);
options.height=(ifd.getImageLength$()|0);
options.bitsPerSample=ifd.getBitsPerSample$()[0];
options.channels=ifd.getSamplesPerPixel$();
options.littleEndian=ifd.isLittleEndian$();
options.interleaved=true;
options.signed=false;
return options;
});

Clazz.newMeth(C$, 'compress$io_scif_codec_CodecService$BA$io_scif_codec_CodecOptions', function (codecService, input, options) {
if (this.codecClass == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Sorry, " + this.getCodecName$() + " compression mode is not supported" ]);
}var codec=codecService.getCodec$Class(this.codecClass);
return codec.compress$BA$io_scif_codec_CodecOptions(input, options);
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
