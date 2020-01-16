(function(){var P$=Clazz.newPackage("org.scijava.parse"),I$=[[0,['org.scijava.parse.Operator','.Associativity']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Group", null, 'org.scijava.parse.Operator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['$arity'],'S',['terminator']]]

Clazz.newMeth(C$, 'c$$S$S$D', function (initiator, terminator, precedence) {
;C$.superclazz.c$$S$I$org_scijava_parse_Operator_Associativity$D.apply(this,[initiator, 0, $I$(1).NONE, precedence]);C$.$init$.apply(this);
this.terminator=terminator;
}, 1);

Clazz.newMeth(C$, 'getTerminator$', function () {
return this.terminator;
});

Clazz.newMeth(C$, 'incArity$', function () {
this.$arity++;
});

Clazz.newMeth(C$, 'matches$org_scijava_parse_Group', function (g) {
return this.getToken$().equals$O(g.getToken$()) && this.getTerminator$().equals$O(g.getTerminator$()) && this.getPrecedence$() == g.getPrecedence$()   ;
});

Clazz.newMeth(C$, 'getArity$', function () {
return this.$arity;
});

Clazz.newMeth(C$, 'isInfix$', function () {
return true;
});

Clazz.newMeth(C$, 'isPrefix$', function () {
return true;
});

Clazz.newMeth(C$, 'instance$', function () {
return Clazz.new_(C$.c$$S$S$D,[this.getToken$(), this.getTerminator$(), this.getPrecedence$()]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.getToken$() + this.getArity$() + this.getTerminator$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
