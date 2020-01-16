(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmDiffractionShell", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEmDiffractionStatsId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("em_diffraction_stats_id", ((P$.EmDiffractionShell$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionShell$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionShell$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("em_diffraction_stats_id"));
});

Clazz.newMeth(C$, 'getFourierSpaceCoverage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fourier_space_coverage", ((P$.EmDiffractionShell$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionShell$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionShell$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("fourier_space_coverage"));
});

Clazz.newMeth(C$, 'getHighResolution$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("high_resolution", ((P$.EmDiffractionShell$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionShell$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionShell$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("high_resolution"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmDiffractionShell$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionShell$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionShell$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getLowResolution$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("low_resolution", ((P$.EmDiffractionShell$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionShell$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionShell$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("low_resolution"));
});

Clazz.newMeth(C$, 'getMultiplicity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("multiplicity", ((P$.EmDiffractionShell$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionShell$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionShell$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("multiplicity"));
});

Clazz.newMeth(C$, 'getNumStructureFactors$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_structure_factors", ((P$.EmDiffractionShell$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionShell$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionShell$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("num_structure_factors"));
});

Clazz.newMeth(C$, 'getPhaseResidual$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_residual", ((P$.EmDiffractionShell$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionShell$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionShell$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("phase_residual"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
