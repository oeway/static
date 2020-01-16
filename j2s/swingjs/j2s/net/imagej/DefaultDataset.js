(function(){var P$=Clazz.newPackage("net.imagej"),p$1={},p$2={},I$=[[0,'net.imagej.event.DatasetCreatedEvent','net.imagej.event.DatasetDeletedEvent','net.imagej.event.DatasetTypeChangedEvent','net.imagej.event.DatasetRGBChangedEvent','net.imglib2.util.Intervals','net.imagej.axis.CalibratedAxis','net.imagej.event.DatasetRestructuredEvent','java.util.Objects','net.imglib2.img.basictypeaccess.array.ByteArray','net.imglib2.img.basictypeaccess.array.ShortArray','net.imglib2.img.basictypeaccess.array.IntArray','net.imglib2.img.basictypeaccess.array.FloatArray','net.imglib2.img.basictypeaccess.array.LongArray','net.imglib2.img.basictypeaccess.array.DoubleArray','net.imglib2.img.array.ArrayImgFactory','net.imagej.Extents','net.imagej.ImgPlus','net.imagej.event.DatasetUpdatedEvent','net.imagej.axis.Axes','net.imagej.DefaultDataset','net.imagej.DatasetFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultDataset", null, 'net.imagej.AbstractData', 'net.imagej.Dataset');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['rgbMerged','isDirty'],'O',['log','org.scijava.log.LogService','dataTypeService','net.imagej.types.DataTypeService','imgPlus','net.imagej.ImgPlus']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$net_imagej_ImgPlus', function (context, imgPlus) {
;C$.superclazz.c$$org_scijava_Context$net_imglib2_RealInterval.apply(this,[context, imgPlus]);C$.$init$.apply(this);
this.imgPlus=imgPlus;
this.rgbMerged=p$1.mergedColorCompatible.apply(this, []);
this.isDirty=false;
}, 1);

Clazz.newMeth(C$, 'register$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(1,1).c$$net_imagej_Dataset,[this]));
});

Clazz.newMeth(C$, 'delete$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(2,1).c$$net_imagej_Dataset,[this]));
});

Clazz.newMeth(C$, 'isDirty$', function () {
return this.isDirty;
});

Clazz.newMeth(C$, 'setDirty$Z', function (value) {
this.isDirty=value;
});

Clazz.newMeth(C$, 'getImgPlus$', function () {
return this.imgPlus;
});

Clazz.newMeth(C$, 'setImgPlus$net_imagej_ImgPlus', function (imgPlus) {
var wasRgbMerged=this.isRGBMerged$();
var typeChanged=false;
if (imgPlus.firstElement$().getClass$() !== this.getType$().getClass$() ) {
typeChanged=true;
}this.imgPlus=imgPlus;
if (wasRgbMerged) {
if (!p$1.mergedColorCompatible.apply(this, [])) {
this.setRGBMerged$Z(false);
}}this.rebuild$();
if (typeChanged) this.typeChange$();
});

Clazz.newMeth(C$, 'getPlane$I', function (planeNumber) {
return this.getPlane$I$Z(planeNumber, true);
});

Clazz.newMeth(C$, 'getPlane$I$Z', function (planeNumber, copyOK) {
var img=this.imgPlus.getImg$();
if (Clazz.instanceOf(img, "net.imglib2.img.basictypeaccess.PlanarAccess")) {
var planarAccess=img;
var plane=planarAccess.getPlane$I(planeNumber);
if (Clazz.instanceOf(plane, "net.imglib2.img.basictypeaccess.array.ArrayDataAccess")) return (plane).getCurrentStorageArray$();
}if (copyOK) return p$1.copyOfPlane$I.apply(this, [planeNumber]);
return null;
});

Clazz.newMeth(C$, 'setPlaneSilently$I$O', function (planeNum, newPlane) {
var img=this.imgPlus.getImg$();
if (!(Clazz.instanceOf(img, "net.imglib2.img.basictypeaccess.PlanarAccess"))) {
this.log.error$O("Cannot set plane for non-planar image");
return false;
}var planarAccess=img;
var arrayAccess=planarAccess.getPlane$I(planeNum);
var currPlane=arrayAccess.getCurrentStorageArray$();
if (newPlane === currPlane ) return false;
var array=p$1.createArrayDataAccess$O.apply(this, [newPlane]);
planarAccess.setPlane$I$TA(planeNum, array);
return true;
});

Clazz.newMeth(C$, 'setPlane$I$O', function (planeNum, newPlane) {
if (this.setPlaneSilently$I$O(planeNum, newPlane)) {
p$1.update$Z.apply(this, [false]);
return true;
}return false;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.imgPlus.firstElement$();
});

Clazz.newMeth(C$, 'isSigned$', function () {
return this.getType$().getMinValue$() < 0 ;
});

Clazz.newMeth(C$, 'isInteger$', function () {
return Clazz.instanceOf(this.getType$(), "net.imglib2.type.numeric.IntegerType");
});

Clazz.newMeth(C$, 'getTypeLabelShort$', function () {
if (this.isRGBMerged$()) return "RGB";
var type=this.getImgPlus$().firstElement$();
return this.dataTypeService.getTypeByClass$Class(type.getClass$()).shortName$();
});

Clazz.newMeth(C$, 'getTypeLabelLong$', function () {
if (this.isRGBMerged$()) return "RGB color";
var type=this.getImgPlus$().firstElement$();
return this.dataTypeService.getTypeByClass$Class(type.getClass$()).longName$();
});

Clazz.newMeth(C$, 'duplicate$', function () {
var newImgPlus=this.imgPlus.copy$();
return Clazz.new_(C$.c$$org_scijava_Context$net_imagej_ImgPlus,[this.getContext$(), newImgPlus]);
});

Clazz.newMeth(C$, 'duplicateBlank$', function () {
var untypedImg=this.imgPlus;
var d=Clazz.new_(C$.c$$org_scijava_Context$net_imagej_ImgPlus,[this.getContext$(), C$.createBlankCopy$net_imagej_ImgPlus(untypedImg)]);
d.setRGBMerged$Z(this.isRGBMerged$());
return d;
});

Clazz.newMeth(C$, 'copyInto$net_imagej_Dataset', function (target) {
p$1.copyDataValues$net_imglib2_img_Img$net_imglib2_img_Img.apply(this, [this.imgPlus, target.getImgPlus$()]);
target.update$();
});

Clazz.newMeth(C$, 'setRGBMerged$Z', function (rgbMerged) {
if (rgbMerged == this.rgbMerged ) return;
if (rgbMerged && !p$1.mergedColorCompatible.apply(this, []) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This dataset is not color compatible"]);
}this.rgbMerged=rgbMerged;
this.rgbChange$();
});

Clazz.newMeth(C$, 'isRGBMerged$', function () {
return this.rgbMerged;
});

Clazz.newMeth(C$, 'typeChange$', function () {
this.setDirty$Z(true);
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(3,1).c$$net_imagej_Dataset,[this]));
});

Clazz.newMeth(C$, 'rgbChange$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(4,1).c$$net_imagej_Dataset,[this]));
});

Clazz.newMeth(C$, 'copyDataFrom$net_imagej_Dataset', function (other) {
var factory=this.getImgPlus$().factory$();
var newImg=factory.create$JA$TT($I$(5).dimensionsAsLongArray$net_imglib2_Dimensions(other), other.getType$());
p$1.copyDataValues$net_imglib2_img_Img$net_imglib2_img_Img.apply(this, [other.getImgPlus$(), newImg]);
var calibAxes=Clazz.array($I$(6), [other.numDimensions$()]);
other.axes$TAA(calibAxes);
var calibAxesCopy=Clazz.array($I$(6), [calibAxes.length]);
for (var i=0; i < calibAxes.length; i++) {
calibAxesCopy[i]=calibAxes[i].copy$();
}
var newImgPlus=p$1.wrapAsImgPlus$net_imglib2_img_Img$net_imagej_axis_CalibratedAxisA.apply(this, [newImg, calibAxesCopy]);
var count=other.getColorTableCount$();
newImgPlus.initializeColorTables$I(count);
for (var i=0; i < count; i++) {
newImgPlus.setColorTable$net_imglib2_display_ColorTable$I(other.getColorTable$I(i), i);
}
this.setRGBMerged$Z(other.isRGBMerged$());
this.setImgPlus$net_imagej_ImgPlus(newImgPlus);
});

Clazz.newMeth(C$, 'update$', function () {
p$1.update$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'rebuild$', function () {
this.setDirty$Z(true);
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(7,1).c$$net_imagej_Dataset,[this]));
});

Clazz.newMeth(C$, 'dimensionIndex$net_imagej_axis_AxisType', function (axis) {
return this.imgPlus.dimensionIndex$net_imagej_axis_AxisType(axis);
});

Clazz.newMeth(C$, 'axis$I', function (d) {
return this.imgPlus.axis$I(d);
});

Clazz.newMeth(C$, ['axes$net_imagej_axis_CalibratedAxisA'], function (axes) {
this.imgPlus.axes$TAA(axes);
});

Clazz.newMeth(C$, 'setAxes$net_imagej_axis_CalibratedAxisA', function (axes) {
if (axes.length != this.numDimensions$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of axes must match dimensionality of dataset"]);
var changes=false;
for (var i=0; i < axes.length; i++) {
if (!this.imgPlus.axis$I(i).equals$O(axes[i])) {
changes=true;
this.imgPlus.setAxis$TA$I(axes[i], i);
}}
if (changes) this.rebuild$();
});

Clazz.newMeth(C$, ['setAxis$net_imagej_axis_CalibratedAxis$I','setAxis$TA$I'], function (axis, d) {
if (axis.equals$O(this.imgPlus.axis$I(d))) return;
this.imgPlus.setAxis$TA$I(axis, d);
p$1.update$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.imgPlus.numDimensions$();
});

Clazz.newMeth(C$, 'min$I', function (d) {
return this.imgPlus.min$I(d);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
this.imgPlus.min$JA(min);
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
this.imgPlus.min$net_imglib2_Positionable(min);
});

Clazz.newMeth(C$, 'max$I', function (d) {
return this.imgPlus.max$I(d);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
this.imgPlus.max$JA(max);
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
this.imgPlus.max$net_imglib2_Positionable(max);
});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
this.imgPlus.dimensions$JA(dimensions);
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.imgPlus.dimension$I(d);
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.imgPlus.realMin$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.imgPlus.realMin$DA(min);
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.imgPlus.realMin$net_imglib2_RealPositionable(min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.imgPlus.realMax$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.imgPlus.realMax$DA(max);
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.imgPlus.realMax$net_imglib2_RealPositionable(max);
});

Clazz.newMeth(C$, 'getName$', function () {
return this.imgPlus.getName$();
});

Clazz.newMeth(C$, 'setName$S', function (name) {
if ($I$(8).equals$O$O(name, this.imgPlus.getName$())) return;
this.imgPlus.setName$S(name);
p$1.update$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.imgPlus.getSource$();
});

Clazz.newMeth(C$, 'setSource$S', function (source) {
this.imgPlus.setSource$S(source);
});

Clazz.newMeth(C$, 'getValidBits$', function () {
var validBits=this.imgPlus.getValidBits$();
if (validBits > 0) return validBits;
return this.getType$().getBitsPerPixel$();
});

Clazz.newMeth(C$, 'setValidBits$I', function (bits) {
this.imgPlus.setValidBits$I(bits);
});

Clazz.newMeth(C$, 'getChannelMinimum$I', function (c) {
return this.imgPlus.getChannelMinimum$I(c);
});

Clazz.newMeth(C$, 'setChannelMinimum$I$D', function (c, min) {
this.imgPlus.setChannelMinimum$I$D(c, min);
});

Clazz.newMeth(C$, 'getChannelMaximum$I', function (c) {
return this.imgPlus.getChannelMaximum$I(c);
});

Clazz.newMeth(C$, 'setChannelMaximum$I$D', function (c, max) {
this.imgPlus.setChannelMaximum$I$D(c, max);
});

Clazz.newMeth(C$, 'getCompositeChannelCount$', function () {
return this.imgPlus.getCompositeChannelCount$();
});

Clazz.newMeth(C$, 'setCompositeChannelCount$I', function (count) {
this.imgPlus.setCompositeChannelCount$I(count);
});

Clazz.newMeth(C$, 'getColorTable$I', function (no) {
return this.imgPlus.getColorTable$I(no);
});

Clazz.newMeth(C$, 'setColorTable$net_imglib2_display_ColorTable$I', function (lut, no) {
this.imgPlus.setColorTable$net_imglib2_display_ColorTable$I(lut, no);
});

Clazz.newMeth(C$, 'initializeColorTables$I', function (count) {
this.imgPlus.initializeColorTables$I(count);
});

Clazz.newMeth(C$, 'getColorTableCount$', function () {
return this.imgPlus.getColorTableCount$();
});

Clazz.newMeth(C$, 'getBytesOfInfo$', function () {
var bitsPerPix=this.getType$().getBitsPerPixel$();
var pixCount=1;
for (var d=0; d < this.numDimensions$(); d++) {
pixCount*=this.dimension$I(d);
}
var totBits=bitsPerPix * pixCount;
return totBits / 8;
});

Clazz.newMeth(C$, 'createArrayDataAccess$O', function (newPlane) {
if (Clazz.instanceOf(newPlane, Clazz.array(Byte.TYPE, -1))) {
return Clazz.new_($I$(9,1).c$$BA,[newPlane]);
} else if (Clazz.instanceOf(newPlane, Clazz.array(Short.TYPE, -1))) {
return Clazz.new_($I$(10,1).c$$HA,[newPlane]);
} else if (Clazz.instanceOf(newPlane, Clazz.array(Integer.TYPE, -1))) {
return Clazz.new_($I$(11,1).c$$IA,[newPlane]);
} else if (Clazz.instanceOf(newPlane, Clazz.array(Float.TYPE, -1))) {
return Clazz.new_($I$(12,1).c$$FA,[newPlane]);
} else if (Clazz.instanceOf(newPlane, Clazz.array(Long.TYPE, -1))) {
return Clazz.new_($I$(13,1).c$$JA,[newPlane]);
} else if (Clazz.instanceOf(newPlane, Clazz.array(Double.TYPE, -1))) {
return Clazz.new_($I$(14,1).c$$DA,[newPlane]);
}return null;
}, p$1);

Clazz.newMeth(C$, 'copyDataValues$net_imglib2_img_Img$net_imglib2_img_Img', function (input, output) {
var position=Clazz.array(Long.TYPE, [output.numDimensions$()]);
var outputCursor=output.localizingCursor$();
var inputAccessor=input.randomAccess$();
while (outputCursor.hasNext$()){
outputCursor.next$();
outputCursor.localize$JA(position);
inputAccessor.setPosition$JA(position);
var value=inputAccessor.get$().getRealDouble$();
outputCursor.get$().setReal$D(value);
}
}, p$1);

Clazz.newMeth(C$, 'copyOfPlane$I', function (planeNum) {
var dimensions=Clazz.array(Long.TYPE, [this.imgPlus.numDimensions$()]);
this.imgPlus.dimensions$JA(dimensions);
var w=dimensions[0];
var h=dimensions[1];
if (w * h > 2147483647) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't create an in memory plane of " + (w * h) + " entities (MAX = " + 2147483647 + ")" ]);
}var type=this.getType$();
if (!(Clazz.instanceOf(type, "net.imglib2.type.NativeType"))) return null;
var nativeType=type;
var storageFactory=Clazz.new_($I$(15,1).c$$TT,[nativeType]);
var container=storageFactory.create$JA([w, h]);
var input=this.imgPlus.randomAccess$();
var output=container.randomAccess$();
var planeIndexSpans=Clazz.array(Long.TYPE, [dimensions.length - 2]);
for (var i=0; i < planeIndexSpans.length; i++) planeIndexSpans[i]=dimensions[i + 2];

var planeExtents=Clazz.new_($I$(16,1).c$$JA,[planeIndexSpans]);
var planePos=Clazz.array(Long.TYPE, [planeExtents.numDimensions$()]);
var pos=planeExtents.createPosition$();
pos.setIndex$J(planeNum);
pos.localize$JA(planePos);
var inputPos=Clazz.array(Long.TYPE, [dimensions.length]);
for (var i=2; i < dimensions.length; i++) inputPos[i]=planePos[i - 2];

var outputPos=Clazz.array(Long.TYPE, [2]);
input.setPosition$JA(inputPos);
output.setPosition$JA(outputPos);
var inputRef=input.get$();
var outputRef=output.get$();
var maxX=((w - 1)|0);
var maxY=((h - 1)|0);
for (var y=0; y <= maxY; y++) {
for (var x=0; x <= maxX; x++) {
var value=inputRef.getRealDouble$();
outputRef.setReal$D(value);
if (x != maxX) {
input.move$I$I(1, 0);
output.move$I$I(1, 0);
}}
if (y != maxY) {
input.move$I$I(-maxX, 0);
output.move$I$I(-maxX, 0);
input.move$I$I(1, 1);
output.move$I$I(1, 1);
}}
var store=container.update$O(null);
return store.getCurrentStorageArray$();
}, p$1);

Clazz.newMeth(C$, 'createBlankCopy$net_imagej_ImgPlus', function (img) {
var dimensions=Clazz.array(Long.TYPE, [img.numDimensions$()]);
img.dimensions$JA(dimensions);
var blankImg=img.factory$().create$JA(dimensions);
return Clazz.new_(1,{T:"Object"},$I$(17,1).c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata,[blankImg, img]);
}, 1);

Clazz.newMeth(C$, 'wrapAsImgPlus$net_imglib2_img_Img$net_imagej_axis_CalibratedAxisA', function (newImg, calibAxes) {
return Clazz.new_(1,{T:"Object"},$I$(17,1).c$$net_imglib2_img_Img$S$net_imagej_axis_CalibratedAxisA,[newImg, this.getName$(), calibAxes]);
}, p$1);

Clazz.newMeth(C$, 'update$Z', function (metadataOnly) {
this.setDirty$Z(true);
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(18,1).c$$net_imagej_Dataset$Z,[this, metadataOnly]));
}, p$1);

Clazz.newMeth(C$, 'mergedColorCompatible', function () {
if (this.isSigned$()) return false;
if (!this.isInteger$()) return false;
if (this.getType$().getBitsPerPixel$() != 8) return false;
if (this.imgPlus.dimensionIndex$net_imagej_axis_AxisType($I$(19).CHANNEL) < 0) return false;
if (this.imgPlus.dimension$I(this.dimensionIndex$net_imagej_axis_AxisType($I$(19).CHANNEL)) != 3) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'copy$', function () {
var copy=this.getImgPlus$().copy$();
return Clazz.new_(C$.c$$org_scijava_Context$net_imagej_ImgPlus,[this.getContext$(), copy]);
});

Clazz.newMeth(C$, 'factory$', function () {
return ((P$.DefaultDataset$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultDataset$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('net.imagej.DatasetFactory'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'create$JA', function (dimensions) {
var imp=p$2.makeImgPlus$JA$TT.apply(this, [dimensions, this.type$()]);
return Clazz.new_($I$(20,1).c$$org_scijava_Context$net_imagej_ImgPlus,[this.b$['net.imagej.AbstractData'].getContext$.apply(this.b$['net.imagej.AbstractData'], []), imp]);
});

Clazz.newMeth(C$, ['create$JA$net_imglib2_type_numeric_RealType','create$JA$TT'], function (dimensions, type) {
var imp=p$2.makeImgPlus$JA$TT.apply(this, [dimensions, type]);
return Clazz.new_($I$(20,1).c$$org_scijava_Context$net_imagej_ImgPlus,[this.b$['net.imagej.AbstractData'].getContext$.apply(this.b$['net.imagej.AbstractData'], []), imp]);
});

Clazz.newMeth(C$, 'makeImgPlus$JA$TT', function (dim, type) {
var factory;
try {
factory=this.b$['net.imagej.DefaultDataset'].getImgPlus$.apply(this.b$['net.imagej.DefaultDataset'], []).factory$().imgFactory$TS(type);
} catch (exc) {
if (Clazz.exceptionOf(exc,"net.imglib2.exception.IncompatibleTypeException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["Ill-understood type weirdness", exc]);
} else {
throw exc;
}
}
var img=factory.create$JA$TT(dim, type);
return Clazz.instanceOf(img, "net.imagej.ImgPlus") ? img : Clazz.new_(1,{T:"Object"},$I$(17,1).c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata,[img, this.b$['net.imagej.DefaultDataset'].getImgPlus$.apply(this.b$['net.imagej.DefaultDataset'], [])]);
}, p$2);
})()
), Clazz.new_($I$(21,1).c$$net_imglib2_type_numeric_RealType, [this, null, this.getType$()],P$.DefaultDataset$1));
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return this.getImgPlus$().randomAccess$();
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.getImgPlus$().randomAccess$net_imglib2_Interval(interval);
});

Clazz.newMeth(C$, 'cursor$', function () {
return this.getImgPlus$().cursor$();
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.getImgPlus$().localizingCursor$();
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.getImgPlus$().firstElement$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.getImgPlus$().iterationOrder$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.getImgPlus$().size$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.getImgPlus$().iterator$();
});

Clazz.newMeth(C$, 'getProperties$', function () {
return this.imgPlus.getProperties$();
});
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataTypeService','net.imagej.types.DataTypeService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
