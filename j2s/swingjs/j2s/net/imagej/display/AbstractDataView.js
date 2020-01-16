(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[[0,'java.util.HashMap','net.imagej.Extents','net.imagej.display.event.DataViewSelectedEvent','net.imagej.display.event.DataViewDeselectedEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractDataView", null, 'org.scijava.AbstractContextual', 'net.imagej.display.DataView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['disposed','selected'],'O',['eventService','org.scijava.event.EventService','pos','java.util.Map','data','net.imagej.Data']]]

Clazz.newMeth(C$, 'initialize$net_imagej_Data', function (d) {
if (this.data != null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Data already set"]);
}if (!this.isCompatible$net_imagej_Data(d)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible data object: " + d]);
}if (this.getContext$() !== d.getContext$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Mismatched context: " + d]);
}this.data=d;
this.data.incrementReferences$();
this.pos=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"Long"},$I$(1,1));
});

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getPlanePosition$', function () {
var planeDims=Clazz.array(Long.TYPE, [this.data.numDimensions$() - 2]);
for (var d=0; d < planeDims.length; d++) {
planeDims[d]=(Math.floor(this.data.realMax$I(d + 2) - this.data.realMin$I(d + 2) + 1)|0);
}
var planeExtents=Clazz.new_($I$(2,1).c$$JA,[planeDims]);
var planePos=planeExtents.createPosition$();
for (var d=0; d < planeDims.length; d++) {
var offset=d + 2;
var axis=this.data.axis$I(offset).type$();
var p=this.getLongPosition$net_imagej_axis_AxisType(axis);
var dimension=(Math.floor(this.data.realMax$I(offset) - this.data.realMin$I(offset) + 1)|0);
if (p >= dimension) p=dimension - 1;
if (p >= planePos.dimension$I(d)) p=planePos.dimension$I(d) - 1;
planePos.setPosition$J$I(p, d);
}
return planePos;
});

Clazz.newMeth(C$, 'setSelected$Z', function (isSelected) {
if (this.selected != isSelected ) {
this.selected=isSelected;
var event=isSelected ? Clazz.new_($I$(3,1).c$$net_imagej_display_DataView,[this]) : Clazz.new_($I$(4,1).c$$net_imagej_display_DataView,[this]);
this.publish$org_scijava_event_SciJavaEvent(event);
}});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.selected;
});

Clazz.newMeth(C$, 'dispose$', function () {
if (this.disposed) return;
this.disposed=true;
this.data.decrementReferences$();
});

Clazz.newMeth(C$, 'getIntPosition$net_imagej_axis_AxisType', function (axis) {
return (this.getLongPosition$net_imagej_axis_AxisType(axis)|0);
});

Clazz.newMeth(C$, 'getLongPosition$net_imagej_axis_AxisType', function (axis) {
var value=this.pos.get$O(axis);
return value == null  ? 0 : (value).valueOf();
});

Clazz.newMeth(C$, 'setPosition$J$net_imagej_axis_AxisType', function (position, axis) {
this.pos.put$TK$TV(axis, new Long(position));
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
for (var i=0; i < position.length; i++) position[i]=this.getIntPosition$I(i);

});

Clazz.newMeth(C$, 'localize$JA', function (position) {
for (var i=0; i < position.length; i++) position[i]=this.getLongPosition$I(i);

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return this.getIntPosition$net_imagej_axis_AxisType(this.getData$().axis$I(d).type$());
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.getLongPosition$net_imagej_axis_AxisType(this.getData$().axis$I(d).type$());
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

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.data.numDimensions$();
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
this.setPosition$J$net_imagej_axis_AxisType(position, this.getData$().axis$I(d).type$());
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.setPosition$J$net_imagej_axis_AxisType(position, this.getData$().axis$I(d).type$());
});

Clazz.newMeth(C$, 'publish$org_scijava_event_SciJavaEvent', function (event) {
if (this.eventService == null ) return;
this.eventService.publish$TE(event);
});
C$.$getAnn$ = function(){ return [
[['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
