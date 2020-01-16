(function(){var P$=Clazz.newPackage("org.scijava.table.process"),p$1={},I$=[[0,'java.util.ArrayList','org.scijava.util.Types','org.scijava.table.DefaultGenericTable','org.scijava.table.DefaultColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ResultsPostprocessor", null, 'org.scijava.module.process.AbstractPostprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ui','org.scijava.ui.UIService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
if (this.ui == null ) {
return;
}var outputs=Clazz.new_(1,{E:"org.scijava.module.ModuleItem"},$I$(1,1));
module.getInfo$().outputs$().forEach$java_util_function_Consumer(((P$.ResultsPostprocessor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ResultsPostprocessor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (output) {
var name=output.getName$();
if (this.$finals$.module.isOutputResolved$S(name)) return;
if (this.$finals$.module.getOutput$S(name) == null ) return;
if (!p$1.isSimple$org_scijava_module_Module$org_scijava_module_ModuleItem.apply(this.b$['org.scijava.table.process.ResultsPostprocessor'], [this.$finals$.module, output])) return;
this.$finals$.outputs.add$TE(output);
});
})()
), Clazz.new_(1,{T:"? super org.scijava.module.ModuleItem"},P$.ResultsPostprocessor$lambda1.$init$, [this, {module:module,outputs:outputs}])));
if (outputs.isEmpty$()) return;
if (outputs.size$() == 1 && $I$(2).isText$Class(outputs.get$I(0).getType$()) ) {
return;
}var outputTable=Clazz.new_($I$(3,1));
var names=Clazz.new_(1,{T:"String"},$I$(4,1).c$$Class$S,[Clazz.getClass(String), "Name"]);
var values=Clazz.new_(1,{T:"java.lang.Object"},$I$(4,1).c$$Class$S,[Clazz.getClass(java.lang.Object), "Value"]);
for (var output, $output = outputs.iterator$(); $output.hasNext$()&&((output=($output.next$())),1);) {
var name=output.getName$();
names.addValue$TE(name);
values.addValue$TE(module.getOutput$S(name));
module.resolveOutput$S(name);
}
outputTable.add$TC(names);
outputTable.add$TC(values);
var title=module.getInfo$().getTitle$();
this.ui.show$S$O(title, outputTable);
});

Clazz.newMeth(C$, 'isSimple$org_scijava_module_Module$org_scijava_module_ModuleItem', function (m, item) {
var type=item.getType$();
return p$1.isSimpleType$Class.apply(this, [type]) || type === Clazz.getClass(java.lang.Object)  && p$1.isSimpleValue$O.apply(this, [item.getValue$org_scijava_module_Module(m)])  ;
}, p$1);

Clazz.newMeth(C$, 'isSimpleType$Class', function (type) {
return $I$(2).isText$Class(type) || $I$(2).isNumber$Class(type) || $I$(2).isBoolean$Class(type)  ;
}, p$1);

Clazz.newMeth(C$, 'isSimpleValue$O', function (o) {
return o != null  && p$1.isSimpleType$Class.apply(this, [o.getClass$()]) ;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.table.process.ResultsPostprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PostprocessorPlugin.class" priority="-9999.0" ']],
  [['ui','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
