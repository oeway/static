(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'java.util.ArrayList','io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','io.scif.media.imageio.plugins.tiff.FaxTIFFTagSet','io.scif.media.imageio.plugins.tiff.EXIFParentTIFFTagSet','io.scif.media.imageio.plugins.tiff.GeoTIFFTagSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFImageReadParam", null, 'javax.imageio.ImageReadParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allowedTagSets=Clazz.new_($I$(1,1).c$$I,[4]);
this.decompressor=null;
this.colorConverter=null;
}, 1);

C$.$fields$=[['O',['allowedTagSets','java.util.List','decompressor','io.scif.media.imageio.plugins.tiff.TIFFDecompressor','colorConverter','io.scif.media.imageio.plugins.tiff.TIFFColorConverter']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.addAllowedTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet($I$(2).getInstance$());
this.addAllowedTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet($I$(3).getInstance$());
this.addAllowedTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet($I$(4).getInstance$());
this.addAllowedTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet($I$(5).getInstance$());
}, 1);

Clazz.newMeth(C$, 'addAllowedTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet', function (tagSet) {
if (tagSet == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tagSet == null!"]);
}this.allowedTagSets.add$TE(tagSet);
});

Clazz.newMeth(C$, 'removeAllowedTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet', function (tagSet) {
if (tagSet == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tagSet == null!"]);
}this.allowedTagSets.remove$O(tagSet);
});

Clazz.newMeth(C$, 'getAllowedTagSets$', function () {
return this.allowedTagSets;
});

Clazz.newMeth(C$, 'setTIFFDecompressor$io_scif_media_imageio_plugins_tiff_TIFFDecompressor', function (decompressor) {
this.decompressor=decompressor;
});

Clazz.newMeth(C$, 'getTIFFDecompressor$', function () {
return this.decompressor;
});

Clazz.newMeth(C$, 'setColorConverter$io_scif_media_imageio_plugins_tiff_TIFFColorConverter', function (colorConverter) {
this.colorConverter=colorConverter;
});

Clazz.newMeth(C$, 'getColorConverter$', function () {
return this.colorConverter;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
