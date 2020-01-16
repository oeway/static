(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[[0,'org.scijava.util.IntCoords','org.scijava.util.RealCoords']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultZoomService", null, 'org.scijava.service.AbstractService', 'net.imagej.display.ZoomService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['threadService','org.scijava.thread.ThreadService','inputService','org.scijava.input.InputService','overlayService','net.imagej.display.OverlayService']]]

Clazz.newMeth(C$, 'zoomIn$net_imagej_display_ImageDisplay', function (display) {
this.threadService.queue$Runnable(((P$.DefaultZoomService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultZoomService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['net.imagej.display.DefaultZoomService'].inputService.getDisplay$() === this.$finals$.display ) {
var x=this.b$['net.imagej.display.DefaultZoomService'].inputService.getX$();
var y=this.b$['net.imagej.display.DefaultZoomService'].inputService.getY$();
this.$finals$.display.getCanvas$().zoomIn$org_scijava_util_IntCoords(Clazz.new_($I$(1,1).c$$I$I,[x, y]));
} else {
this.$finals$.display.getCanvas$().zoomIn$();
}});
})()
), Clazz.new_(P$.DefaultZoomService$1.$init$, [this, {display:display}])));
});

Clazz.newMeth(C$, 'zoomOut$net_imagej_display_ImageDisplay', function (display) {
this.threadService.queue$Runnable(((P$.DefaultZoomService$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultZoomService$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['net.imagej.display.DefaultZoomService'].inputService.getDisplay$() === this.$finals$.display ) {
var x=this.b$['net.imagej.display.DefaultZoomService'].inputService.getX$();
var y=this.b$['net.imagej.display.DefaultZoomService'].inputService.getY$();
this.$finals$.display.getCanvas$().zoomOut$org_scijava_util_IntCoords(Clazz.new_($I$(1,1).c$$I$I,[x, y]));
} else {
this.$finals$.display.getCanvas$().zoomOut$();
}});
})()
), Clazz.new_(P$.DefaultZoomService$2.$init$, [this, {display:display}])));
});

Clazz.newMeth(C$, 'zoomOriginalScale$net_imagej_display_ImageDisplay', function (display) {
this.threadService.queue$Runnable(((P$.DefaultZoomService$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultZoomService$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.display.getCanvas$().setZoom$D(0);
this.$finals$.display.getCanvas$().panReset$();
});
})()
), Clazz.new_(P$.DefaultZoomService$3.$init$, [this, {display:display}])));
});

Clazz.newMeth(C$, 'zoom100Percent$net_imagej_display_ImageDisplay', function (display) {
this.threadService.queue$Runnable(((P$.DefaultZoomService$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultZoomService$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.display.getCanvas$().setZoom$D(1);
});
})()
), Clazz.new_(P$.DefaultZoomService$4.$init$, [this, {display:display}])));
});

Clazz.newMeth(C$, 'zoomToSelection$net_imagej_display_ImageDisplay', function (display) {
this.threadService.queue$Runnable(((P$.DefaultZoomService$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultZoomService$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var selection=this.b$['net.imagej.display.DefaultZoomService'].overlayService.getSelectionBounds$net_imagej_display_ImageDisplay(this.$finals$.display);
this.$finals$.display.getCanvas$().zoomToFit$org_scijava_util_RealRect(selection);
});
})()
), Clazz.new_(P$.DefaultZoomService$5.$init$, [this, {display:display}])));
});

Clazz.newMeth(C$, 'zoomSet$net_imagej_display_ImageDisplay$D$D$D', function (display, zoomPercent, centerU, centerV) {
this.threadService.queue$Runnable(((P$.DefaultZoomService$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultZoomService$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.display.getCanvas$().setZoomAndCenter$D$org_scijava_util_RealCoords(this.$finals$.zoomPercent / 100.0, Clazz.new_($I$(2,1).c$$D$D,[this.$finals$.centerU, this.$finals$.centerV]));
});
})()
), Clazz.new_(P$.DefaultZoomService$6.$init$, [this, {zoomPercent:zoomPercent,centerU:centerU,centerV:centerV,display:display}])));
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.DefaultZoomService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['inputService','org.scijava.input.InputService',null,['org.scijava.plugin.Parameter']],['']],
  [['overlayService','net.imagej.display.OverlayService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
