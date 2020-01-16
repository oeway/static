(function(){var P$=Clazz.newPackage("org.scijava.widget"),p$1={},I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractInputHarvester", null, 'org.scijava.AbstractContextual', 'org.scijava.widget.InputHarvester');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','widgetService','org.scijava.widget.WidgetService','objectService','org.scijava.object.ObjectService','convertService','org.scijava.convert.ConvertService']]]

Clazz.newMeth(C$, 'buildPanel$org_scijava_widget_InputPanel$org_scijava_module_Module', function (inputPanel, module) {
var inputs=module.getInfo$().inputs$();
var models=Clazz.new_(1,{E:"org.scijava.widget.WidgetModel"},$I$(1,1));
for (var item, $item = inputs.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
var model=p$1.addInput$org_scijava_widget_InputPanel$org_scijava_module_Module$org_scijava_module_ModuleItem.apply(this, [inputPanel, module, item]);
if (model != null ) models.add$TE(model);
}
for (var model, $model = models.iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) model.setInitialized$Z(true);

module.preview$();
});

Clazz.newMeth(C$, 'addInput$org_scijava_widget_InputPanel$org_scijava_module_Module$org_scijava_module_ModuleItem', function (inputPanel, module, item) {
var name=item.getName$();
var resolved=module.isInputResolved$S(name);
if (resolved) return null;
var type=item.getType$();
var model=this.widgetService.createModel$org_scijava_widget_InputPanel$org_scijava_module_Module$org_scijava_module_ModuleItem$java_util_List(inputPanel, module, item, p$1.getObjects$Class.apply(this, [type]));
var widgetType=inputPanel.getWidgetComponentType$();
var widget=this.widgetService.create$TD(model);
if (widget == null ) {
this.log.debug$O("No widget found for input: " + model.getItem$().getName$());
}if (widget != null  && widget.getComponentType$() === widgetType  ) {
var typedWidget=widget;
inputPanel.addWidget$org_scijava_widget_InputWidget(typedWidget);
return model;
}if (item.isRequired$()) {
throw Clazz.new_(Clazz.load('org.scijava.module.ModuleException').c$$S,["A " + type.getSimpleName$() + " is required but none exist." ]);
}return null;
}, p$1);

Clazz.newMeth(C$, 'getObjects$Class', function (type) {
var compatibleInputs=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.convertService.getCompatibleInputs$Class(type)]);
compatibleInputs.addAll$java_util_Collection(this.objectService.getObjects$Class(type));
return compatibleInputs;
}, p$1);
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['widgetService','org.scijava.widget.WidgetService',null,['org.scijava.plugin.Parameter']],['']],
  [['objectService','org.scijava.object.ObjectService',null,['org.scijava.plugin.Parameter']],['']],
  [['convertService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
