(function(){var P$=Clazz.newPackage("org.scijava.tool"),I$=[[0,'org.scijava.input.MouseCursor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Tool", null, null, ['org.scijava.plugin.RichPlugin', 'org.scijava.plugin.SingletonPlugin']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isAlwaysActive$', function () {
return false;
});

Clazz.newMeth(C$, 'isActiveInAppFrame$', function () {
return false;
});

Clazz.newMeth(C$, 'getCursor$', function () {
return $I$(1).DEFAULT;
});

Clazz.newMeth(C$, 'activate$', function () {
});

Clazz.newMeth(C$, 'deactivate$', function () {
});

Clazz.newMeth(C$, 'onKeyDown$org_scijava_display_event_input_KyPressedEvent', function (evt) {
});

Clazz.newMeth(C$, 'onKeyUp$org_scijava_display_event_input_KyReleasedEvent', function (evt) {
});

Clazz.newMeth(C$, 'onMouseDown$org_scijava_display_event_input_MsPressedEvent', function (evt) {
});

Clazz.newMeth(C$, 'onMouseUp$org_scijava_display_event_input_MsReleasedEvent', function (evt) {
});

Clazz.newMeth(C$, 'onMouseClick$org_scijava_display_event_input_MsClickedEvent', function (evt) {
});

Clazz.newMeth(C$, 'onMouseMove$org_scijava_display_event_input_MsMovedEvent', function (evt) {
});

Clazz.newMeth(C$, 'onMouseDrag$org_scijava_display_event_input_MsDraggedEvent', function (evt) {
});

Clazz.newMeth(C$, 'onMouseWheel$org_scijava_display_event_input_MsWheelEvent', function (evt) {
});

Clazz.newMeth(C$, 'configure$', function () {
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.getInfo$().getDescription$();
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
