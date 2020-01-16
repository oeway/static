(function(){var P$=Clazz.newPackage("net.imagej"),I$=[[0,'net.imagej.event.DataCreatedEvent','net.imagej.event.DataDeletedEvent','net.imagej.axis.Axes','net.imagej.axis.DefaultLinearAxis']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractData", null, 'net.imagej.interval.AbstractCalibratedRealInterval', ['net.imagej.Data', 'Comparable', 'java.io.Externalizable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.refs=0;
}, 1);

C$.$fields$=[['I',['refs'],'S',['name'],'O',['context','org.scijava.Context','eventService','org.scijava.event.EventService']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval', function (interval) {
;C$.superclazz.c$$net_imglib2_RealInterval.apply(this,[interval]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$net_imglib2_RealInterval', function (context, interval) {
;C$.superclazz.c$$net_imglib2_RealInterval.apply(this,[interval]);C$.$init$.apply(this);
if (context != null ) this.setContext$org_scijava_Context(context);
}, 1);

Clazz.newMeth(C$, 'register$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(1,1).c$$net_imagej_Data,[this]));
});

Clazz.newMeth(C$, 'delete$', function () {
this.publish$org_scijava_event_SciJavaEvent(Clazz.new_($I$(2,1).c$$net_imagej_Data,[this]));
});

Clazz.newMeth(C$, 'toString', function () {
var n=this.getName$();
return n == null  ? "<unnamed data>" : n;
});

Clazz.newMeth(C$, 'incrementReferences$', function () {
this.refs++;
if (this.refs == 1) this.register$();
});

Clazz.newMeth(C$, 'decrementReferences$', function () {
if (this.refs == 0) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["decrementing reference count when it is already 0"]);
}this.refs--;
if (this.refs == 0) this.delete$();
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, ['compareTo$net_imagej_Data','compareTo$','compareTo$TT'], function (data) {
return this.getName$().compareTo$S(data.getName$());
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
if (this.name == null ) out.writeUTF$S("NULL 42 PI E 8 GAMMA PHI WOOHOO!");
 else out.writeUTF$S(this.name);
var numAxes=this.numDimensions$();
out.writeInt$I(numAxes);
for (var i=0; i < numAxes; i++) {
var axis=this.axis$I(i);
out.writeUTF$S(axis.type$().getLabel$());
out.writeDouble$D(this.averageScale$I(i));
if (axis.unit$() == null ) out.writeUTF$S("NULL 42 PI E 8 GAMMA PHI WOOHOO!");
 else out.writeUTF$S(axis.unit$());
}
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
this.name=$in.readUTF$();
if (this.name.equals$O("NULL 42 PI E 8 GAMMA PHI WOOHOO!")) this.name=null;
var numAxes=$in.readInt$();
for (var i=0; i < numAxes; i++) {
var type=$I$(3).get$S($in.readUTF$());
var cal=$in.readDouble$();
var unitString=$in.readUTF$();
var unit;
if (unitString.equals$O("NULL 42 PI E 8 GAMMA PHI WOOHOO!")) unit=null;
 else unit=unitString;
var axis=Clazz.new_($I$(4,1).c$$net_imagej_axis_AxisType$S$D,[type, unit, cal]);
this.setAxis$TA$I(axis, i);
}
});

Clazz.newMeth(C$, 'context$', function () {
if (this.context == null ) throw Clazz.new_(Clazz.load('org.scijava.NullContextException'));
return this.context;
});

Clazz.newMeth(C$, 'getContext$', function () {
return this.context;
});

Clazz.newMeth(C$, 'setContext$org_scijava_Context', function (context) {
context.inject$O(this);
});

Clazz.newMeth(C$, 'publish$org_scijava_event_SciJavaEvent', function (event) {
if (this.eventService != null ) this.eventService.publish$TE(event);
});
C$.$getAnn$ = function(){ return [
[['context','org.scijava.Context',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
