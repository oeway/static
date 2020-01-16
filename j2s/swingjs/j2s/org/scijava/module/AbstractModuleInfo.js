(function(){var P$=Clazz.newPackage("org.scijava.module"),p$1={},I$=[[0,'java.util.Collections','org.scijava.util.Types','java.util.HashMap','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractModuleInfo", null, 'org.scijava.AbstractUIDetails', 'org.scijava.module.ModuleInfo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['initialized'],'O',['inputMap','java.util.HashMap','+outputMap','inputList','java.util.ArrayList','+outputList']]]

Clazz.newMeth(C$, 'getInput$S', function (name) {
return this.inputMap$().get$O(name);
});

Clazz.newMeth(C$, 'getInput$S$Class', function (name, type) {
return p$1.castItem$org_scijava_module_ModuleItem$Class.apply(this, [this.getInput$S(name), type]);
});

Clazz.newMeth(C$, 'getOutput$S', function (name) {
return this.outputMap$().get$O(name);
});

Clazz.newMeth(C$, 'getOutput$S$Class', function (name, type) {
return p$1.castItem$org_scijava_module_ModuleItem$Class.apply(this, [this.getOutput$S(name), type]);
});

Clazz.newMeth(C$, 'inputs$', function () {
return $I$(1).unmodifiableList$java_util_List(this.inputList$());
});

Clazz.newMeth(C$, 'outputs$', function () {
return $I$(1).unmodifiableList$java_util_List(this.outputList$());
});

Clazz.newMeth(C$, 'parseParameters$', function () {
});

Clazz.newMeth(C$, 'clearParameters$', function () {
this.inputMap.clear$();
this.outputMap.clear$();
this.inputList.clear$();
this.outputList.clear$();
});

Clazz.newMeth(C$, 'registerInput$org_scijava_module_ModuleItem', function (input) {
this.inputMap.put$TK$TV(input.getName$(), input);
this.inputList.add$TE(input);
});

Clazz.newMeth(C$, 'registerOutput$org_scijava_module_ModuleItem', function (output) {
this.outputMap.put$TK$TV(output.getName$(), output);
this.outputList.add$TE(output);
});

Clazz.newMeth(C$, 'inputMap$', function () {
if (!this.initialized) p$1.initParameters.apply(this, []);
return this.inputMap;
});

Clazz.newMeth(C$, 'outputMap$', function () {
if (!this.initialized) p$1.initParameters.apply(this, []);
return this.outputMap;
});

Clazz.newMeth(C$, 'inputList$', function () {
if (!this.initialized) p$1.initParameters.apply(this, []);
return this.inputList;
});

Clazz.newMeth(C$, 'outputList$', function () {
if (!this.initialized) p$1.initParameters.apply(this, []);
return this.outputList;
});

Clazz.newMeth(C$, 'castItem$org_scijava_module_ModuleItem$Class', function (item, type) {
var itemType=item.getType$();
var saneItemType=$I$(2).box$Class(itemType);
if (!$I$(2).isAssignable$reflect_Type$reflect_Type(type, saneItemType)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Type " + type.getName$() + " is incompatible with item of type " + itemType.getName$() ]);
}var typedItem=item;
return typedItem;
}, p$1);

Clazz.newMeth(C$, 'initParameters', function () {
if (this.initialized) return;
this.inputMap=Clazz.new_(1,{K:"String",V:"org.scijava.module.ModuleItem"},$I$(3,1));
this.outputMap=Clazz.new_(1,{K:"String",V:"org.scijava.module.ModuleItem"},$I$(3,1));
this.inputList=Clazz.new_(1,{E:"org.scijava.module.ModuleItem"},$I$(4,1));
this.outputList=Clazz.new_(1,{E:"org.scijava.module.ModuleItem"},$I$(4,1));
this.parseParameters$();
this.initialized=true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
