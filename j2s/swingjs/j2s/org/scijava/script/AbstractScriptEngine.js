(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[[0,'org.scijava.script.AbstractScriptContext','org.scijava.log.StderrLogService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractScriptEngine", null, null, ['javax.script.ScriptEngine', 'org.scijava.log.Logged']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scriptContext=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['engineScopeBindings','javax.script.Bindings','scriptContext','javax.script.ScriptContext','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'log$', function () {
if (this.log == null ) {
this.log=Clazz.new_($I$(2,1));
}return this.log;
});

Clazz.newMeth(C$, 'setLogService$org_scijava_log_LogService', function (log) {
if (log != null ) this.log=log;
});

Clazz.newMeth(C$, 'get$S', function (key) {
return this.engineScopeBindings.get$O(key);
});

Clazz.newMeth(C$, 'getBindings$I', function (scope) {
if (scope == 100) return this.engineScopeBindings;
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'put$S$O', function (key, value) {
this.engineScopeBindings.put$S$O(key, value);
});

Clazz.newMeth(C$, 'getContext$', function () {
return this.scriptContext;
});

Clazz.newMeth(C$, 'setContext$javax_script_ScriptContext', function (context) {
this.scriptContext=context;
});

Clazz.newMeth(C$, 'getFactory$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'eval$S$javax_script_ScriptContext', function (script, context) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'eval$java_io_Reader$javax_script_ScriptContext', function (reader, context) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'createBindings$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'eval$S$javax_script_Bindings', function (script, n) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'eval$java_io_Reader$javax_script_Bindings', function (reader, n) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setBindings$javax_script_Bindings$I', function (bindings, scope) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
