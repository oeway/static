(function(){var P$=Clazz.newPackage("net.imagej.ui.viewer.image"),p$1={},p$2={},I$=[[0,['net.imagej.ui.viewer.image.AbstractImageDisplayViewer','.FractionalScale'],['net.imagej.ui.viewer.image.AbstractImageDisplayViewer','.ZoomScaleOption'],'net.imglib2.img.cell.AbstractCellImg','net.imagej.axis.Axes','StringBuilder','org.scijava.util.UnitUtils',['net.imagej.ui.viewer.image.AbstractImageDisplayViewer','.FractionalScaleConverter'],['net.imagej.ui.viewer.image.AbstractImageDisplayViewer','.PercentScaleConverter']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractImageDisplayViewer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.ui.viewer.AbstractDisplayViewer', 'net.imagej.ui.viewer.image.ImageDisplayViewer');
C$.$classes$=[['ZoomScaleOption',28],['ScaleConverter',10],['PercentScaleConverter',2],['FractionalScaleConverter',2],['FractionalScale',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imageDisplayService','net.imagej.display.ImageDisplayService','toolService','org.scijava.tool.ToolService','optionsService','org.scijava.options.OptionsService','$display','net.imagej.display.ImageDisplay']]]

Clazz.newMeth(C$, 'getDisplay$', function () {
return this.$display;
});

Clazz.newMeth(C$, 'canView$org_scijava_display_Display', function (d) {
return Clazz.instanceOf(d, "net.imagej.display.ImageDisplay");
});

Clazz.newMeth(C$, 'view$org_scijava_ui_viewer_DisplayWindow$org_scijava_display_Display', function (w, d) {
C$.superclazz.prototype.view$org_scijava_ui_viewer_DisplayWindow$org_scijava_display_Display.apply(this, [w, d]);
this.$display=d;
});

Clazz.newMeth(C$, 'getDataset$net_imagej_display_DataView', function (view) {
var data=view.getData$();
return Clazz.instanceOf(data, "net.imagej.Dataset") ? data : null;
});

Clazz.newMeth(C$, 'updateLabel$', function () {
var d=this.getDisplay$();
if (d == null  || d.getActiveView$() == null  ) return;
var p=this.getPanel$();
if (p != null ) p.setLabel$S(p$2.makeLabel.apply(this, []));
});

Clazz.newMeth(C$, 'getZoomScaleOption$', function () {
return $I$(2).OPTIONS_PERCENT_SCALE;
});

Clazz.newMeth(C$, 'updateTitle$', function () {
var trailer="";
var ds=this.imageDisplayService.getActiveDataset$net_imagej_display_ImageDisplay(this.$display);
if (ds != null ) {
var img=ds.getImgPlus$().getImg$();
if (Clazz.getClass($I$(3)).isAssignableFrom$Class(img.getClass$())) {
trailer=" (V)";
}}var name=this.getDisplay$().getName$();
if (name == null ) name="";
this.getWindow$().setTitle$S(name + trailer);
});

Clazz.newMeth(C$, 'makeLabel', function () {
var view=this.getDisplay$().getActiveView$();
var dataset=this.getDataset$net_imagej_display_DataView(view);
var xIndex=dataset.dimensionIndex$net_imagej_axis_AxisType($I$(4).X);
var yIndex=dataset.dimensionIndex$net_imagej_axis_AxisType($I$(4).Y);
var pos=view.getPlanePosition$();
var sb=Clazz.new_($I$(5,1));
for (var i=0, p=-1; i < dataset.numDimensions$(); i++) {
var dim=dataset.dimension$I(i);
var axis=dataset.axis$I(i).type$();
if (axis.isXY$()) continue;
p++;
if (dim == 1) continue;
sb.append$O(axis);
sb.append$S(": ");
sb.append$J(pos.getLongPosition$I(p) + 1);
sb.append$S("/");
sb.append$J(dim);
sb.append$S("; ");
}
sb.append$J(dataset.dimension$I(xIndex));
sb.append$S("x");
sb.append$J(dataset.dimension$I(yIndex));
sb.append$S("; ");
sb.append$S(dataset.getTypeLabelLong$());
sb.append$S("; ");
sb.append$S(p$2.byteInfoString$net_imagej_Dataset.apply(this, [dataset]));
sb.append$S("; ");
var zoomFactor=this.getDisplay$().getCanvas$().getZoomFactor$();
if (zoomFactor != 1 ) {
sb.append$S("(");
sb.append$S(p$2.getScaleConverter.apply(this, []).getString$(zoomFactor));
sb.append$S(")");
}return sb.toString();
}, p$2);

Clazz.newMeth(C$, 'byteInfoString$net_imagej_Dataset', function (ds) {
var byteCount=ds.getBytesOfInfo$();
return $I$(6).getAbbreviatedByteLabel$D(byteCount);
}, p$2);

Clazz.newMeth(C$, 'getScaleConverter', function () {
if (this.getZoomScaleOption$().equals$O($I$(2).OPTIONS_FRACTIONAL_SCALE)) {
return Clazz.new_($I$(7,1), [this, null]);
}return Clazz.new_($I$(8,1), [this, null]);
}, p$2);

Clazz.newMeth(C$, 'isMyDataset$net_imagej_Dataset', function (ds) {
if (ds == null ) return false;
var disp=this.getDisplay$();
return this.imageDisplayService.getActiveDataset$net_imagej_display_ImageDisplay(disp) === ds ;
}, p$2);

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_window_WinActivatedEvent', function (event) {
if (event.getDisplay$() !== this.getDisplay$() ) return;
var d=this.getDisplay$();
if (d == null ) return;
d.getCanvas$().setCursor$org_scijava_input_MouseCursor(this.toolService.getActiveTool$().getCursor$());
});

Clazz.newMeth(C$, 'onEvent$net_imagej_display_event_PanZoomEvent', function (event) {
if (event.getDisplay$() !== this.getDisplay$() ) return;
this.updateLabel$();
});

Clazz.newMeth(C$, 'onEvent$net_imagej_event_DatasetRestructuredEvent', function (event) {
if (p$2.isMyDataset$net_imagej_Dataset.apply(this, [event.getObject$()])) this.updateLabel$();
});

Clazz.newMeth(C$, 'onEvent$net_imagej_display_event_DelayedPositionEvent', function (event) {
if (event.getDisplay$() !== this.getDisplay$() ) return;
this.updateLabel$();
});

Clazz.newMeth(C$, 'onEvent$net_imagej_event_DatasetUpdatedEvent', function (event) {
if (!p$2.isMyDataset$net_imagej_Dataset.apply(this, [event.getObject$()])) return;
this.updateLabel$();
this.updateTitle$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayUpdatedEvent', function (event) {
if (event.getDisplay$() !== this.getDisplay$() ) return;
this.updateLabel$();
this.updateTitle$();
});
C$.$getAnn$ = function(){ return [
[['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['toolService','org.scijava.tool.ToolService',null,['org.scijava.plugin.Parameter']],['']],
  [['optionsService','org.scijava.options.OptionsService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_display_event_window_WinActivatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$net_imagej_display_event_PanZoomEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$net_imagej_event_DatasetRestructuredEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$net_imagej_display_event_DelayedPositionEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$net_imagej_event_DatasetUpdatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayUpdatedEvent',['org.scijava.event.EventHandler']],['']]]}
;
(function(){/*e*/var C$=Clazz.newClass(P$.AbstractImageDisplayViewer, "ZoomScaleOption", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "OPTIONS_PERCENT_SCALE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OPTIONS_FRACTIONAL_SCALE", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.AbstractImageDisplayViewer, "ScaleConverter", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractImageDisplayViewer, "PercentScaleConverter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['net.imagej.ui.viewer.image.AbstractImageDisplayViewer','net.imagej.ui.viewer.image.AbstractImageDisplayViewer.ScaleConverter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['getString$D','getString$'], function (realScale) {
return String.format$S$OA("%.2f%%", [new Double(realScale * 100)]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractImageDisplayViewer, "FractionalScaleConverter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['net.imagej.ui.viewer.image.AbstractImageDisplayViewer','net.imagej.ui.viewer.image.AbstractImageDisplayViewer.ScaleConverter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['getString$D','getString$'], function (realScale) {
var scale=Clazz.new_($I$(1,1).c$$D, [this, null, realScale]);
if (scale.getDenom$() == 0) {
if (realScale >= 1 ) return String.format$S$OA("%.2fX", [new Double(realScale)]);
return String.format$S$OA("1/%.2fX", [new Double((1 / realScale))]);
}if (scale.getDenom$() == 1) {
return String.format$S$OA("%dX", [new Integer(scale.getNumer$())]);
}return String.format$S$OA("%d/%dX", [new Integer(scale.getNumer$()), new Integer(scale.getDenom$())]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractImageDisplayViewer, "FractionalScale", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numer','denom']]]

Clazz.newMeth(C$, 'c$$D', function (realScale) {
;C$.$init$.apply(this);
this.numer=0;
this.denom=0;
if (realScale >= 1 ) {
var floor=Math.floor(realScale);
if ((realScale - floor) < 1.0E-4 ) {
this.numer=(floor|0);
this.denom=1;
}} else {
var recip=1.0 / realScale;
var floor=Math.floor(recip);
if ((recip - floor) < 1.0E-4 ) {
this.numer=1;
this.denom=(floor|0);
}}if (this.denom == 0) p$1.lookForBestFraction$D.apply(this, [realScale]);
}, 1);

Clazz.newMeth(C$, 'getNumer$', function () {
return this.numer;
});

Clazz.newMeth(C$, 'getDenom$', function () {
return this.denom;
});

Clazz.newMeth(C$, 'lookForBestFraction$D', function (scale) {
var quickRange=32;
for (var n=1; n <= 32; n++) {
for (var d=1; d <= 32; d++) {
var frac=1.0 * n / d;
if (Math.abs(scale - frac) < 1.0E-4 ) {
this.numer=n;
this.denom=d;
return;
}}
}
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
