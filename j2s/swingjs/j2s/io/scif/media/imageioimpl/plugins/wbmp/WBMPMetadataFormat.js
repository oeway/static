(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.wbmp"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "WBMPMetadataFormat", null, 'javax.imageio.metadata.IIOMetadataFormatImpl');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.instance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['instance','javax.imageio.metadata.IIOMetadataFormat']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I.apply(this,["com_sun_media_imageio_plugins_wbmp_image_1.0", 2]);C$.$init$.apply(this);
this.addElement$S$S$I("ImageDescriptor", "com_sun_media_imageio_plugins_wbmp_image_1.0", 0);
this.addAttribute$S$S$I$Z$S("ImageDescriptor", "WBMPType", 2, true, "0");
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "Width", 2, true, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "Height", 2, true, null, "1", "65535", true, true);
}, 1);

Clazz.newMeth(C$, 'canNodeAppear$S$javax_imageio_ImageTypeSpecifier', function (elementName, imageType) {
return true;
});

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
