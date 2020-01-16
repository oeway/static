(function(){var P$=Clazz.newPackage("org.scijava.module"),I$=[[0,'java.util.ArrayList','java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultMutableModuleItem", null, 'org.scijava.module.AbstractModuleItem', 'org.scijava.module.MutableModuleItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.choices=Clazz.new_(1,{E:"Object"},$I$(1,1));
}, 1);

C$.$fields$=[['Z',['required','persisted'],'I',['columnCount'],'S',['persistKey','initializer','validater','callback','widgetStyle','$name','$label','$description'],'O',['type','Class','genericType','java.lang.reflect.Type','ioType','org.scijava.ItemIO','visibility','org.scijava.ItemVisibility','defaultValue','<T>','+minimumValue','+maximumValue','+softMinimum','+softMaximum','stepSize','Number','choices','java.util.List']]]

Clazz.newMeth(C$, 'c$$org_scijava_module_Module$S$Class', function (module, name, type) {
C$.c$$org_scijava_module_ModuleInfo$S$Class.apply(this, [module.getInfo$(), name, type]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_module_ModuleInfo$S$Class', function (info, name, type) {
;C$.superclazz.c$$org_scijava_module_ModuleInfo.apply(this,[info]);C$.$init$.apply(this);
this.$name=name;
this.type=type;
this.genericType=type;
this.ioType=C$.superclazz.prototype.getIOType$.apply(this, []);
this.visibility=C$.superclazz.prototype.getVisibility$.apply(this, []);
this.required=C$.superclazz.prototype.isRequired$.apply(this, []);
this.persisted=C$.superclazz.prototype.isPersisted$.apply(this, []);
this.persistKey=C$.superclazz.prototype.getPersistKey$.apply(this, []);
this.initializer=C$.superclazz.prototype.getInitializer$.apply(this, []);
this.validater=C$.superclazz.prototype.getValidater$.apply(this, []);
this.callback=C$.superclazz.prototype.getCallback$.apply(this, []);
this.widgetStyle=C$.superclazz.prototype.getWidgetStyle$.apply(this, []);
this.minimumValue=C$.superclazz.prototype.getMinimumValue$.apply(this, []);
this.maximumValue=C$.superclazz.prototype.getMaximumValue$.apply(this, []);
this.stepSize=C$.superclazz.prototype.getStepSize$.apply(this, []);
this.columnCount=C$.superclazz.prototype.getColumnCount$.apply(this, []);
var superChoices=C$.superclazz.prototype.getChoices$.apply(this, []);
if (superChoices != null ) this.choices.addAll$java_util_Collection(superChoices);
this.$label=C$.superclazz.prototype.getLabel$.apply(this, []);
this.$description=C$.superclazz.prototype.getDescription$.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_module_ModuleInfo$org_scijava_module_ModuleItem', function (info, item) {
;C$.superclazz.c$$org_scijava_module_ModuleInfo.apply(this,[info]);C$.$init$.apply(this);
this.$name=item.getName$();
this.type=item.getType$();
this.genericType=item.getGenericType$();
this.ioType=item.getIOType$();
this.visibility=item.getVisibility$();
this.required=item.isRequired$();
this.persisted=item.isPersisted$();
this.persistKey=item.getPersistKey$();
this.initializer=item.getInitializer$();
this.validater=item.getValidater$();
this.callback=item.getCallback$();
this.widgetStyle=item.getWidgetStyle$();
this.minimumValue=item.getMinimumValue$();
this.maximumValue=item.getMaximumValue$();
this.softMinimum=item.getSoftMinimum$();
this.softMaximum=item.getSoftMaximum$();
this.stepSize=item.getStepSize$();
this.columnCount=item.getColumnCount$();
var itemChoices=item.getChoices$();
if (itemChoices != null ) this.choices.addAll$java_util_Collection(itemChoices);
this.$label=item.getLabel$();
this.$description=item.getDescription$();
}, 1);

Clazz.newMeth(C$, 'setIOType$org_scijava_ItemIO', function (ioType) {
this.ioType=ioType;
});

Clazz.newMeth(C$, 'setVisibility$org_scijava_ItemVisibility', function (visibility) {
this.visibility=visibility;
});

Clazz.newMeth(C$, 'setRequired$Z', function (required) {
this.required=required;
});

Clazz.newMeth(C$, 'setPersisted$Z', function (persisted) {
this.persisted=persisted;
});

Clazz.newMeth(C$, 'setPersistKey$S', function (persistKey) {
this.persistKey=persistKey;
});

Clazz.newMeth(C$, 'setInitializer$S', function (initializer) {
this.initializer=initializer;
});

Clazz.newMeth(C$, 'setValidater$S', function (validater) {
this.validater=validater;
});

Clazz.newMeth(C$, 'setCallback$S', function (callback) {
this.callback=callback;
});

Clazz.newMeth(C$, 'setWidgetStyle$S', function (widgetStyle) {
this.widgetStyle=widgetStyle;
});

Clazz.newMeth(C$, ['setDefaultValue$TT'], function (defaultValue) {
this.defaultValue=defaultValue;
});

Clazz.newMeth(C$, ['setMinimumValue$TT'], function (minimumValue) {
this.minimumValue=minimumValue;
});

Clazz.newMeth(C$, ['setMaximumValue$TT'], function (maximumValue) {
this.maximumValue=maximumValue;
});

Clazz.newMeth(C$, ['setSoftMinimum$TT'], function (softMinimum) {
this.softMinimum=softMinimum;
});

Clazz.newMeth(C$, ['setSoftMaximum$TT'], function (softMaximum) {
this.softMaximum=softMaximum;
});

Clazz.newMeth(C$, 'setStepSize$Number', function (stepSize) {
this.stepSize=stepSize;
});

Clazz.newMeth(C$, 'setColumnCount$I', function (columnCount) {
this.columnCount=columnCount;
});

Clazz.newMeth(C$, 'setChoices$java_util_List', function (choices) {
this.choices.clear$();
this.choices.addAll$java_util_Collection(choices);
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getGenericType$', function () {
return this.genericType;
});

Clazz.newMeth(C$, 'getIOType$', function () {
return this.ioType;
});

Clazz.newMeth(C$, 'getVisibility$', function () {
return this.visibility;
});

Clazz.newMeth(C$, 'isRequired$', function () {
return this.required;
});

Clazz.newMeth(C$, 'isPersisted$', function () {
return this.persisted;
});

Clazz.newMeth(C$, 'getPersistKey$', function () {
return this.persistKey;
});

Clazz.newMeth(C$, 'getInitializer$', function () {
return this.initializer;
});

Clazz.newMeth(C$, 'getValidater$', function () {
return this.validater;
});

Clazz.newMeth(C$, 'getCallback$', function () {
return this.callback;
});

Clazz.newMeth(C$, 'getWidgetStyle$', function () {
return this.widgetStyle;
});

Clazz.newMeth(C$, 'getDefaultValue$', function () {
return this.defaultValue;
});

Clazz.newMeth(C$, 'getMinimumValue$', function () {
return this.minimumValue;
});

Clazz.newMeth(C$, 'getMaximumValue$', function () {
return this.maximumValue;
});

Clazz.newMeth(C$, 'getSoftMinimum$', function () {
return this.softMinimum;
});

Clazz.newMeth(C$, 'getSoftMaximum$', function () {
return this.softMaximum;
});

Clazz.newMeth(C$, 'getStepSize$', function () {
return this.stepSize;
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.columnCount;
});

Clazz.newMeth(C$, 'getChoices$', function () {
return $I$(2).unmodifiableList$java_util_List(this.choices);
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.$label;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.$description;
});

Clazz.newMeth(C$, 'setLabel$S', function (label) {
this.$label=label;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.$description=description;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.$name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.$name=name;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
