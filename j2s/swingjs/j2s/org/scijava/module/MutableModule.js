(function(){var P$=Clazz.newPackage("org.scijava.module"),I$=[[0,'org.scijava.module.DefaultMutableModuleItem']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "MutableModule", null, null, 'org.scijava.module.Module');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'addInput$S$Class', function (name, type) {
var item=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$org_scijava_module_Module$S$Class,[this, name, type]);
this.addInput$org_scijava_module_ModuleItem(item);
return item;
});

Clazz.newMeth(C$, 'addInput$org_scijava_module_ModuleItem', function (input) {
this.getInfo$().addInput$org_scijava_module_ModuleItem(input);
});

Clazz.newMeth(C$, 'addOutput$S$Class', function (name, type) {
var item=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$org_scijava_module_Module$S$Class,[this, name, type]);
this.addOutput$org_scijava_module_ModuleItem(item);
return item;
});

Clazz.newMeth(C$, 'addOutput$org_scijava_module_ModuleItem', function (output) {
this.getInfo$().addOutput$org_scijava_module_ModuleItem(output);
});

Clazz.newMeth(C$, 'removeInput$org_scijava_module_ModuleItem', function (input) {
this.getInfo$().removeInput$org_scijava_module_ModuleItem(input);
});

Clazz.newMeth(C$, 'removeOutput$org_scijava_module_ModuleItem', function (output) {
this.getInfo$().removeOutput$org_scijava_module_ModuleItem(output);
});

Clazz.newMeth(C$, 'run$', function () {
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
