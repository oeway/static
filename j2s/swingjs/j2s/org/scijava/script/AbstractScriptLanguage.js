(function(){var P$=Clazz.newPackage("org.scijava.script"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "AbstractScriptLanguage", null, 'org.scijava.plugin.AbstractRichPlugin', 'org.scijava.script.ScriptLanguage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.getLanguageName$();
});

Clazz.newMeth(C$, 'getEngineName$', function () {
return p$1.inferNameFromClassName.apply(this, []);
});

Clazz.newMeth(C$, 'getLanguageName$', function () {
var name=null;
var info=this.getInfo$();
if (info != null ) name=info.getName$();
return name != null  && !name.isEmpty$()  ? name : p$1.inferNameFromClassName.apply(this, []);
});

Clazz.newMeth(C$, 'inferNameFromClassName', function () {
var className=this.getClass$().getSimpleName$();
if (className.endsWith$S("ScriptLanguage")) {
className=className.substring$I$I(0, className.length$() - 14);
}className=className.replace$C$C("_", " ");
return className;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
