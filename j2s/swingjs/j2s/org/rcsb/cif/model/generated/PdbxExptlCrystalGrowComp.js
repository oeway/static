(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalGrowComp", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCrystalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_id", ((P$.PdbxExptlCrystalGrowComp$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalGrowComp$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalGrowComp$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_id"));
});

Clazz.newMeth(C$, 'getCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id", ((P$.PdbxExptlCrystalGrowComp$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalGrowComp$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalGrowComp$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id"));
});

Clazz.newMeth(C$, 'getCompName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_name", ((P$.PdbxExptlCrystalGrowComp$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalGrowComp$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalGrowComp$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("comp_name"));
});

Clazz.newMeth(C$, 'getSolId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sol_id", ((P$.PdbxExptlCrystalGrowComp$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalGrowComp$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalGrowComp$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("sol_id"));
});

Clazz.newMeth(C$, 'getConc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conc", ((P$.PdbxExptlCrystalGrowComp$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalGrowComp$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalGrowComp$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("conc"));
});

Clazz.newMeth(C$, 'getConcRange$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conc_range", ((P$.PdbxExptlCrystalGrowComp$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalGrowComp$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalGrowComp$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("conc_range"));
});

Clazz.newMeth(C$, 'getConcUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conc_units", ((P$.PdbxExptlCrystalGrowComp$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalGrowComp$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalGrowComp$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("conc_units"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:45 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
