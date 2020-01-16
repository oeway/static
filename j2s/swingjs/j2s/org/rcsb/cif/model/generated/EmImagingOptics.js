(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmImagingOptics", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getChrAberrationCorrector$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chr_aberration_corrector", ((P$.EmImagingOptics$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImagingOptics$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImagingOptics$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("chr_aberration_corrector"));
});

Clazz.newMeth(C$, 'getEnergyfilterLower$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("energyfilter_lower", ((P$.EmImagingOptics$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImagingOptics$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImagingOptics$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("energyfilter_lower"));
});

Clazz.newMeth(C$, 'getEnergyfilterSlitWidth$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("energyfilter_slit_width", ((P$.EmImagingOptics$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImagingOptics$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImagingOptics$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("energyfilter_slit_width"));
});

Clazz.newMeth(C$, 'getEnergyfilterName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("energyfilter_name", ((P$.EmImagingOptics$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImagingOptics$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImagingOptics$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("energyfilter_name"));
});

Clazz.newMeth(C$, 'getEnergyfilterUpper$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("energyfilter_upper", ((P$.EmImagingOptics$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImagingOptics$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImagingOptics$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("energyfilter_upper"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmImagingOptics$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImagingOptics$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImagingOptics$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getImagingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("imaging_id", ((P$.EmImagingOptics$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImagingOptics$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImagingOptics$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("imaging_id"));
});

Clazz.newMeth(C$, 'getPhasePlate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_plate", ((P$.EmImagingOptics$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImagingOptics$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImagingOptics$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("phase_plate"));
});

Clazz.newMeth(C$, 'getSphAberrationCorrector$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sph_aberration_corrector", ((P$.EmImagingOptics$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImagingOptics$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImagingOptics$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("sph_aberration_corrector"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
