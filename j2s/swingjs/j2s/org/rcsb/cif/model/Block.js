(function(){var P$=Clazz.newPackage("org.rcsb.cif.model");
/*i*/var C$=Clazz.newInterface(P$, "Block");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'categoryNames$', function () {
return this.getCategoryNames$().stream$();
});

Clazz.newMeth(C$, 'categories$', function () {
return this.categoryNames$().map$java_util_function_Function((function($$){((P$.Block$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Block$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.ThisExpression org.rcsb.cif.model.Block*/$$.getCategory$S.apply($$,[t])});
})()
)); return Clazz.new_(P$.Block$lambda1.$init$, [this, null])})(this));
});
};})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
