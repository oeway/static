(function(){var P$=Clazz.newPackage("gnu.trove.procedure.array"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ToObjectArrayProceedure", null, null, 'gnu.trove.procedure.TObjectProcedure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pos=0;
}, 1);

C$.$fields$=[['I',['pos'],'O',['target','_.T[]']]]

Clazz.newMeth(C$, ['c$$TTA'], function (target) {
;C$.$init$.apply(this);
this.target=target;
}, 1);

Clazz.newMeth(C$, ['execute$TT','execute$'], function (value) {
this.target[this.pos++]=value;
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:51 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
