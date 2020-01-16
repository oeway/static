(function(){var P$=Clazz.newPackage("net.imagej.overlay"),I$=[[0,'net.imglib2.roi.LineRegionOfInterest','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LineOverlay", null, 'net.imagej.overlay.AbstractROIOverlay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$TR.apply(this,[Clazz.new_($I$(1,1).c$$DA$DA,[Clazz.array(Double.TYPE, [2]), Clazz.array(Double.TYPE, [2])])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(1,1).c$$DA$DA,[Clazz.array(Double.TYPE, [2]), Clazz.array(Double.TYPE, [2])])]);C$.$init$.apply(this);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).X]), 0);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).Y]), 1);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$DA$DA', function (context, ptStart, ptEnd) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(1,1).c$$DA$DA,[ptStart, ptEnd])]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return ptStart.length == ptEnd.length});
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).X]), 0);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).Y]), 1);
}, 1);

Clazz.newMeth(C$, 'getLineStart$DA', function (pt) {
this.getRegionOfInterest$().getPoint1$DA(pt);
});

Clazz.newMeth(C$, 'getLineEnd$DA', function (pt) {
this.getRegionOfInterest$().getPoint2$DA(pt);
});

Clazz.newMeth(C$, 'setLineStart$DA', function (pt) {
this.getRegionOfInterest$().setPoint1$DA(pt);
});

Clazz.newMeth(C$, 'setLineEnd$DA', function (pt) {
this.getRegionOfInterest$().setPoint2$DA(pt);
});

Clazz.newMeth(C$, 'getLineStart$I', function (dim) {
return this.getRegionOfInterest$().getPoint1$I(dim);
});

Clazz.newMeth(C$, 'getLineEnd$I', function (dim) {
return this.getRegionOfInterest$().getPoint2$I(dim);
});

Clazz.newMeth(C$, 'setLineStart$D$I', function (val, dim) {
this.getRegionOfInterest$().setPoint1$D$I(val, dim);
});

Clazz.newMeth(C$, 'setLineEnd$D$I', function (val, dim) {
this.getRegionOfInterest$().setPoint2$D$I(val, dim);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.getRegionOfInterest$().numDimensions$();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
var roi=this.getRegionOfInterest$();
var numDims=roi.numDimensions$();
out.writeInt$I(numDims);
for (var i=0; i < numDims; i++) {
out.writeDouble$D(roi.getPoint1$I(i));
}
for (var i=0; i < numDims; i++) {
out.writeDouble$D(roi.getPoint2$I(i));
}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var nDimensions=$in.readInt$();
var pt1=Clazz.array(Double.TYPE, [nDimensions]);
var pt2=Clazz.array(Double.TYPE, [nDimensions]);
for (var i=0; i < nDimensions; i++) {
pt1[i]=$in.readDouble$();
}
for (var i=0; i < nDimensions; i++) {
pt2[i]=$in.readDouble$();
}
var roi=this.getRegionOfInterest$();
roi.setPoint1$DA(pt1);
roi.setPoint1$DA(pt2);
});

Clazz.newMeth(C$, 'move$DA', function (deltas) {
this.getRegionOfInterest$().move$DA(deltas);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
