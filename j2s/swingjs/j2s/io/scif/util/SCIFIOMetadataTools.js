(function(){var P$=Clazz.newPackage("io.scif.util"),I$=[[0,'io.scif.util.FormatTools','net.imagej.axis.Axes',['io.scif.util.SCIFIOMetadataTools','.AxisValue'],'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SCIFIOMetadataTools", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AxisValue',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'wholePlane$I$io_scif_Metadata$net_imglib2_Interval', function (imageIndex, meta, bounds) {
var wholePlane=C$.wholeRow$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, meta, bounds);
var yIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).Y);
return wholePlane && bounds.min$I(yIndex) == 0  && bounds.max$I(yIndex) == meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y) - 1 ;
}, 1);

Clazz.newMeth(C$, 'wholeRow$I$io_scif_Metadata$net_imglib2_Interval', function (imageIndex, meta, bounds) {
var yIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).Y);
for (var d=0; d < bounds.numDimensions$(); d++) {
if (d == yIndex) continue;
var length=meta.get$I(imageIndex).getAxisLength$I(d);
if (bounds.min$I(d) != 0 || bounds.dimension$I(d) != length ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'modifyPlanar$I$io_scif_Metadata$JA', function (imageIndex, meta, values) {
var axes=Clazz.array($I$(3), [values.length]);
var axisTypes=meta.get$I(imageIndex).getAxes$();
for (var i=0; i < axes.length && i < axisTypes.size$() ; i++) {
axes[i]=Clazz.new_($I$(3,1).c$$net_imagej_axis_AxisType$J,[axisTypes.get$I(i).type$(), values[i]]);
}
return C$.modifyPlanar$I$io_scif_Metadata$io_scif_util_SCIFIOMetadataTools_AxisValueA(imageIndex, meta, axes);
}, 1);

Clazz.newMeth(C$, 'modifyPlanar$I$io_scif_Metadata$io_scif_util_SCIFIOMetadataTools_AxisValueA', function (imageIndex, meta, axes) {
var planarAxes=meta.get$I(imageIndex).getAxesLengthsPlanar$();
for (var v, $v = 0, $$v = axes; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
planarAxes[meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType(v.getType$())]=v.getLength$();
}
return planarAxes;
}, 1);

Clazz.newMeth(C$, 'castMeta$io_scif_Metadata', function (meta) {
return meta;
}, 1);

Clazz.newMeth(C$, 'unwrapMetadata$io_scif_Metadata', function (meta) {
var unwrappedMeta=meta;
while (Clazz.instanceOf(unwrappedMeta, "io.scif.filters.MetadataWrapper")){
unwrappedMeta=(unwrappedMeta).unwrap$();
}
return unwrappedMeta;
}, 1);

Clazz.newMeth(C$, 'verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_handle_DataHandle', function (src, out) {
C$.verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_handle_DataHandle$I(src, out, 0);
}, 1);

Clazz.newMeth(C$, 'verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_handle_DataHandle$I', function (src, out, imageIndex) {
if (src == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Metadata object is null; call Writer.setMetadata() first"]);
}if (out == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["DataHandle object is null; call Writer.setSource(<Location/DataHandle>) first"]);
}if (src.get$I(imageIndex).getAxes$().size$() == 0) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Axiscount #" + imageIndex + " is 0" ]);
}}, 1);

Clazz.newMeth(C$, 'verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_location_Location', function (src, loc) {
C$.verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_location_Location$I(src, loc, 0);
}, 1);

Clazz.newMeth(C$, 'verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_location_Location$I', function (src, loc, imageIndex) {
if (src == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Metadata object is null; call Writer.setMetadata() first"]);
}if (loc == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Location object is null; call Writer.setSource(<Location>) first"]);
}if (src.get$I(imageIndex).getAxes$().size$() == 0) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Axiscount #" + imageIndex + " is 0" ]);
}}, 1);

Clazz.newMeth(C$, 'guessPlanarAxisCount$java_util_List', function (axes) {
var xFound=false;
var yFound=false;
var d;
for (d=0; d < axes.size$(); d++) {
if (xFound && yFound ) break;
var type=axes.get$I(d).type$();
if (type === $I$(2).X ) xFound=true;
 else if (type === $I$(2).Y ) yFound=true;
}
return d;
}, 1);

Clazz.newMeth(C$, 'guessInterleavedAxisCount$java_util_List', function (axes) {
for (var d=0; d < axes.size$(); d++) {
var type=axes.get$I(d).type$();
if (type === $I$(2).X  || type === $I$(2).Y  ) return d;
}
return axes.size$();
}, 1);

Clazz.newMeth(C$, 'merge$java_util_Map$java_util_Map$S', function (src, dest, prefix) {
for (var key, $key = src.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
dest.put$TK$TV(prefix + key, src.get$O(key));
}
}, 1);

Clazz.newMeth(C$, 'keys$java_util_Hashtable', function (meta) {
var keys=Clazz.array(String, [meta.size$()]);
meta.keySet$().toArray$TTA(keys);
$I$(4).sort$OA(keys);
return keys;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SCIFIOMetadataTools, "AxisValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['length'],'O',['type','net.imagej.axis.CalibratedAxis']]]

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$J', function (type, length) {
;C$.$init$.apply(this);
this.type=$I$(1).createAxis$net_imagej_axis_AxisType(type);
this.length=length;
}, 1);

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$J', function (length) {
this.length=length;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type.type$();
});

Clazz.newMeth(C$, 'setType$net_imagej_axis_CalibratedAxis', function (type) {
this.type=type;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:46 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
