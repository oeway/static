(function(){var P$=Clazz.newPackage("org.scijava.widget"),p$1={},I$=[[0,'java.util.WeakHashMap','java.util.Objects','org.scijava.util.NumberUtils','org.scijava.ItemVisibility','org.scijava.util.Types','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultWidgetModel", null, 'org.scijava.AbstractContextual', 'org.scijava.widget.WidgetModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['initialized'],'O',['inputPanel','org.scijava.widget.InputPanel','module','org.scijava.module.Module','item','org.scijava.module.ModuleItem','objectPool','java.util.List','convertedObjects','java.util.Map','threadService','org.scijava.thread.ThreadService','convertService','org.scijava.convert.ConvertService','moduleService','org.scijava.module.ModuleService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$org_scijava_widget_InputPanel$org_scijava_module_Module$org_scijava_module_ModuleItem$java_util_List', function (context, inputPanel, module, item, objectPool) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
this.inputPanel=inputPanel;
this.module=module;
this.item=item;
this.objectPool=objectPool;
this.convertedObjects=Clazz.new_(1,{K:"java.lang.Object",V:"java.lang.Object"},$I$(1,1));
if (item.getValue$org_scijava_module_Module(module) == null ) {
this.setValue$O(this.moduleService.getDefaultValue$org_scijava_module_ModuleItem(item));
}}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.inputPanel;
});

Clazz.newMeth(C$, 'getModule$', function () {
return this.module;
});

Clazz.newMeth(C$, 'getItem$', function () {
return this.item;
});

Clazz.newMeth(C$, 'getObjectPool$', function () {
return this.objectPool;
});

Clazz.newMeth(C$, 'getWidgetLabel$', function () {
var label=this.item.getLabel$();
if (label != null  && !label.isEmpty$() ) return label;
var name=this.item.getName$();
return name.substring$I$I(0, 1).toUpperCase$() + name.substring$I(1);
});

Clazz.newMeth(C$, 'isStyle$S', function (style) {
var widgetStyle=this.getItem$().getWidgetStyle$();
if (widgetStyle == null ) return style == null ;
for (var s, $s = 0, $$s = widgetStyle.split$S(","); $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s.equals$O(style)) return true;
}
return false;
});

Clazz.newMeth(C$, 'getValue$', function () {
var value=this.item.getValue$org_scijava_module_Module(this.module);
if (this.isMultipleChoice$()) return p$1.ensureValidChoice$O.apply(this, [value]);
if (this.getObjectPool$().size$() > 0) return p$1.ensureValidObject$O.apply(this, [value]);
return value;
});

Clazz.newMeth(C$, 'setValue$O', function (value) {
var name=this.item.getName$();
if ($I$(2).equals$O$O(this.item.getValue$org_scijava_module_Module(this.module), value)) return;
var convertedInput=this.convertedObjects.get$O(value);
if (convertedInput != null  && $I$(2).equals$O$O(this.item.getValue$org_scijava_module_Module(this.module), convertedInput) ) {
return;
}convertedInput=this.convertService.convert$O$Class(value, this.item.getType$());
if (convertedInput !== value ) {
this.convertedObjects.put$TK$TV(value, convertedInput);
}this.module.setInput$S$O(name, convertedInput);
if (this.initialized) {
this.threadService.queue$Runnable((P$.DefaultWidgetModel$lambda1$||(P$.DefaultWidgetModel$lambda1$=(((P$.DefaultWidgetModel$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DefaultWidgetModel$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$', function () {
this.b$['org.scijava.widget.DefaultWidgetModel'].callback$.apply(this.b$['org.scijava.widget.DefaultWidgetModel'], []);
this.b$['org.scijava.widget.DefaultWidgetModel'].inputPanel.refresh$();
this.b$['org.scijava.widget.DefaultWidgetModel'].module.preview$();
});
})()
), Clazz.new_(P$.DefaultWidgetModel$lambda1.$init$, [this, null]))))));
}});

Clazz.newMeth(C$, 'callback$', function () {
try {
this.item.callback$org_scijava_module_Module(this.module);
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.module.MethodCallException")){
if (this.log != null ) this.log.error$Throwable(exc);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'getMin$', function () {
var min=p$1.toNumber$O.apply(this, [this.item.getMinimumValue$()]);
if (min != null ) return min;
return $I$(3).getMinimumNumber$Class(this.item.getType$());
});

Clazz.newMeth(C$, 'getMax$', function () {
var max=p$1.toNumber$O.apply(this, [this.item.getMaximumValue$()]);
if (max != null ) return max;
return $I$(3).getMaximumNumber$Class(this.item.getType$());
});

Clazz.newMeth(C$, 'getSoftMin$', function () {
var softMin=p$1.toNumber$O.apply(this, [this.item.getSoftMinimum$()]);
if (softMin != null ) return softMin;
return this.getMin$();
});

Clazz.newMeth(C$, 'getSoftMax$', function () {
var softMax=p$1.toNumber$O.apply(this, [this.item.getSoftMaximum$()]);
if (softMax != null ) return softMax;
return this.getMax$();
});

Clazz.newMeth(C$, 'getStepSize$', function () {
var stepSize=p$1.toNumber$O.apply(this, [this.item.getStepSize$()]);
if (stepSize != null ) return stepSize;
return $I$(3).toNumber$O$Class("1", this.item.getType$());
});

Clazz.newMeth(C$, 'getChoices$', function () {
var choicesList=this.item.getChoices$();
var choices=Clazz.array(String, [choicesList.size$()]);
for (var i=0; i < choices.length; i++) {
choices[i]=choicesList.get$I(i).toString();
}
return choices;
});

Clazz.newMeth(C$, 'getText$', function () {
var value=this.getValue$();
if (value == null ) return "";
var text=value.toString();
if (text.equals$O("\u0000")) return "";
return text;
});

Clazz.newMeth(C$, 'isMessage$', function () {
return this.getItem$().getVisibility$() === $I$(4).MESSAGE ;
});

Clazz.newMeth(C$, 'isText$', function () {
return $I$(5).isText$Class(this.getItem$().getType$());
});

Clazz.newMeth(C$, 'isCharacter$', function () {
return $I$(5).isCharacter$Class(this.getItem$().getType$());
});

Clazz.newMeth(C$, 'isNumber$', function () {
return $I$(5).isNumber$Class(this.getItem$().getType$());
});

Clazz.newMeth(C$, 'isBoolean$', function () {
return $I$(5).isBoolean$Class(this.getItem$().getType$());
});

Clazz.newMeth(C$, 'isMultipleChoice$', function () {
var choices=this.item.getChoices$();
return choices != null  && !choices.isEmpty$() ;
});

Clazz.newMeth(C$, 'isType$Class', function (type) {
return type.isAssignableFrom$Class(this.getItem$().getType$());
});

Clazz.newMeth(C$, 'setInitialized$Z', function (initialized) {
this.initialized=initialized;
});

Clazz.newMeth(C$, 'isInitialized$', function () {
return this.initialized;
});

Clazz.newMeth(C$, 'ensureValidChoice$O', function (value) {
return p$1.ensureValid$O$java_util_List.apply(this, [value, $I$(6).asList$TTA(this.getChoices$())]);
}, p$1);

Clazz.newMeth(C$, 'ensureValidObject$O', function (value) {
return p$1.ensureValid$O$java_util_List.apply(this, [value, this.getObjectPool$()]);
}, p$1);

Clazz.newMeth(C$, 'ensureValid$O$java_util_List', function (value, list) {
for (var o, $o = list.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (o.equals$O(value)) return value;
var convertedValue=this.convertedObjects.get$O(o);
if (convertedValue != null  && value.equals$O(convertedValue) ) {
return convertedValue;
}}
var validValue=list.get$I(0);
this.setValue$O(validValue);
return validValue;
}, p$1);

Clazz.newMeth(C$, 'toNumber$O', function (value) {
var type=this.item.getType$();
var saneType=$I$(5).box$Class(type);
return $I$(3).toNumber$O$Class(value, saneType);
}, p$1);
C$.$getAnn$ = function(){ return [
[['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['convertService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
