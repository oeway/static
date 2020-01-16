(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomType", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAnalyticalMassPercent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("analytical_mass_percent", ((P$.AtomType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("analytical_mass_percent"));
});

Clazz.newMeth(C$, 'getDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("description", ((P$.AtomType$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("description"));
});

Clazz.newMeth(C$, 'getNumberInCell$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_in_cell", ((P$.AtomType$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("number_in_cell"));
});

Clazz.newMeth(C$, 'getOxidationNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("oxidation_number", ((P$.AtomType$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("oxidation_number"));
});

Clazz.newMeth(C$, 'getRadiusBond$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("radius_bond", ((P$.AtomType$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("radius_bond"));
});

Clazz.newMeth(C$, 'getRadiusContact$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("radius_contact", ((P$.AtomType$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("radius_contact"));
});

Clazz.newMeth(C$, 'getScatCromerMannA1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_Cromer_Mann_a1", ((P$.AtomType$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("scat_Cromer_Mann_a1"));
});

Clazz.newMeth(C$, 'getScatCromerMannA2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_Cromer_Mann_a2", ((P$.AtomType$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("scat_Cromer_Mann_a2"));
});

Clazz.newMeth(C$, 'getScatCromerMannA3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_Cromer_Mann_a3", ((P$.AtomType$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("scat_Cromer_Mann_a3"));
});

Clazz.newMeth(C$, 'getScatCromerMannA4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_Cromer_Mann_a4", ((P$.AtomType$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("scat_Cromer_Mann_a4"));
});

Clazz.newMeth(C$, 'getScatCromerMannB1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_Cromer_Mann_b1", ((P$.AtomType$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("scat_Cromer_Mann_b1"));
});

Clazz.newMeth(C$, 'getScatCromerMannB2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_Cromer_Mann_b2", ((P$.AtomType$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("scat_Cromer_Mann_b2"));
});

Clazz.newMeth(C$, 'getScatCromerMannB3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_Cromer_Mann_b3", ((P$.AtomType$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("scat_Cromer_Mann_b3"));
});

Clazz.newMeth(C$, 'getScatCromerMannB4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_Cromer_Mann_b4", ((P$.AtomType$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("scat_Cromer_Mann_b4"));
});

Clazz.newMeth(C$, 'getScatCromerMannC$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_Cromer_Mann_c", ((P$.AtomType$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("scat_Cromer_Mann_c"));
});

Clazz.newMeth(C$, 'getScatDispersionImag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_dispersion_imag", ((P$.AtomType$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("scat_dispersion_imag"));
});

Clazz.newMeth(C$, 'getScatDispersionReal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_dispersion_real", ((P$.AtomType$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("scat_dispersion_real"));
});

Clazz.newMeth(C$, 'getScatLengthNeutron$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_length_neutron", ((P$.AtomType$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("scat_length_neutron"));
});

Clazz.newMeth(C$, 'getScatSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_source", ((P$.AtomType$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("scat_source"));
});

Clazz.newMeth(C$, 'getScatVersusStolList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_versus_stol_list", ((P$.AtomType$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("scat_versus_stol_list"));
});

Clazz.newMeth(C$, 'getSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symbol", ((P$.AtomType$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("symbol"));
});

Clazz.newMeth(C$, 'getScatDispersionSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scat_dispersion_source", ((P$.AtomType$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("scat_dispersion_source"));
});

Clazz.newMeth(C$, 'getPdbxScatCromerMannA5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_scat_Cromer_Mann_a5", ((P$.AtomType$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_scat_Cromer_Mann_a5"));
});

Clazz.newMeth(C$, 'getPdbxScatCromerMannB5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_scat_Cromer_Mann_b5", ((P$.AtomType$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomType$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomType$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_scat_Cromer_Mann_b5"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:34 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
