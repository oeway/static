(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TreeExpansionEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['path','javax.swing.tree.TreePath']]]

Clazz.newMeth(C$, 'c$$O$javax_swing_tree_TreePath', function (source, path) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.path=path;
}, 1);

Clazz.newMeth(C$, 'getPath$', function () {
return this.path;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
