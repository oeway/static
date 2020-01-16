(function(){var P$=Clazz.newPackage("net.imagej.overlay"),I$=[[0,'net.imglib2.roi.PolygonRegionOfInterest','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes','net.imglib2.RealPoint']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PolygonOverlay", null, 'net.imagej.overlay.AbstractROIOverlay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$TR.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).X]), 0);
this.setAxis$TA$I(Clazz.new_($I$(2,1).c$$net_imagej_axis_AxisType,[$I$(3).Y]), 1);
}, 1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
var roi=this.getRegionOfInterest$();
var vertexCount=roi.getVertexCount$();
out.writeInt$I(vertexCount);
for (var i=0; i < vertexCount; i++) {
var vertex=roi.getVertex$I(i);
out.writeDouble$D(vertex.getDoublePosition$I(0));
out.writeDouble$D(vertex.getDoublePosition$I(1));
}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var roi=this.getRegionOfInterest$();
while (roi.getVertexCount$() > 0){
roi.removeVertex$I(0);
}
var vertexCount=$in.readInt$();
for (var i=0; i < vertexCount; i++) {
var vertex=Clazz.new_($I$(4,1).c$$DA,[Clazz.array(Double.TYPE, -1, [$in.readDouble$(), $in.readDouble$()])]);
roi.addVertex$I$net_imglib2_RealLocalizable(i, vertex);
}
});

Clazz.newMeth(C$, 'move$DA', function (deltas) {
this.getRegionOfInterest$().move$DA(deltas);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
