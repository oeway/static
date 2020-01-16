(function(){var P$=Clazz.newPackage("io.scif.img.cell.loaders"),I$=[[0,'java.nio.ByteBuffer','java.nio.ByteOrder','io.scif.util.FormatTools','net.imglib2.img.basictypeaccess.array.ShortArray','net.imglib2.type.numeric.integer.GenericShortType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ShortArrayLoader", null, 'io.scif.img.cell.loaders.AbstractArrayLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_Reader$io_scif_img_ImageRegion', function (reader, subRegion) {
;C$.superclazz.c$$io_scif_Reader$io_scif_img_ImageRegion.apply(this,[reader, subRegion]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['convertBytes$net_imglib2_img_basictypeaccess_array_ShortArray$BA$I','convertBytes$TA$BA$I'], function (data, bytes, planesRead) {
var iMeta=this.reader$().getMetadata$().get$I(0);
if (this.isCompatible$()) {
var bpp=(this.getBitsPerElement$()/8|0);
var offset=planesRead * ((bytes.length/bpp|0));
var bb=$I$(1).wrap$BA(bytes);
bb.order$java_nio_ByteOrder(iMeta.isLittleEndian$() ? $I$(2).LITTLE_ENDIAN : $I$(2).BIG_ENDIAN);
bb.asShortBuffer$().get$HA$I$I(data.getCurrentStorageArray$(), offset, (bytes.length/bpp|0));
} else {
var pixelType=iMeta.getPixelType$();
var bpp=$I$(3).getBytesPerPixel$I(pixelType);
var offset=planesRead * ((bytes.length/bpp|0));
for (var index=0; index < (bytes.length/bpp|0); index++) {
var value=($s$[0] = this.utils$().decodeWord$BA$I$I$Z(bytes, index * bpp, pixelType, iMeta.isLittleEndian$()), $s$[0]);
data.setValue$I$H(offset + index, value);
}
}});

Clazz.newMeth(C$, 'emptyArray$I', function (entities) {
return Clazz.new_($I$(4,1).c$$I,[entities]);
});

Clazz.newMeth(C$, 'getBitsPerElement$', function () {
return 16;
});

Clazz.newMeth(C$, 'outputClass$', function () {
return Clazz.getClass($I$(5));
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
