(function(){var P$=Clazz.newPackage("org.scijava.parse"),I$=[[0,['org.scijava.parse.Operator','.Associativity']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Operator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.parse.Token', 'Comparable');
C$.$classes$=[['Associativity',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['precedence'],'I',['arity'],'O',['associativity','org.scijava.parse.Operator.Associativity']]]

Clazz.newMeth(C$, 'c$$S$I$org_scijava_parse_Operator_Associativity$D', function (symbol, arity, associativity, precedence) {
;C$.superclazz.c$$S.apply(this,[symbol]);C$.$init$.apply(this);
this.arity=arity;
this.associativity=associativity;
this.precedence=precedence;
}, 1);

Clazz.newMeth(C$, 'getArity$', function () {
return this.arity;
});

Clazz.newMeth(C$, 'getAssociativity$', function () {
return this.associativity;
});

Clazz.newMeth(C$, 'isLeftAssociative$', function () {
var a=this.getAssociativity$();
return a === $I$(1).LEFT  || a === $I$(1).EITHER  ;
});

Clazz.newMeth(C$, 'isRightAssociative$', function () {
var a=this.getAssociativity$();
return a === $I$(1).RIGHT  || a === $I$(1).EITHER  ;
});

Clazz.newMeth(C$, 'isInfix$', function () {
return this.getArity$() > 1;
});

Clazz.newMeth(C$, 'isPrefix$', function () {
return this.getArity$() == 1 && this.isRightAssociative$() ;
});

Clazz.newMeth(C$, 'isPostfix$', function () {
return this.getArity$() == 1 && this.isLeftAssociative$() ;
});

Clazz.newMeth(C$, 'getPrecedence$', function () {
return this.precedence;
});

Clazz.newMeth(C$, 'instance$', function () {
return this;
});

Clazz.newMeth(C$, ['compareTo$org_scijava_parse_Operator','compareTo$','compareTo$TT'], function (that) {
var thisP=this.getPrecedence$();
var thatP=that.getPrecedence$();
if (thisP == thatP ) return 0;
return thisP < thatP  ? -1 : 1;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.Operator, "Associativity", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "EITHER", 0, []);
Clazz.newEnumConst($vals, C$.c$, "LEFT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "RIGHT", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NONE", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
