(function(){var P$=Clazz.newPackage("net.imagej.animation"),p$1={},I$=[[0,'net.imagej.axis.Axes','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Animation", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fps=8;
this.increment=1;
this.delta=1;
this.isRelative=true;
}, 1);

C$.$fields$=[['Z',['active','backAndForth','isRelative'],'D',['fps'],'L',['first','last','increment','delta'],'O',['log','org.scijava.log.LogService','display','net.imagej.display.ImageDisplay','thread','Thread','axis','net.imagej.axis.AxisType']]]

Clazz.newMeth(C$, 'c$$net_imagej_display_ImageDisplay', function (display) {
;C$.$init$.apply(this);
this.display=display;
display.getContext$().inject$O(this);
if (display.numDimensions$() > 2) {
if (display.dimensionIndex$net_imagej_axis_AxisType($I$(1).TIME) >= 0) {
this.axis=$I$(1).TIME;
} else if (display.dimensionIndex$net_imagej_axis_AxisType($I$(1).Z) >= 0) {
this.axis=$I$(1).Z;
} else {
this.axis=display.axis$I(2).type$();
}var axisIndex=display.dimensionIndex$net_imagej_axis_AxisType(this.axis);
this.last=display.dimension$I(axisIndex) - 1;
}}, 1);

Clazz.newMeth(C$, 'start$', function () {
if (this.axis == null ) return;
this.active=true;
if (this.thread == null ) {
this.thread=Clazz.new_($I$(2,1).c$$Runnable,[this]);
this.thread.start$();
}});

Clazz.newMeth(C$, 'stop$', function () {
this.active=false;
if (this.thread != null ) {
try {
this.thread.join$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"InterruptedException")){
this.log.error$O$Throwable("Error stopping animation", exc);
} else {
throw exc;
}
}
this.thread=null;
}});

Clazz.newMeth(C$, 'isActive$', function () {
return this.active;
});

Clazz.newMeth(C$, 'getDisplay$', function () {
return this.display;
});

Clazz.newMeth(C$, 'getAxis$', function () {
return this.axis;
});

Clazz.newMeth(C$, 'setAxis$net_imagej_axis_AxisType', function (axis) {
this.axis=axis;
p$1.clampPosition.apply(this, []);
});

Clazz.newMeth(C$, 'getFPS$', function () {
return this.fps;
});

Clazz.newMeth(C$, 'setFPS$D', function (fps) {
this.fps=fps;
});

Clazz.newMeth(C$, 'getFirst$', function () {
return this.first;
});

Clazz.newMeth(C$, 'setFirst$J', function (first) {
this.first=first;
p$1.clampPosition.apply(this, []);
});

Clazz.newMeth(C$, 'getLast$', function () {
return this.last;
});

Clazz.newMeth(C$, 'setLast$J', function (last) {
this.last=last;
p$1.clampPosition.apply(this, []);
});

Clazz.newMeth(C$, 'isBackAndForth$', function () {
return this.backAndForth;
});

Clazz.newMeth(C$, 'setBackAndForth$Z', function (backAndForth) {
this.backAndForth=backAndForth;
});

Clazz.newMeth(C$, 'run$', function () {
while (this.active){
p$1.updatePosition.apply(this, []);
try {
$I$(2).sleep$J(((1000 / this.fps)|0));
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'updatePosition', function () {
var currPos=this.display.getLongPosition$net_imagej_axis_AxisType(this.axis);
if (this.increment > 0 && currPos == this.last ) {
if (!this.backAndForth) {
this.isRelative=false;
this.delta=this.first;
currPos=this.first;
} else {
this.increment=-this.increment;
this.isRelative=true;
this.delta=-1;
currPos--;
}} else if (this.increment < 0 && currPos == this.first ) {
if (!this.backAndForth) {
this.isRelative=false;
this.delta=this.last;
currPos=this.last;
} else {
this.increment=-this.increment;
this.isRelative=true;
this.delta=+1;
currPos++;
}} else {
this.isRelative=true;
if (this.increment > 0) {
this.delta=+1;
currPos++;
} else {
this.delta=-1;
currPos--;
}}var pos=this.isRelative ? this.display.getLongPosition$net_imagej_axis_AxisType(this.axis) + this.delta : this.delta;
this.display.setPosition$J$net_imagej_axis_AxisType(pos, this.axis);
}, p$1);

Clazz.newMeth(C$, 'clampPosition', function () {
if (this.axis == null ) return;
var pos=this.display.getLongPosition$net_imagej_axis_AxisType(this.axis);
if (pos < this.first || pos > this.last ) {
this.display.setPosition$J$net_imagej_axis_AxisType(this.first, this.axis);
}}, p$1);
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
