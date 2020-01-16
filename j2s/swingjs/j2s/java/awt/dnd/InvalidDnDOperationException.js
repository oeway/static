(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InvalidDnDOperationException", null, 'IllegalStateException');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.dft_msg="The operation requested cannot be performed by the DnD system since it is not in the appropriate state";
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['dft_msg']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,[C$.dft_msg]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (msg) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
