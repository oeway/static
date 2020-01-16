(function(){var P$=Clazz.newPackage("org.scijava.parse"),I$=[[0,['org.scijava.parse.Operator','.Associativity'],'java.util.ArrayList','org.scijava.parse.Operator','org.scijava.parse.Group','java.lang.reflect.Modifier']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Operators");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DOT=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(".", 2, $I$(1).LEFT, 16);
C$.PARENS=C$.group$S$S$D("(", ")", 16);
C$.BRACKETS=C$.group$S$S$D("[", "]", 16);
C$.BRACES=C$.group$S$S$D("{", "}", 16);
C$.TRANSPOSE=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("\'", 1, $I$(1).LEFT, 15);
C$.DOT_TRANSPOSE=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(".\'", 1, $I$(1).LEFT, 15);
C$.POW=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("^", 2, $I$(1).RIGHT, 15);
C$.DOT_POW=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(".^", 2, $I$(1).RIGHT, 15);
C$.POST_INC=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("++", 1, $I$(1).LEFT, 14);
C$.POST_DEC=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("--", 1, $I$(1).LEFT, 14);
C$.PRE_INC=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("++", 1, $I$(1).RIGHT, 13);
C$.PRE_DEC=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("--", 1, $I$(1).RIGHT, 13);
C$.POS=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("+", 1, $I$(1).RIGHT, 13);
C$.NEG=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("-", 1, $I$(1).RIGHT, 13);
C$.COMPLEMENT=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("~", 1, $I$(1).RIGHT, 13);
C$.NOT=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("!", 1, $I$(1).RIGHT, 13);
C$.MUL=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("*", 2, $I$(1).LEFT, 12);
C$.DIV=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("/", 2, $I$(1).LEFT, 12);
C$.MOD=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("%", 2, $I$(1).LEFT, 12);
C$.RIGHT_DIV=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("\\", 2, $I$(1).LEFT, 12);
C$.DOT_MUL=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(".*", 2, $I$(1).LEFT, 12);
C$.DOT_DIV=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("./", 2, $I$(1).LEFT, 12);
C$.DOT_RIGHT_DIV=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(".\\", 2, $I$(1).LEFT, 12);
C$.ADD=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("+", 2, $I$(1).LEFT, 11);
C$.SUB=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("-", 2, $I$(1).LEFT, 11);
C$.LEFT_SHIFT=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("<<", 2, $I$(1).LEFT, 10);
C$.RIGHT_SHIFT=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(">>", 2, $I$(1).LEFT, 10);
C$.UNSIGNED_RIGHT_SHIFT=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(">>>", 2, $I$(1).LEFT, 10);
C$.COLON=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(":", 2, $I$(1).LEFT, 9);
C$.LESS_THAN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("<", 2, $I$(1).LEFT, 8);
C$.GREATER_THAN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(">", 2, $I$(1).LEFT, 8);
C$.LESS_THAN_OR_EQUAL=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("<=", 2, $I$(1).LEFT, 8);
C$.GREATER_THAN_OR_EQUAL=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(">=", 2, $I$(1).LEFT, 8);
C$.INSTANCEOF=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("instanceof", 2, $I$(1).LEFT, 8);
C$.EQUAL=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("==", 2, $I$(1).LEFT, 7);
C$.NOT_EQUAL=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("!=", 2, $I$(1).LEFT, 7);
C$.BITWISE_AND=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("&", 2, $I$(1).LEFT, 6);
C$.BITWISE_OR=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("|", 2, $I$(1).LEFT, 4);
C$.LOGICAL_AND=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("&&", 2, $I$(1).LEFT, 3);
C$.LOGICAL_OR=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("||", 2, $I$(1).LEFT, 2);
C$.ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("=", 2, $I$(1).RIGHT, 0);
C$.POW_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("^=", 2, $I$(1).RIGHT, 0);
C$.DOT_POW_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(".^=", 2, $I$(1).RIGHT, 0);
C$.MUL_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("*=", 2, $I$(1).RIGHT, 0);
C$.DIV_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("/=", 2, $I$(1).RIGHT, 0);
C$.MOD_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("%=", 2, $I$(1).RIGHT, 0);
C$.RIGHT_DIV_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("\\=", 2, $I$(1).RIGHT, 0);
C$.DOT_DIV_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("./=", 2, $I$(1).RIGHT, 0);
C$.DOT_RIGHT_DIV_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(".\\=", 2, $I$(1).RIGHT, 0);
C$.ADD_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("+=", 2, $I$(1).RIGHT, 0);
C$.SUB_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("-=", 2, $I$(1).RIGHT, 0);
C$.AND_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("&=", 2, $I$(1).RIGHT, 0);
C$.OR_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("|=", 2, $I$(1).RIGHT, 0);
C$.LEFT_SHIFT_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D("<<=", 2, $I$(1).RIGHT, 0);
C$.RIGHT_SHIFT_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(">>=", 2, $I$(1).RIGHT, 0);
C$.UNSIGNED_RIGHT_SHIFT_ASSIGN=C$.op$S$I$org_scijava_parse_Operator_Associativity$D(">>>=", 2, $I$(1).RIGHT, 0);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['DOT','org.scijava.parse.Operator','PARENS','org.scijava.parse.Group','+BRACKETS','+BRACES','TRANSPOSE','org.scijava.parse.Operator','+DOT_TRANSPOSE','+POW','+DOT_POW','+POST_INC','+POST_DEC','+PRE_INC','+PRE_DEC','+POS','+NEG','+COMPLEMENT','+NOT','+MUL','+DIV','+MOD','+RIGHT_DIV','+DOT_MUL','+DOT_DIV','+DOT_RIGHT_DIV','+ADD','+SUB','+LEFT_SHIFT','+RIGHT_SHIFT','+UNSIGNED_RIGHT_SHIFT','+COLON','+LESS_THAN','+GREATER_THAN','+LESS_THAN_OR_EQUAL','+GREATER_THAN_OR_EQUAL','+INSTANCEOF','+EQUAL','+NOT_EQUAL','+BITWISE_AND','+BITWISE_OR','+LOGICAL_AND','+LOGICAL_OR','+ASSIGN','+POW_ASSIGN','+DOT_POW_ASSIGN','+MUL_ASSIGN','+DIV_ASSIGN','+MOD_ASSIGN','+RIGHT_DIV_ASSIGN','+DOT_DIV_ASSIGN','+DOT_RIGHT_DIV_ASSIGN','+ADD_ASSIGN','+SUB_ASSIGN','+AND_ASSIGN','+OR_ASSIGN','+LEFT_SHIFT_ASSIGN','+RIGHT_SHIFT_ASSIGN','+UNSIGNED_RIGHT_SHIFT_ASSIGN']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'standardList$', function () {
var ops=Clazz.new_(1,{E:"org.scijava.parse.Operator"},$I$(2,1));
for (var f, $f = 0, $$f = Clazz.getClass(C$).getFields$(); $f<$$f.length&&((f=($$f[$f])),1);$f++) {
if (!C$.isOperator$reflect_Field(f)) continue;
try {
ops.add$TE(f.get$O(null));
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
}
return ops;
}, 1);

Clazz.newMeth(C$, 'op$S$I$org_scijava_parse_Operator_Associativity$D', function (symbol, arity, associativity, precedence) {
return Clazz.new_($I$(3,1).c$$S$I$org_scijava_parse_Operator_Associativity$D,[symbol, arity, associativity, precedence]);
}, 1);

Clazz.newMeth(C$, 'group$S$S$D', function (leftSymbol, rightSymbol, precedence) {
return Clazz.new_($I$(4,1).c$$S$S$D,[leftSymbol, rightSymbol, precedence]);
}, 1);

Clazz.newMeth(C$, 'isOperator$reflect_Field', function (f) {
var mods=f.getModifiers$();
return $I$(5).isStatic$I(mods) && $I$(5).isFinal$I(mods) && Clazz.getClass($I$(3)).isAssignableFrom$Class(f.getType$())  ;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
