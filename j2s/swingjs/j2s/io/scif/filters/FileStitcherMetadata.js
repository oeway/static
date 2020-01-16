(function(){var P$=Clazz.newPackage("io.scif.filters"),I$=[[0,'io.scif.filters.FileStitcher']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileStitcherMetadata", null, 'io.scif.filters.AbstractMetadataWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imgMeta','io.scif.ImageMetadata']]]

Clazz.newMeth(C$, 'filterType$', function () {
return Clazz.getClass($I$(1));
});

Clazz.newMeth(C$, 'getImageCount$', function () {
return 1;
});

Clazz.newMeth(C$, 'get$I', function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Filestitcher merges the files to one large Image!"]);
}return this.imgMeta;
});

Clazz.newMeth(C$, 'setImgMeta$io_scif_ImageMetadata', function (imgMeta) {
this.imgMeta=imgMeta;
});

Clazz.newMeth(C$, 'getDatasetSize$', function () {
return this.imgMeta.getSize$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
