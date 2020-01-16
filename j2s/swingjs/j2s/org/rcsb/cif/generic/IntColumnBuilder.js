(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),I$=[[0,'java.util.ArrayList','org.rcsb.cif.model.ValueKind',['org.rcsb.cif.model.Builder','.CategoryBuilder'],'org.rcsb.cif.model.IntColumn','java.util.stream.IntStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntColumnBuilder", null, ['org.rcsb.cif.model.Builder','.ColumnBuilder'], 'org.rcsb.cif.generic.ColumnBuilder');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.parent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$S$S$TP'], function (categoryName, columnName, parent) {
;C$.superclazz.c$$S$S$java_util_List.apply(this, [categoryName, columnName, Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.parent=parent;
if (parent != null ) {
this.parent.registerChild$org_rcsb_cif_model_Builder_ColumnBuilder(this);
}}, 1);

Clazz.newMeth(C$, 'getValues$', function () {
return this.values;
});

Clazz.newMeth(C$, 'markNextNotPresent$', function () {
this.markNext$O$org_rcsb_cif_model_ValueKind(Integer.valueOf$I(0), $I$(2).NOT_PRESENT);
return this;
});

Clazz.newMeth(C$, 'markNextUnknown$', function () {
this.markNext$O$org_rcsb_cif_model_ValueKind(Integer.valueOf$I(0), $I$(2).UNKNOWN);
return this;
});

Clazz.newMeth(C$, 'build$', function () {
return $I$(3).createColumnText$S$S$java_util_List$java_util_List$Class(this.getCategoryName$(), this.getColumnName$(), this.values, this.mask, Clazz.getClass($I$(4)));
});

Clazz.newMeth(C$, 'leaveColumn$', function () {
if (this.parent == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["cannot leave column with undefined parent category"]);
}return this.parent.digest$org_rcsb_cif_generic_IntColumnBuilder(this);
});

Clazz.newMeth(C$, 'add$IA', function (value) {
$I$(5).of$IA(value).forEach$java_util_function_IntConsumer((function($$){((P$.IntColumnBuilder$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntColumnBuilder$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.SimpleName java.util.List*/$$.add$TE.apply($$,[t])});
})()
)); return Clazz.new_(P$.IntColumnBuilder$lambda1.$init$, [this, null])})(this.values));
$I$(5).range$I$I(0, value.length).mapToObj$java_util_function_IntFunction(/*addLambdaReuse org.rcsb.cif.generic.IntColumnBuilder$lambda2*/(P$.IntColumnBuilder$lambda2$||(P$.IntColumnBuilder$lambda2$=(((P$.IntColumnBuilder$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntColumnBuilder$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (i) { return ($I$(2).PRESENT);});
})()
), Clazz.new_(P$.IntColumnBuilder$lambda2.$init$, [this, null])))))).forEach$java_util_function_Consumer((function($$){((P$.IntColumnBuilder$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntColumnBuilder$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.SimpleName java.util.List<org.rcsb.cif.model.ValueKind>*/$$.add$TE.apply($$,[t])});
})()
)); return Clazz.new_(P$.IntColumnBuilder$lambda3.$init$, [this, null])})(this.mask));
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
