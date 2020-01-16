(function(){var P$=Clazz.newPackage("io.scif"),p$1={},I$=[[0,'io.scif.DefaultMetaTable','java.util.ArrayList','io.scif.DefaultImageMetadata','java.lang.reflect.Modifier','io.scif.Field']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractMetadata", null, 'io.scif.AbstractHasSource', 'io.scif.TypedMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.datasetName=null;
}, 1);

C$.$fields$=[['Z',['filtered'],'S',['datasetName'],'O',['source','org.scijava.io.handle.DataHandle','sourceLocation','org.scijava.io.location.Location','+destinationLocation','imageMeta','java.util.List','table','io.scif.MetaTable']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_List.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_Metadata', function (copy) {
C$.c$$java_util_List.apply(this, [copy.getAll$()]);
this.table=Clazz.new_($I$(1,1).c$$java_util_Map,[copy.getTable$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (list) {
Clazz.super_(C$, this);
this.imageMeta=Clazz.new_(1,{E:"io.scif.ImageMetadata"},$I$(2,1));
this.table=Clazz.new_($I$(1,1));
if (list != null ) {
for (var core, $core = list.iterator$(); $core.hasNext$()&&((core=($core.next$())),1);) {
this.imageMeta.add$TE(core.copy$());
}
}}, 1);

Clazz.newMeth(C$, 'setSource$org_scijava_io_handle_DataHandle', function (source) {
this.source=source;
if (source != null ) this.setDatasetName$S(source.get$().getName$());
});

Clazz.newMeth(C$, 'setSourceLocation$org_scijava_io_location_Location', function (loc) {
this.sourceLocation=loc;
});

Clazz.newMeth(C$, 'getSourceLocation$', function () {
return this.sourceLocation;
});

Clazz.newMeth(C$, 'getDestinationLocation$', function () {
return this.destinationLocation;
});

Clazz.newMeth(C$, 'setDestinationLocation$org_scijava_io_location_Location', function (loc) {
this.destinationLocation=loc;
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'isFiltered$', function () {
return this.filtered;
});

Clazz.newMeth(C$, 'getDatasetName$', function () {
return this.datasetName;
});

Clazz.newMeth(C$, 'get$I', function (imageIndex) {
return this.imageMeta.get$I(imageIndex);
});

Clazz.newMeth(C$, 'getAll$', function () {
return this.imageMeta;
});

Clazz.newMeth(C$, 'getImageCount$', function () {
return this.imageMeta.size$();
});

Clazz.newMeth(C$, 'getDatasetSize$', function () {
var size=0;
for (var i=0; i < this.getAll$().size$(); i++) size+=this.get$I(i).getSize$();

return size;
});

Clazz.newMeth(C$, 'setDatasetName$S', function (name) {
this.datasetName=name;
});

Clazz.newMeth(C$, 'setFiltered$Z', function (filtered) {
this.filtered=filtered;
});

Clazz.newMeth(C$, 'add$io_scif_ImageMetadata', function (meta) {
this.imageMeta.add$TE(meta);
});

Clazz.newMeth(C$, 'createImageMetadata$I', function (imageCount) {
this.imageMeta.clear$();
for (var i=0; i < imageCount; i++) this.add$io_scif_ImageMetadata(Clazz.new_($I$(3,1)));

});

Clazz.newMeth(C$, 'getTable$', function () {
if (this.table == null ) this.table=Clazz.new_($I$(1,1).c$$Z,[this.isFiltered$()]);
return this.table;
});

Clazz.newMeth(C$, 'setTable$io_scif_MetaTable', function (table) {
this.table=table;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
if (this.source != null ) {
this.source.close$();
}if (!fileOnly) p$1.reset$Class.apply(this, [this.getClass$()]);
});

Clazz.newMeth(C$, 'reset$Class', function (type) {
if (type == null  || type === Clazz.getClass(C$)  ) return;
for (var f, $f = 0, $$f = type.getDeclaredFields$(); $f<$$f.length&&((f=($$f[$f])),1);$f++) {
f.setAccessible$Z(true);
if ($I$(4).isFinal$I(f.getModifiers$())) continue;
if (f.getAnnotation$Class(Clazz.getClass($I$(5),['isList','label'])) == null ) continue;
var fieldType=f.getType$();
try {
if (fieldType === Boolean.TYPE ) f.set$O$O(this, new Boolean(false));
 else if (fieldType === Character.TYPE ) f.set$O$O(this, new Integer(0));
 else if (fieldType === Double.TYPE ) f.set$O$O(this, new Double(0.0));
 else if (fieldType === Float.TYPE ) f.set$O$O(this, new Float(0.0));
 else if (fieldType === Integer.TYPE ) f.set$O$O(this, new Integer(0));
 else if (fieldType === Long.TYPE ) f.set$O$O(this, new Long(0));
 else if (fieldType === Short.TYPE ) f.set$O$O(this, new Integer(0));
 else f.set$O$O(this, null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e = e$$;
{
this.log$().debug$O(e.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
this.log$().debug$O(e.getMessage$());
}
} else {
throw e$$;
}
}
this.table=Clazz.new_($I$(1,1));
this.imageMeta=Clazz.new_(1,{E:"io.scif.ImageMetadata"},$I$(2,1));
p$1.reset$Class.apply(this, [type.getSuperclass$()]);
for (var c, $c = 0, $$c = type.getInterfaces$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
p$1.reset$Class.apply(this, [c]);
}
}
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
