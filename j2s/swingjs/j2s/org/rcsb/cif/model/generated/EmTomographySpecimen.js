(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmTomographySpecimen", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCryoProtectant$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cryo_protectant", ((P$.EmTomographySpecimen$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomographySpecimen$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomographySpecimen$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("cryo_protectant"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmTomographySpecimen$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomographySpecimen$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomographySpecimen$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getFiducialMarkers$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fiducial_markers", ((P$.EmTomographySpecimen$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomographySpecimen$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomographySpecimen$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("fiducial_markers"));
});

Clazz.newMeth(C$, 'getHighPressureFreezing$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("high_pressure_freezing", ((P$.EmTomographySpecimen$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomographySpecimen$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomographySpecimen$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("high_pressure_freezing"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmTomographySpecimen$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomographySpecimen$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomographySpecimen$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getSectioning$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sectioning", ((P$.EmTomographySpecimen$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomographySpecimen$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomographySpecimen$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("sectioning"));
});

Clazz.newMeth(C$, 'getSpecimenId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("specimen_id", ((P$.EmTomographySpecimen$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomographySpecimen$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomographySpecimen$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("specimen_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
