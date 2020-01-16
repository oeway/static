(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd");
/*c*/var C$=Clazz.newClass(P$, "AbstractDragAndDropHandler", null, 'org.scijava.plugin.AbstractHandlerPlugin', 'org.scijava.ui.dnd.DragAndDropHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['supports$TD$org_scijava_display_Display'], function (dataObject, display) {
return this.supportsDisplay$org_scijava_display_Display(display) && this.supports$TD(dataObject) ;
});

Clazz.newMeth(C$, 'supportsData$org_scijava_ui_dnd_DragAndDropData', function (data) {
return data.isSupported$Class(this.getType$()) && this.supports$TD(this.convertDataUnchecked$org_scijava_ui_dnd_DragAndDropData(data)) ;
});

Clazz.newMeth(C$, 'supportsData$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display', function (data, display) {
return this.supportsDisplay$org_scijava_display_Display(display) && this.supportsData$org_scijava_ui_dnd_DragAndDropData(data) ;
});

Clazz.newMeth(C$, 'supportsObject$O', function (object) {
return object != null  && this.getType$().isAssignableFrom$Class(object.getClass$())  && this.supports$TD(this.convertObjectUnchecked$O(object)) ;
});

Clazz.newMeth(C$, 'supportsObject$O$org_scijava_display_Display', function (object, display) {
return this.supportsDisplay$org_scijava_display_Display(display) && this.supportsObject$O(object) ;
});

Clazz.newMeth(C$, 'supportsDisplay$org_scijava_display_Display', function (display) {
return true;
});

Clazz.newMeth(C$, 'convertData$org_scijava_ui_dnd_DragAndDropData', function (data) {
if (!this.supportsData$org_scijava_ui_dnd_DragAndDropData(data)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible data object"]);
}return this.convertDataUnchecked$org_scijava_ui_dnd_DragAndDropData(data);
});

Clazz.newMeth(C$, 'convertObject$O', function (object) {
if (!this.supportsObject$O(object)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible data object"]);
}return this.convertObjectUnchecked$O(object);
});

Clazz.newMeth(C$, 'dropData$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display', function (data, display) {
return this.drop$TD$org_scijava_display_Display(this.convertData$org_scijava_ui_dnd_DragAndDropData(data), display);
});

Clazz.newMeth(C$, 'dropObject$O$org_scijava_display_Display', function (object, display) {
return this.drop$TD$org_scijava_display_Display(this.convertObject$O(object), display);
});

Clazz.newMeth(C$, ['check$TD$org_scijava_display_Display'], function (dataObject, display) {
if (!this.supports$TD(dataObject)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible data object"]);
}if (!this.supportsDisplay$org_scijava_display_Display(display)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible display"]);
}if (!this.supports$TD$org_scijava_display_Display(dataObject, display)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Data object and display are incompatible"]);
}});

Clazz.newMeth(C$, 'convertDataUnchecked$org_scijava_ui_dnd_DragAndDropData', function (data) {
return data.getData$Class(this.getType$());
});

Clazz.newMeth(C$, 'convertObjectUnchecked$O', function (object) {
var dataObject=object;
return dataObject;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
