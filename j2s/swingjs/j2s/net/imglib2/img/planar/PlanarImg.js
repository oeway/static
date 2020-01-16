(function(){var P$=Clazz.newPackage("net.imglib2.img.planar"),p$1={},I$=[[0,'net.imglib2.img.planar.PlanarCursor1D','net.imglib2.img.planar.PlanarCursor2D','net.imglib2.img.planar.PlanarCursor','net.imglib2.img.planar.PlanarLocalizingCursor1D','net.imglib2.img.planar.PlanarLocalizingCursor2D','net.imglib2.img.planar.PlanarLocalizingCursor','net.imglib2.img.planar.PlanarRandomAccess1D','net.imglib2.img.planar.PlanarRandomAccess','net.imglib2.FlatIterationOrder','net.imglib2.img.planar.PlanarImgFactory','net.imglib2.util.Intervals','net.imglib2.img.planar.PlanarPlaneSubsetCursor','net.imglib2.img.planar.PlanarPlaneSubsetLocalizingCursor','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PlanarImg", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.img.AbstractNativeImg', ['net.imglib2.img.basictypeaccess.PlanarAccess', 'net.imglib2.view.iteration.SubIntervalIterable']);
C$.$classes$=[['PlanarContainerSampler',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numSlices'],'O',['dimensions','int[]','+sliceSteps','mirror','java.util.List']]]

Clazz.newMeth(C$, ['c$$java_util_List$JA$net_imglib2_util_Fraction','c$null'], function (slices, dim, entitiesPerPixel) {
;C$.superclazz.c$$JA$net_imglib2_util_Fraction.apply(this,[dim, entitiesPerPixel]);C$.$init$.apply(this);
this.dimensions=C$.longToIntArray$JA(dim);
this.sliceSteps=C$.computeSliceSteps$JA(dim);
this.numSlices=C$.numberOfSlices$JA(dim);
if (slices.size$() != this.numSlices) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.mirror=slices;
}, 1);

Clazz.newMeth(C$, 'c$$JA$net_imglib2_util_Fraction', function (dim, entitiesPerPixel) {
C$.c$$java_util_List$JA$net_imglib2_util_Fraction.apply(this, [C$.emptySlices$JA(dim), dim, entitiesPerPixel]);
}, 1);

Clazz.newMeth(C$, ['c$$TA$JA$net_imglib2_util_Fraction'], function (creator, dim, entitiesPerPixel) {
C$.c$$java_util_List$JA$net_imglib2_util_Fraction.apply(this, [C$.createSlices$TA$JA$net_imglib2_util_Fraction(creator, dim, entitiesPerPixel), dim, entitiesPerPixel]);
}, 1);

Clazz.newMeth(C$, 'update$O', function (c) {
var i=(c).getCurrentSliceIndex$();
return this.mirror.get$I(i < 0 ? 0 : (i >= this.numSlices ? this.numSlices - 1 : i));
});

Clazz.newMeth(C$, 'numSlices$', function () {
return this.numSlices;
});

Clazz.newMeth(C$, 'getIndex$IA', function (l) {
if (this.n > 1) return l[1] * this.dimensions[0] + l[0];
return l[0];
});

Clazz.newMeth(C$, 'indexToGlobalPosition$I$I$IA', function (sliceIndex, indexInSlice, position) {
if (this.n > 1) {
position[1]=(indexInSlice/this.dimensions[0]|0);
position[0]=indexInSlice - position[1] * this.dimensions[0];
if (this.n > 2) {
var maxDim=this.n - 1;
for (var d=2; d < maxDim; ++d) {
var j=(sliceIndex/this.dimensions[d]|0);
position[d]=sliceIndex - j * this.dimensions[d];
sliceIndex=j;
}
position[maxDim]=sliceIndex;
}} else {
position[0]=indexInSlice;
}});

Clazz.newMeth(C$, 'indexToGlobalPosition$I$I$I', function (sliceIndex, indexInSlice, dim) {
if (dim == 0) return indexInSlice % this.dimensions[0];
 else if (dim == 1) return (indexInSlice/this.dimensions[0]|0);
 else if (dim < this.n) return ((sliceIndex/this.sliceSteps[dim]|0)) % this.dimensions[dim];
 else return 0;
});

Clazz.newMeth(C$, 'cursor$', function () {
if (this.n == 1) return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_img_planar_PlanarImg,[this]);
 else if (this.n == 2) return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_img_planar_PlanarImg,[this]);
 else return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$net_imglib2_img_planar_PlanarImg,[this]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
if (this.n == 1) return Clazz.new_(1,{T:"Object"},$I$(4,1).c$$net_imglib2_img_planar_PlanarImg,[this]);
 else if (this.n == 2) return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$net_imglib2_img_planar_PlanarImg,[this]);
 else return Clazz.new_(1,{T:"Object"},$I$(6,1).c$$net_imglib2_img_planar_PlanarImg,[this]);
});

Clazz.newMeth(C$, 'randomAccess$', function () {
if (this.n == 1) return Clazz.new_(1,{T:"Object"},$I$(7,1).c$$net_imglib2_img_planar_PlanarImg,[this]);
return Clazz.new_(1,{T:"Object"},$I$(8,1).c$$net_imglib2_img_planar_PlanarImg,[this]);
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return Clazz.new_($I$(9,1).c$$net_imglib2_Interval,[this]);
});

Clazz.newMeth(C$, 'getPlane$I', function (no) {
return this.mirror.get$I(no);
});

Clazz.newMeth(C$, ['setPlane$I$TA'], function (no, plane) {
this.mirror.set$I$TE(no, plane);
});

Clazz.newMeth(C$, 'factory$', function () {
return Clazz.new_(1,{T:"Object"},$I$(10,1).c$$TT,[this.linkedType]);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=this.factory$().create$JA(this.dimension);
var cursor1=this.cursor$();
var cursor2=copy.cursor$();
while (cursor1.hasNext$())cursor2.next$().set$TT(cursor1.next$());

return copy;
});

Clazz.newMeth(C$, 'supportsOptimizedCursor$net_imglib2_Interval', function (interval) {
return $I$(11).contains$net_imglib2_Interval$net_imglib2_Interval(this, interval) && p$1.correspondsToPlane$net_imglib2_Interval.apply(this, [interval]) ;
});

Clazz.newMeth(C$, 'subIntervalIterationOrder$net_imglib2_Interval', function (interval) {
return Clazz.new_($I$(9,1).c$$net_imglib2_Interval,[interval]);
});

Clazz.newMeth(C$, 'cursor$net_imglib2_Interval', function (interval) {
Clazz.assert(C$, this, function(){return (this.supportsOptimizedCursor$net_imglib2_Interval(interval))});
return Clazz.new_(1,{T:"Object"},$I$(12,1).c$$net_imglib2_img_planar_PlanarImg$net_imglib2_Interval,[this, interval]);
});

Clazz.newMeth(C$, 'correspondsToPlane$net_imglib2_Interval', function (interval) {
if (interval.dimension$I(0) != this.dimension[0]) return false;
if (this.dimension.length == 1) return true;
if (interval.dimension$I(1) != this.dimension[1]) return false;
for (var d=2; d < interval.numDimensions$(); ++d) {
if (interval.dimension$I(d) != 1) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'localizingCursor$net_imglib2_Interval', function (interval) {
Clazz.assert(C$, this, function(){return (this.supportsOptimizedCursor$net_imglib2_Interval(interval))});
return Clazz.new_(1,{T:"Object"},$I$(13,1).c$$net_imglib2_img_planar_PlanarImg$net_imglib2_Interval,[this, interval]);
});

Clazz.newMeth(C$, 'numberOfSlices$JA', function (dimensions) {
var s=1;
for (var d=2; d < dimensions.length; ++d) s*=dimensions[d];

return s;
}, 1);

Clazz.newMeth(C$, 'longToIntArray$JA', function (dim) {
var dimensions=Clazz.array(Integer.TYPE, [dim.length]);
for (var d=0; d < dim.length; ++d) dimensions[d]=(dim[d]|0);

return dimensions;
}, 1);

Clazz.newMeth(C$, 'computeSliceSteps$JA', function (dimensions) {
var n=dimensions.length;
if (n <= 2) return null;
var sliceSteps=Clazz.array(Integer.TYPE, [n]);
sliceSteps[2]=1;
for (var i=3; i < n; ++i) sliceSteps[i]=(dimensions[i - 1]|0) * sliceSteps[i - 1];

return sliceSteps;
}, 1);

Clazz.newMeth(C$, 'emptySlices$JA', function (dim) {
var numSlices=C$.numberOfSlices$JA(dim);
var mirror=Clazz.new_(1,{E:"Object"},$I$(14,1).c$$I,[numSlices]);
for (var i=0; i < numSlices; ++i) mirror.add$TE(null);

return mirror;
}, 1);

Clazz.newMeth(C$, ['createSlices$TA$JA$net_imglib2_util_Fraction'], function (creator, dim, entitiesPerPixel) {
var numSlices=C$.numberOfSlices$JA(dim);
var mirror=Clazz.new_(1,{E:"Object"},$I$(14,1).c$$I,[numSlices]);
var pixelsPerPlane=((((dim.length > 1) ? dim[1] : 1) * dim[0])|0);
var numEntitiesPerSlice=(entitiesPerPixel.mulCeil$J(pixelsPerPlane)|0);
for (var i=0; i < numSlices; ++i) mirror.add$TE(creator.createArray$I(numEntitiesPerSlice));

return mirror;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.PlanarImg, "PlanarContainerSampler", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
