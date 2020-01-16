(function(){var P$=Clazz.newPackage("net.imagej.overlay"),p$1={},I$=[[0,'java.util.ArrayList','net.imglib2.roi.CompositeRegionOfInterest',['net.imagej.overlay.CompositeOverlay','.Operation'],'java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CompositeOverlay", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imagej.overlay.AbstractROIOverlay');
C$.$classes$=[['Operation',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.overlays=Clazz.new_(1,{E:"net.imagej.overlay.Overlay"},$I$(1,1));
this.operations=Clazz.new_(1,{E:"net.imagej.overlay.CompositeOverlay.Operation"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['overlays','java.util.List','+operations']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$TR.apply(this,[Clazz.new_($I$(2,1).c$$I,[2])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
C$.c$$org_scijava_Context$I.apply(this, [context, 2]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context$I', function (context, numDimensions) {
;C$.superclazz.c$$org_scijava_Context$TR.apply(this,[context, Clazz.new_($I$(2,1).c$$I,[numDimensions])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'move$DA', function (deltas) {
for (var o, $o = this.overlays.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) o.move$DA(deltas);

p$1.recalcRegionOfInterest.apply(this, []);
});

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
C$.superclazz.prototype.readExternal$java_io_ObjectInput.apply(this, [$in]);
this.overlays=$in.readObject$();
this.operations=$in.readObject$();
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
C$.superclazz.prototype.writeExternal$java_io_ObjectOutput.apply(this, [out]);
out.writeObject$O(this.overlays);
out.writeObject$O(this.operations);
});

Clazz.newMeth(C$, 'startWith$net_imagej_overlay_Overlay', function (o) {
this.overlays.clear$();
this.operations.clear$();
this.overlays.add$TE(o);
this.operations.add$TE($I$(3).OR);
var newRoi=Clazz.new_($I$(2,1).c$$net_imglib2_roi_RegionOfInterest,[o.getRegionOfInterest$()]);
this.setRegionOfInterest$TR(newRoi);
});

Clazz.newMeth(C$, 'and$net_imagej_overlay_Overlay', function (o) {
if (this.overlays.size$() == 0) {
this.startWith$net_imagej_overlay_Overlay(o);
return;
}this.overlays.add$TE(o);
this.operations.add$TE($I$(3).AND);
this.getRegionOfInterest$().and$net_imglib2_roi_RegionOfInterest(o.getRegionOfInterest$());
});

Clazz.newMeth(C$, 'or$net_imagej_overlay_Overlay', function (o) {
if (this.overlays.size$() == 0) {
this.startWith$net_imagej_overlay_Overlay(o);
return;
}this.overlays.add$TE(o);
this.operations.add$TE($I$(3).OR);
this.getRegionOfInterest$().or$net_imglib2_roi_RegionOfInterest(o.getRegionOfInterest$());
});

Clazz.newMeth(C$, 'xor$net_imagej_overlay_Overlay', function (o) {
if (this.overlays.size$() == 0) {
this.startWith$net_imagej_overlay_Overlay(o);
return;
}this.overlays.add$TE(o);
this.operations.add$TE($I$(3).XOR);
this.getRegionOfInterest$().xor$net_imglib2_roi_RegionOfInterest(o.getRegionOfInterest$());
});

Clazz.newMeth(C$, 'not$net_imagej_overlay_Overlay', function (o) {
if (this.overlays.size$() == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["CompositeOverlay cannot start with a NOT operation"]);
}this.overlays.add$TE(o);
this.operations.add$TE($I$(3).NOT);
this.getRegionOfInterest$().not$net_imglib2_roi_RegionOfInterest(o.getRegionOfInterest$());
});

Clazz.newMeth(C$, 'remove$net_imagej_overlay_Overlay', function (o) {
var i=0;
while (i < this.overlays.size$()){
var ovr=this.overlays.get$I(i);
if (ovr === o ) {
this.overlays.remove$I(i);
this.operations.remove$I(i);
} else i++;
}
if (this.overlays.size$() == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Modified CompositeOverlay now consists of no overlays"]);
if (this.operations.get$I(0) === $I$(3).NOT ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Modified CompositeOverlay now starts with a NOT operation"]);
p$1.recalcRegionOfInterest.apply(this, []);
});

Clazz.newMeth(C$, 'doOperation$net_imagej_overlay_CompositeOverlay_Operation$net_imagej_overlay_Overlay', function (op, o) {
switch (op) {
case $I$(3).AND:
this.and$net_imagej_overlay_Overlay(o);
break;
case $I$(3).OR:
this.or$net_imagej_overlay_Overlay(o);
break;
case $I$(3).XOR:
this.xor$net_imagej_overlay_Overlay(o);
break;
case $I$(3).NOT:
this.not$net_imagej_overlay_Overlay(o);
break;
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unknown operation: " + op]);
}
});

Clazz.newMeth(C$, 'getSubcomponents$', function () {
return $I$(4).unmodifiableList$java_util_List(this.overlays);
});

Clazz.newMeth(C$, 'recalcRegionOfInterest', function () {
var newRoi=Clazz.new_($I$(2,1).c$$net_imglib2_roi_RegionOfInterest,[this.overlays.get$I(0).getRegionOfInterest$()]);
for (var i=1; i < this.overlays.size$(); i++) {
var o=this.overlays.get$I(i);
var op=this.operations.get$I(i);
switch (op) {
case $I$(3).AND:
newRoi.and$net_imglib2_roi_RegionOfInterest(o.getRegionOfInterest$());
break;
case $I$(3).OR:
newRoi.or$net_imglib2_roi_RegionOfInterest(o.getRegionOfInterest$());
break;
case $I$(3).XOR:
newRoi.xor$net_imglib2_roi_RegionOfInterest(o.getRegionOfInterest$());
break;
case $I$(3).NOT:
newRoi.not$net_imglib2_roi_RegionOfInterest(o.getRegionOfInterest$());
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown operation " + op]);
}
}
this.setRegionOfInterest$TR(newRoi);
}, p$1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.CompositeOverlay, "Operation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "AND", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OR", 1, []);
Clazz.newEnumConst($vals, C$.c$, "XOR", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NOT", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
