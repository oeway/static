(function(){var P$=Clazz.newPackage("io.scif"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap','net.imagej.axis.CalibratedAxis','io.scif.util.FormatTools','java.util.Arrays','org.scijava.util.ArrayUtils','net.imagej.axis.Axes','io.scif.util.SCIFIOMetadataTools','io.scif.DefaultMetaTable','io.scif.FieldPrinter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractImageMetadata", null, null, 'io.scif.ImageMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.planarAxisCount=-1;
this.interleavedAxisCount=-1;
this.falseColor=true;
}, 1);

C$.$fields$=[['Z',['orderCertain','littleEndian','indexed','falseColor','metadataComplete','thumbnail'],'I',['pixelType','bitsPerPixel','planarAxisCount','interleavedAxisCount'],'L',['thumbSizeX','thumbSizeY'],'S',['name'],'O',['planarAxes','java.util.List','+extendedAxes','+effectiveAxes','+axes','axisLengths','java.util.HashMap','rois','java.lang.Object','+tables','table','io.scif.MetaTable']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.axes=Clazz.new_(1,{E:"net.imagej.axis.CalibratedAxis"},$I$(1,1));
this.axisLengths=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"Long"},$I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_ImageMetadata', function (copy) {
C$.c$.apply(this, []);
this.copy$io_scif_ImageMetadata(copy);
}, 1);

Clazz.newMeth(C$, 'setThumbSizeX$J', function (thumbSizeX) {
this.thumbSizeX=thumbSizeX;
});

Clazz.newMeth(C$, 'setThumbSizeY$J', function (thumbSizeY) {
this.thumbSizeY=thumbSizeY;
});

Clazz.newMeth(C$, 'setPixelType$I', function (pixelType) {
this.pixelType=pixelType;
});

Clazz.newMeth(C$, 'setBitsPerPixel$I', function (bitsPerPixel) {
this.bitsPerPixel=bitsPerPixel;
});

Clazz.newMeth(C$, 'setOrderCertain$Z', function (orderCertain) {
this.orderCertain=orderCertain;
});

Clazz.newMeth(C$, 'setLittleEndian$Z', function (littleEndian) {
this.littleEndian=littleEndian;
});

Clazz.newMeth(C$, 'setIndexed$Z', function (indexed) {
this.indexed=indexed;
});

Clazz.newMeth(C$, 'setPlanarAxisCount$I', function (count) {
this.planarAxisCount=count;
p$1.clearCachedAxes.apply(this, []);
});

Clazz.newMeth(C$, 'setInterleavedAxisCount$I', function (count) {
this.interleavedAxisCount=count;
});

Clazz.newMeth(C$, 'setFalseColor$Z', function (falseColor) {
this.falseColor=falseColor;
});

Clazz.newMeth(C$, 'setMetadataComplete$Z', function (metadataComplete) {
this.metadataComplete=metadataComplete;
});

Clazz.newMeth(C$, 'setThumbnail$Z', function (thumbnail) {
this.thumbnail=thumbnail;
});

Clazz.newMeth(C$, 'setAxes$net_imagej_axis_CalibratedAxisA$JA', function (axes, axisLengths) {
this.setAxes$net_imagej_axis_CalibratedAxisA(axes);
this.setAxisLengths$JA(axisLengths);
});

Clazz.newMeth(C$, 'setAxisTypes$net_imagej_axis_AxisTypeA', function (axisTypes) {
var axes=Clazz.array($I$(3), [axisTypes.length]);
for (var i=0; i < axisTypes.length; i++) {
var t=axisTypes[i];
var c=this.getAxis$net_imagej_axis_AxisType(t);
if (c == null ) c=$I$(4).createAxis$net_imagej_axis_AxisType(t);
axes[i]=c;
}
this.setAxes$net_imagej_axis_CalibratedAxisA(axes);
});

Clazz.newMeth(C$, 'setAxes$net_imagej_axis_CalibratedAxisA', function (axisTypes) {
this.axes=Clazz.new_(1,{E:"net.imagej.axis.CalibratedAxis"},$I$(1,1).c$$java_util_Collection,[$I$(5).asList$TTA(axisTypes)]);
p$1.clearCachedAxes.apply(this, []);
});

Clazz.newMeth(C$, 'setAxisLengths$JA', function (axisLengths) {
if (axisLengths.length > this.axes.size$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Tried to set " + axisLengths.length + " axis lengths, but " + this.getAxes$().size$() + " axes present." + " Call setAxisTypes first." ]);
for (var i=0; i < axisLengths.length; i++) {
p$1.updateLength$net_imagej_axis_AxisType$J.apply(this, [this.axes.get$I(i).type$(), axisLengths[i]]);
}
});

Clazz.newMeth(C$, 'setAxisLength$net_imagej_axis_CalibratedAxis$J', function (axis, length) {
this.setAxisLength$net_imagej_axis_AxisType$J(axis.type$(), length);
});

Clazz.newMeth(C$, 'setAxisLength$net_imagej_axis_AxisType$J', function (axisType, length) {
if (p$1.getAxisIndex$net_imagej_axis_AxisType$java_util_List.apply(this, [axisType, this.axes]) == -1) {
this.addAxis$net_imagej_axis_CalibratedAxis$J($I$(4).createAxis$net_imagej_axis_AxisType(axisType), length);
} else {
p$1.updateLength$net_imagej_axis_AxisType$J.apply(this, [axisType, length]);
}});

Clazz.newMeth(C$, 'setAxis$I$net_imagej_axis_CalibratedAxis', function (index, axis) {
var oldIndex=this.getAxisIndex$net_imagej_axis_CalibratedAxis(axis);
if (oldIndex < 0) {
var length=(this.axisLengths.remove$O(this.axes.get$I(index).type$())).valueOf();
this.axes.remove$I(index);
if (index == this.axes.size$()) {
this.axes.add$TE(axis);
} else {
this.axes.add$I$TE(index, axis);
}this.axisLengths.put$TK$TV(axis.type$(), new Long(length));
} else {
this.axes.remove$O(this.axes.get$I(oldIndex));
this.axes.add$I$TE(index, axis);
}p$1.clearCachedAxes.apply(this, []);
});

Clazz.newMeth(C$, 'setAxisType$I$net_imagej_axis_AxisType', function (index, axisType) {
var axis=$I$(4).createAxis$net_imagej_axis_AxisType(axisType);
this.setAxis$I$net_imagej_axis_CalibratedAxis(index, axis);
});

Clazz.newMeth(C$, 'setROIs$O', function (rois) {
this.rois=rois;
});

Clazz.newMeth(C$, 'setTables$O', function (tables) {
this.tables=tables;
});

Clazz.newMeth(C$, 'getSize$', function () {
var size=1;
for (var a, $a = this.getAxes$().iterator$(); $a.hasNext$()&&((a=($a.next$())),1);) {
size=$I$(6).safeMultiply64$JA([size, this.getAxisLength$net_imagej_axis_CalibratedAxis(a)]);
}
var bytesPerPixel=(this.getBitsPerPixel$()/8|0);
return $I$(6).safeMultiply64$JA([size, bytesPerPixel]);
});

Clazz.newMeth(C$, 'getPlaneSize$', function () {
return (this.getSize$()/this.getPlaneCount$()|0);
});

Clazz.newMeth(C$, 'getThumbSizeX$', function () {
var thumbX=this.thumbSizeX;
if (thumbX == 0) {
var sx=this.getAxisLength$net_imagej_axis_AxisType($I$(7).X);
var sy=this.getAxisLength$net_imagej_axis_AxisType($I$(7).Y);
if (sx < 128 && sy < 128 ) thumbX=sx;
 else if (sx > sy) thumbX=128;
 else if (sy > 0) thumbX=(sx * 128/sy|0);
if (thumbX == 0) thumbX=1;
}return thumbX;
});

Clazz.newMeth(C$, 'getThumbSizeY$', function () {
var thumbY=this.thumbSizeY;
if (thumbY == 0) {
var sx=this.getAxisLength$net_imagej_axis_AxisType($I$(7).X);
var sy=this.getAxisLength$net_imagej_axis_AxisType($I$(7).Y);
thumbY=1;
if (sx < 128 && sy < 128 ) thumbY=sy;
 else if (sy > sx) thumbY=128;
 else if (sx > 0) thumbY=(sy * 128/sx|0);
if (thumbY == 0) thumbY=1;
}return thumbY;
});

Clazz.newMeth(C$, 'getAxis$net_imagej_axis_AxisType', function (axisType) {
for (var axis, $axis = this.getAxes$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
if (axis.type$().equals$O(axisType)) return axis;
}
return null;
});

Clazz.newMeth(C$, 'getPixelType$', function () {
return this.pixelType;
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
if (this.bitsPerPixel <= 0) return $I$(4).getBitsPerPixel$I(this.pixelType);
return this.bitsPerPixel;
});

Clazz.newMeth(C$, 'getAxes$', function () {
return p$1.getEffectiveAxes.apply(this, []);
});

Clazz.newMeth(C$, 'getAxesPlanar$', function () {
return p$1.getAxisList$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'getAxesNonPlanar$', function () {
return p$1.getAxisList$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'getPlaneCount$', function () {
var length=1;
for (var t, $t = this.getAxesNonPlanar$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
length*=this.getAxisLength$net_imagej_axis_CalibratedAxis(t);
}
return length;
});

Clazz.newMeth(C$, 'getAxesLengths$', function () {
return this.getAxesLengths$java_util_List(this.getAxes$());
});

Clazz.newMeth(C$, 'getAxesLengths$java_util_List', function (axes) {
var lengths=Clazz.array(Long.TYPE, [axes.size$()]);
for (var i=0; i < axes.size$(); i++) {
lengths[i]=this.getAxisLength$net_imagej_axis_CalibratedAxis(axes.get$I(i));
}
return lengths;
});

Clazz.newMeth(C$, 'getAxesLengthsPlanar$', function () {
return this.getAxesLengths$java_util_List(this.getAxesPlanar$());
});

Clazz.newMeth(C$, 'getAxesLengthsNonPlanar$', function () {
return this.getAxesLengths$java_util_List(this.getAxesNonPlanar$());
});

Clazz.newMeth(C$, 'isOrderCertain$', function () {
return this.orderCertain;
});

Clazz.newMeth(C$, 'isLittleEndian$', function () {
return this.littleEndian;
});

Clazz.newMeth(C$, 'isIndexed$', function () {
return this.indexed;
});

Clazz.newMeth(C$, 'getPlanarAxisCount$', function () {
if (this.planarAxisCount == -1) {
return $I$(8).guessPlanarAxisCount$java_util_List(this.axes);
}return this.planarAxisCount;
});

Clazz.newMeth(C$, 'getInterleavedAxisCount$', function () {
if (this.interleavedAxisCount == -1) {
return $I$(8).guessInterleavedAxisCount$java_util_List(this.axes);
}return this.interleavedAxisCount;
});

Clazz.newMeth(C$, 'isMultichannel$', function () {
var cIndex=this.getAxisIndex$net_imagej_axis_AxisType($I$(7).CHANNEL);
return (cIndex < this.getPlanarAxisCount$() && cIndex >= 0 );
});

Clazz.newMeth(C$, 'isFalseColor$', function () {
return this.falseColor;
});

Clazz.newMeth(C$, 'isMetadataComplete$', function () {
return this.metadataComplete;
});

Clazz.newMeth(C$, 'isThumbnail$', function () {
return this.thumbnail;
});

Clazz.newMeth(C$, 'getAxis$I', function (axisIndex) {
return this.getAxes$().get$I(axisIndex);
});

Clazz.newMeth(C$, 'getAxisLength$I', function (axisIndex) {
if (axisIndex < 0 || axisIndex >= this.getAxes$().size$() ) {
return 1;
}return this.getAxisLength$net_imagej_axis_CalibratedAxis(this.getAxis$I(axisIndex));
});

Clazz.newMeth(C$, 'getAxisLength$net_imagej_axis_CalibratedAxis', function (t) {
return t == null  ? 1 : this.getAxisLength$net_imagej_axis_AxisType(t.type$());
});

Clazz.newMeth(C$, 'getAxisLength$net_imagej_axis_AxisType', function (t) {
if (this.axisLengths == null  || !this.axisLengths.containsKey$O(t)  || (this.effectiveAxes != null  && this.getAxisIndex$net_imagej_axis_AxisType(t) == -1 ) ) {
return 1;
}return (this.axisLengths.get$O(t)).valueOf();
});

Clazz.newMeth(C$, 'getAxisIndex$net_imagej_axis_CalibratedAxis', function (axis) {
return this.getAxisIndex$net_imagej_axis_AxisType(axis.type$());
});

Clazz.newMeth(C$, 'getAxisIndex$net_imagej_axis_AxisType', function (axisType) {
var knownAxes=this.effectiveAxes == null  ? this.axes : this.effectiveAxes;
return p$1.getAxisIndex$net_imagej_axis_AxisType$java_util_List.apply(this, [axisType, knownAxes]);
});

Clazz.newMeth(C$, 'getROIs$', function () {
return this.rois;
});

Clazz.newMeth(C$, 'getTables$', function () {
return this.tables;
});

Clazz.newMeth(C$, 'addAxis$net_imagej_axis_CalibratedAxis', function (axis) {
this.addAxis$net_imagej_axis_CalibratedAxis$J(axis, 1);
});

Clazz.newMeth(C$, 'addAxis$net_imagej_axis_CalibratedAxis$J', function (axis, value) {
if (this.axes == null ) this.axes=Clazz.new_(1,{E:"net.imagej.axis.CalibratedAxis"},$I$(1,1));
if (!this.axes.contains$O(axis)) {
this.axes.add$TE(axis);
p$1.clearCachedAxes.apply(this, []);
}p$1.updateLength$net_imagej_axis_AxisType$J.apply(this, [axis.type$(), value]);
});

Clazz.newMeth(C$, 'addAxis$net_imagej_axis_AxisType$J', function (axisType, value) {
this.addAxis$net_imagej_axis_CalibratedAxis$J($I$(4).createAxis$net_imagej_axis_AxisType(axisType), value);
});

Clazz.newMeth(C$, 'copy$io_scif_ImageMetadata', function (toCopy) {
this.populate$S$java_util_List$JA$I$Z$Z$Z$Z$Z(toCopy.getName$(), toCopy.getAxes$(), toCopy.getAxesLengths$(), toCopy.getPixelType$(), toCopy.isOrderCertain$(), toCopy.isLittleEndian$(), toCopy.isIndexed$(), toCopy.isFalseColor$(), toCopy.isMetadataComplete$());
this.table=Clazz.new_($I$(9,1).c$$java_util_Map,[toCopy.getTable$()]);
this.thumbnail=toCopy.isThumbnail$();
this.thumbSizeX=toCopy.getThumbSizeX$();
this.thumbSizeY=toCopy.getThumbSizeY$();
this.planarAxisCount=toCopy.getPlanarAxisCount$();
});

Clazz.newMeth(C$, 'populate$S$java_util_List$JA$I$Z$Z$Z$Z$Z', function (name, axes, lengths, pixelType, orderCertain, littleEndian, indexed, falseColor, metadataComplete) {
this.populate$S$java_util_List$JA$I$I$Z$Z$Z$Z$Z(name, axes, lengths, pixelType, $I$(4).getBitsPerPixel$I(pixelType), orderCertain, littleEndian, indexed, falseColor, metadataComplete);
});

Clazz.newMeth(C$, 'populate$S$java_util_List$JA$I$I$Z$Z$Z$Z$Z', function (name, axes, lengths, pixelType, bitsPerPixel, orderCertain, littleEndian, indexed, falseColor, metadataComplete) {
this.name=name;
this.axes=Clazz.new_(1,{E:"net.imagej.axis.CalibratedAxis"},$I$(1,1).c$$java_util_Collection,[axes]);
this.setAxisLengths$JA(lengths.clone$());
this.bitsPerPixel=bitsPerPixel;
this.falseColor=falseColor;
this.indexed=indexed;
this.littleEndian=littleEndian;
this.orderCertain=orderCertain;
this.pixelType=pixelType;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'getTable$', function () {
if (this.table == null ) this.table=Clazz.new_($I$(9,1));
return this.table;
});

Clazz.newMeth(C$, 'setTable$io_scif_MetaTable', function (table) {
this.table=table;
});

Clazz.newMeth(C$, 'toString', function () {
return Clazz.new_($I$(10,1).c$$O,[this]).toString();
});

Clazz.newMeth(C$, 'getEffectiveAxes', function () {
if (this.effectiveAxes == null  && this.axes != null  ) {
var end=this.axes.size$();
for (; end > this.getPlanarAxisCount$(); end--) {
var axis=this.axes.get$I(end - 1);
if (this.getAxisLength$net_imagej_axis_CalibratedAxis(axis) > 1) {
break;
}}
this.effectiveAxes=Clazz.new_(1,{E:"net.imagej.axis.CalibratedAxis"},$I$(1,1));
for (var i=0; i < end; i++) {
this.effectiveAxes.add$TE(this.axes.get$I(i));
}
}return this.effectiveAxes;
}, p$1);

Clazz.newMeth(C$, 'getAxisIndex$net_imagej_axis_AxisType$java_util_List', function (axisType, axisList) {
if (axisList == null ) return -1;
var index=-1;
for (var i=0; index == -1 && i < axisList.size$() ; i++) {
if (axisList.get$I(i).type$().equals$O(axisType)) index=i;
}
return index;
}, p$1);

Clazz.newMeth(C$, 'clearCachedAxes', function () {
this.planarAxes=null;
this.extendedAxes=null;
this.effectiveAxes=null;
}, p$1);

Clazz.newMeth(C$, 'updateLength$net_imagej_axis_AxisType$J', function (axisType, value) {
this.axisLengths.put$TK$TV(axisType, new Long(value));
this.effectiveAxes=null;
}, p$1);

Clazz.newMeth(C$, 'getAxisList$Z', function (planar) {
var index=-1;
var end=-1;
var axisList=null;
if (planar) {
if (this.planarAxes == null ) this.planarAxes=Clazz.new_(1,{E:"net.imagej.axis.CalibratedAxis"},$I$(1,1));
axisList=this.planarAxes;
index=0;
end=this.getPlanarAxisCount$();
} else {
if (this.extendedAxes == null ) this.extendedAxes=Clazz.new_(1,{E:"net.imagej.axis.CalibratedAxis"},$I$(1,1));
axisList=this.extendedAxes;
index=this.getPlanarAxisCount$();
end=this.getAxes$().size$();
}if (axisList.size$() == 0) {
{
if (axisList.size$() == 0) {
axisList.clear$();
var position=0;
for (; index < end; index++) {
if (position <= axisList.size$()) {
axisList.add$TE(this.getAxes$().get$I(index));
position++;
} else {
axisList.set$I$TE(position++, this.getAxes$().get$I(index));
}}
}}}return axisList;
}, p$1);
C$.$getAnn$ = function(){ return [
[['thumbSizeX','long',null,['io.scif.Field']],['label="thumbSizeX" ']],
  [['thumbSizeY','.',null,['io.scif.Field']],['label="thumbSizeY" ']],
  [['pixelType','int',null,['io.scif.Field']],['label="pixelType" ']],
  [['bitsPerPixel','.',null,['io.scif.Field']],['label="bitsPerPixel" ']],
  [['axes','java.util.List',null,['io.scif.Field']],['label="dimTypes" ']],
  [['axisLengths','java.util.HashMap',null,['io.scif.Field']],['label="dimLengths" ']],
  [['orderCertain','boolean',null,['io.scif.Field']],['label="orderCertain" ']],
  [['littleEndian','.',null,['io.scif.Field']],['label="littleEndian" ']],
  [['indexed','.',null,['io.scif.Field']],['label="indexed" ']],
  [['planarAxisCount','int',null,['io.scif.Field']],['label="planarAxiscount" ']],
  [['interleavedAxisCount','.',null,['io.scif.Field']],['label="interleavedAxisCount" ']],
  [['falseColor','boolean',null,['io.scif.Field']],['label="falseColor" ']],
  [['metadataComplete','.',null,['io.scif.Field']],['label="metadataComplete" ']],
  [['thumbnail','.',null,['io.scif.Field']],['label="thumbnail" ']],
  [['rois','java.lang.Object',null,['io.scif.Field']],['label="ROIs" ']],
  [['tables','.',null,['io.scif.Field']],['label="tables" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
