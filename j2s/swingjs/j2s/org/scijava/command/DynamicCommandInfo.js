(function(){var P$=Clazz.newPackage("org.scijava.command"),p$1={},I$=[[0,'org.scijava.module.DefaultMutableModuleItem']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DynamicCommandInfo", null, 'org.scijava.module.DefaultMutableModuleInfo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['info','org.scijava.command.CommandInfo']]]

Clazz.newMeth(C$, 'c$$org_scijava_command_CommandInfo$Class', function (info, moduleClass) {
Clazz.super_(C$, this);
this.info=info;
this.setModuleClass$Class(moduleClass);
p$1.populateItems.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getMutableInput$S$Class', function (name, type) {
return this.getInput$S$Class(name, type);
});

Clazz.newMeth(C$, 'getMutableOutput$S$Class', function (name, type) {
return this.getOutput$S$Class(name, type);
});

Clazz.newMeth(C$, 'getInputField$S', function (name) {
var item=this.info.getInput$S(name);
return item == null  ? null : item.getField$();
});

Clazz.newMeth(C$, 'getOutputField$S', function (name) {
var item=this.info.getOutput$S(name);
return item == null  ? null : item.getField$();
});

Clazz.newMeth(C$, 'isInteractive$', function () {
return this.info.isInteractive$();
});

Clazz.newMeth(C$, 'canPreview$', function () {
return this.info.canPreview$();
});

Clazz.newMeth(C$, 'canCancel$', function () {
return this.info.canCancel$();
});

Clazz.newMeth(C$, 'getInitializer$', function () {
return this.info.getInitializer$();
});

Clazz.newMeth(C$, 'getTitle$', function () {
return this.info.getTitle$();
});

Clazz.newMeth(C$, 'getMenuPath$', function () {
return this.info.getMenuPath$();
});

Clazz.newMeth(C$, 'getMenuRoot$', function () {
return this.info.getMenuRoot$();
});

Clazz.newMeth(C$, 'getIconPath$', function () {
return this.info.getIconPath$();
});

Clazz.newMeth(C$, 'getPriority$', function () {
return this.info.getPriority$();
});

Clazz.newMeth(C$, 'isSelectable$', function () {
return this.info.isSelectable$();
});

Clazz.newMeth(C$, 'getSelectionGroup$', function () {
return this.info.getSelectionGroup$();
});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.info.isSelected$();
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.info.isEnabled$();
});

Clazz.newMeth(C$, 'setMenuPath$org_scijava_MenuPath', function (menuPath) {
this.info.setMenuPath$org_scijava_MenuPath(menuPath);
});

Clazz.newMeth(C$, 'setMenuRoot$S', function (menuRoot) {
this.info.setMenuRoot$S(menuRoot);
});

Clazz.newMeth(C$, 'setIconPath$S', function (iconPath) {
this.info.setIconPath$S(iconPath);
});

Clazz.newMeth(C$, 'setPriority$D', function (priority) {
this.info.setPriority$D(priority);
});

Clazz.newMeth(C$, 'setEnabled$Z', function (enabled) {
this.info.setEnabled$Z(enabled);
});

Clazz.newMeth(C$, 'setSelectable$Z', function (selectable) {
this.info.setSelectable$Z(selectable);
});

Clazz.newMeth(C$, 'setSelectionGroup$S', function (selectionGroup) {
this.info.setSelectionGroup$S(selectionGroup);
});

Clazz.newMeth(C$, 'setSelected$Z', function (selected) {
this.info.setSelected$Z(selected);
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.info.getLabel$();
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.info.getDescription$();
});

Clazz.newMeth(C$, 'setLabel$S', function (label) {
this.info.setLabel$S(label);
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.info.setDescription$S(description);
});

Clazz.newMeth(C$, 'getName$', function () {
return this.info.getName$();
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.info.setName$S(name);
});

Clazz.newMeth(C$, 'isValid$', function () {
return this.info.isValid$();
});

Clazz.newMeth(C$, 'getProblems$', function () {
return this.info.getProblems$();
});

Clazz.newMeth(C$, 'populateItems', function () {
for (var item, $item = this.info.inputs$().iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
this.addInput$org_scijava_module_ModuleItem(p$1.copy$org_scijava_module_ModuleItem.apply(this, [item]));
}
for (var item, $item = this.info.outputs$().iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
this.addOutput$org_scijava_module_ModuleItem(p$1.copy$org_scijava_module_ModuleItem.apply(this, [item]));
}
}, p$1);

Clazz.newMeth(C$, 'copy$org_scijava_module_ModuleItem', function (item) {
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$org_scijava_module_ModuleInfo$org_scijava_module_ModuleItem,[this, item]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
