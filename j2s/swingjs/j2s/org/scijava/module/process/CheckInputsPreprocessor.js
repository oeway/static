(function(){var P$=Clazz.newPackage("org.scijava.module.process"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CheckInputsPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
for (var input, $input = module.getInfo$().inputs$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
if (input.isRequired$() && input.getValue$org_scijava_module_Module(module) == null  ) {
this.cancel$S("'" + input.getName$() + "' is required but unset." );
}}
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.CheckInputsPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="-10002.0" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
