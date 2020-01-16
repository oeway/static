(function(){var P$=Clazz.newPackage("org.scijava.tool"),p$1={},I$=[[0,'org.scijava.tool.event.ToolDeactivatedEvent','org.scijava.tool.event.ToolActivatedEvent','java.text.DecimalFormat','java.util.HashMap','java.util.ArrayList','org.scijava.tool.DummyTool']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultToolService", null, 'org.scijava.plugin.AbstractSingletonService', 'org.scijava.tool.ToolService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eventService','org.scijava.event.EventService','statusService','org.scijava.app.StatusService','alwaysActiveTools','java.util.Map','alwaysActiveToolList','java.util.List','tools','java.util.Map','toolList','java.util.List','activeTool','org.scijava.tool.Tool']]]

Clazz.newMeth(C$, 'getTool$S', function (name) {
var alwaysActiveTool=p$1.alwaysActiveTools.apply(this, []).get$O(name);
if (alwaysActiveTool != null ) return alwaysActiveTool;
return p$1.tools.apply(this, []).get$O(name);
});

Clazz.newMeth(C$, 'getTools$', function () {
return p$1.toolList.apply(this, []);
});

Clazz.newMeth(C$, 'getAlwaysActiveTools$', function () {
return p$1.alwaysActiveToolList.apply(this, []);
});

Clazz.newMeth(C$, 'getActiveTool$', function () {
return p$1.activeTool.apply(this, []);
});

Clazz.newMeth(C$, 'setActiveTool$org_scijava_tool_Tool', function (activeTool) {
if (p$1.activeTool.apply(this, []) === activeTool ) return;
Clazz.assert(C$, this, function(){return this.activeTool != null });
if (activeTool == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Active tool cannot be null"]);
}this.activeTool.deactivate$();
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$org_scijava_tool_Tool,[this.activeTool]));
this.activeTool=activeTool;
activeTool.activate$();
this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$org_scijava_tool_Tool,[activeTool]));
});

Clazz.newMeth(C$, 'reportRectangle$D$D$D$D', function (x, y, w, h) {
var f=Clazz.new_($I$(3,1).c$$S,["0.##"]);
var fx=f.format$D(x);
var fy=f.format$D(y);
var fw=f.format$D(w);
var fh=f.format$D(h);
this.statusService.showStatus$S("x=" + fx + ", y=" + fy + ", w=" + fw + ", h=" + fh );
});

Clazz.newMeth(C$, 'reportLine$D$D$D$D', function (x1, y1, x2, y2) {
var dx=x2 - x1;
var dy=y1 - y2;
var angle=57.29577951308232 * Math.atan2(dy, dx);
var w=Math.abs(x2 - x1);
var h=Math.abs(y2 - y1);
var length=Math.sqrt(w * w + h * h);
var f=Clazz.new_($I$(3,1).c$$S,["0.##"]);
var fx=f.format$D(x2);
var fy=f.format$D(y2);
var fa=f.format$D(angle);
var fl=f.format$D(length);
this.statusService.showStatus$S("x=" + fx + ", y=" + fy + ", angle=" + fa + ", length=" + fl );
});

Clazz.newMeth(C$, 'reportPoint$D$D', function (x, y) {
var f=Clazz.new_($I$(3,1).c$$S,["0.##"]);
var fx=f.format$D(x);
var fy=f.format$D(y);
this.statusService.showStatus$S("x=" + fx + ", y=" + fy );
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_KyPressedEvent', function (event) {
if (event.isConsumed$()) return;
var aTool=this.getActiveTool$();
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, aTool])) aTool.onKeyDown$org_scijava_display_event_input_KyPressedEvent(event);
for (var tool, $tool = this.getAlwaysActiveTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (event.isConsumed$()) break;
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, tool])) tool.onKeyDown$org_scijava_display_event_input_KyPressedEvent(event);
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_KyReleasedEvent', function (event) {
if (event.isConsumed$()) return;
var aTool=this.getActiveTool$();
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, aTool])) aTool.onKeyUp$org_scijava_display_event_input_KyReleasedEvent(event);
for (var tool, $tool = this.getAlwaysActiveTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (event.isConsumed$()) break;
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, tool])) tool.onKeyUp$org_scijava_display_event_input_KyReleasedEvent(event);
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsPressedEvent', function (event) {
if (event.isConsumed$()) return;
var aTool=this.getActiveTool$();
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, aTool])) aTool.onMouseDown$org_scijava_display_event_input_MsPressedEvent(event);
for (var tool, $tool = this.getAlwaysActiveTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (event.isConsumed$()) break;
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, tool])) tool.onMouseDown$org_scijava_display_event_input_MsPressedEvent(event);
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsReleasedEvent', function (event) {
if (event.isConsumed$()) return;
var aTool=this.getActiveTool$();
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, aTool])) aTool.onMouseUp$org_scijava_display_event_input_MsReleasedEvent(event);
for (var tool, $tool = this.getAlwaysActiveTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (event.isConsumed$()) break;
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, tool])) tool.onMouseUp$org_scijava_display_event_input_MsReleasedEvent(event);
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsClickedEvent', function (event) {
if (event.isConsumed$()) return;
var aTool=this.getActiveTool$();
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, aTool])) aTool.onMouseClick$org_scijava_display_event_input_MsClickedEvent(event);
for (var tool, $tool = this.getAlwaysActiveTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (event.isConsumed$()) break;
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, tool])) tool.onMouseClick$org_scijava_display_event_input_MsClickedEvent(event);
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsMovedEvent', function (event) {
if (event.isConsumed$()) return;
var aTool=this.getActiveTool$();
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, aTool])) aTool.onMouseMove$org_scijava_display_event_input_MsMovedEvent(event);
for (var tool, $tool = this.getAlwaysActiveTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (event.isConsumed$()) break;
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, tool])) tool.onMouseMove$org_scijava_display_event_input_MsMovedEvent(event);
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsDraggedEvent', function (event) {
if (event.isConsumed$()) return;
var aTool=this.getActiveTool$();
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, aTool])) aTool.onMouseDrag$org_scijava_display_event_input_MsDraggedEvent(event);
for (var tool, $tool = this.getAlwaysActiveTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (event.isConsumed$()) break;
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, tool])) tool.onMouseDrag$org_scijava_display_event_input_MsDraggedEvent(event);
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_input_MsWheelEvent', function (event) {
if (event.isConsumed$()) return;
var aTool=this.getActiveTool$();
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, aTool])) aTool.onMouseWheel$org_scijava_display_event_input_MsWheelEvent(event);
for (var tool, $tool = this.getAlwaysActiveTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (event.isConsumed$()) break;
if (p$1.eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool.apply(this, [event, tool])) tool.onMouseWheel$org_scijava_display_event_input_MsWheelEvent(event);
}
});

Clazz.newMeth(C$, 'alwaysActiveTools', function () {
if (this.alwaysActiveTools == null ) p$1.initAlwaysActiveTools.apply(this, []);
return this.alwaysActiveTools;
}, p$1);

Clazz.newMeth(C$, 'alwaysActiveToolList', function () {
if (this.alwaysActiveToolList == null ) p$1.initAlwaysActiveToolList.apply(this, []);
return this.alwaysActiveToolList;
}, p$1);

Clazz.newMeth(C$, 'tools', function () {
if (this.tools == null ) p$1.initTools.apply(this, []);
return this.tools;
}, p$1);

Clazz.newMeth(C$, 'toolList', function () {
if (this.toolList == null ) p$1.initToolList.apply(this, []);
return this.toolList;
}, p$1);

Clazz.newMeth(C$, 'activeTool', function () {
if (this.activeTool == null ) p$1.initActiveTool.apply(this, []);
return this.activeTool;
}, p$1);

Clazz.newMeth(C$, 'initAlwaysActiveTools', function () {
if (this.alwaysActiveTools != null ) return;
var map=Clazz.new_(1,{K:"String",V:"org.scijava.tool.Tool"},$I$(4,1));
for (var tool, $tool = p$1.alwaysActiveToolList.apply(this, []).iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
map.put$TK$TV(tool.getInfo$().getName$(), tool);
}
this.alwaysActiveTools=map;
}, p$1);

Clazz.newMeth(C$, 'initAlwaysActiveToolList', function () {
if (this.alwaysActiveToolList != null ) return;
var list=Clazz.new_(1,{E:"org.scijava.tool.Tool"},$I$(5,1));
for (var tool, $tool = this.getInstances$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (!tool.isAlwaysActive$()) continue;
list.add$TE(tool);
}
this.alwaysActiveToolList=list;
}, p$1);

Clazz.newMeth(C$, 'initTools', function () {
if (this.tools != null ) return;
var map=Clazz.new_(1,{K:"String",V:"org.scijava.tool.Tool"},$I$(4,1));
for (var tool, $tool = p$1.toolList.apply(this, []).iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
map.put$TK$TV(tool.getInfo$().getName$(), tool);
}
this.tools=map;
}, p$1);

Clazz.newMeth(C$, 'initToolList', function () {
if (this.toolList != null ) return;
var list=Clazz.new_(1,{E:"org.scijava.tool.Tool"},$I$(5,1));
for (var tool, $tool = this.getInstances$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (tool.isAlwaysActive$()) continue;
list.add$TE(tool);
}
this.toolList=list;
}, p$1);

Clazz.newMeth(C$, 'initActiveTool', function () {
if (this.activeTool != null ) return;
var rectangle=this.getTool$S("Rectangle");
var active=rectangle == null  ? Clazz.new_($I$(6,1)) : rectangle;
this.activeTool=active;
}, p$1);

Clazz.newMeth(C$, 'eventOk$org_scijava_display_event_DisplayEvent$org_scijava_tool_Tool', function (event, tool) {
if (event.getDisplay$() != null ) return true;
return tool.isActiveInAppFrame$();
}, p$1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.tool.DefaultToolService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['statusService','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_display_event_input_KyPressedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_KyReleasedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsPressedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsReleasedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsClickedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsMovedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsDraggedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_input_MsWheelEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
