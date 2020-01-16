(function(){var P$=Clazz.newPackage("org.scijava.tool"),I$=[[0,'org.scijava.tool.Tool']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "ToolService", null, null, ['org.scijava.plugin.SingletonService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.SEPARATOR_DISTANCE=10;
}

C$.$fields$=[[]
,['D',['SEPARATOR_DISTANCE']]]
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getTool$Class', function (toolClass) {
for (var tool, $tool = this.getAlwaysActiveTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (toolClass.isInstance$O(tool)) return toolClass.cast$O(tool);
}
for (var tool, $tool = this.getTools$().iterator$(); $tool.hasNext$()&&((tool=($tool.next$())),1);) {
if (toolClass.isInstance$O(tool)) return toolClass.cast$O(tool);
}
return null;
});

Clazz.newMeth(C$, 'isSeparatorNeeded$org_scijava_tool_Tool$org_scijava_tool_Tool', function (tool1, tool2) {
if (tool1 == null  || tool2 == null  ) return false;
var priority1=tool1.getInfo$().getPriority$();
var priority2=tool2.getInfo$().getPriority$();
return Math.abs(priority1 - priority2) >= 10.0 ;
});

Clazz.newMeth(C$, 'reportRectangle$org_scijava_util_RealCoords$org_scijava_util_RealCoords', function (p1, p2) {
var x=Math.min(p1.x, p2.x);
var y=Math.min(p1.y, p2.y);
var w=Math.abs(p2.x - p1.x);
var h=Math.abs(p2.y - p1.y);
this.reportRectangle$D$D$D$D(x, y, w, h);
});

Clazz.newMeth(C$, 'reportLine$org_scijava_util_RealCoords$org_scijava_util_RealCoords', function (p1, p2) {
this.reportLine$D$D$D$D(p1.x, p1.y, p2.x, p2.y);
});

Clazz.newMeth(C$, 'reportPoint$org_scijava_util_RealCoords', function (p) {
this.reportPoint$D$D(p.x, p.y);
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1),['activate$','configure$','deactivate$','getCursor$','getDescription$','isActiveInAppFrame$','isAlwaysActive$','onKeyDown$org_scijava_display_event_input_KyPressedEvent','onKeyUp$org_scijava_display_event_input_KyReleasedEvent','onMouseClick$org_scijava_display_event_input_MsClickedEvent','onMouseDown$org_scijava_display_event_input_MsPressedEvent','onMouseDrag$org_scijava_display_event_input_MsDraggedEvent','onMouseMove$org_scijava_display_event_input_MsMovedEvent','onMouseUp$org_scijava_display_event_input_MsReleasedEvent','onMouseWheel$org_scijava_display_event_input_MsWheelEvent']);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
