(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'java.util.Hashtable','io.scif.codec.CodecOptions','io.scif.codec.ByteVector','io.scif.codec.JPEGCodec','org.scijava.util.IntRect',['io.scif.codec.JPEGTileDecoder','.TileCache'],['org.scijava.io.handle.DataHandle','.ByteOrder'],'java.awt.Toolkit',['io.scif.codec.JPEGTileDecoder','.TileConsumer']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JPEGTileDecoder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.AbstractContextual');
C$.$classes$=[['TileConsumer',0],['TileCache',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','consumer','io.scif.codec.JPEGTileDecoder.TileConsumer','tiles','io.scif.codec.JPEGTileDecoder.TileCache','$in','org.scijava.io.handle.DataHandle']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (ctx) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(ctx);
}, 1);

Clazz.newMeth(C$, 'initialize$org_scijava_io_handle_DataHandle$I', function (handle, imageWidth) {
this.initialize$org_scijava_io_handle_DataHandle$I$I(handle, 0, imageWidth);
});

Clazz.newMeth(C$, 'initialize$org_scijava_io_handle_DataHandle$I$I', function (handle, y, h) {
this.$in=handle;
this.tiles=Clazz.new_($I$(6,1).c$$org_scijava_Context$I$I, [this, null, this.getContext$(), y, h]);
try {
var fp=this.$in.offset$();
var littleEndian=this.$in.isLittleEndian$();
this.$in.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(7).BIG_ENDIAN);
while (this.$in.offset$() < this.$in.length$() - 1){
var code=this.$in.readShort$() & 65535;
var length=this.$in.readShort$() & 65535;
var offset=this.$in.offset$();
if (length > 65280 || code < 65280 ) {
this.$in.seek$J(offset - 3);
continue;
}if (code == 65472) {
this.$in.skipBytes$I(1);
var height=this.$in.readShort$() & 65535;
var width=this.$in.readShort$() & 65535;
if (height == 0 || width == 0 ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Width or height > 65500 is not supported."]);
}break;
} else if (offset + length - 2 < this.$in.length$()) {
this.$in.seek$J(offset + length - 2);
} else {
break;
}}
this.$in.seek$J(fp);
this.$in.setLittleEndian$Z(littleEndian);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
try {
var toolkit=$I$(8).getDefaultToolkit$();
var data=Clazz.array(Byte.TYPE, [((this.$in.length$() - this.$in.offset$())|0)]);
this.$in.readFully$BA(data);
var image=toolkit.createImage$BA(data);
var producer=image.getSource$();
this.consumer=Clazz.new_($I$(9,1).c$$java_awt_image_ImageProducer$I$I, [this, null, producer, y, h]);
producer.startProduction$java_awt_image_ImageConsumer(this.consumer);
while (producer.isConsumer$java_awt_image_ImageConsumer(this.consumer)){
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log.error$O("Could not read JPEGTile: " + e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getScanline$I', function (y) {
try {
return this.tiles.get$I$I$I$I(0, y, this.consumer.getWidth$(), 1);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log.debug$O$Throwable("", e);
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.consumer.getWidth$();
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.consumer.getHeight$();
});

Clazz.newMeth(C$, 'close$', function () {
try {
if (this.$in != null ) {
this.$in.close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log.debug$O$Throwable("", e);
} else {
throw e;
}
}
this.tiles=null;
this.consumer=null;
});
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGTileDecoder, "TileConsumer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.image.ImageConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.yy=0;
this.hh=0;
}, 1);

C$.$fields$=[['I',['width','height','yy','hh'],'O',['producer','java.awt.image.ImageProducer']]]

Clazz.newMeth(C$, 'c$$java_awt_image_ImageProducer', function (producer) {
;C$.$init$.apply(this);
this.producer=producer;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ImageProducer$I$I', function (producer, y, h) {
C$.c$$java_awt_image_ImageProducer.apply(this, [producer]);
this.yy=y;
this.hh=h;
}, 1);

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'imageComplete$I', function (status) {
this.producer.removeConsumer$java_awt_image_ImageConsumer(this);
});

Clazz.newMeth(C$, 'setDimensions$I$I', function (width, height) {
this.width=width;
this.height=height;
if (this.hh <= 0) this.hh=height;
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I', function (x, y, w, h, model, pixels, off, scanSize) {
var percent=(y / this.height) * 100.0;
this.this$0.log.debug$O("Storing row " + y + " of " + this.height + " (" + new Double(percent).toString() + "%)" );
if (y >= (this.yy + this.hh)) {
this.imageComplete$I(0);
return;
} else if (y < this.yy) return;
try {
this.this$0.tiles.add$BA$I$I$I(pixels, x, y, w);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.this$0.log.debug$O$Throwable("", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I', function (x, y, w, h, model, pixels, off, scanSize) {
var percent=(y / (this.yy + this.hh)) * 100.0;
this.this$0.log.debug$O("Storing row " + y + " of " + (this.yy + this.hh) + " (" + new Double(percent).toString() + "%)" );
if (y >= (this.yy + this.hh)) {
this.imageComplete$I(0);
return;
} else if (y < this.yy) return;
try {
this.this$0.tiles.add$IA$I$I$I(pixels, x, y, w);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.this$0.log.debug$O$Throwable("", e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setProperties$java_util_Hashtable', function (props) {
});

Clazz.newMeth(C$, 'setColorModel$java_awt_image_ColorModel', function (model) {
});

Clazz.newMeth(C$, 'setHints$I', function (hintFlags) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGTileDecoder, "TileCache", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.compressedTiles=Clazz.new_(1,{K:"org.scijava.util.IntRect",V:"byte[]"},$I$(1,1));
this.options=Clazz.new_($I$(2,1));
this.toCompress=Clazz.new_($I$(3,1));
this.row=0;
this.lastRegion=null;
this.lastTile=null;
this.yy=0;
this.hh=0;
}, 1);

C$.$fields$=[['I',['row','yy','hh'],'O',['compressedTiles','java.util.Hashtable','codec','io.scif.codec.JPEGCodec','options','io.scif.codec.CodecOptions','toCompress','io.scif.codec.ByteVector','codecService','io.scif.codec.CodecService','lastRegion','org.scijava.util.IntRect','lastTile','byte[]']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$I$I', function (ctx, yy, hh) {
;C$.$init$.apply(this);
ctx.inject$O(this);
this.options.interleaved=true;
this.options.littleEndian=false;
this.yy=yy;
this.hh=hh;
this.codec=this.codecService.getCodec$Class(Clazz.getClass($I$(4)));
}, 1);

Clazz.newMeth(C$, 'add$BA$I$I$I', function (pixels, x, y, w) {
this.toCompress.add$BA(pixels);
this.row++;
if ((y % 128) == 127 || y == this.this$0.getHeight$.apply(this.this$0, []) - 1  || y == this.yy + this.hh - 1 ) {
var r=Clazz.new_($I$(5,1).c$$I$I$I$I,[x, y - this.row + 1, w, this.row]);
this.options.width=w;
this.options.height=this.row;
this.options.channels=1;
this.options.bitsPerSample=8;
this.options.signed=false;
var compressed=this.codec.compress$BA$io_scif_codec_CodecOptions(this.toCompress.toByteArray$(), this.options);
this.compressedTiles.put$TK$TV(r, compressed);
this.toCompress.clear$();
}});

Clazz.newMeth(C$, 'add$IA$I$I$I', function (pixels, x, y, w) {
var buf=Clazz.array(Byte.TYPE, [pixels.length * 3]);
for (var i=0; i < pixels.length; i++) {
buf[i * 3]=((((pixels[i] & 16711680) >> 16)|0)|0);
buf[i * 3 + 1]=((((pixels[i] & 65280) >> 8)|0)|0);
buf[i * 3 + 2]=(((pixels[i] & 255)|0)|0);
}
this.toCompress.add$BA(buf);
this.row++;
if ((y % 128) == 127 || y == this.this$0.getHeight$.apply(this.this$0, []) - 1  || y == this.yy + this.hh - 1 ) {
var r=Clazz.new_($I$(5,1).c$$I$I$I$I,[x, y - this.row + 1, w, this.row]);
this.options.width=w;
this.options.height=this.row;
this.options.channels=3;
this.options.bitsPerSample=8;
this.options.signed=false;
var compressed=this.codec.compress$BA$io_scif_codec_CodecOptions(this.toCompress.toByteArray$(), this.options);
this.compressedTiles.put$TK$TV(r, compressed);
this.toCompress.clear$();
this.row=0;
}});

Clazz.newMeth(C$, 'get$I$I$I$I', function (x, y, w, h) {
var keys=this.compressedTiles.keySet$().toArray$TTA(Clazz.array($I$(5), [0]));
var r=Clazz.new_($I$(5,1).c$$I$I$I$I,[x, y, w, h]);
for (var key, $key = 0, $$key = keys; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
if (key.intersects$org_scijava_util_IntRect(r)) {
r=key;
}}
if (!r.equals$O(this.lastRegion)) {
this.lastRegion=r;
var compressed=null;
compressed=this.compressedTiles.get$O(r);
if (compressed == null ) return null;
this.lastTile=this.codec.decompress$BA$io_scif_codec_CodecOptions(compressed, this.options);
}var pixel=this.options.channels * ((this.options.bitsPerSample/8|0));
var buf=Clazz.array(Byte.TYPE, [w * h * pixel ]);
for (var i=0; i < h; i++) {
System.arraycopy$O$I$O$I$I(this.lastTile, r.width * pixel * (i + y - r.y)  + (x - r.x), buf, i * w * pixel , pixel * w);
}
return buf;
});
C$.$getAnn$ = function(){ return [
[['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
