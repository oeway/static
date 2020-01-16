(function(){var P$=Clazz.newPackage("org.scijava.script.process"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ShebangScriptProcessor", null, null, 'org.scijava.script.process.ScriptProcessor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
}, 1);

C$.$fields$=[['Z',['first'],'O',['scriptService','org.scijava.script.ScriptService','log','org.scijava.log.LogService','info','org.scijava.script.ScriptInfo']]]

Clazz.newMeth(C$, 'begin$org_scijava_script_ScriptInfo', function (scriptInfo) {
this.info=scriptInfo;
});

Clazz.newMeth(C$, 'process$S', function (line) {
if (!this.first) return line;
this.first=false;
if (line.startsWith$S("#!")) {
var langName=line.substring$I(2);
var lang=this.scriptService.getLanguageByName$S(langName);
if (lang != null ) this.info.setLanguage$org_scijava_script_ScriptLanguage(lang);
 else this.log.warn$O("Unknown script language: " + langName);
return "";
}return line;
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.script.process.ShebangScriptProcessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.script.process.ScriptProcessor.class" ']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
