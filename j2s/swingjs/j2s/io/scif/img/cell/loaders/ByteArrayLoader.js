(function(){var P$=Clazz.newPackage("io.scif.img.cell.loaders"),I$=[[0,'io.scif.util.FormatTools','net.imglib2.img.basictypeaccess.array.ByteArray','net.imglib2.type.numeric.integer.GenericByteType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteArrayLoader", null, 'io.scif.img.cell.loaders.AbstractArrayLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_Reader$io_scif_img_ImageRegion', function (reader, subRegion) {
;C$.superclazz.c$$io_scif_Reader$io_scif_img_ImageRegion.apply(this,[reader, subRegion]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['convertBytes$net_imglib2_img_basictypeaccess_array_ByteArray$BA$I','convertBytes$TA$BA$I'], function (data, bytes, planesRead) {
if (this.isCompatible$()) {
var offset=planesRead * bytes.length;
System.arraycopy$O$I$O$I$I(bytes, 0, data.getCurrentStorageArray$(), offset, bytes.length);
} else {
var iMeta=this.reader$().getMetadata$().get$I(0);
var pixelType=iMeta.getPixelType$();
var bpp=$I$(1).getBytesPerPixel$I(pixelType);
var offset=planesRead * ((bytes.length/bpp|0));
for (var index=0; index < (bytes.length/bpp|0); index++) {
var value=($b$[0] = (this.utils$().decodeWord$BA$I$I$Z(bytes, index * bpp, pixelType, iMeta.isLittleEndian$())|0), $b$[0]);
data.setValue$I$B(offset + index, ($b$[0] = value, $b$[0]));
}
}});

Clazz.newMeth(C$, 'emptyArray$I', function (entities) {
return Clazz.new_($I$(2,1).c$$I,[entities]);
});

Clazz.newMeth(C$, 'getBitsPerElement$', function () {
return 8;
});

Clazz.newMeth(C$, 'outputClass$', function () {
return Clazz.getClass($I$(3));
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
