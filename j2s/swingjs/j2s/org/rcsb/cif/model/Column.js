(function(){var P$=Clazz.newPackage("org.rcsb.cif.model"),I$=[[0,'java.util.stream.IntStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Column");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'stringData$', function () {
return $I$(1).range$I$I(0, this.getRowCount$()).mapToObj$java_util_function_IntFunction((function($$){((P$.Column$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Column$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.ThisExpression org.rcsb.cif.model.Column*/$$.getStringData$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.Column$lambda1.$init$, [this, null])})(this));
});
};})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
