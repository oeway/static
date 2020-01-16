(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),p$1={},I$=[[0,'java.util.Hashtable','io.scif.media.imageioimpl.plugins.jpeg2000.Box']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KMetadataFormat", null, 'javax.imageio.metadata.IIOMetadataFormatImpl');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.parents=Clazz.new_($I$(1,1));
{
C$.parents.put$TK$TV("JPEG2000SignatureBox", "com_sun_media_imageio_plugins_jpeg2000_image_1.0");
C$.parents.put$TK$TV("JPEG2000FileTypeBox", "com_sun_media_imageio_plugins_jpeg2000_image_1.0");
C$.parents.put$TK$TV("OtherBoxes", "com_sun_media_imageio_plugins_jpeg2000_image_1.0");
C$.parents.put$TK$TV("JPEG2000HeaderSuperBox", "OtherBoxes");
C$.parents.put$TK$TV("JPEG2000CodeStreamBox", "OtherBoxes");
C$.parents.put$TK$TV("JPEG2000IntellectualPropertyRightsBox", "OtherBoxes");
C$.parents.put$TK$TV("JPEG2000XMLBox", "OtherBoxes");
C$.parents.put$TK$TV("JPEG2000UUIDBox", "OtherBoxes");
C$.parents.put$TK$TV("JPEG2000UUIDInfoBox", "OtherBoxes");
C$.parents.put$TK$TV("JPEG2000HeaderBox", "JPEG2000HeaderSuperBox");
C$.parents.put$TK$TV("OptionalBoxes", "JPEG2000HeaderSuperBox");
C$.parents.put$TK$TV("JPEG2000BitsPerComponentBox", "OptionalBoxes");
C$.parents.put$TK$TV("JPEG2000ColorSpecificationBox", "OptionalBoxes");
C$.parents.put$TK$TV("JPEG2000PaletteBox", "OptionalBoxes");
C$.parents.put$TK$TV("JPEG2000ComponentMappingBox", "OptionalBoxes");
C$.parents.put$TK$TV("JPEG2000ChannelDefinitionBox", "OptionalBoxes");
C$.parents.put$TK$TV("JPEG2000ResolutionBox", "OptionalBoxes");
C$.parents.put$TK$TV("JPEG2000CaptureResolutionBox", "JPEG2000ResolutionBox");
C$.parents.put$TK$TV("JPEG2000DefaultDisplayResolutionBox", "JPEG2000ResolutionBox");
C$.parents.put$TK$TV("JPEG2000UUIDListBox", "JPEG2000UUIDInfoBox");
C$.parents.put$TK$TV("JPEG2000DataEntryURLBox", "JPEG2000UUIDInfoBox");
};
}

Clazz.newMeth(C$, '$init$', function () {
this.$resourceBaseName=this.getClass$().getName$() + "Resources";
}, 1);

C$.$fields$=[['S',['$resourceBaseName']]
,['O',['parents','java.util.Hashtable','instance','io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadataFormat']]]

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.instance == null ) C$.instance=Clazz.new_(C$);
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I.apply(this,["com_sun_media_imageio_plugins_jpeg2000_image_1.0", 1]);C$.$init$.apply(this);
this.setResourceBaseName$S(this.$resourceBaseName);
p$1.addElements.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'addElements', function () {
this.addElement$S$S$I("JPEG2000SignatureBox", this.getParent$S("JPEG2000SignatureBox"), 0);
this.addElement$S$S$I("JPEG2000FileTypeBox", this.getParent$S("JPEG2000FileTypeBox"), 1);
this.addElement$S$S$I("OtherBoxes", this.getParent$S("OtherBoxes"), 3);
this.addElement$S$S$I("JPEG2000HeaderSuperBox", this.getParent$S("JPEG2000HeaderSuperBox"), 3);
this.addElement$S$S$I("JPEG2000CodeStreamBox", this.getParent$S("JPEG2000CodeStreamBox"), 0);
this.addElement$S$S$I("JPEG2000IntellectualPropertyRightsBox", this.getParent$S("JPEG2000IntellectualPropertyRightsBox"), 1);
this.addElement$S$S$I("JPEG2000XMLBox", this.getParent$S("JPEG2000XMLBox"), 1);
this.addElement$S$S$I("JPEG2000UUIDBox", this.getParent$S("JPEG2000UUIDBox"), 1);
this.addElement$S$S$I("JPEG2000UUIDInfoBox", this.getParent$S("JPEG2000UUIDInfoBox"), 1);
this.addElement$S$S$I("JPEG2000HeaderBox", "JPEG2000HeaderSuperBox", 1);
this.addElement$S$S$I("OptionalBoxes", "JPEG2000HeaderSuperBox", 3);
this.addElement$S$S$I("JPEG2000BitsPerComponentBox", "OptionalBoxes", 1);
this.addElement$S$S$I("JPEG2000ColorSpecificationBox", "OptionalBoxes", 1);
this.addElement$S$S$I("JPEG2000PaletteBox", "OptionalBoxes", 1);
this.addElement$S$S$I("JPEG2000ComponentMappingBox", "OptionalBoxes", 1);
this.addElement$S$S$I("JPEG2000ChannelDefinitionBox", "OptionalBoxes", 1);
this.addElement$S$S$I("JPEG2000ResolutionBox", "OptionalBoxes", 1);
this.addElement$S$S$I("JPEG2000CaptureResolutionBox", "JPEG2000ResolutionBox", 1);
this.addElement$S$S$I("JPEG2000DefaultDisplayResolutionBox", "JPEG2000ResolutionBox", 1);
this.addElement$S$S$I("JPEG2000UUIDListBox", "JPEG2000UUIDInfoBox", 1);
this.addElement$S$S$I("JPEG2000DataEntryURLBox", "JPEG2000UUIDInfoBox", 1);
var keys=C$.parents.keys$();
while (keys.hasMoreElements$()){
var s=keys.nextElement$();
if (s.startsWith$S("JPEG2000")) {
this.addAttribute$S$S$I$Z$S(s, "Length", 2, true, null);
this.addAttribute$S$S$I$Z$S(s, "Type", 0, true, $I$(2).getTypeByName$S(s));
this.addAttribute$S$S$I$Z$S(s, "ExtraLength", 0, false, null);
var c=$I$(2).getBoxClass$I($I$(2).getTypeInt$S($I$(2).getTypeByName$S(s)));
try {
var m=c.getMethod$S$ClassA("getElementNames", null);
var elementNames=m.invoke$O$OA(null, null);
for (var i=0; i < elementNames.length; i++) this.addElement$S$S$I(elementNames[i], s, 0);

} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}
this.addAttribute$S$S$I$Z$S("JPEG2000SignatureBox", "Signature", 0, true, "0D0A870A");
this.addElement$S$S$I("BitDepth", "JPEG2000BitsPerComponentBox", 0);
this.addElement$S$S$I("NumberEntries", "JPEG2000PaletteBox", 0);
this.addElement$S$S$I("NumberColors", "JPEG2000PaletteBox", 0);
this.addElement$S$S$I("BitDepth", "JPEG2000PaletteBox", 0);
this.addElement$S$S$I$I("LUT", "JPEG2000PaletteBox", 1, 1024);
this.addElement$S$S$I("LUTRow", "LUT", 0);
this.addElement$S$S$I("Component", "JPEG2000ComponentMappingBox", 0);
this.addElement$S$S$I("ComponentType", "JPEG2000ComponentMappingBox", 0);
this.addElement$S$S$I("ComponentAssociation", "JPEG2000ComponentMappingBox", 0);
this.addElement$S$S$I("NumberOfDefinition", "JPEG2000ChannelDefinitionBox", 0);
this.addElement$S$S$I$I("Definitions", "JPEG2000ChannelDefinitionBox", 0, 9);
this.addElement$S$S$I("ChannelNumber", "Definitions", 0);
this.addElement$S$S$I("ChannelType", "Definitions", 0);
this.addElement$S$S$I("ChannelAssociation", "Definitions", 0);
this.addElement$S$S$I("CodeStream", "JPEG2000CodeStreamBox", 0);
this.addElement$S$S$I("Content", "JPEG2000IntellectualPropertyRightsBox", 0);
this.addElement$S$S$I("Content", "JPEG2000XMLBox", 0);
this.addElement$S$S$I("UUID", "JPEG2000UUIDBox", 0);
this.addElement$S$S$I("Data", "JPEG2000UUIDBox", 0);
this.addElement$S$S$I("NumberUUID", "JPEG2000UUIDListBox", 0);
this.addElement$S$S$I("UUID", "JPEG2000UUIDListBox", 0);
this.addElement$S$S$I("Version", "JPEG2000DataEntryURLBox", 0);
this.addElement$S$S$I("Flags", "JPEG2000DataEntryURLBox", 0);
this.addElement$S$S$I("URL", "JPEG2000DataEntryURLBox", 0);
}, p$1);

Clazz.newMeth(C$, 'getParent$S', function (elementName) {
return C$.parents.get$O(elementName);
});

Clazz.newMeth(C$, 'canNodeAppear$S$javax_imageio_ImageTypeSpecifier', function (elementName, imageType) {
var cm=imageType.getColorModel$();
if (!(Clazz.instanceOf(cm, "java.awt.image.IndexColorModel"))) if ("JPEG2000PaletteBox".equals$O(elementName)) return false;
if (!cm.hasAlpha$()) if ("JPEG2000ChannelDefinitionBox".equals$O(elementName)) return false;
if (this.getParent$S(elementName) != null ) return true;
return false;
});

Clazz.newMeth(C$, 'isLeaf$S', function (name) {
var keys=C$.parents.keySet$();
var iterator=keys.iterator$();
while (iterator.hasNext$()){
if (name.equals$O(C$.parents.get$O(iterator.next$()))) return false;
}
return true;
});

Clazz.newMeth(C$, 'singleInstance$S', function (name) {
return !(name.equals$O("JPEG2000IntellectualPropertyRightsBox") || name.equals$O("JPEG2000XMLBox") || name.equals$O("JPEG2000UUIDBox") || name.equals$O("JPEG2000UUIDInfoBox") || name.equals$O("JPEG2000UUIDListBox") || name.equals$O("JPEG2000DataEntryURLBox")  );
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
