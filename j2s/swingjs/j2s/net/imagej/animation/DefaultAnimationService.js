(function(){var P$=Clazz.newPackage("net.imagej.animation"),p$1={},I$=[[0,'net.imagej.animation.Animation','java.util.concurrent.ConcurrentHashMap','org.scijava.input.KeyCode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultAnimationService", null, 'org.scijava.service.AbstractService', 'net.imagej.animation.AnimationService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eventService','org.scijava.event.EventService','statusService','org.scijava.app.StatusService','animations','java.util.Map']]]

Clazz.newMeth(C$, 'getEventService$', function () {
return this.eventService;
});

Clazz.newMeth(C$, 'toggle$net_imagej_display_ImageDisplay', function (display) {
if (this.getAnimation$net_imagej_display_ImageDisplay(display).isActive$()) this.stop$net_imagej_display_ImageDisplay(display);
 else this.start$net_imagej_display_ImageDisplay(display);
});

Clazz.newMeth(C$, 'start$net_imagej_display_ImageDisplay', function (display) {
this.getAnimation$net_imagej_display_ImageDisplay(display).start$();
this.statusService.showStatus$S("Animation started. Press \'\\\' or ESC to stop.");
});

Clazz.newMeth(C$, 'stop$net_imagej_display_ImageDisplay', function (display) {
var animation=this.animations.get$O(display);
if (animation != null ) {
animation.stop$();
this.statusService.showStatus$S("Animation stopped. Press \'\\\' to resume.");
}});

Clazz.newMeth(C$, 'stopAll$', function () {
for (var animation, $animation = this.animations.values$().iterator$(); $animation.hasNext$()&&((animation=($animation.next$())),1);) {
animation.stop$();
}
this.statusService.showStatus$S("All animations stopped.");
});

Clazz.newMeth(C$, 'getAnimation$net_imagej_display_ImageDisplay', function (display) {
var animation=this.animations.get$O(display);
if (animation == null ) {
animation=Clazz.new_($I$(1,1).c$$net_imagej_display_ImageDisplay,[display]);
this.animations.put$TK$TV(display, animation);
}return animation;
});

Clazz.newMeth(C$, 'initialize$', function () {
this.animations=Clazz.new_(1,{K:"net.imagej.display.ImageDisplay",V:"net.imagej.animation.Animation"},$I$(2,1));
});

Clazz.newMeth(C$, 'dispose$', function () {
this.stopAll$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_KyPressedEvent', function (event) {
var imageDisplay=p$1.toImageDisplay$org_scijava_display_Display.apply(this, [event.getDisplay$()]);
if (imageDisplay == null ) return;
if (event.getCode$() === $I$(3).ESCAPE ) this.stop$net_imagej_display_ImageDisplay(imageDisplay);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayDeletedEvent', function (event) {
var imageDisplay=p$1.toImageDisplay$org_scijava_display_Display.apply(this, [event.getObject$()]);
if (imageDisplay == null ) return;
this.stop$net_imagej_display_ImageDisplay(imageDisplay);
this.animations.remove$O(imageDisplay);
});

Clazz.newMeth(C$, 'onEvent$net_imagej_event_DataRestructuredEvent', function (event) {
var data=event.getObject$();
for (var animation, $animation = this.animations.values$().iterator$(); $animation.hasNext$()&&((animation=($animation.next$())),1);) {
var display=animation.getDisplay$();
if (display.isDisplaying$O(data)) this.stop$net_imagej_display_ImageDisplay(display);
}
});

Clazz.newMeth(C$, 'toImageDisplay$org_scijava_display_Display', function (display) {
if (!(Clazz.instanceOf(display, "net.imagej.display.ImageDisplay"))) return null;
return display;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.animation.DefaultAnimationService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['statusService','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_display_event_input_KyPressedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayDeletedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$net_imagej_event_DataRestructuredEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
