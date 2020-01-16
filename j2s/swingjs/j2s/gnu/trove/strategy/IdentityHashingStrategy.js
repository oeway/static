(function(){var P$=Clazz.newPackage("gnu.trove.strategy"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IdentityHashingStrategy", null, null, 'gnu.trove.strategy.HashingStrategy');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.INSTANCE=Clazz.new_(1,{K:"java.lang.Object"},C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['INSTANCE','gnu.trove.strategy.IdentityHashingStrategy']]]

Clazz.newMeth(C$, ['computeHashCode$TK','computeHashCode$TT'], function (object) {
return System.identityHashCode$O(object);
});

Clazz.newMeth(C$, ['equals$TK$TK','equals$TT$TT'], function (o1, o2) {
return o1 === o2 ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:51 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
