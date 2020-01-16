(function(){var P$=Clazz.newPackage("net.imagej.display"),p$1={},I$=[[0,'net.imagej.interval.CombinedCalibratedRealInterval','java.util.concurrent.ConcurrentHashMap','net.imagej.display.DataView','net.imagej.display.event.AxisActivatedEvent','net.imagej.display.DefaultImageCanvas','net.imagej.axis.Axes','org.scijava.util.RealRect','net.imglib2.display.ColorTable','net.imagej.display.event.AxisPositionEvent','net.imagej.Data','net.imglib2.RandomAccessibleInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultImageDisplay", null, 'org.scijava.display.AbstractDisplay', 'net.imagej.display.ImageDisplay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.combinedInterval=Clazz.new_(1,{A:"net.imagej.axis.CalibratedAxis",S:"net.imagej.interval.CalibratedRealInterval"},$I$(1,1));
this.activeAxis=null;
this.pos=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"Long"},$I$(2,1));
}, 1);

C$.$fields$=[['O',['combinedInterval','net.imagej.interval.CombinedCalibratedRealInterval','threadService','org.scijava.thread.ThreadService','$displayService','org.scijava.display.DisplayService','$eventService','org.scijava.event.EventService','imageDisplayService','net.imagej.display.ImageDisplayService','datasetService','net.imagej.DatasetService','lutService','net.imagej.lut.LUTService','activeAxis','net.imagej.axis.AxisType','canvas','net.imagej.display.ImageCanvas','pos','java.util.concurrent.ConcurrentHashMap']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(3),['dispose$','getData$','getPlanePosition$','getPreferredHeight$','getPreferredWidth$','initialize$net_imagej_Data','isCompatible$net_imagej_Data','isSelected$','rebuild$','setSelected$Z','update$'])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'rebuild$', function () {
C$.superclazz.prototype.rebuild$.apply(this, []);
this.combinedInterval.clear$();
for (var view, $view = this.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
this.combinedInterval.add$TE(view.getData$());
}
this.combinedInterval.update$();
for (var view, $view = this.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
view.rebuild$();
}
for (var axis, $axis = this.pos.keySet$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
if (this.dimensionIndex$net_imagej_axis_AxisType(axis) < 0) {
this.pos.remove$O(axis);
}}
for (var i=0; i < this.numDimensions$(); i++) {
var axis=this.axis$I(i).type$();
if (axis.isXY$()) continue;
if (!this.pos.containsKey$O(axis)) {
this.pos.put$TK$TV(axis, new Long(this.min$I(i)));
}}
if (this.getActiveAxis$() == null ) p$1.initActiveAxis.apply(this, []);
});

Clazz.newMeth(C$, 'getActiveView$', function () {
return this.size$() > 0 ? this.get$I(0) : null;
});

Clazz.newMeth(C$, 'getActiveAxis$', function () {
return this.activeAxis;
});

Clazz.newMeth(C$, 'setActiveAxis$net_imagej_axis_AxisType', function (axis) {
if (this.dimensionIndex$net_imagej_axis_AxisType(axis) < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown axis: " + axis]);
}this.activeAxis=axis;
if (this.$eventService != null ) {
this.$eventService.publish$TE(Clazz.new_($I$(4,1).c$$net_imagej_display_ImageDisplay$net_imagej_axis_AxisType,[this, this.activeAxis]));
}});

Clazz.newMeth(C$, 'isVisible$net_imagej_display_DataView', function (view) {
for (var i=0; i < this.numDimensions$(); i++) {
var axis=this.axis$I(i).type$();
if (axis.isXY$()) continue;
var value=this.getLongPosition$net_imagej_axis_AxisType(axis);
var index=view.getData$().dimensionIndex$net_imagej_axis_AxisType(axis);
if (index < 0) {
if (value != view.getLongPosition$net_imagej_axis_AxisType(axis)) return false;
} else {
var min=index < 0 ? 0 : view.getData$().realMin$I(index);
var max=index < 0 ? 0 : view.getData$().realMax$I(index);
if (value < min  || value > max  ) {
return false;
}}}
return true;
});

Clazz.newMeth(C$, 'getCanvas$', function () {
if (this.canvas == null ) this.canvas=Clazz.new_($I$(5,1).c$$net_imagej_display_ImageDisplay,[this]);
return this.canvas;
});

Clazz.newMeth(C$, 'getPlaneExtents$', function () {
var xAxis=this.dimensionIndex$net_imagej_axis_AxisType($I$(6).X);
var yAxis=this.dimensionIndex$net_imagej_axis_AxisType($I$(6).Y);
var xMin=this.realMin$I(xAxis);
var yMin=this.realMin$I(yAxis);
var width=this.realMax$I(xAxis) - this.realMin$I(xAxis);
var height=this.realMax$I(yAxis) - this.realMin$I(yAxis);
return Clazz.new_($I$(7,1).c$$D$D$D$D,[xMin, yMin, width, height]);
});

Clazz.newMeth(C$, 'canDisplay$Class', function (c) {
return (this.imageDisplayService != null  && p$1.isImageClass$Class.apply(this, [c]) ) || (this.lutService != null  && Clazz.getClass($I$(8),['get$I$I','getComponentCount$','getLength$','getResampled$I$I$I','lookupARGB$D$D$D']).isAssignableFrom$Class(c) ) || C$.superclazz.prototype.canDisplay$Class.apply(this, [c])  ;
});

Clazz.newMeth(C$, 'display$O', function (o) {
var dataView=null;
var data=null;
if (Clazz.instanceOf(o, "net.imagej.display.DataView")) {
dataView=o;
} else if (Clazz.instanceOf(o, "net.imagej.Data")) {
data=o;
} else if (Clazz.instanceOf(o, "net.imglib2.RandomAccessibleInterval")) {
var d=this.datasetService.create$net_imglib2_RandomAccessibleInterval(o);
data=d;
} else if (Clazz.instanceOf(o, "net.imglib2.display.ColorTable")) {
var colorTable=o;
data=this.lutService.createDataset$S$net_imglib2_display_ColorTable(null, colorTable);
}if (data != null ) {
if (this.imageDisplayService == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["An ImageDisplayService is required to display Data objects"]);
}dataView=this.imageDisplayService.createDataView$net_imagej_Data(data);
}if (dataView == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible object: " + o + " [" + o.getClass$().getName$() + "]" ]);
}C$.superclazz.prototype.display$O.apply(this, [dataView]);
p$1.updateName$net_imagej_display_DataView.apply(this, [dataView]);
this.rebuild$();
});

Clazz.newMeth(C$, 'isDisplaying$O', function (o) {
if (C$.superclazz.prototype.isDisplaying$O.apply(this, [o])) return true;
for (var view, $view = this.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
if (o === view.getData$() ) return true;
}
return false;
});

Clazz.newMeth(C$, 'update$', function () {
this.combinedInterval.update$();
for (var view, $view = this.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
for (var i=0; i < this.numDimensions$(); i++) {
var axis=this.axis$I(i).type$();
if (axis.isXY$()) continue;
var axisNum=view.getData$().dimensionIndex$net_imagej_axis_AxisType(axis);
if (axisNum < 0) continue;
var p=this.getLongPosition$net_imagej_axis_AxisType(axis);
var data=view.getData$();
var size=data.realMax$I(axisNum) - data.realMin$I(axisNum) + 1;
if (p < size ) {
view.setPosition$J$net_imagej_axis_AxisType(p, axis);
}}
view.update$();
}
C$.superclazz.prototype.update$.apply(this, []);
});

Clazz.newMeth(C$, 'min$I', function (d) {
return (Math.floor(this.combinedInterval.realMin$I(d))|0);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
for (var i=0; i < min.length; i++) {
min[i]=this.min$I(i);
}
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
for (var i=0; i < min.numDimensions$(); i++) {
min.setPosition$J$I(this.min$I(i), i);
}
});

Clazz.newMeth(C$, 'max$I', function (d) {
return (Math.ceil(this.combinedInterval.realMax$I(d))|0);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
for (var i=0; i < max.length; i++) {
max[i]=this.max$I(i);
}
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
for (var i=0; i < max.numDimensions$(); i++) {
max.setPosition$J$I(this.max$I(i), i);
}
});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
for (var i=0; i < dimensions.length; i++) {
dimensions[i]=this.dimension$I(i);
}
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.max$I(d) - this.min$I(d) + 1;
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.combinedInterval.realMin$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.combinedInterval.realMin$DA(min);
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.combinedInterval.realMin$net_imglib2_RealPositionable(min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.combinedInterval.realMax$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.combinedInterval.realMax$DA(max);
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.combinedInterval.realMax$net_imglib2_RealPositionable(max);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.combinedInterval.numDimensions$();
});

Clazz.newMeth(C$, 'averageScale$I', function (d) {
return this.combinedInterval.averageScale$I(d);
});

Clazz.newMeth(C$, 'dimensionIndex$net_imagej_axis_AxisType', function (axis) {
return this.combinedInterval.dimensionIndex$net_imagej_axis_AxisType(axis);
});

Clazz.newMeth(C$, 'axis$I', function (d) {
return this.combinedInterval.axis$I(d);
});

Clazz.newMeth(C$, ['axes$net_imagej_axis_CalibratedAxisA'], function (axes) {
this.combinedInterval.axes$TAA(axes);
});

Clazz.newMeth(C$, ['setAxis$net_imagej_axis_CalibratedAxis$I','setAxis$TA$I'], function (axis, d) {
this.combinedInterval.setAxis$TA$I(axis, d);
});

Clazz.newMeth(C$, 'getIntPosition$net_imagej_axis_AxisType', function (axis) {
return (this.getLongPosition$net_imagej_axis_AxisType(axis)|0);
});

Clazz.newMeth(C$, 'getLongPosition$net_imagej_axis_AxisType', function (axis) {
var d=this.dimensionIndex$net_imagej_axis_AxisType(axis);
if (d < 0) {
return 0;
}var value=this.pos.get$O(axis);
if (value == null ) return 0;
var min=this.min$I(d);
if ((value).valueOf() < min ) return min;
var max=this.max$I(d);
if ((value).valueOf() > max ) return max;
return (value).valueOf();
});

Clazz.newMeth(C$, 'setPosition$J$net_imagej_axis_AxisType', function (position, axis) {
var axisIndex=this.dimensionIndex$net_imagej_axis_AxisType(axis);
if (axisIndex < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}var min=this.min$I(axisIndex);
var max=this.max$I(axisIndex);
var value=position;
if (value < min) value=min;
if (value > max) value=max;
this.pos.put$TK$TV(axis, new Long(value));
if (this.$eventService != null ) {
this.$eventService.publishLater$TE(Clazz.new_($I$(9,1).c$$net_imagej_display_ImageDisplay$net_imagej_axis_AxisType,[this, axis]));
}});

Clazz.newMeth(C$, 'localize$IA', function (position) {
for (var i=0; i < position.length; i++) position[i]=this.getIntPosition$I(i);

});

Clazz.newMeth(C$, 'localize$JA', function (position) {
for (var i=0; i < position.length; i++) position[i]=this.getLongPosition$I(i);

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return this.getIntPosition$net_imagej_axis_AxisType(this.axis$I(d).type$());
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.getLongPosition$net_imagej_axis_AxisType(this.axis$I(d).type$());
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
for (var i=0; i < position.length; i++) position[i]=this.getFloatPosition$I(i);

});

Clazz.newMeth(C$, 'localize$DA', function (position) {
for (var i=0; i < position.length; i++) position[i]=this.getDoublePosition$I(i);

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.setPosition$J$I(this.getLongPosition$I(d) + 1, d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.setPosition$J$I(this.getLongPosition$I(d) - 1, d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.setPosition$J$I(this.getLongPosition$I(d) + distance, d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.setPosition$J$I(this.getLongPosition$I(d) + distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var i=0; i < localizable.numDimensions$(); i++) this.move$J$I(localizable.getLongPosition$I(i), i);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var i=0; i < distance.length; i++) this.move$I$I(distance[i], i);

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var i=0; i < distance.length; i++) this.move$J$I(distance[i], i);

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var i=0; i < localizable.numDimensions$(); i++) this.setPosition$J$I(localizable.getLongPosition$I(i), i);

});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
for (var i=0; i < position.length; i++) this.setPosition$I$I(position[i], i);

});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
for (var i=0; i < position.length; i++) this.setPosition$J$I(position[i], i);

});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.setPosition$J$net_imagej_axis_AxisType(position, this.axis$I(d).type$());
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.setPosition$J$net_imagej_axis_AxisType(position, this.axis$I(d).type$());
});

Clazz.newMeth(C$, 'onEvent$net_imagej_event_DataRestructuredEvent', function (event) {
this.threadService.run$Runnable(((P$.DefaultImageDisplay$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultImageDisplay$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.b$['org.scijava.AbstractContextual'].getContext$.apply(this.b$['org.scijava.AbstractContextual'], []));
{
for (var view, $view = this.b$['net.imagej.display.DefaultImageDisplay'].iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
if (this.$finals$.event.getObject$() === view.getData$() ) {
this.b$['net.imagej.display.DefaultImageDisplay'].rebuild$.apply(this.b$['net.imagej.display.DefaultImageDisplay'], []);
this.b$['net.imagej.display.DefaultImageDisplay'].update$.apply(this.b$['net.imagej.display.DefaultImageDisplay'], []);
return;
}}
}});
})()
), Clazz.new_(P$.DefaultImageDisplay$1.$init$, [this, {event:event}])));
});

Clazz.newMeth(C$, 'onEvent$net_imagej_event_DataUpdatedEvent', function (event) {
for (var view, $view = this.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
if (event.getObject$() === view.getData$() ) {
this.update$();
return;
}}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayDeletedEvent', function (event) {
if (event.getObject$() !== this ) return;
p$1.cleanup.apply(this, []);
});

Clazz.newMeth(C$, 'updateName$net_imagej_display_DataView', function (dataView) {
if (this.getName$() != null ) return;
var dataName=dataView.getData$().getName$();
if (dataName != null  && !dataName.isEmpty$() ) {
this.setName$S(p$1.createName$S.apply(this, [dataName]));
}}, p$1);

Clazz.newMeth(C$, 'createName$S', function (proposedName) {
if (this.$displayService == null ) return proposedName;
var theName=proposedName;
var n=0;
while (!this.$displayService.isUniqueName$S(theName)){
n++;
theName=proposedName + "-" + n ;
}
return theName;
}, p$1);

Clazz.newMeth(C$, 'isImageClass$Class', function (c) {
return Clazz.getClass($I$(10),['decrementReferences$','incrementReferences$','rebuild$','update$']).isAssignableFrom$Class(c) || Clazz.getClass($I$(11),[]).isAssignableFrom$Class(c) ;
}, p$1);

Clazz.newMeth(C$, 'initActiveAxis', function () {
if (this.activeAxis == null ) {
for (var i=0; i < this.numDimensions$(); i++) {
var axisType=this.axis$I(i).type$();
if (axisType.isXY$()) continue;
this.setActiveAxis$net_imagej_axis_AxisType(axisType);
return;
}
}}, p$1);

Clazz.newMeth(C$, 'cleanup', function () {
for (var view, $view = this.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
view.dispose$();
}
this.clear$();
this.combinedInterval.clear$();
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.getName$();
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.DefaultImageDisplay',null,['org.scijava.plugin.Plugin']],['type="org.scijava.display.Display.class" ']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['$displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['$eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['datasetService','net.imagej.DatasetService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['lutService','net.imagej.lut.LUTService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['M:onEvent','void','onEvent$net_imagej_event_DataRestructuredEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$net_imagej_event_DataUpdatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayDeletedEvent',['org.scijava.event.EventHandler']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
