(function(){var P$=Clazz.newPackage("net.imagej.overlay"),I$=[[0,'net.imglib2.roi.EllipseRegionOfInterest','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EllipseOverlay", null, 'net.imagej.overlay.AbstractROIOverlay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$TR.apply(this,[Clazz.new_($I$(1,1).c$$I,[2])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(1,1).c$$I,[2])]);C$.$init$.apply(this);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).X]), 0);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).Y]), 1);
}, 1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
var roi=this.getRegionOfInterest$();
out.writeDouble$D(roi.getOrigin$I(0));
out.writeDouble$D(roi.getOrigin$I(1));
out.writeDouble$D(roi.getRadius$I(0));
out.writeDouble$D(roi.getRadius$I(1));
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var roi=this.getRegionOfInterest$();
roi.setOrigin$D$I($in.readDouble$(), 0);
roi.setOrigin$D$I($in.readDouble$(), 1);
roi.setRadius$D$I($in.readDouble$(), 0);
roi.setRadius$D$I($in.readDouble$(), 1);
});

Clazz.newMeth(C$, 'move$DA', function (deltas) {
this.getRegionOfInterest$().move$DA(deltas);
});

Clazz.newMeth(C$, 'getOrigin$I', function (dim) {
return this.getRegionOfInterest$().getOrigin$I(dim);
});

Clazz.newMeth(C$, 'getRadius$I', function (dim) {
return this.getRegionOfInterest$().getRadius$I(dim);
});

Clazz.newMeth(C$, 'setOrigin$D$I', function (val, dim) {
this.getRegionOfInterest$().setOrigin$D$I(val, dim);
});

Clazz.newMeth(C$, 'setRadius$D$I', function (val, dim) {
this.getRegionOfInterest$().setRadius$D$I(val, dim);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
