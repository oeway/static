(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EditorKit", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
var o;
try {
o=Clazz.clone(this);
} catch (cnse) {
if (Clazz.exceptionOf(cnse,"CloneNotSupportedException")){
o=null;
} else {
throw cnse;
}
}
return o;
});

Clazz.newMeth(C$, 'install$javax_swing_JEditorPane', function (c) {
});

Clazz.newMeth(C$, 'deinstall$javax_swing_JEditorPane', function (c) {
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
