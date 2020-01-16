(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'io.scif.media.imageio.plugins.tiff.TIFFField','java.util.TreeMap','java.util.ArrayList','io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata','io.scif.media.imageioimpl.plugins.tiff.TIFFIFD','java.util.Arrays','io.scif.media.imageio.plugins.tiff.TIFFTagSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFDirectory", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lowFields=Clazz.array($I$(1), [533]);
this.numLowFields=0;
this.highFields=Clazz.new_($I$(2,1));
}, 1);

C$.$fields$=[['I',['numLowFields'],'O',['tagSets','java.util.List','parentTag','io.scif.media.imageio.plugins.tiff.TIFFTag','lowFields','io.scif.media.imageio.plugins.tiff.TIFFField[]','highFields','java.util.Map']]]

Clazz.newMeth(C$, 'createFromMetadata$javax_imageio_metadata_IIOMetadata', function (tiffImageMetadata) {
if (tiffImageMetadata == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tiffImageMetadata == null"]);
}var tim;
if (Clazz.instanceOf(tiffImageMetadata, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata")) {
tim=tiffImageMetadata;
} else {
var l=Clazz.new_($I$(3,1).c$$I,[1]);
l.add$TE($I$(4).getInstance$());
tim=Clazz.new_($I$(5,1).c$$java_util_List,[l]);
var formatName=null;
if ("com_sun_media_imageio_plugins_tiff_image_1.0".equals$O(tiffImageMetadata.getNativeMetadataFormatName$())) {
formatName="com_sun_media_imageio_plugins_tiff_image_1.0";
} else {
var extraNames=tiffImageMetadata.getExtraMetadataFormatNames$();
if (extraNames != null ) {
for (var i=0; i < extraNames.length; i++) {
if ("com_sun_media_imageio_plugins_tiff_image_1.0".equals$O(extraNames[i])) {
formatName=extraNames[i];
break;
}}
}if (formatName == null ) {
if (tiffImageMetadata.isStandardMetadataFormatSupported$()) {
formatName="javax_imageio_1.0";
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Parameter does not support required metadata format!"]);
}}}tim.setFromTree$S$org_w3c_dom_Node(formatName, tiffImageMetadata.getAsTree$S(formatName));
}return tim.getRootIFD$();
}, 1);

Clazz.newMeth(C$, 'getDirectoryAsIFD$io_scif_media_imageio_plugins_tiff_TIFFDirectory', function (dir) {
if (Clazz.instanceOf(dir, "io.scif.media.imageioimpl.plugins.tiff.TIFFIFD")) {
return dir;
}var ifd=Clazz.new_($I$(6,1).c$$java_util_List$io_scif_media_imageio_plugins_tiff_TIFFTag,[$I$(7).asList$TTA(dir.getTagSets$()), dir.getParentTag$()]);
var fields=dir.getTIFFFields$();
var numFields=fields.length;
for (var i=0; i < numFields; i++) {
var f=fields[i];
var tag=f.getTag$();
if (tag.isIFDPointer$()) {
var subIFD=C$.getDirectoryAsIFD$io_scif_media_imageio_plugins_tiff_TIFFDirectory(f.getData$());
f=Clazz.new_($I$(1,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[tag, f.getType$(), f.getCount$(), subIFD]);
}ifd.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}
return ifd;
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_media_imageio_plugins_tiff_TIFFTagSetA$io_scif_media_imageio_plugins_tiff_TIFFTag', function (tagSets, parentTag) {
;C$.$init$.apply(this);
if (tagSets == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tagSets == null!"]);
}this.tagSets=Clazz.new_($I$(3,1).c$$I,[tagSets.length]);
var numTagSets=tagSets.length;
for (var i=0; i < numTagSets; i++) {
this.tagSets.add$TE(tagSets[i]);
}
this.parentTag=parentTag;
}, 1);

Clazz.newMeth(C$, 'getTagSets$', function () {
return this.tagSets.toArray$TTA(Clazz.array($I$(8), [this.tagSets.size$()]));
});

Clazz.newMeth(C$, 'addTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet', function (tagSet) {
if (tagSet == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tagSet == null"]);
}if (!this.tagSets.contains$O(tagSet)) {
this.tagSets.add$TE(tagSet);
}});

Clazz.newMeth(C$, 'removeTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet', function (tagSet) {
if (tagSet == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tagSet == null"]);
}if (this.tagSets.contains$O(tagSet)) {
this.tagSets.remove$O(tagSet);
}});

Clazz.newMeth(C$, 'getParentTag$', function () {
return this.parentTag;
});

Clazz.newMeth(C$, 'getTag$I', function (tagNumber) {
return $I$(6).getTag$I$java_util_List(tagNumber, this.tagSets);
});

Clazz.newMeth(C$, 'getNumTIFFFields$', function () {
return this.numLowFields + this.highFields.size$();
});

Clazz.newMeth(C$, 'containsTIFFField$I', function (tagNumber) {
return (tagNumber >= 0 && tagNumber <= 532  && this.lowFields[tagNumber] != null  ) || this.highFields.containsKey$O( new Integer(tagNumber)) ;
});

Clazz.newMeth(C$, 'addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField', function (f) {
if (f == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["f == null"]);
}var tagNumber=f.getTagNumber$();
if (tagNumber >= 0 && tagNumber <= 532 ) {
if (this.lowFields[tagNumber] == null ) {
this.numLowFields++;
}this.lowFields[tagNumber]=f;
} else {
this.highFields.put$TK$TV( new Integer(tagNumber), f);
}});

Clazz.newMeth(C$, 'getTIFFField$I', function (tagNumber) {
var f;
if (tagNumber >= 0 && tagNumber <= 532 ) {
f=this.lowFields[tagNumber];
} else {
f=this.highFields.get$O( new Integer(tagNumber));
}return f;
});

Clazz.newMeth(C$, 'removeTIFFField$I', function (tagNumber) {
if (tagNumber >= 0 && tagNumber <= 532 ) {
if (this.lowFields[tagNumber] != null ) {
this.numLowFields--;
this.lowFields[tagNumber]=null;
}} else {
this.highFields.remove$O( new Integer(tagNumber));
}});

Clazz.newMeth(C$, 'getTIFFFields$', function () {
var fields=Clazz.array($I$(1), [this.numLowFields + this.highFields.size$()]);
var nextIndex=0;
for (var i=0; i <= 532; i++) {
if (this.lowFields[i] != null ) {
fields[nextIndex++]=this.lowFields[i];
if (nextIndex == this.numLowFields) break;
}}
if (!this.highFields.isEmpty$()) {
var keys=this.highFields.keySet$().iterator$();
while (keys.hasNext$()){
fields[nextIndex++]=this.highFields.get$O(keys.next$());
}
}return fields;
});

Clazz.newMeth(C$, 'removeTIFFFields$', function () {
$I$(7).fill$OA$O(this.lowFields, null);
this.numLowFields=0;
this.highFields.clear$();
});

Clazz.newMeth(C$, 'getAsMetadata$', function () {
return Clazz.new_($I$(5,1).c$$io_scif_media_imageioimpl_plugins_tiff_TIFFIFD,[C$.getDirectoryAsIFD$io_scif_media_imageio_plugins_tiff_TIFFDirectory(this)]);
});

Clazz.newMeth(C$, 'clone$', function () {
var dir=Clazz.new_(C$.c$$io_scif_media_imageio_plugins_tiff_TIFFTagSetA$io_scif_media_imageio_plugins_tiff_TIFFTag,[this.getTagSets$(), this.getParentTag$()]);
var fields=this.getTIFFFields$();
var numFields=fields.length;
for (var i=0; i < numFields; i++) {
dir.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(fields[i]);
}
return dir;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
