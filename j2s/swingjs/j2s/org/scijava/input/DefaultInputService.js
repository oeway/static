(function(){var P$=Clazz.newPackage("org.scijava.input"),p$1={},I$=[[0,'java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultInputService", null, 'org.scijava.service.AbstractService', 'org.scijava.input.InputService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.altDown=false;
this.altGrDown=false;
this.ctrlDown=false;
this.metaDown=false;
this.shiftDown=false;
this.pressedKeys=Clazz.new_(1,{E:"org.scijava.input.KeyCode"},$I$(1,1));
this.buttonsDown=Clazz.new_(1,{E:"Integer"},$I$(1,1));
this.lastX=-1;
this.lastY=-1;
}, 1);

C$.$fields$=[['Z',['altDown','altGrDown','ctrlDown','metaDown','shiftDown'],'I',['lastX','lastY'],'O',['eventService','org.scijava.event.EventService','modifiers','org.scijava.input.InputModifiers','pressedKeys','java.util.HashSet','+buttonsDown','display','org.scijava.display.Display']]]

Clazz.newMeth(C$, 'eventService$', function () {
return this.eventService;
});

Clazz.newMeth(C$, 'getModifiers$', function () {
return this.modifiers;
});

Clazz.newMeth(C$, 'isAltDown$', function () {
return this.altDown;
});

Clazz.newMeth(C$, 'isAltGrDown$', function () {
return this.altGrDown;
});

Clazz.newMeth(C$, 'isCtrlDown$', function () {
return this.ctrlDown;
});

Clazz.newMeth(C$, 'isMetaDown$', function () {
return this.metaDown;
});

Clazz.newMeth(C$, 'isShiftDown$', function () {
return this.shiftDown;
});

Clazz.newMeth(C$, 'isKeyDown$org_scijava_input_KeyCode', function (code) {
return this.pressedKeys.contains$O(code);
});

Clazz.newMeth(C$, 'getDisplay$', function () {
return this.display;
});

Clazz.newMeth(C$, 'getX$', function () {
return this.lastX;
});

Clazz.newMeth(C$, 'getY$', function () {
return this.lastY;
});

Clazz.newMeth(C$, 'isButtonDown$I', function (button) {
return this.buttonsDown.contains$O(new Integer(button));
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_KyPressedEvent', function (evt) {
this.modifiers=evt.getModifiers$();
this.altDown=this.modifiers.isAltDown$();
this.altGrDown=this.modifiers.isAltGrDown$();
this.ctrlDown=this.modifiers.isCtrlDown$();
this.metaDown=this.modifiers.isMetaDown$();
this.shiftDown=this.modifiers.isShiftDown$();
this.pressedKeys.add$TE(evt.getCode$());
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_KyReleasedEvent', function (evt) {
this.modifiers=evt.getModifiers$();
this.altDown=this.modifiers.isAltDown$();
this.altGrDown=this.modifiers.isAltGrDown$();
this.ctrlDown=this.modifiers.isCtrlDown$();
this.metaDown=this.modifiers.isMetaDown$();
this.shiftDown=this.modifiers.isShiftDown$();
this.pressedKeys.remove$O(evt.getCode$());
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsMovedEvent', function (evt) {
p$1.updateCoords$org_scijava_display_Display$I$I.apply(this, [evt.getDisplay$(), evt.getX$(), evt.getY$()]);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsExitedEvent', function (evt) {
p$1.clearCoords.apply(this, []);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsPressedEvent', function (evt) {
this.modifiers=evt.getModifiers$();
this.buttonsDown.add$TE(new Integer(evt.getButton$()));
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsReleasedEvent', function (evt) {
this.modifiers=evt.getModifiers$();
this.buttonsDown.remove$O(new Integer(evt.getButton$()));
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayDeletedEvent', function (evt) {
if (this.display !== evt.getObject$() ) return;
p$1.clearCoords.apply(this, []);
});

Clazz.newMeth(C$, 'updateCoords$org_scijava_display_Display$I$I', function (d, x, y) {
this.display=d;
this.lastX=x;
this.lastY=y;
}, p$1);

Clazz.newMeth(C$, 'clearCoords', function () {
p$1.updateCoords$org_scijava_display_Display$I$I.apply(this, [null, -1, -1]);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.input.DefaultInputService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_display_event_input_KyPressedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_KyReleasedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsMovedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsExitedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsPressedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsReleasedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayDeletedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
