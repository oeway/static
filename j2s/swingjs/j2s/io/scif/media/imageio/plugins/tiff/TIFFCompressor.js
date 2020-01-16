(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.plugins.tiff.TIFFImageWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFCompressor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isCompressionLossless'],'I',['compressionTagValue'],'S',['compressionType'],'O',['writer','javax.imageio.ImageWriter','metadata','javax.imageio.metadata.IIOMetadata','stream','javax.imageio.stream.ImageOutputStream']]]

Clazz.newMeth(C$, 'c$$S$I$Z', function (compressionType, compressionTagValue, isCompressionLossless) {
;C$.$init$.apply(this);
if (compressionType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["compressionType == null"]);
} else if (compressionTagValue < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["compressionTagValue < 1"]);
}this.compressionType=compressionType;
var compressionIndex=-1;
var compressionTypes=$I$(1).compressionTypes;
var len=compressionTypes.length;
for (var i=0; i < len; i++) {
if (compressionTypes[i].equals$O(compressionType)) {
compressionIndex=i;
break;
}}
if (compressionIndex != -1) {
this.compressionTagValue=$I$(1).compressionNumbers[compressionIndex];
this.isCompressionLossless=$I$(1).isCompressionLossless[compressionIndex];
} else {
this.compressionTagValue=compressionTagValue;
this.isCompressionLossless=isCompressionLossless;
}}, 1);

Clazz.newMeth(C$, 'getCompressionType$', function () {
return this.compressionType;
});

Clazz.newMeth(C$, 'getCompressionTagValue$', function () {
return this.compressionTagValue;
});

Clazz.newMeth(C$, 'isCompressionLossless$', function () {
return this.isCompressionLossless;
});

Clazz.newMeth(C$, 'setStream$javax_imageio_stream_ImageOutputStream', function (stream) {
this.stream=stream;
});

Clazz.newMeth(C$, 'getStream$', function () {
return this.stream;
});

Clazz.newMeth(C$, 'setWriter$javax_imageio_ImageWriter', function (writer) {
this.writer=writer;
});

Clazz.newMeth(C$, 'getWriter$', function () {
return this.writer;
});

Clazz.newMeth(C$, 'setMetadata$javax_imageio_metadata_IIOMetadata', function (metadata) {
this.metadata=metadata;
});

Clazz.newMeth(C$, 'getMetadata$', function () {
return this.metadata;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
