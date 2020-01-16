(function(){var P$=Clazz.newPackage("org.scijava.parse.eval"),I$=[[0,'java.util.ArrayDeque','org.scijava.parse.Tokens','java.util.LinkedList','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractStackEvaluator", null, 'org.scijava.parse.eval.AbstractEvaluator', 'org.scijava.parse.eval.StackEvaluator');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.ARY=Clazz.array(String, -1, ["nullary", "unary", "binary", "ternary", "quaternary", "quinary", "senary", "septenary", "octary", "nonary"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['ARY','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_parse_ExpressionParser', function (parser) {
;C$.superclazz.c$$org_scijava_parse_ExpressionParser.apply(this,[parser]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'evaluate$java_util_LinkedList', function (queue) {
var stack=Clazz.new_(1,{E:"java.lang.Object"},$I$(1,1));
while (!queue.isEmpty$()){
var token=queue.removeFirst$();
var result;
if ($I$(2).isOperator$O(token)) {
result=this.execute$org_scijava_parse_Operator$java_util_Deque(token, stack);
} else {
result=token;
}if (result == null ) C$.die$O(token);
stack.push$TE(result);
}
if (stack.isEmpty$()) return null;
if (stack.size$() == 1) return stack.pop$();
var resultList=Clazz.new_(1,{E:"java.lang.Object"},$I$(3,1));
while (!stack.isEmpty$()){
resultList.addFirst$TE(stack.pop$());
}
return resultList;
});

Clazz.newMeth(C$, 'ary$I', function (arity) {
return arity < C$.ARY.length ? C$.ARY[arity] : arity + "-ary";
}, 1);

Clazz.newMeth(C$, 'ary$org_scijava_parse_Operator', function (op) {
return C$.ary$I(op.getArity$());
}, 1);

Clazz.newMeth(C$, 'die$O', function (token) {
var message=Clazz.new_($I$(4,1).c$$S,["Unsupported"]);
if (Clazz.instanceOf(token, "org.scijava.parse.Operator")) message.append$S(" " + C$.ary$org_scijava_parse_Operator(token));
message.append$S(" " + C$.type$O(token) + ": " + token );
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[message.toString()]);
}, 1);

Clazz.newMeth(C$, 'type$O', function (token) {
if (Clazz.instanceOf(token, "org.scijava.parse.Function")) return "function";
if (Clazz.instanceOf(token, "org.scijava.parse.Group")) return "group";
if (Clazz.instanceOf(token, "org.scijava.parse.Operator")) return "operator";
return "token";
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
