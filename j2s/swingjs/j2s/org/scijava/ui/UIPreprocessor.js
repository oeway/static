(function(){var P$=Clazz.newPackage("org.scijava.ui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UIPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['uiService','org.scijava.ui.UIService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
if (this.uiService == null ) return;
var ui=this.uiService.getDefaultUI$();
if (ui == null ) return;
for (var input, $input = module.getInfo$().inputs$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
if (!input.isAutoFill$()) continue;
var type=input.getType$();
if (type.isAssignableFrom$Class(ui.getClass$())) {
var name=input.getName$();
module.setInput$S$O(name, ui);
module.resolveInput$S(name);
}}
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.UIPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="10000.0" ']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
