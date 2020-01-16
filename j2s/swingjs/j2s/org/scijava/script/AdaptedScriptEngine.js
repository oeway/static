(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AdaptedScriptEngine", null, null, 'javax.script.ScriptEngine');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['engine','javax.script.ScriptEngine']]]

Clazz.newMeth(C$, 'c$$javax_script_ScriptEngine', function (engine) {
;C$.$init$.apply(this);
this.engine=engine;
}, 1);

Clazz.newMeth(C$, 'eval$S$javax_script_ScriptContext', function (script, context) {
return this.engine.eval$S$javax_script_ScriptContext(script, context);
});

Clazz.newMeth(C$, 'eval$java_io_Reader$javax_script_ScriptContext', function (reader, context) {
return this.engine.eval$java_io_Reader$javax_script_ScriptContext(reader, context);
});

Clazz.newMeth(C$, 'eval$S', function (script) {
return this.engine.eval$S(script);
});

Clazz.newMeth(C$, 'eval$java_io_Reader', function (reader) {
return this.engine.eval$java_io_Reader(reader);
});

Clazz.newMeth(C$, 'eval$S$javax_script_Bindings', function (script, n) {
return this.engine.eval$S$javax_script_Bindings(script, n);
});

Clazz.newMeth(C$, 'eval$java_io_Reader$javax_script_Bindings', function (reader, n) {
return this.engine.eval$java_io_Reader$javax_script_Bindings(reader, n);
});

Clazz.newMeth(C$, 'put$S$O', function (key, value) {
this.engine.put$S$O(key, value);
});

Clazz.newMeth(C$, 'get$S', function (key) {
return this.engine.get$S(key);
});

Clazz.newMeth(C$, 'getBindings$I', function (scope) {
return this.engine.getBindings$I(scope);
});

Clazz.newMeth(C$, 'setBindings$javax_script_Bindings$I', function (bindings, scope) {
this.engine.setBindings$javax_script_Bindings$I(bindings, scope);
});

Clazz.newMeth(C$, 'createBindings$', function () {
return this.engine.createBindings$();
});

Clazz.newMeth(C$, 'getContext$', function () {
return this.engine.getContext$();
});

Clazz.newMeth(C$, 'setContext$javax_script_ScriptContext', function (context) {
this.engine.setContext$javax_script_ScriptContext(context);
});

Clazz.newMeth(C$, 'getFactory$', function () {
return this.engine.getFactory$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
