(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DropTargetEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['context','java.awt.dnd.DropTargetContext']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTargetContext', function (dtc) {
;C$.superclazz.c$$O.apply(this,[dtc.getDropTarget$()]);C$.$init$.apply(this);
this.context=dtc;
}, 1);

Clazz.newMeth(C$, 'getDropTargetContext$', function () {
return this.context;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
