(function(){var P$=Clazz.newPackage("io.scif.img.cell.loaders"),I$=[[0,'java.nio.ByteBuffer','java.nio.ByteOrder','io.scif.util.FormatTools','net.imglib2.type.numeric.integer.LongType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LongAccessLoader", null, 'io.scif.img.cell.loaders.AbstractArrayLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['accessFactory','java.util.function.IntFunction']]]

Clazz.newMeth(C$, 'c$$io_scif_Reader$io_scif_img_ImageRegion$java_util_function_IntFunction', function (reader, subRegion, accessFactory) {
;C$.superclazz.c$$io_scif_Reader$io_scif_img_ImageRegion.apply(this,[reader, subRegion]);C$.$init$.apply(this);
this.accessFactory=accessFactory;
}, 1);

Clazz.newMeth(C$, ['convertBytes$net_imglib2_img_basictypeaccess_LongAccess$BA$I','convertBytes$TA$BA$I'], function (data, bytes, planesRead) {
var iMeta=this.reader$().getMetadata$().get$I(0);
if (this.isCompatible$()) {
var offset=planesRead * ((bytes.length/8|0));
var bb=$I$(1).wrap$BA(bytes);
bb.order$java_nio_ByteOrder(iMeta.isLittleEndian$() ? $I$(2).LITTLE_ENDIAN : $I$(2).BIG_ENDIAN);
for (var k=offset; bb.hasRemaining$(); ++k) data.setValue$I$J(k, bb.getLong$());

} else {
var pixelType=iMeta.getPixelType$();
var bpp=$I$(3).getBytesPerPixel$I(pixelType);
var offset=planesRead * ((bytes.length/bpp|0));
for (var index=0; index < (bytes.length/bpp|0); index++) {
var value=(this.utils$().decodeWord$BA$I$I$Z(bytes, index * bpp, pixelType, iMeta.isLittleEndian$())|0);
data.setValue$I$J(offset + index, value);
}
}});

Clazz.newMeth(C$, 'emptyArray$I', function (entities) {
return this.accessFactory.apply$(entities);
});

Clazz.newMeth(C$, 'getBitsPerElement$', function () {
return 64;
});

Clazz.newMeth(C$, 'outputClass$', function () {
return Clazz.getClass($I$(4));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
