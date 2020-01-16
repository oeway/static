(function(){var P$=Clazz.newPackage("org.scijava.parse"),I$=[[0,'org.scijava.parse.eval.DefaultEvaluator','org.scijava.parse.eval.EvaluatorConsole']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Main");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var evaluator=Clazz.new_($I$(1,1));
if (args.length > 0) {
for (var expression, $expression = 0, $$expression = args; $expression<$$expression.length&&((expression=($$expression[$expression])),1);$expression++) {
var result=evaluator.evaluate$S(expression);
if (Clazz.instanceOf(result, "org.scijava.parse.Variable")) {
result=evaluator.get$org_scijava_parse_Variable(result);
}System.out.println$O(result);
}
} else {
Clazz.new_($I$(2,1).c$$org_scijava_parse_eval_Evaluator,[evaluator]).showConsole$();
}}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
