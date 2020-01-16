(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[[0,'javax.script.ScriptEngineManager']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AdaptedScriptLanguage", null, 'org.scijava.script.AbstractScriptLanguage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['base','javax.script.ScriptEngineFactory']]]

Clazz.newMeth(C$, 'c$$javax_script_ScriptEngineFactory', function (base) {
Clazz.super_(C$, this);
if (base == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.base=base;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (factoryName) {
C$.c$$javax_script_ScriptEngineFactory.apply(this, [C$.findFactory$S(factoryName)]);
}, 1);

Clazz.newMeth(C$, 'getEngineName$', function () {
return this.base.getEngineName$();
});

Clazz.newMeth(C$, 'getEngineVersion$', function () {
return this.base.getEngineVersion$();
});

Clazz.newMeth(C$, 'getExtensions$', function () {
return this.base.getExtensions$();
});

Clazz.newMeth(C$, 'getMimeTypes$', function () {
return this.base.getMimeTypes$();
});

Clazz.newMeth(C$, 'getNames$', function () {
return this.base.getNames$();
});

Clazz.newMeth(C$, 'getLanguageName$', function () {
var info=this.getInfo$();
var name=info == null  ? null : info.getName$();
return name != null  && !name.isEmpty$()  ? name : this.base.getLanguageName$();
});

Clazz.newMeth(C$, 'getLanguageVersion$', function () {
return this.base.getLanguageVersion$();
});

Clazz.newMeth(C$, 'getParameter$S', function (key) {
return this.base.getParameter$S(key);
});

Clazz.newMeth(C$, 'getMethodCallSyntax$S$S$SA', function (obj, m, args) {
return this.base.getMethodCallSyntax$S$S$SA(obj, m, args);
});

Clazz.newMeth(C$, 'getOutputStatement$S', function (toDisplay) {
return this.base.getOutputStatement$S(toDisplay);
});

Clazz.newMeth(C$, 'getProgram$SA', function (statements) {
return this.base.getProgram$SA(statements);
});

Clazz.newMeth(C$, 'getScriptEngine$', function () {
return this.base.getScriptEngine$();
});

Clazz.newMeth(C$, 'findFactory$S', function (factoryName) {
var manager=Clazz.new_($I$(1,1));
for (var factory, $factory = manager.getEngineFactories$().iterator$(); $factory.hasNext$()&&((factory=($factory.next$())),1);) {
for (var name, $name = factory.getNames$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (factoryName.equals$O(name)) return factory;
}
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such script engine: " + factoryName]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
