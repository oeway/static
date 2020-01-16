(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'javax.imageio.ImageIO','java.io.ByteArrayInputStream','javax.imageio.stream.MemoryCacheImageInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFJPEGDecompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFDecompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.JPEGReader=null;
this.hasJPEGTables=false;
this.tables=null;
this.data=Clazz.array(Byte.TYPE, [0]);
}, 1);

C$.$fields$=[['Z',['hasJPEGTables'],'O',['JPEGReader','javax.imageio.ImageReader','JPEGParam','javax.imageio.ImageReadParam','tables','byte[]','+data']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'beginDecoding$', function () {
if (this.JPEGReader == null ) {
if (false) System.out.println$S("Initializing JPEGReader");
var iter=$I$(1).getImageReadersByFormatName$S("jpeg");
if (!iter.hasNext$()) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No JPEG readers found!"]);
}this.JPEGReader=iter.next$();
if (false) System.out.println$S("Using " + this.JPEGReader.getClass$().getName$());
this.JPEGParam=this.JPEGReader.getDefaultReadParam$();
}var tmetadata=this.metadata;
var f=tmetadata.getTIFFField$I(347);
if (f != null ) {
this.hasJPEGTables=true;
this.tables=f.getAsBytes$();
} else {
this.hasJPEGTables=false;
}});

Clazz.newMeth(C$, 'decodeRaw$BA$I$I$I', function (b, dstOffset, bitsPerPixel, scanlineStride) {
this.stream.seek$J(this.offset);
var is;
if (this.hasJPEGTables) {
if (false) System.out.println$S("Reading abbreviated stream.");
var dataLength=this.tables.length + this.byteCount;
if (this.data.length < dataLength) {
this.data=Clazz.array(Byte.TYPE, [dataLength]);
}var dataOffset=this.tables.length;
for (var i=this.tables.length - 2; i > 0; i--) {
if ((this.tables[i] & 255) == 255 && (this.tables[i + 1] & 255) == 217 ) {
dataOffset=i;
break;
}}
System.arraycopy$O$I$O$I$I(this.tables, 0, this.data, 0, dataOffset);
var byte1=($b$[0] = (this.stream.read$()|0), $b$[0]);
var byte2=($b$[0] = (this.stream.read$()|0), $b$[0]);
if (!((byte1 & 255) == 255 && (byte2 & 255) == 216 )) {
this.data[dataOffset++]=(byte1|0);
this.data[dataOffset++]=(byte2|0);
}this.stream.readFully$BA$I$I(this.data, dataOffset, this.byteCount - 2);
var bais=Clazz.new_($I$(2,1).c$$BA,[this.data]);
is=Clazz.new_($I$(3,1).c$$java_io_InputStream,[bais]);
} else {
if (false) System.out.println$S("Reading complete stream.");
is=this.stream;
}this.JPEGReader.setInput$O$Z$Z(is, false, true);
this.JPEGParam.setDestination$java_awt_image_BufferedImage(this.rawImage);
this.JPEGReader.read$I$javax_imageio_ImageReadParam(0, this.JPEGParam);
});

Clazz.newMeth(C$, 'finalize$', function () {
C$.superclazz.prototype.finalize$.apply(this, []);
this.JPEGReader.dispose$();
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
