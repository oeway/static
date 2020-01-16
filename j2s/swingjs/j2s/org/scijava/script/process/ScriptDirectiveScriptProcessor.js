(function(){var P$=Clazz.newPackage("org.scijava.script.process"),p$1={},I$=[[0,'org.scijava.MenuPath']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScriptDirectiveScriptProcessor", null, 'org.scijava.script.process.DirectiveScriptProcessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','moduleService','org.scijava.module.ModuleService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$java_util_function_Predicate.apply(this,[(P$.ScriptDirectiveScriptProcessor$lambda1$||(P$.ScriptDirectiveScriptProcessor$lambda1$=(((P$.ScriptDirectiveScriptProcessor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ScriptDirectiveScriptProcessor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (directive) { return ("script".equals$O(directive));});
})()
), Clazz.new_(1,{T:"String"},P$.ScriptDirectiveScriptProcessor$lambda1.$init$, [this, null])))))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'process$S$java_util_Map$S', function (directive, attrs, theRest) {
for (var k, $k = attrs.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
p$1.assignAttribute$S$O.apply(this, [k == null  ? "name" : k, attrs.get$O(k)]);
}
this.moduleService.addModule$org_scijava_module_ModuleInfo(this.info$());
return "";
});

Clazz.newMeth(C$, 'assignAttribute$S$O', function (k, v) {
if (this.is$S$S(k, "name")) this.info$().setName$S(this.as$O$Class(v, Clazz.getClass(String)));
 else if (this.is$S$S(k, "label")) this.info$().setLabel$S(this.as$O$Class(v, Clazz.getClass(String)));
 else if (this.is$S$S(k, "description")) this.info$().setDescription$S(this.as$O$Class(v, Clazz.getClass(String)));
 else if (this.is$S$S(k, "menuPath")) {
this.info$().setMenuPath$org_scijava_MenuPath(Clazz.new_($I$(1,1).c$$S,[this.as$O$Class(v, Clazz.getClass(String))]));
} else if (this.is$S$S(k, "menuRoot")) this.info$().setMenuRoot$S(this.as$O$Class(v, Clazz.getClass(String)));
 else if (this.is$S$S(k, "iconPath")) this.info$().setIconPath$S(this.as$O$Class(v, Clazz.getClass(String)));
 else if (this.is$S$S(k, "priority")) {
var priority=p$1.priority$O.apply(this, [v]);
if (priority != null ) this.info$().setPriority$D((priority).valueOf());
} else if (this.is$S$S(k, "headless") && (this.as$O$Class(v, Boolean.TYPE)).valueOf() ) {
this.info$().set$S$S("headless", "true");
} else this.info$().set$S$S(k, v.toString());
}, p$1);

Clazz.newMeth(C$, 'priority$O', function (p) {
var pDouble=this.as$O$Class(p, Clazz.getClass(Double));
if (pDouble != null ) return pDouble;
var pString=this.as$O$Class(p, Clazz.getClass(String));
if (pString == null ) return null;
var lString=pString.toLowerCase$();
if (lString.matches$S("first")) return new Double(1.0E300);
if (lString.matches$S("extremely[ _-]?high")) return new Double(1000000.0);
if (lString.matches$S("very[ _-]?high")) return new Double(10000.0);
if (lString.matches$S("high")) return new Double(100.0);
if (lString.matches$S("normal")) return new Double(0.0);
if (lString.matches$S("low")) return new Double(-100.0);
if (lString.matches$S("very[ _-]?low")) return new Double(-10000.0);
if (lString.matches$S("extremely[ _-]?low")) return new Double(-1000000.0);
if (lString.matches$S("last")) return new Double(-1.0E300);
return null;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.script.process.ScriptDirectiveScriptProcessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.script.process.ScriptProcessor.class" priority="100.0" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
