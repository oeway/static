(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[[0,'net.imglib2.roi.geom.real.ClosedWritableSphere']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AnalyzeCompositeDemo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var s1=Clazz.new_($I$(1,1).c$$DA$D,[Clazz.array(Double.TYPE, -1, [0, 0, 0]), 3.5]);
var s2=Clazz.new_($I$(1,1).c$$DA$D,[Clazz.array(Double.TYPE, -1, [1, 2, 0]), 1.5]);
var s3=Clazz.new_($I$(1,1).c$$DA$D,[Clazz.array(Double.TYPE, -1, [2, 2, 0]), 1.5]);
var ;
_.AnalyzeCompositeDemo.printComposite$java_util_function_Predicate$S$S(s1, "", "");
_.AnalyzeCompositeDemo.printComposite$net_imglib2_roi_composite_CompositeMaskPredicate$S$S(, "", "");
}, 1);

Clazz.newMeth(C$, 'printComposite$java_util_function_Predicate$S$S', function (p, indent, indentChild) {
if (Clazz.instanceOf(p, "net.imglib2.roi.composite.CompositeMaskPredicate")) _.AnalyzeCompositeDemo.printComposite$net_imglib2_roi_composite_CompositeMaskPredicate$S$S(p, indent, indentChild);
 else System.out.println$S(indent + "leaf  (" + p + ")" );
}, 1);

Clazz.newMeth(C$, 'printComposite$net_imglib2_roi_composite_CompositeMaskPredicate$S$S', function (p, indent, indentChild) {
System.out.println$S(indent + _.AnalyzeCompositeDemo.operatorName$net_imglib2_roi_Operators_MaskOperator(p.operator$()) + "  (" + p + ")" );
var i=p.operands$().size$();
for (var q, $q = p.operands$().iterator$(); $q.hasNext$()&&((q=($q.next$())),1);) _.AnalyzeCompositeDemo.printComposite$java_util_function_Predicate$S$S(q, indentChild + " +--", indentChild + (--i == 0 ? "    " : " |  "));

}, 1);

Clazz.newMeth(C$, 'operatorName$net_imglib2_roi_Operators_MaskOperator', function (operator) {
if () return "AND";
 else if () return "OR";
 else if () return "XOR";
 else if () return "MINUS";
 else if () return "NEGATE";
 else return operator.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:40:36 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
