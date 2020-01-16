(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.plugins.tiff.TIFFImageWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFImageWriteParam", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.compressor=null;
this.colorConverter=null;
this.appendedCompressionType=false;
}, 1);

C$.$fields$=[['Z',['appendedCompressionType'],'I',['photometricInterpretation'],'O',['compressor','io.scif.media.imageio.plugins.tiff.TIFFCompressor','colorConverter','io.scif.media.imageio.plugins.tiff.TIFFColorConverter']]]

Clazz.newMeth(C$, 'c$$java_util_Locale', function (locale) {
;C$.superclazz.c$$java_util_Locale.apply(this,[locale]);C$.$init$.apply(this);
this.canWriteCompressed=true;
this.canWriteTiles=true;
this.compressionTypes=$I$(1).TIFFCompressionTypes;
}, 1);

Clazz.newMeth(C$, 'isCompressionLossless$', function () {
if (this.getCompressionMode$() != 2) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Compression mode not MODE_EXPLICIT!"]);
}if (this.compressionType == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No compression type set!"]);
}if (this.compressor != null  && this.compressionType.equals$O(this.compressor.getCompressionType$()) ) {
return this.compressor.isCompressionLossless$();
}for (var i=0; i < this.compressionTypes.length; i++) {
if (this.compressionType.equals$O(this.compressionTypes[i])) {
return $I$(1).isCompressionLossless[i];
}}
return false;
});

Clazz.newMeth(C$, 'setTIFFCompressor$io_scif_media_imageio_plugins_tiff_TIFFCompressor', function (compressor) {
if (this.getCompressionMode$() != 2) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Compression mode not MODE_EXPLICIT!"]);
}this.compressor=compressor;
if (this.appendedCompressionType) {
var len=this.compressionTypes.length - 1;
var types=Clazz.array(String, [len]);
System.arraycopy$O$I$O$I$I(this.compressionTypes, 0, types, 0, len);
this.compressionTypes=types;
this.appendedCompressionType=false;
}if (compressor != null ) {
var compressorType=compressor.getCompressionType$();
var len=this.compressionTypes.length;
var appendCompressionType=true;
for (var i=0; i < len; i++) {
if (compressorType.equals$O(this.compressionTypes[i])) {
appendCompressionType=false;
break;
}}
if (appendCompressionType) {
var types=Clazz.array(String, [len + 1]);
System.arraycopy$O$I$O$I$I(this.compressionTypes, 0, types, 0, len);
types[len]=compressorType;
this.compressionTypes=types;
this.appendedCompressionType=true;
}}});

Clazz.newMeth(C$, 'getTIFFCompressor$', function () {
if (this.getCompressionMode$() != 2) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Compression mode not MODE_EXPLICIT!"]);
}return this.compressor;
});

Clazz.newMeth(C$, 'setColorConverter$io_scif_media_imageio_plugins_tiff_TIFFColorConverter$I', function (colorConverter, photometricInterpretation) {
this.colorConverter=colorConverter;
this.photometricInterpretation=photometricInterpretation;
});

Clazz.newMeth(C$, 'getColorConverter$', function () {
return this.colorConverter;
});

Clazz.newMeth(C$, 'getPhotometricInterpretation$', function () {
if (this.colorConverter == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Color converter not set!"]);
}return this.photometricInterpretation;
});

Clazz.newMeth(C$, 'unsetColorConverter$', function () {
this.colorConverter=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
