(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxPointSymmetryDepositorInfo", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxPointSymmetryDepositorInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPointSymmetryDepositorInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPointSymmetryDepositorInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getSchoenfliesSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Schoenflies_symbol", ((P$.PdbxPointSymmetryDepositorInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPointSymmetryDepositorInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPointSymmetryDepositorInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("Schoenflies_symbol"));
});

Clazz.newMeth(C$, 'getCircularSymmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("circular_symmetry", ((P$.PdbxPointSymmetryDepositorInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPointSymmetryDepositorInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPointSymmetryDepositorInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("circular_symmetry"));
});

Clazz.newMeth(C$, 'getH_MNotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("H-M_notation", ((P$.PdbxPointSymmetryDepositorInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPointSymmetryDepositorInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPointSymmetryDepositorInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("H-M_notation"));
});

Clazz.newMeth(C$, 'getStatusFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("status_flag", ((P$.PdbxPointSymmetryDepositorInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPointSymmetryDepositorInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPointSymmetryDepositorInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("status_flag"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
