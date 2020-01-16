(function(){var P$=Clazz.newPackage("org.scijava.module.process"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ValidityPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
var info=module.getInfo$();
if (info.isValid$()) return;
var sb=Clazz.new_($I$(1,1).c$$S,["The module \"" + info.getDelegateClassName$() + "\" is invalid:\n" ]);
for (var problem, $problem = info.getProblems$().iterator$(); $problem.hasNext$()&&((problem=($problem.next$())),1);) {
sb.append$S("- " + problem.getMessage$());
sb.append$S("\n");
}
this.cancel$S(sb.toString());
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.ValidityPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="30000.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
