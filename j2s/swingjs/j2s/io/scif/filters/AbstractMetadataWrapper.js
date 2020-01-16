(function(){var P$=Clazz.newPackage("io.scif.filters");
/*c*/var C$=Clazz.newClass(P$, "AbstractMetadataWrapper", null, 'io.scif.AbstractMetadata', 'io.scif.filters.MetadataWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['meta','io.scif.Metadata']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$io_scif_Metadata.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_Metadata', function (metadata) {
Clazz.super_(C$, this);
this.meta=metadata;
}, 1);

Clazz.newMeth(C$, 'unwrap$', function () {
return this.meta;
});

Clazz.newMeth(C$, 'wrap$io_scif_Metadata', function (meta) {
this.meta=meta;
this.setSourceLocation$org_scijava_io_location_Location(meta.getSourceLocation$());
this.setSource$org_scijava_io_handle_DataHandle(meta.getSource$());
this.populateImageMetadata$();
});

Clazz.newMeth(C$, 'getTable$', function () {
return this.meta.getTable$();
});

Clazz.newMeth(C$, 'setTable$io_scif_MetaTable$Z', function (table, passUp) {
C$.superclazz.prototype.setTable$io_scif_MetaTable.apply(this, [table]);
if (passUp) this.meta.setTable$io_scif_MetaTable(table);
});

Clazz.newMeth(C$, 'add$io_scif_ImageMetadata$Z', function (meta, passUp) {
C$.superclazz.prototype.add$io_scif_ImageMetadata.apply(this, [meta]);
if (passUp) this.meta.add$io_scif_ImageMetadata(meta);
});

Clazz.newMeth(C$, 'add$io_scif_ImageMetadata', function (meta) {
this.add$io_scif_ImageMetadata$Z(meta, true);
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_handle_DataHandle', function (source) {
if (source != null ) {
this.meta.setSourceLocation$org_scijava_io_location_Location(source.get$());
}C$.superclazz.prototype.setSource$org_scijava_io_handle_DataHandle.apply(this, [source]);
this.meta.setSource$org_scijava_io_handle_DataHandle(source);
});

Clazz.newMeth(C$, 'setSourceLocation$org_scijava_io_location_Location', function (loc) {
C$.superclazz.prototype.setSourceLocation$org_scijava_io_location_Location.apply(this, [loc]);
this.meta.setSourceLocation$org_scijava_io_location_Location(loc);
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
this.meta.populateImageMetadata$();
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.meta.getFormat$();
});

Clazz.newMeth(C$, 'getFormatName$', function () {
return this.meta.getFormatName$();
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
this.meta.close$Z(fileOnly);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
