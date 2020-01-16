(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'net.imglib2.interpolation.Interpolant','net.imglib2.view.RandomAccessibleOnRealRandomAccessible','net.imglib2.view.ExtendedRandomAccessibleInterval','net.imglib2.outofbounds.OutOfBoundsMirrorFactory',['net.imglib2.outofbounds.OutOfBoundsMirrorFactory','.Boundary'],'net.imglib2.outofbounds.OutOfBoundsConstantValueFactory','net.imglib2.util.Util','net.imglib2.outofbounds.OutOfBoundsRandomValueFactory','net.imglib2.outofbounds.OutOfBoundsPeriodicFactory','net.imglib2.outofbounds.OutOfBoundsBorderFactory','net.imglib2.view.IntervalView','net.imglib2.transform.integer.MixedTransform','net.imglib2.view.MixedTransformView','net.imglib2.util.Intervals','net.imglib2.IterableInterval','net.imglib2.view.IterableRandomAccessibleInterval','net.imglib2.FlatIterationOrder','net.imglib2.view.composite.CompositeIntervalView',['net.imglib2.view.composite.GenericComposite','.Factory'],['net.imglib2.view.composite.RealComposite','.Factory'],['net.imglib2.view.composite.NumericComposite','.Factory'],'net.imglib2.view.composite.CompositeView','net.imglib2.view.SubsampleIntervalView','net.imglib2.view.SubsampleView','net.imglib2.view.StackView','java.util.Arrays','net.imglib2.transform.integer.shear.ShearTransform','net.imglib2.view.TransformView','net.imglib2.transform.integer.shear.InverseShearTransform','net.imglib2.transform.integer.BoundingBox','net.imglib2.transform.integer.permutation.AbstractPermutationTransform','net.imglib2.transform.integer.permutation.PermutationTransform','net.imglib2.transform.integer.permutation.SingleDimensionPermutationTransform','net.imglib2.view.RandomAccessiblePair','net.imglib2.view.HyperSlicesView',['net.imglib2.view.StackView','.StackAccessMode'],'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Views");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'interpolate$TF$net_imglib2_interpolation_InterpolatorFactory', function (source, factory) {
return Clazz.new_(1,{T:"Object",F:"Object"},$I$(1,1).c$$TF$net_imglib2_interpolation_InterpolatorFactory,[source, factory]);
}, 1);

Clazz.newMeth(C$, 'raster$net_imglib2_RealRandomAccessible', function (source) {
return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_RealRandomAccessible,[source]);
}, 1);

Clazz.newMeth(C$, 'extend$TF$net_imglib2_outofbounds_OutOfBoundsFactory', function (source, factory) {
return Clazz.new_(1,{T:"Object",F:"Object"},$I$(3,1).c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory,[source, factory]);
}, 1);

Clazz.newMeth(C$, 'extendMirrorSingle$TF', function (source) {
return Clazz.new_(1,{T:"Object",F:"Object"},$I$(3,1).c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory,[source, Clazz.new_(1,{T:"Object",F:"Object"},$I$(4,1).c$$net_imglib2_outofbounds_OutOfBoundsMirrorFactory_Boundary,[$I$(5).SINGLE])]);
}, 1);

Clazz.newMeth(C$, 'extendMirrorDouble$TF', function (source) {
return Clazz.new_(1,{T:"Object",F:"Object"},$I$(3,1).c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory,[source, Clazz.new_(1,{T:"Object",F:"Object"},$I$(4,1).c$$net_imglib2_outofbounds_OutOfBoundsMirrorFactory_Boundary,[$I$(5).DOUBLE])]);
}, 1);

Clazz.newMeth(C$, 'extendValue$TF$TT', function (source, value) {
return Clazz.new_(1,{T:"Object",F:"Object"},$I$(3,1).c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory,[source, Clazz.new_(1,{T:"Object",F:"Object"},$I$(6,1).c$$TT,[value])]);
}, 1);

Clazz.newMeth(C$, 'extendZero$TF', function (source) {
var zero=$I$(7).getTypeFromInterval$TF(source).createVariable$();
zero.setZero$();
return Clazz.new_(1,{T:"Object",F:"Object"},$I$(3,1).c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory,[source, Clazz.new_(1,{T:"Object",F:"Object"},$I$(6,1).c$$TT,[zero])]);
}, 1);

Clazz.newMeth(C$, 'extendRandom$TF$D$D', function (source, min, max) {
return Clazz.new_(1,{T:"Object",F:"Object"},$I$(3,1).c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory,[source, Clazz.new_(1,{T:"Object",F:"Object"},$I$(8,1).c$$TT$D$D,[$I$(7).getTypeFromInterval$TF(source), min, max])]);
}, 1);

Clazz.newMeth(C$, 'extendPeriodic$TF', function (source) {
return Clazz.new_(1,{T:"Object",F:"Object"},$I$(3,1).c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory,[source, Clazz.new_(1,{T:"Object",F:"Object"},$I$(9,1))]);
}, 1);

Clazz.newMeth(C$, 'extendBorder$TF', function (source) {
return Clazz.new_(1,{T:"Object",F:"Object"},$I$(3,1).c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory,[source, Clazz.new_(1,{T:"Object",F:"Object"},$I$(10,1))]);
}, 1);

Clazz.newMeth(C$, 'interval$net_imglib2_RandomAccessible$JA$JA', function (randomAccessible, min, max) {
return Clazz.new_(1,{T:"Object"},$I$(11,1).c$$net_imglib2_RandomAccessible$JA$JA,[randomAccessible, min, max]);
}, 1);

Clazz.newMeth(C$, 'interval$net_imglib2_RandomAccessible$net_imglib2_Interval', function (randomAccessible, interval) {
return Clazz.new_(1,{T:"Object"},$I$(11,1).c$$net_imglib2_RandomAccessible$net_imglib2_Interval,[randomAccessible, interval]);
}, 1);

Clazz.newMeth(C$, 'rotate$net_imglib2_RandomAccessible$I$I', function (randomAccessible, fromAxis, toAxis) {
var n=randomAccessible.numDimensions$();
var t=Clazz.new_($I$(12,1).c$$I$I,[n, n]);
if (fromAxis != toAxis) {
var component=Clazz.array(Integer.TYPE, [n]);
var inv=Clazz.array(Boolean.TYPE, [n]);
for (var e=0; e < n; ++e) {
if (e == toAxis) {
component[e]=fromAxis;
inv[e]=true;
} else if (e == fromAxis) {
component[e]=toAxis;
} else {
component[e]=e;
}}
t.setComponentMapping$IA(component);
t.setComponentInversion$ZA(inv);
}return Clazz.new_(1,{T:"Object"},$I$(13,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_integer_Mixed,[randomAccessible, t]);
}, 1);

Clazz.newMeth(C$, 'rotate$net_imglib2_RandomAccessibleInterval$I$I', function (interval, fromAxis, toAxis) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(min);
interval.max$JA(max);
if (fromAxis != toAxis) {
var fromMinNew=-max[toAxis];
var fromMaxNew=-min[toAxis];
min[toAxis]=min[fromAxis];
max[toAxis]=max[fromAxis];
min[fromAxis]=fromMinNew;
max[fromAxis]=fromMaxNew;
}return C$.interval$net_imglib2_RandomAccessible$JA$JA(C$.rotate$net_imglib2_RandomAccessible$I$I(interval, fromAxis, toAxis), min, max);
}, 1);

Clazz.newMeth(C$, 'permute$net_imglib2_RandomAccessible$I$I', function (randomAccessible, fromAxis, toAxis) {
var n=randomAccessible.numDimensions$();
var component=Clazz.array(Integer.TYPE, [n]);
for (var e=0; e < n; ++e) component[e]=e;

component[fromAxis]=toAxis;
component[toAxis]=fromAxis;
var t=Clazz.new_($I$(12,1).c$$I$I,[n, n]);
t.setComponentMapping$IA(component);
return Clazz.new_(1,{T:"Object"},$I$(13,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_integer_Mixed,[randomAccessible, t]);
}, 1);

Clazz.newMeth(C$, 'permute$net_imglib2_RandomAccessibleInterval$I$I', function (interval, fromAxis, toAxis) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(min);
interval.max$JA(max);
var fromMinNew=min[toAxis];
var fromMaxNew=max[toAxis];
min[toAxis]=min[fromAxis];
max[toAxis]=max[fromAxis];
min[fromAxis]=fromMinNew;
max[fromAxis]=fromMaxNew;
return C$.interval$net_imglib2_RandomAccessible$JA$JA(C$.permute$net_imglib2_RandomAccessible$I$I(interval, fromAxis, toAxis), min, max);
}, 1);

Clazz.newMeth(C$, 'moveAxis$net_imglib2_RandomAccessible$I$I', function (image, fromAxis, toAxis) {
if (fromAxis == toAxis) return image;
var direction=toAxis > fromAxis ? 1 : -1;
var res=image;
for (var i=fromAxis; i != toAxis; i+=direction) res=C$.permute$net_imglib2_RandomAccessible$I$I(res, i, i + direction);

return res;
}, 1);

Clazz.newMeth(C$, 'moveAxis$net_imglib2_RandomAccessibleInterval$I$I', function (image, fromAxis, toAxis) {
if (fromAxis == toAxis) return image;
var direction=toAxis > fromAxis ? 1 : -1;
var res=image;
for (var i=fromAxis; i != toAxis; i+=direction) res=C$.permute$net_imglib2_RandomAccessibleInterval$I$I(res, i, i + direction);

return res;
}, 1);

Clazz.newMeth(C$, 'translate$net_imglib2_RandomAccessible$JA', function (randomAccessible, translation) {
var n=randomAccessible.numDimensions$();
var t=Clazz.new_($I$(12,1).c$$I$I,[n, n]);
t.setInverseTranslation$JA(translation);
return Clazz.new_(1,{T:"Object"},$I$(13,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_integer_Mixed,[randomAccessible, t]);
}, 1);

Clazz.newMeth(C$, 'translate$net_imglib2_RandomAccessibleInterval$JA', function (interval, translation) {
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.translate$net_imglib2_RandomAccessible$JA(interval, translation), $I$(14).translate$net_imglib2_Interval$JA(interval, translation));
}, 1);

Clazz.newMeth(C$, 'offset$net_imglib2_RandomAccessible$JA', function (randomAccessible, offset) {
var n=randomAccessible.numDimensions$();
var t=Clazz.new_($I$(12,1).c$$I$I,[n, n]);
t.setTranslation$JA(offset);
return Clazz.new_(1,{T:"Object"},$I$(13,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_integer_Mixed,[randomAccessible, t]);
}, 1);

Clazz.newMeth(C$, 'offset$net_imglib2_RandomAccessibleInterval$JA', function (interval, offset) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(min);
interval.max$JA(max);
for (var d=0; d < n; ++d) {
min[d]-=offset[d];
max[d]-=offset[d];
}
return C$.interval$net_imglib2_RandomAccessible$JA$JA(C$.offset$net_imglib2_RandomAccessible$JA(interval, offset), min, max);
}, 1);

Clazz.newMeth(C$, 'zeroMin$net_imglib2_RandomAccessibleInterval', function (interval) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
var offset=Clazz.array(Long.TYPE, [n]);
interval.min$JA(offset);
interval.max$JA(max);
for (var d=0; d < n; ++d) max[d]-=offset[d];

var t=Clazz.new_($I$(12,1).c$$I$I,[n, n]);
t.setTranslation$JA(offset);
return C$.interval$net_imglib2_RandomAccessible$JA$JA(Clazz.new_(1,{T:"Object"},$I$(13,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_integer_Mixed,[interval, t]), min, max);
}, 1);

Clazz.newMeth(C$, 'hyperSlice$net_imglib2_RandomAccessible$I$J', function (view, d, pos) {
var m=view.numDimensions$();
var n=m - 1;
var t=Clazz.new_($I$(12,1).c$$I$I,[n, m]);
var translation=Clazz.array(Long.TYPE, [m]);
translation[d]=pos;
var zero=Clazz.array(Boolean.TYPE, [m]);
var component=Clazz.array(Integer.TYPE, [m]);
for (var e=0; e < m; ++e) {
if (e < d) {
zero[e]=false;
component[e]=e;
} else if (e > d) {
zero[e]=false;
component[e]=e - 1;
} else {
zero[e]=true;
component[e]=0;
}}
t.setTranslation$JA(translation);
t.setComponentZero$ZA(zero);
t.setComponentMapping$IA(component);
return Clazz.new_(1,{T:"Object"},$I$(13,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_integer_Mixed,[view, t]);
}, 1);

Clazz.newMeth(C$, 'hyperSlice$net_imglib2_RandomAccessibleInterval$I$J', function (view, d, pos) {
var m=view.numDimensions$();
var n=m - 1;
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
for (var e=0; e < m; ++e) {
if (e < d) {
min[e]=view.min$I(e);
max[e]=view.max$I(e);
} else if (e > d) {
min[e - 1]=view.min$I(e);
max[e - 1]=view.max$I(e);
}}
return C$.interval$net_imglib2_RandomAccessible$JA$JA(C$.hyperSlice$net_imglib2_RandomAccessible$I$J(view, d, pos), min, max);
}, 1);

Clazz.newMeth(C$, 'addDimension$net_imglib2_RandomAccessible', function (randomAccessible) {
var m=randomAccessible.numDimensions$();
var n=m + 1;
var t=Clazz.new_($I$(12,1).c$$I$I,[n, m]);
return Clazz.new_(1,{T:"Object"},$I$(13,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_integer_Mixed,[randomAccessible, t]);
}, 1);

Clazz.newMeth(C$, 'addDimension$net_imglib2_RandomAccessibleInterval$J$J', function (interval, minOfNewDim, maxOfNewDim) {
var m=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [m + 1]);
var max=Clazz.array(Long.TYPE, [m + 1]);
for (var d=0; d < m; ++d) {
min[d]=interval.min$I(d);
max[d]=interval.max$I(d);
}
min[m]=minOfNewDim;
max[m]=maxOfNewDim;
return C$.interval$net_imglib2_RandomAccessible$JA$JA(C$.addDimension$net_imglib2_RandomAccessible(interval), min, max);
}, 1);

Clazz.newMeth(C$, 'invertAxis$net_imglib2_RandomAccessible$I', function (randomAccessible, d) {
var n=randomAccessible.numDimensions$();
var inv=Clazz.array(Boolean.TYPE, [n]);
inv[d]=true;
var t=Clazz.new_($I$(12,1).c$$I$I,[n, n]);
t.setComponentInversion$ZA(inv);
return Clazz.new_(1,{T:"Object"},$I$(13,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_integer_Mixed,[randomAccessible, t]);
}, 1);

Clazz.newMeth(C$, 'invertAxis$net_imglib2_RandomAccessibleInterval$I', function (interval, d) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(min);
interval.max$JA(max);
var tmp=min[d];
min[d]=-max[d];
max[d]=-tmp;
return C$.interval$net_imglib2_RandomAccessible$JA$JA(C$.invertAxis$net_imglib2_RandomAccessible$I(interval, d), min, max);
}, 1);

Clazz.newMeth(C$, 'offsetInterval$net_imglib2_RandomAccessible$JA$JA', function (randomAccessible, offset, dimension) {
var n=randomAccessible.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
for (var d=0; d < n; ++d) max[d]=dimension[d] - 1;

return C$.interval$net_imglib2_RandomAccessible$JA$JA(C$.offset$net_imglib2_RandomAccessible$JA(randomAccessible, offset), min, max);
}, 1);

Clazz.newMeth(C$, 'offsetInterval$net_imglib2_RandomAccessible$net_imglib2_Interval', function (randomAccessible, interval) {
var n=randomAccessible.numDimensions$();
var offset=Clazz.array(Long.TYPE, [n]);
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(offset);
interval.max$JA(max);
for (var d=0; d < n; ++d) max[d]-=offset[d];

return C$.interval$net_imglib2_RandomAccessible$JA$JA(C$.offset$net_imglib2_RandomAccessible$JA(randomAccessible, offset), min, max);
}, 1);

Clazz.newMeth(C$, 'isZeroMin$net_imglib2_Interval', function (interval) {
for (var d=0; d < interval.numDimensions$(); ++d) if (interval.min$I(d) != 0) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'iterable$net_imglib2_RandomAccessibleInterval', function (randomAccessibleInterval) {
if (Clazz.getClass($I$(15),['cursor$','localizingCursor$']).isInstance$O(randomAccessibleInterval)) {
var raiType=$I$(7).getTypeFromInterval$TF(randomAccessibleInterval).getClass$();
var iter=(randomAccessibleInterval).iterator$();
var o=iter.hasNext$() ? iter.next$() : null;
if (raiType.isInstance$O(o)) return randomAccessibleInterval;
}return Clazz.new_(1,{T:"Object"},$I$(16,1).c$$net_imglib2_RandomAccessibleInterval,[randomAccessibleInterval]);
}, 1);

Clazz.newMeth(C$, 'flatIterable$net_imglib2_RandomAccessibleInterval', function (randomAccessibleInterval) {
if (Clazz.getClass($I$(15),['cursor$','localizingCursor$']).isInstance$O(randomAccessibleInterval) && Clazz.getClass($I$(17)).isInstance$O((randomAccessibleInterval).iterationOrder$()) ) {
var raiType=$I$(7).getTypeFromInterval$TF(randomAccessibleInterval).getClass$();
var iter=(randomAccessibleInterval).iterator$();
var o=iter.hasNext$() ? iter.next$() : null;
if (raiType.isInstance$O(o)) return randomAccessibleInterval;
}return Clazz.new_(1,{T:"Object"},$I$(16,1).c$$net_imglib2_RandomAccessibleInterval,[randomAccessibleInterval]);
}, 1);

Clazz.newMeth(C$, 'collapse$net_imglib2_RandomAccessibleInterval', function (source) {
return Clazz.new_(1,{T:"Object",C:"net.imglib2.view.composite.GenericComposite"},$I$(18,1).c$$net_imglib2_RandomAccessibleInterval$net_imglib2_view_composite_CompositeFactory,[source, Clazz.new_(1,{T:"Object"},$I$(19,1))]);
}, 1);

Clazz.newMeth(C$, 'collapseReal$net_imglib2_RandomAccessibleInterval', function (source) {
return Clazz.new_(1,{T:"Object",C:"net.imglib2.view.composite.RealComposite"},$I$(18,1).c$$net_imglib2_RandomAccessibleInterval$net_imglib2_view_composite_CompositeFactory,[source, Clazz.new_(1,{T:"Object"},$I$(20,1).c$$I,[(source.dimension$I(source.numDimensions$() - 1)|0)])]);
}, 1);

Clazz.newMeth(C$, 'collapseNumeric$net_imglib2_RandomAccessibleInterval', function (source) {
return Clazz.new_(1,{T:"Object",C:"net.imglib2.view.composite.NumericComposite"},$I$(18,1).c$$net_imglib2_RandomAccessibleInterval$net_imglib2_view_composite_CompositeFactory,[source, Clazz.new_(1,{T:"Object"},$I$(21,1).c$$I,[(source.dimension$I(source.numDimensions$() - 1)|0)])]);
}, 1);

Clazz.newMeth(C$, 'collapse$net_imglib2_RandomAccessible', function (source) {
return Clazz.new_(1,{T:"Object",C:"net.imglib2.view.composite.GenericComposite"},$I$(22,1).c$$net_imglib2_RandomAccessible$net_imglib2_view_composite_CompositeFactory,[source, Clazz.new_(1,{T:"Object"},$I$(19,1))]);
}, 1);

Clazz.newMeth(C$, 'collapseReal$net_imglib2_RandomAccessible$I', function (source, numChannels) {
return Clazz.new_(1,{T:"Object",C:"net.imglib2.view.composite.RealComposite"},$I$(22,1).c$$net_imglib2_RandomAccessible$net_imglib2_view_composite_CompositeFactory,[source, Clazz.new_(1,{T:"Object"},$I$(20,1).c$$I,[numChannels])]);
}, 1);

Clazz.newMeth(C$, 'collapseNumeric$net_imglib2_RandomAccessible$I', function (source, numChannels) {
return Clazz.new_(1,{T:"Object",C:"net.imglib2.view.composite.NumericComposite"},$I$(22,1).c$$net_imglib2_RandomAccessible$net_imglib2_view_composite_CompositeFactory,[source, Clazz.new_(1,{T:"Object"},$I$(21,1).c$$I,[numChannels])]);
}, 1);

Clazz.newMeth(C$, 'subsample$net_imglib2_RandomAccessibleInterval$J', function (source, step) {
return Clazz.new_(1,{T:"Object"},$I$(23,1).c$$net_imglib2_RandomAccessibleInterval$J,[source, step]);
}, 1);

Clazz.newMeth(C$, 'subsample$net_imglib2_RandomAccessibleInterval$JA', function (source, steps) {
Clazz.assert(C$, this, function(){return steps.length >= source.numDimensions$()}, function(){return "Dimensions do not match."});
return Clazz.new_(1,{T:"Object"},$I$(23,1).c$$net_imglib2_RandomAccessibleInterval$JA,[source, steps]);
}, 1);

Clazz.newMeth(C$, 'subsample$net_imglib2_RandomAccessible$J', function (source, step) {
return Clazz.new_(1,{T:"Object"},$I$(24,1).c$$net_imglib2_RandomAccessible$J,[source, step]);
}, 1);

Clazz.newMeth(C$, 'subsample$net_imglib2_RandomAccessible$JA', function (source, steps) {
Clazz.assert(C$, this, function(){return steps.length >= source.numDimensions$()}, function(){return "Dimensions do not match."});
return Clazz.new_(1,{T:"Object"},$I$(24,1).c$$net_imglib2_RandomAccessible$JA,[source, steps]);
}, 1);

Clazz.newMeth(C$, 'dropSingletonDimensions$net_imglib2_RandomAccessibleInterval', function (source) {
var res=source;
for (var d=source.numDimensions$() - 1; d >= 0; --d) if (source.dimension$I(d) == 1) res=C$.hyperSlice$net_imglib2_RandomAccessibleInterval$I$J(res, d, source.min$I(d));

return res;
}, 1);

Clazz.newMeth(C$, 'stack$java_util_List', function (hyperslices) {
return Clazz.new_(1,{T:"Object"},$I$(25,1).c$$java_util_List,[hyperslices]);
}, 1);

Clazz.newMeth(C$, 'stack$net_imglib2_RandomAccessibleIntervalA', function (hyperslices) {
return Clazz.new_(1,{T:"Object"},$I$(25,1).c$$java_util_List,[$I$(26).asList$TTA(hyperslices)]);
}, 1);

Clazz.newMeth(C$, 'stack$net_imglib2_view_StackView_StackAccessMode$java_util_List', function (stackAccessMode, hyperslices) {
return Clazz.new_(1,{T:"Object"},$I$(25,1).c$$java_util_List$net_imglib2_view_StackView_StackAccessMode,[hyperslices, stackAccessMode]);
}, 1);

Clazz.newMeth(C$, 'stack$net_imglib2_view_StackView_StackAccessMode$net_imglib2_RandomAccessibleIntervalA', function (stackAccessMode, hyperslices) {
return Clazz.new_(1,{T:"Object"},$I$(25,1).c$$java_util_List$net_imglib2_view_StackView_StackAccessMode,[$I$(26).asList$TTA(hyperslices), stackAccessMode]);
}, 1);

Clazz.newMeth(C$, 'shear$net_imglib2_RandomAccessible$I$I', function (source, shearDimension, referenceDimension) {
var transform=Clazz.new_($I$(27,1).c$$I$I$I,[source.numDimensions$(), shearDimension, referenceDimension]);
return Clazz.new_(1,{T:"Object"},$I$(28,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_Transform,[source, transform.inverse$()]);
}, 1);

Clazz.newMeth(C$, 'unshear$net_imglib2_RandomAccessible$I$I', function (source, shearDimension, referenceDimension) {
var transform=Clazz.new_($I$(29,1).c$$I$I$I,[source.numDimensions$(), shearDimension, referenceDimension]);
return Clazz.new_(1,{T:"Object"},$I$(28,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_Transform,[source, transform.inverse$()]);
}, 1);

Clazz.newMeth(C$, 'shear$net_imglib2_RandomAccessible$net_imglib2_Interval$I$I', function (source, interval, shearDimension, referenceDimension) {
var transform=Clazz.new_($I$(27,1).c$$I$I$I,[source.numDimensions$(), shearDimension, referenceDimension]);
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.shear$net_imglib2_RandomAccessible$I$I(source, shearDimension, referenceDimension), transform.transform$net_imglib2_transform_integer_BoundingBox(Clazz.new_($I$(30,1).c$$net_imglib2_Interval,[interval])).getInterval$());
}, 1);

Clazz.newMeth(C$, 'unshear$net_imglib2_RandomAccessible$net_imglib2_Interval$I$I', function (source, interval, shearDimension, referenceDimension) {
var transform=Clazz.new_($I$(29,1).c$$I$I$I,[source.numDimensions$(), shearDimension, referenceDimension]);
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.unshear$net_imglib2_RandomAccessible$I$I(source, shearDimension, referenceDimension), transform.transform$net_imglib2_transform_integer_BoundingBox(Clazz.new_($I$(30,1).c$$net_imglib2_Interval,[interval])).getInterval$());
}, 1);

Clazz.newMeth(C$, 'permuteCoordinates$net_imglib2_RandomAccessibleInterval$IA', function (source, permutation) {
Clazz.assert(C$, this, function(){return $I$(31).checkBijectivity$IA(permutation)}, function(){return "Non-bijective LUT passed for coordinate permuation."});
Clazz.assert(C$, this, function(){return $I$(32).checkInterval$net_imglib2_Interval$IA(source, permutation)}, function(){return "Source interval boundaries do not match permutation."});
var nDim=source.numDimensions$();
var transform=Clazz.new_($I$(32,1).c$$IA$I$I,[permutation, nDim, nDim]);
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(Clazz.new_(1,{T:"Object"},$I$(28,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_Transform,[source, transform.inverse$()]), source);
}, 1);

Clazz.newMeth(C$, 'permuteCoordinates$net_imglib2_RandomAccessibleInterval$IA$I', function (source, permutation, d) {
Clazz.assert(C$, this, function(){return $I$(31).checkBijectivity$IA(permutation)}, function(){return "Non-bijective LUT passed for coordinate permuation."});
Clazz.assert(C$, this, function(){return source.min$I(d) == 0}, function(){return "Source with min[d] coordinate != 0 passed to coordinate permutation."});
Clazz.assert(C$, this, function(){return source.dimension$I(d) == permutation.length}, function(){return "Source with dimension[d] != LUT.length passed to coordinate permutation."});
var nDim=source.numDimensions$();
var transform=Clazz.new_($I$(33,1).c$$IA$I$I$I,[permutation, nDim, nDim, d]);
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(Clazz.new_(1,{T:"Object"},$I$(28,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_Transform,[source, transform.inverse$()]), source);
}, 1);

Clazz.newMeth(C$, 'permuteCoordinatesInverse$net_imglib2_RandomAccessibleInterval$IA', function (source, permutation) {
Clazz.assert(C$, this, function(){return $I$(31).checkBijectivity$IA(permutation)}, function(){return "Non-bijective LUT passed for coordinate permuation."});
Clazz.assert(C$, this, function(){return $I$(32).checkInterval$net_imglib2_Interval$IA(source, permutation)}, function(){return "Source interval boundaries do not match permutation."});
var nDim=source.numDimensions$();
var transform=Clazz.new_($I$(32,1).c$$IA$I$I,[permutation, nDim, nDim]).inverse$();
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(Clazz.new_(1,{T:"Object"},$I$(28,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_Transform,[source, transform.inverse$()]), source);
}, 1);

Clazz.newMeth(C$, 'permuteCoordinateInverse$net_imglib2_RandomAccessibleInterval$IA$I', function (source, permutation, d) {
return C$.permuteCoordinatesInverse$net_imglib2_RandomAccessibleInterval$IA$I(source, permutation, d);
}, 1);

Clazz.newMeth(C$, 'permuteCoordinatesInverse$net_imglib2_RandomAccessibleInterval$IA$I', function (source, permutation, d) {
Clazz.assert(C$, this, function(){return $I$(31).checkBijectivity$IA(permutation)}, function(){return "Non-bijective LUT passed for coordinate permuation."});
Clazz.assert(C$, this, function(){return source.min$I(d) == 0}, function(){return "Source with min[d] coordinate != 0 passed to coordinate permutation."});
Clazz.assert(C$, this, function(){return source.dimension$I(d) == permutation.length}, function(){return "Source with dimension[d] != LUT.length passed to coordinate permutation."});
var nDim=source.numDimensions$();
var transform=Clazz.new_($I$(33,1).c$$IA$I$I$I,[permutation, nDim, nDim, d]).inverse$();
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(Clazz.new_(1,{T:"Object"},$I$(28,1).c$$net_imglib2_RandomAccessible$net_imglib2_transform_Transform,[source, transform.inverse$()]), source);
}, 1);

Clazz.newMeth(C$, 'pair$net_imglib2_RandomAccessible$net_imglib2_RandomAccessible', function (sourceA, sourceB) {
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(34,1).c$$net_imglib2_RandomAccessible$net_imglib2_RandomAccessible,[sourceA, sourceB]);
}, 1);

Clazz.newMeth(C$, 'hyperSlices$net_imglib2_RandomAccessible$IA', function (source, axes) {
return Clazz.new_(1,{T:"Object"},$I$(35,1).c$$net_imglib2_RandomAccessible$IA,[source, axes]);
}, 1);

Clazz.newMeth(C$, 'expand$TF$net_imglib2_outofbounds_OutOfBoundsFactory$JA', function (source, oob, border) {
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.extend$TF$net_imglib2_outofbounds_OutOfBoundsFactory(source, oob), $I$(14).expand$net_imglib2_Interval$JA(source, border));
}, 1);

Clazz.newMeth(C$, 'expandMirrorSingle$net_imglib2_RandomAccessibleInterval$JA', function (source, border) {
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.extendMirrorSingle$TF(source), $I$(14).expand$net_imglib2_Interval$JA(source, border));
}, 1);

Clazz.newMeth(C$, 'expandMirrorDouble$net_imglib2_RandomAccessibleInterval$JA', function (source, border) {
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.extendMirrorDouble$TF(source), $I$(14).expand$net_imglib2_Interval$JA(source, border));
}, 1);

Clazz.newMeth(C$, 'expandValue$net_imglib2_RandomAccessibleInterval$TT$JA', function (source, t, border) {
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.extendValue$TF$TT(source, t), $I$(14).expand$net_imglib2_Interval$JA(source, border));
}, 1);

Clazz.newMeth(C$, 'expandZero$net_imglib2_RandomAccessibleInterval$JA', function (source, border) {
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.extendZero$TF(source), $I$(14).expand$net_imglib2_Interval$JA(source, border));
}, 1);

Clazz.newMeth(C$, 'expandRandom$net_imglib2_RandomAccessibleInterval$D$D$JA', function (source, min, max, border) {
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.extendRandom$TF$D$D(source, min, max), $I$(14).expand$net_imglib2_Interval$JA(source, border));
}, 1);

Clazz.newMeth(C$, 'expandPeriodic$net_imglib2_RandomAccessibleInterval$JA', function (source, border) {
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.extendPeriodic$TF(source), $I$(14).expand$net_imglib2_Interval$JA(source, border));
}, 1);

Clazz.newMeth(C$, 'expandBorder$net_imglib2_RandomAccessibleInterval$JA', function (source, border) {
return C$.interval$net_imglib2_RandomAccessible$net_imglib2_Interval(C$.extendBorder$TF(source), $I$(14).expand$net_imglib2_Interval$JA(source, border));
}, 1);

Clazz.newMeth(C$, 'concatenate$I$net_imglib2_RandomAccessibleIntervalA', function (concatenationAxis, sources) {
return C$.concatenate$I$net_imglib2_view_StackView_StackAccessMode$net_imglib2_RandomAccessibleIntervalA(concatenationAxis, $I$(36).DEFAULT, sources);
}, 1);

Clazz.newMeth(C$, 'concatenate$I$java_util_List', function (concatenationAxis, sources) {
return C$.concatenate$I$net_imglib2_view_StackView_StackAccessMode$java_util_List(concatenationAxis, $I$(36).DEFAULT, sources);
}, 1);

Clazz.newMeth(C$, 'concatenate$I$net_imglib2_view_StackView_StackAccessMode$net_imglib2_RandomAccessibleIntervalA', function (concatenationAxis, mode, sources) {
return C$.concatenate$I$net_imglib2_view_StackView_StackAccessMode$java_util_List(concatenationAxis, mode, $I$(26).asList$TTA(sources));
}, 1);

Clazz.newMeth(C$, 'concatenate$I$net_imglib2_view_StackView_StackAccessMode$java_util_List', function (concatenationAxis, mode, sources) {
Clazz.assert(C$, this, function(){return sources.size$() > 0});
var hyperSlices=Clazz.new_(1,{E:"net.imglib2.RandomAccessibleInterval"},$I$(37,1));
for (var source, $source = sources.iterator$(); $source.hasNext$()&&((source=($source.next$())),1);) for (var index=source.min$I(concatenationAxis); index <= source.max$I(concatenationAxis); ++index) hyperSlices.add$TE(C$.hyperSlice$net_imglib2_RandomAccessibleInterval$I$J(source, concatenationAxis, index));


var stacked=C$.stack$net_imglib2_view_StackView_StackAccessMode$java_util_List(mode, hyperSlices);
return C$.moveAxis$net_imglib2_RandomAccessibleInterval$I$I(stacked, stacked.numDimensions$() - 1, concatenationAxis);
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.$getAnn$ = function(){ return [
[['M:stack','net.imglib2.RandomAccessibleInterval','stack$net_imglib2_RandomAccessibleIntervalA',['SafeVarargs']],['']],
  [['M:concatenate','.','concatenate$I$net_imglib2_RandomAccessibleIntervalA',['SafeVarargs']],['']],
  [['M:concatenate','.','concatenate$I$net_imglib2_view_StackView_StackAccessMode$net_imglib2_RandomAccessibleIntervalA',['SafeVarargs']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
