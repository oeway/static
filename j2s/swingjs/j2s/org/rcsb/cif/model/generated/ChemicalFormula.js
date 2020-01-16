(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChemicalFormula", null, 'org.rcsb.cif.model.BaseCategory');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Map', function (name, columns) {
;C$.superclazz.c$$S$java_util_Map.apply(this, [name, columns]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$OA', function (name, rowCount, encodedColumns) {
;C$.superclazz.c$$S$I$OA.apply(this, [name, rowCount, encodedColumns]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this, [name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAnalytical$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("analytical", ((P$.ChemicalFormula$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalFormula$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalFormula$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("analytical"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.ChemicalFormula$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalFormula$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalFormula$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getIupac$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("iupac", ((P$.ChemicalFormula$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalFormula$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalFormula$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("iupac"));
});

Clazz.newMeth(C$, 'getMoiety$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("moiety", ((P$.ChemicalFormula$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalFormula$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalFormula$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("moiety"));
});

Clazz.newMeth(C$, 'getStructural$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("structural", ((P$.ChemicalFormula$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalFormula$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalFormula$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("structural"));
});

Clazz.newMeth(C$, 'getSum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sum", ((P$.ChemicalFormula$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalFormula$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalFormula$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("sum"));
});

Clazz.newMeth(C$, 'getWeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weight", ((P$.ChemicalFormula$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalFormula$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalFormula$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("weight"));
});

Clazz.newMeth(C$, 'getWeightMeas$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weight_meas", ((P$.ChemicalFormula$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalFormula$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalFormula$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("weight_meas"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
