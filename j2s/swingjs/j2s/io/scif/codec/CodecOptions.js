(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CodecOptions");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['littleEndian','interleaved','signed','lossless','ycbcr'],'D',['quality'],'I',['width','height','channels','bitsPerSample','tileWidth','tileHeight','tileGridXOffset','tileGridYOffset','maxBytes'],'O',['previousImage','byte[]','colorModel','java.awt.image.ColorModel']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_codec_CodecOptions', function (options) {
;C$.$init$.apply(this);
if (options != null ) {
this.width=options.width;
this.height=options.height;
this.channels=options.channels;
this.bitsPerSample=options.bitsPerSample;
this.littleEndian=options.littleEndian;
this.interleaved=options.interleaved;
this.signed=options.signed;
this.maxBytes=options.maxBytes;
this.previousImage=options.previousImage;
this.lossless=options.lossless;
this.colorModel=options.colorModel;
this.quality=options.quality;
this.tileWidth=options.tileWidth;
this.tileHeight=options.tileHeight;
this.tileGridXOffset=options.tileGridXOffset;
this.tileGridYOffset=options.tileGridYOffset;
this.ycbcr=options.ycbcr;
}}, 1);

Clazz.newMeth(C$, 'getDefaultOptions$', function () {
var options=Clazz.new_(C$);
options.littleEndian=false;
options.interleaved=false;
options.lossless=true;
options.ycbcr=false;
return options;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
