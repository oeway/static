(function(){var P$=Clazz.newPackage("net.imagej.overlay"),I$=[[0,'net.imglib2.roi.AngleRegionOfInterest','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AngleOverlay", null, 'net.imagej.overlay.AbstractROIOverlay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$TR.apply(this,[Clazz.new_($I$(1,1).c$$DA$DA$DA,[Clazz.array(Double.TYPE, [2]), Clazz.array(Double.TYPE, [2]), Clazz.array(Double.TYPE, [2])])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(1,1).c$$DA$DA$DA,[Clazz.array(Double.TYPE, [2]), Clazz.array(Double.TYPE, [2]), Clazz.array(Double.TYPE, [2])])]);C$.$init$.apply(this);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).X]), 0);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).Y]), 1);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$DA$DA$DA', function (context, ctr, end1, end2) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(1,1).c$$DA$DA$DA,[Clazz.array(Double.TYPE, [ctr.length]), Clazz.array(Double.TYPE, [end1.length]), Clazz.array(Double.TYPE, [end2.length])])]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return ctr.length == end1.length});
Clazz.assert(C$, this, function(){return ctr.length == end2.length});
var roi=this.getRegionOfInterest$();
roi.setCenter$DA(ctr);
roi.setPoint1$DA(end1);
roi.setPoint2$DA(end2);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).X]), 0);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).Y]), 1);
}, 1);

Clazz.newMeth(C$, 'getCenter$DA', function (pt) {
this.getRegionOfInterest$().getCenter$DA(pt);
});

Clazz.newMeth(C$, 'getPoint1$DA', function (pt) {
this.getRegionOfInterest$().getPoint1$DA(pt);
});

Clazz.newMeth(C$, 'getPoint2$DA', function (pt) {
this.getRegionOfInterest$().getPoint2$DA(pt);
});

Clazz.newMeth(C$, 'setCenter$DA', function (pt) {
this.getRegionOfInterest$().setCenter$DA(pt);
});

Clazz.newMeth(C$, 'setPoint1$DA', function (pt) {
this.getRegionOfInterest$().setPoint1$DA(pt);
});

Clazz.newMeth(C$, 'setPoint2$DA', function (pt) {
this.getRegionOfInterest$().setPoint2$DA(pt);
});

Clazz.newMeth(C$, 'getCenter$I', function (dim) {
return this.getRegionOfInterest$().getCenter$I(dim);
});

Clazz.newMeth(C$, 'getPoint1$I', function (dim) {
return this.getRegionOfInterest$().getPoint1$I(dim);
});

Clazz.newMeth(C$, 'getPoint2$I', function (dim) {
return this.getRegionOfInterest$().getPoint2$I(dim);
});

Clazz.newMeth(C$, 'setCenter$D$I', function (val, dim) {
this.getRegionOfInterest$().setCenter$D$I(val, dim);
});

Clazz.newMeth(C$, 'setPoint1$D$I', function (val, dim) {
this.getRegionOfInterest$().setPoint1$D$I(val, dim);
});

Clazz.newMeth(C$, 'setPoint2$D$I', function (val, dim) {
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
for (var i=0; i < numDims; i++) out.writeDouble$D(roi.getPoint1$I(i));

for (var i=0; i < numDims; i++) out.writeDouble$D(roi.getCenter$I(i));

for (var i=0; i < numDims; i++) out.writeDouble$D(roi.getPoint2$I(i));

});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var nDimensions=$in.readInt$();
var pts=Clazz.array(Double.TYPE, [3, nDimensions]);
for (var i=0; i < pts.length; i++) {
for (var j=0; j < nDimensions; j++) {
pts[i][j]=$in.readDouble$();
}
}
var roi=this.getRegionOfInterest$();
roi.setPoint1$DA(pts[0]);
roi.setCenter$DA(pts[1]);
roi.setPoint2$DA(pts[2]);
});

Clazz.newMeth(C$, 'move$DA', function (deltas) {
this.getRegionOfInterest$().move$DA(deltas);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
