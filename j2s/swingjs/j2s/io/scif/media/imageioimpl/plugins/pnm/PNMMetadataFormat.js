(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pnm"),p$1={},I$=[[0,'java.util.Hashtable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PNMMetadataFormat", null, 'javax.imageio.metadata.IIOMetadataFormatImpl');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.parents=Clazz.new_($I$(1,1));
{
C$.parents.put$TK$TV("FormatName", "com_sun_media_imageio_plugins_pnm_image_1.0");
C$.parents.put$TK$TV("Variant", "com_sun_media_imageio_plugins_pnm_image_1.0");
C$.parents.put$TK$TV("Width", "com_sun_media_imageio_plugins_pnm_image_1.0");
C$.parents.put$TK$TV("Height", "com_sun_media_imageio_plugins_pnm_image_1.0");
C$.parents.put$TK$TV("MaximumSample", "com_sun_media_imageio_plugins_pnm_image_1.0");
C$.parents.put$TK$TV("Comment", "com_sun_media_imageio_plugins_pnm_image_1.0");
};
}

Clazz.newMeth(C$, '$init$', function () {
this.$resourceBaseName=this.getClass$().getName$() + "Resources";
}, 1);

C$.$fields$=[['S',['$resourceBaseName']]
,['O',['parents','java.util.Hashtable','instance','io.scif.media.imageioimpl.plugins.pnm.PNMMetadataFormat']]]

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.instance == null ) C$.instance=Clazz.new_(C$);
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I.apply(this,["com_sun_media_imageio_plugins_pnm_image_1.0", 1]);C$.$init$.apply(this);
this.setResourceBaseName$S(this.$resourceBaseName);
p$1.addElements.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'addElements', function () {
this.addElement$S$S$I("FormatName", this.getParent$S("FormatName"), 0);
this.addElement$S$S$I("Variant", this.getParent$S("Variant"), 0);
this.addElement$S$S$I("Width", this.getParent$S("Width"), 0);
this.addElement$S$S$I("Height", this.getParent$S("Height"), 0);
this.addElement$S$S$I("MaximumSample", this.getParent$S("MaximumSample"), 0);
this.addElement$S$S$I("Comment", this.getParent$S("Comment"), 0);
}, p$1);

Clazz.newMeth(C$, 'getParent$S', function (elementName) {
return C$.parents.get$O(elementName);
});

Clazz.newMeth(C$, 'canNodeAppear$S$javax_imageio_ImageTypeSpecifier', function (elementName, imageType) {
if (this.getParent$S(elementName) != null ) return true;
return false;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
