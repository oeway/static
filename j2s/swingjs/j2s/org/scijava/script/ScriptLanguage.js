(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[[0,'org.scijava.script.DefaultAutoCompleter','java.util.Collections','org.scijava.util.VersionUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "ScriptLanguage", null, null, ['javax.script.ScriptEngineFactory', 'org.scijava.plugin.RichPlugin', 'org.scijava.plugin.SingletonPlugin']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isCompiledLanguage$', function () {
return false;
});

Clazz.newMeth(C$, 'decode$O', function (object) {
return object;
});

Clazz.newMeth(C$, 'getAutoCompleter$', function () {
return Clazz.new_($I$(1,1).c$$org_scijava_script_ScriptLanguage,[this]);
});

Clazz.newMeth(C$, 'getMethodCallSyntax$S$S$SA', function (obj, m, args) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getOutputStatement$S', function (toDisplay) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getProgram$SA', function (statements) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getExtensions$', function () {
return $I$(2).emptyList$();
});

Clazz.newMeth(C$, 'getNames$', function () {
return $I$(2).singletonList$TT(this.getEngineName$());
});

Clazz.newMeth(C$, 'getLanguageVersion$', function () {
return $I$(3).getVersion$Class(this.getClass$());
});

Clazz.newMeth(C$, 'getMimeTypes$', function () {
return $I$(2).emptyList$();
});

Clazz.newMeth(C$, 'getParameter$S', function (key) {
if (key.equals$O("javax.script.engine")) {
return this.getEngineName$();
} else if (key.equals$O("javax.script.engine_version")) {
return this.getEngineVersion$();
} else if (key.equals$O("javax.script.name")) {
var list=this.getNames$();
return list.size$() > 0 ? list.get$I(0) : null;
} else if (key.equals$O("javax.script.language")) {
return this.getLanguageName$();
} else if (key.equals$O("javax.script.language_version")) {
return this.getLanguageVersion$();
}return null;
});

Clazz.newMeth(C$, 'getEngineVersion$', function () {
return $I$(3).getVersion$Class(this.getClass$());
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
