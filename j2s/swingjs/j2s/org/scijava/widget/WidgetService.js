(function(){var P$=Clazz.newPackage("org.scijava.widget"),I$=[[0,'org.scijava.widget.DefaultWidgetModel','org.scijava.widget.InputWidget','org.scijava.widget.WidgetModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "WidgetService", null, null, ['org.scijava.plugin.WrapperService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'createModel$org_scijava_widget_InputPanel$org_scijava_module_Module$org_scijava_module_ModuleItem$java_util_List', function (inputPanel, module, item, objectPool) {
return Clazz.new_($I$(1,1).c$$org_scijava_Context$org_scijava_widget_InputPanel$org_scijava_module_Module$org_scijava_module_ModuleItem$java_util_List,[this.getContext$(), inputPanel, module, item, objectPool]);
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(2),['get$','getType$','getValue$','isLabeled$','isMessage$','refreshWidget$','set$org_scijava_widget_WidgetModel','supports$org_scijava_widget_WidgetModel','updateModel$']);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(3),['callback$','getChoices$','getItem$','getMax$','getMin$','getModule$','getObjectPool$','getPanel$','getSoftMax$','getSoftMin$','getStepSize$','getText$','getValue$','getWidgetLabel$','isBoolean$','isCharacter$','isInitialized$','isMessage$','isMultipleChoice$','isNumber$','isStyle$S','isText$','isType$Class','setInitialized$Z','setValue$O']);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
