(function(){var P$=Clazz.newPackage("net.imagej.overlay"),p$1={},I$=[[0,'java.util.ArrayList','net.imglib2.roi.RectangleRegionOfInterest','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PointOverlay", null, 'net.imagej.overlay.AbstractROIOverlay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.points=Clazz.new_(1,{E:"double[]"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['points','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$TR.apply(this,[Clazz.new_($I$(2,1).c$$DA$DA,[Clazz.array(Double.TYPE, [2]), Clazz.array(Double.TYPE, [2])])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(2,1).c$$DA$DA,[Clazz.array(Double.TYPE, [2]), Clazz.array(Double.TYPE, [2])])]);C$.$init$.apply(this);
this.setAxis$TA$I(Clazz.new_($I$(3,1).c$$net_imagej_axis_AxisType,[$I$(4).X]), 0);
this.setAxis$TA$I(Clazz.new_($I$(3,1).c$$net_imagej_axis_AxisType,[$I$(4).Y]), 1);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$java_util_List', function (context, pts) {
C$.c$$org_scijava_Context.apply(this, [context]);
this.setPoints$java_util_List(pts);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$DA', function (context, pt) {
C$.c$$org_scijava_Context$java_util_List.apply(this, [context, $I$(5).asList$TTA([pt])]);
}, 1);

Clazz.newMeth(C$, 'getPoints$', function () {
return this.points;
});

Clazz.newMeth(C$, 'setPoints$java_util_List', function (pts) {
this.points.clear$();
for (var pt, $pt = pts.iterator$(); $pt.hasNext$()&&((pt=($pt.next$())),1);) {
this.points.add$TE(pt.clone$());
}
p$1.calcRegion.apply(this, []);
});

Clazz.newMeth(C$, 'setPoint$I$DA', function (i, pt) {
var p=this.points.get$I(i);
p[0]=pt[0];
p[1]=pt[1];
p$1.calcRegion.apply(this, []);
});

Clazz.newMeth(C$, 'getPoint$I', function (i) {
return this.points.get$I(i);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeInt$I(this.points.size$());
out.writeInt$I(this.numDimensions$());
for (var p=0; p < this.points.size$(); p++) {
var pt=this.points.get$I(p);
for (var i=0; i < this.numDimensions$(); i++) {
out.writeDouble$D(pt[i]);
}
}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.points.clear$();
var numP=$in.readInt$();
var nDimensions=$in.readInt$();
var position=Clazz.array(Double.TYPE, [nDimensions]);
for (var p=0; p < numP; p++) {
for (var j=0; j < nDimensions; j++) {
position[j]=$in.readDouble$();
}
this.points.add$TE(position.clone$());
}
p$1.calcRegion.apply(this, []);
});

Clazz.newMeth(C$, 'move$DA', function (deltas) {
this.getRegionOfInterest$().move$DA(deltas);
for (var p=0; p < this.points.size$(); p++) {
var pt=this.points.get$I(p);
for (var i=0; i < deltas.length; i++) {
pt[i] += deltas[i];
}
}
});

Clazz.newMeth(C$, 'calcRegion', function () {
var minX=Infinity;
var minY=Infinity;
var maxX=-Infinity;
var maxY=-Infinity;
for (var pt, $pt = this.points.iterator$(); $pt.hasNext$()&&((pt=($pt.next$())),1);) {
if (pt[0] < minX ) minX=pt[0];
if (pt[0] > maxX ) maxX=pt[0];
if (pt[1] < minY ) minY=pt[1];
if (pt[1] > maxY ) maxY=pt[1];
}
this.getRegionOfInterest$().setOrigin$D$I(minX, 0);
this.getRegionOfInterest$().setOrigin$D$I(minY, 1);
this.getRegionOfInterest$().setExtent$D$I(maxX - minX, 0);
this.getRegionOfInterest$().setExtent$D$I(maxY - minY, 1);
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
