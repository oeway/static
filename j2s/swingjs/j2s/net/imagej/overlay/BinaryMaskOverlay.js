(function(){var P$=Clazz.newPackage("net.imagej.overlay"),p$1={},I$=[[0,'java.io.ByteArrayOutputStream','java.io.DataOutputStream','java.util.zip.DeflaterOutputStream','java.util.Arrays','net.imglib2.img.array.ArrayImgs','net.imglib2.type.logic.BitType','java.io.ByteArrayInputStream','java.io.DataInputStream','java.util.zip.InflaterInputStream','net.imglib2.roi.BinaryMaskRegionOfInterest','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes','net.imglib2.view.Views']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BinaryMaskOverlay", null, 'net.imagej.overlay.AbstractROIOverlay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$net_imglib2_roi_BinaryMaskRegionOfInterest', function (context, roi) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, roi]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
var theRoi=this.getRegionOfInterest$();
var ra=p$1.constantImg$I.apply(this, [theRoi.numDimensions$()]);
var ii=theRoi.getIterableIntervalOverROI$net_imglib2_RandomAccessible(ra);
var c=ii.localizingCursor$();
out.writeInt$I(theRoi.numDimensions$());
for (var i=0; i < theRoi.numDimensions$(); i++) {
out.writeLong$J(ii.dimension$I(i));
}
var maskOrigin=theRoi.getOrigin$();
for (var i=0; i < maskOrigin.length; i++) out.writeDouble$D(maskOrigin[i]);

var s=Clazz.new_($I$(1,1));
var ds=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[Clazz.new_($I$(3,1).c$$java_io_OutputStream,[s])]);
var initial_position=Clazz.array(Long.TYPE, [theRoi.numDimensions$()]);
var next_position=Clazz.array(Long.TYPE, [theRoi.numDimensions$()]);
$I$(4).fill$JA$J(initial_position, -9223372036854775808);
var run=0;
while (c.hasNext$()){
c.next$();
next_position[0]=initial_position[0] + run;
for (var i=0; i < theRoi.numDimensions$(); i++) {
if (next_position[i] != c.getLongPosition$I(i)) {
if (run > 0) {
ds.writeLong$J(run);
for (var j=0; j < theRoi.numDimensions$(); j++) {
ds.writeLong$J(initial_position[j]);
}
}run=0;
c.localize$JA(initial_position);
c.localize$JA(next_position);
break;
}}
run++;
}
if (run > 0) {
ds.writeLong$J(run);
for (var j=0; j < theRoi.numDimensions$(); j++) {
ds.writeLong$J(initial_position[j]);
}
}ds.writeLong$J(0);
ds.close$();
var buffer=s.toByteArray$();
out.writeInt$I(buffer.length);
out.write$BA(buffer);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
var nDimensions=$in.readInt$();
var dimensions=Clazz.array(Long.TYPE, [nDimensions]);
for (var i=0; i < nDimensions; i++) {
dimensions[i]=$in.readLong$();
}
var maskOrigin=Clazz.array(Double.TYPE, [nDimensions]);
for (var i=0; i < nDimensions; i++) {
maskOrigin[i]=$in.readDouble$();
}
var img=$I$(5).bits$JA(dimensions);
img.setLinkedType$TT(Clazz.new_($I$(6,1).c$$net_imglib2_img_NativeImg,[img]));
var ra=img.randomAccess$();
var buffer=Clazz.array(Byte.TYPE, [$in.readInt$()]);
$in.read$BA(buffer);
var s=Clazz.new_($I$(7,1).c$$BA,[buffer]);
var ds=Clazz.new_($I$(8,1).c$$java_io_InputStream,[Clazz.new_($I$(9,1).c$$java_io_InputStream,[s])]);
var position=Clazz.array(Long.TYPE, [nDimensions]);
while (true){
var run=ds.readLong$();
if (run == 0) break;
for (var i=0; i < nDimensions; i++) {
position[i]=ds.readLong$();
}
for (var i=0; i < run; i++) {
ra.setPosition$JA(position);
position[0]++;
ra.get$().set$Z(true);
}
}
this.setRegionOfInterest$TR(Clazz.new_(1,{T:"Object",I:"Object"},$I$(10,1).c$$TI,[img]));
this.getRegionOfInterest$().move$DA(maskOrigin);
});

Clazz.newMeth(C$, 'duplicate$', function () {
var newRoi=Clazz.new_(1,{T:"Object",I:"Object"},$I$(10,1).c$$TI,[(this.getRegionOfInterest$().getImg$().copy$())]);
newRoi.move$DA(this.getRegionOfInterest$().getOrigin$());
var overlay=Clazz.new_(1,{U:"Object",V:"Object"},C$.c$$org_scijava_Context$net_imglib2_roi_BinaryMaskRegionOfInterest,[this.getContext$(), newRoi]);
overlay.setAlpha$I(this.getAlpha$());
overlay.setAxis$TA$I(Clazz.new_($I$(11,1).c$$net_imagej_axis_AxisType,[$I$(12).X]), 0);
overlay.setAxis$TA$I(Clazz.new_($I$(11,1).c$$net_imagej_axis_AxisType,[$I$(12).Y]), 1);
overlay.setFillColor$org_scijava_util_ColorRGB(this.getFillColor$());
overlay.setLineColor$org_scijava_util_ColorRGB(this.getLineColor$());
overlay.setLineEndArrowStyle$net_imagej_overlay_Overlay_ArrowStyle(this.getLineEndArrowStyle$());
overlay.setLineStartArrowStyle$net_imagej_overlay_Overlay_ArrowStyle(this.getLineStartArrowStyle$());
overlay.setLineStyle$net_imagej_overlay_Overlay_LineStyle(this.getLineStyle$());
overlay.setLineWidth$D(this.getLineWidth$());
overlay.setName$S(this.getName$());
return overlay;
});

Clazz.newMeth(C$, 'move$DA', function (deltas) {
this.getRegionOfInterest$().move$DA(deltas);
});

Clazz.newMeth(C$, 'constantImg$I', function (numDims) {
var dims=Clazz.array(Long.TYPE, [numDims]);
$I$(4).fill$JA$J(dims, 1);
var bitImg=$I$(5).bits$JA(dims);
bitImg.setLinkedType$TT(Clazz.new_($I$(6,1).c$$net_imglib2_img_NativeImg,[bitImg]));
bitImg.cursor$().next$().set$Z(true);
return $I$(13).extendBorder$TF(bitImg);
}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
