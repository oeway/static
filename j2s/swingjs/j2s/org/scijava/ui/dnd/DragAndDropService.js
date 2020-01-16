(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd"),I$=[[0,'org.scijava.ui.dnd.DragAndDropHandler']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "DragAndDropService", null, null, ['org.scijava.plugin.HandlerService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'supports$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display', function (data, display) {
return this.getHandler$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display(data, display) != null ;
});

Clazz.newMeth(C$, 'supports$O$org_scijava_display_Display', function (object, display) {
return this.getHandler$O$org_scijava_display_Display(object, display) != null ;
});

Clazz.newMeth(C$, 'drop$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display', function (data, display) {
var handler=this.getHandler$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display(data, display);
if (handler == null ) return false;
return handler.dropData$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display(data, display);
});

Clazz.newMeth(C$, 'drop$O$org_scijava_display_Display', function (data, display) {
var handler=this.getHandler$O$org_scijava_display_Display(data, display);
if (handler == null ) return false;
return handler.dropObject$O$org_scijava_display_Display(data, display);
});

Clazz.newMeth(C$, 'getHandler$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display', function (data, display) {
for (var handler, $handler = this.getInstances$().iterator$(); $handler.hasNext$()&&((handler=($handler.next$())),1);) {
if (handler.supportsData$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display(data, display)) return handler;
}
return null;
});

Clazz.newMeth(C$, 'getHandler$O$org_scijava_display_Display', function (object, display) {
for (var handler, $handler = this.getInstances$().iterator$(); $handler.hasNext$()&&((handler=($handler.next$())),1);) {
if (handler.supportsObject$O$org_scijava_display_Display(object, display)) return handler;
}
return null;
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1),['convertData$org_scijava_ui_dnd_DragAndDropData','convertObject$O','drop$TD$org_scijava_display_Display','dropData$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display','dropObject$O$org_scijava_display_Display','supports$TD$org_scijava_display_Display','supports$TD','supportsData$org_scijava_ui_dnd_DragAndDropData','supportsData$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display','supportsDisplay$org_scijava_display_Display','supportsObject$O','supportsObject$O$org_scijava_display_Display']);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass(java.lang.Object);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
