(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxSugarPhosphateGeometry$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_id", ((P$.PdbxSugarPhosphateGeometry$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("model_id"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.PdbxSugarPhosphateGeometry$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id", ((P$.PdbxSugarPhosphateGeometry$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id"));
});

Clazz.newMeth(C$, 'getLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id", ((P$.PdbxSugarPhosphateGeometry$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.PdbxSugarPhosphateGeometry$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id", ((P$.PdbxSugarPhosphateGeometry$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id"));
});

Clazz.newMeth(C$, 'getNeighborCompId5prime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("neighbor_comp_id_5prime", ((P$.PdbxSugarPhosphateGeometry$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("neighbor_comp_id_5prime"));
});

Clazz.newMeth(C$, 'getNeighborCompId3prime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("neighbor_comp_id_3prime", ((P$.PdbxSugarPhosphateGeometry$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("neighbor_comp_id_3prime"));
});

Clazz.newMeth(C$, 'getO3PO5C5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o3_p_o5_c5", ((P$.PdbxSugarPhosphateGeometry$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("o3_p_o5_c5"));
});

Clazz.newMeth(C$, 'getPO5C5C4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("p_o5_c5_c4", ((P$.PdbxSugarPhosphateGeometry$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("p_o5_c5_c4"));
});

Clazz.newMeth(C$, 'getO5C5C4C3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o5_c5_c4_c3", ((P$.PdbxSugarPhosphateGeometry$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("o5_c5_c4_c3"));
});

Clazz.newMeth(C$, 'getC5C4C3O3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c5_c4_c3_o3", ((P$.PdbxSugarPhosphateGeometry$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("c5_c4_c3_o3"));
});

Clazz.newMeth(C$, 'getC4C3O3P$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c4_c3_o3_p", ((P$.PdbxSugarPhosphateGeometry$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("c4_c3_o3_p"));
});

Clazz.newMeth(C$, 'getC3O3PO5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c3_o3_p_o5", ((P$.PdbxSugarPhosphateGeometry$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("c3_o3_p_o5"));
});

Clazz.newMeth(C$, 'getC4O4C1N19$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c4_o4_c1_n1_9", ((P$.PdbxSugarPhosphateGeometry$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("c4_o4_c1_n1_9"));
});

Clazz.newMeth(C$, 'getO4C1N19C24$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o4_c1_n1_9_c2_4", ((P$.PdbxSugarPhosphateGeometry$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("o4_c1_n1_9_c2_4"));
});

Clazz.newMeth(C$, 'getO4C1N19C68$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o4_c1_n1_9_c6_8", ((P$.PdbxSugarPhosphateGeometry$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("o4_c1_n1_9_c6_8"));
});

Clazz.newMeth(C$, 'getC4O4C1C2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c4_o4_c1_c2", ((P$.PdbxSugarPhosphateGeometry$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("c4_o4_c1_c2"));
});

Clazz.newMeth(C$, 'getO4C1C2C3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o4_c1_c2_c3", ((P$.PdbxSugarPhosphateGeometry$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("o4_c1_c2_c3"));
});

Clazz.newMeth(C$, 'getC1C2C3C4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c1_c2_c3_c4", ((P$.PdbxSugarPhosphateGeometry$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("c1_c2_c3_c4"));
});

Clazz.newMeth(C$, 'getC2C3C4O4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c2_c3_c4_o4", ((P$.PdbxSugarPhosphateGeometry$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("c2_c3_c4_o4"));
});

Clazz.newMeth(C$, 'getC3C4O4C1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c3_c4_o4_c1", ((P$.PdbxSugarPhosphateGeometry$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("c3_c4_o4_c1"));
});

Clazz.newMeth(C$, 'getC5C4C3C2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c5_c4_c3_c2", ((P$.PdbxSugarPhosphateGeometry$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("c5_c4_c3_c2"));
});

Clazz.newMeth(C$, 'getO4C4C3O3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o4_c4_c3_o3", ((P$.PdbxSugarPhosphateGeometry$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("o4_c4_c3_o3"));
});

Clazz.newMeth(C$, 'getO3C3C2O2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o3_c3_c2_o2", ((P$.PdbxSugarPhosphateGeometry$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("o3_c3_c2_o2"));
});

Clazz.newMeth(C$, 'getO5C5C4O4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o5_c5_c4_o4", ((P$.PdbxSugarPhosphateGeometry$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("o5_c5_c4_o4"));
});

Clazz.newMeth(C$, 'getPseudorot$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pseudorot", ((P$.PdbxSugarPhosphateGeometry$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pseudorot"));
});

Clazz.newMeth(C$, 'getMaxtorsion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("maxtorsion", ((P$.PdbxSugarPhosphateGeometry$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("maxtorsion"));
});

Clazz.newMeth(C$, 'getNextLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_label_comp_id", ((P$.PdbxSugarPhosphateGeometry$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("next_label_comp_id"));
});

Clazz.newMeth(C$, 'getNextLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_label_seq_id", ((P$.PdbxSugarPhosphateGeometry$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("next_label_seq_id"));
});

Clazz.newMeth(C$, 'getNextO3PO5C5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_o3_p_o5_c5", ((P$.PdbxSugarPhosphateGeometry$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("next_o3_p_o5_c5"));
});

Clazz.newMeth(C$, 'getNextPO5C5C4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_p_o5_c5_c4", ((P$.PdbxSugarPhosphateGeometry$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("next_p_o5_c5_c4"));
});

Clazz.newMeth(C$, 'getNextO5C5C4C3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_o5_c5_c4_c3", ((P$.PdbxSugarPhosphateGeometry$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("next_o5_c5_c4_c3"));
});

Clazz.newMeth(C$, 'getNextC5C4C3O3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_c5_c4_c3_o3", ((P$.PdbxSugarPhosphateGeometry$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("next_c5_c4_c3_o3"));
});

Clazz.newMeth(C$, 'getNextC4C3O3P$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_c4_c3_o3_p", ((P$.PdbxSugarPhosphateGeometry$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("next_c4_c3_o3_p"));
});

Clazz.newMeth(C$, 'getNextC3O3PO5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_c3_o3_p_o5", ((P$.PdbxSugarPhosphateGeometry$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("next_c3_o3_p_o5"));
});

Clazz.newMeth(C$, 'getNextC4O4C1N19$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_c4_o4_c1_n1_9", ((P$.PdbxSugarPhosphateGeometry$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("next_c4_o4_c1_n1_9"));
});

Clazz.newMeth(C$, 'getNextO4C1N19C24$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_o4_c1_n1_9_c2_4", ((P$.PdbxSugarPhosphateGeometry$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("next_o4_c1_n1_9_c2_4"));
});

Clazz.newMeth(C$, 'getC1C2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c1_c2", ((P$.PdbxSugarPhosphateGeometry$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("c1_c2"));
});

Clazz.newMeth(C$, 'getC2C3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c2_c3", ((P$.PdbxSugarPhosphateGeometry$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("c2_c3"));
});

Clazz.newMeth(C$, 'getC3C4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c3_c4", ((P$.PdbxSugarPhosphateGeometry$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("c3_c4"));
});

Clazz.newMeth(C$, 'getC4O4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c4_o4", ((P$.PdbxSugarPhosphateGeometry$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("c4_o4"));
});

Clazz.newMeth(C$, 'getO4C1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o4_c1", ((P$.PdbxSugarPhosphateGeometry$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("o4_c1"));
});

Clazz.newMeth(C$, 'getPO5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("p_o5", ((P$.PdbxSugarPhosphateGeometry$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("p_o5"));
});

Clazz.newMeth(C$, 'getO5C5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o5_c5", ((P$.PdbxSugarPhosphateGeometry$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("o5_c5"));
});

Clazz.newMeth(C$, 'getC5C4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c5_c4", ((P$.PdbxSugarPhosphateGeometry$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("c5_c4"));
});

Clazz.newMeth(C$, 'getC3O3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c3_o3", ((P$.PdbxSugarPhosphateGeometry$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("c3_o3"));
});

Clazz.newMeth(C$, 'getO3P$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o3_p", ((P$.PdbxSugarPhosphateGeometry$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("o3_p"));
});

Clazz.newMeth(C$, 'getPO1p$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("p_o1p", ((P$.PdbxSugarPhosphateGeometry$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda50.$init$, [this, null]))) : this.getBinaryColumn$S("p_o1p"));
});

Clazz.newMeth(C$, 'getPO2p$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("p_o2p", ((P$.PdbxSugarPhosphateGeometry$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda51.$init$, [this, null]))) : this.getBinaryColumn$S("p_o2p"));
});

Clazz.newMeth(C$, 'getC1N91$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c1_n9_1", ((P$.PdbxSugarPhosphateGeometry$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda52.$init$, [this, null]))) : this.getBinaryColumn$S("c1_n9_1"));
});

Clazz.newMeth(C$, 'getN1C2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("n1_c2", ((P$.PdbxSugarPhosphateGeometry$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda53.$init$, [this, null]))) : this.getBinaryColumn$S("n1_c2"));
});

Clazz.newMeth(C$, 'getN1C6$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("n1_c6", ((P$.PdbxSugarPhosphateGeometry$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda54.$init$, [this, null]))) : this.getBinaryColumn$S("n1_c6"));
});

Clazz.newMeth(C$, 'getN9C4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("n9_c4", ((P$.PdbxSugarPhosphateGeometry$lambda55||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda55.$init$, [this, null]))) : this.getBinaryColumn$S("n9_c4"));
});

Clazz.newMeth(C$, 'getN9C8$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("n9_c8", ((P$.PdbxSugarPhosphateGeometry$lambda56||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda56.$init$, [this, null]))) : this.getBinaryColumn$S("n9_c8"));
});

Clazz.newMeth(C$, 'getC1C2C3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c1_c2_c3", ((P$.PdbxSugarPhosphateGeometry$lambda57||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda57", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda57.$init$, [this, null]))) : this.getBinaryColumn$S("c1_c2_c3"));
});

Clazz.newMeth(C$, 'getC2C3C4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c2_c3_c4", ((P$.PdbxSugarPhosphateGeometry$lambda58||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda58", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda58.$init$, [this, null]))) : this.getBinaryColumn$S("c2_c3_c4"));
});

Clazz.newMeth(C$, 'getC3C4O4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c3_c4_o4", ((P$.PdbxSugarPhosphateGeometry$lambda59||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda59", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda59.$init$, [this, null]))) : this.getBinaryColumn$S("c3_c4_o4"));
});

Clazz.newMeth(C$, 'getC4O4C1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c4_o4_c1", ((P$.PdbxSugarPhosphateGeometry$lambda60||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda60.$init$, [this, null]))) : this.getBinaryColumn$S("c4_o4_c1"));
});

Clazz.newMeth(C$, 'getO4C1C2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o4_c1_c2", ((P$.PdbxSugarPhosphateGeometry$lambda61||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda61.$init$, [this, null]))) : this.getBinaryColumn$S("o4_c1_c2"));
});

Clazz.newMeth(C$, 'getPO5C5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("p_o5_c5", ((P$.PdbxSugarPhosphateGeometry$lambda62||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda62", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda62.$init$, [this, null]))) : this.getBinaryColumn$S("p_o5_c5"));
});

Clazz.newMeth(C$, 'getO5C5C4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o5_c5_c4", ((P$.PdbxSugarPhosphateGeometry$lambda63||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda63", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda63.$init$, [this, null]))) : this.getBinaryColumn$S("o5_c5_c4"));
});

Clazz.newMeth(C$, 'getC5C4C3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c5_c4_c3", ((P$.PdbxSugarPhosphateGeometry$lambda64||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda64", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda64.$init$, [this, null]))) : this.getBinaryColumn$S("c5_c4_c3"));
});

Clazz.newMeth(C$, 'getC4C3O3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c4_c3_o3", ((P$.PdbxSugarPhosphateGeometry$lambda65||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda65", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda65.$init$, [this, null]))) : this.getBinaryColumn$S("c4_c3_o3"));
});

Clazz.newMeth(C$, 'getC3O3P$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c3_o3_p", ((P$.PdbxSugarPhosphateGeometry$lambda66||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda66", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda66.$init$, [this, null]))) : this.getBinaryColumn$S("c3_o3_p"));
});

Clazz.newMeth(C$, 'getO3PO5$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o3_p_o5", ((P$.PdbxSugarPhosphateGeometry$lambda67||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda67", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda67.$init$, [this, null]))) : this.getBinaryColumn$S("o3_p_o5"));
});

Clazz.newMeth(C$, 'getO4C1N19$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o4_c1_n1_9", ((P$.PdbxSugarPhosphateGeometry$lambda68||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda68", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda68.$init$, [this, null]))) : this.getBinaryColumn$S("o4_c1_n1_9"));
});

Clazz.newMeth(C$, 'getC1N19C24$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c1_n1_9_c2_4", ((P$.PdbxSugarPhosphateGeometry$lambda69||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda69", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda69.$init$, [this, null]))) : this.getBinaryColumn$S("c1_n1_9_c2_4"));
});

Clazz.newMeth(C$, 'getC5C4O4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c5_c4_o4", ((P$.PdbxSugarPhosphateGeometry$lambda70||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda70", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda70.$init$, [this, null]))) : this.getBinaryColumn$S("c5_c4_o4"));
});

Clazz.newMeth(C$, 'getC2C3O3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c2_c3_o3", ((P$.PdbxSugarPhosphateGeometry$lambda71||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda71", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda71.$init$, [this, null]))) : this.getBinaryColumn$S("c2_c3_o3"));
});

Clazz.newMeth(C$, 'getO1pPO2p$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("o1p_p_o2p", ((P$.PdbxSugarPhosphateGeometry$lambda72||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda72", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda72.$init$, [this, null]))) : this.getBinaryColumn$S("o1p_p_o2p"));
});

Clazz.newMeth(C$, 'getC2C1N19$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c2_c1_n1_9", ((P$.PdbxSugarPhosphateGeometry$lambda73||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda73", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda73.$init$, [this, null]))) : this.getBinaryColumn$S("c2_c1_n1_9"));
});

Clazz.newMeth(C$, 'getC1N19C68$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c1_n1_9_c6_8", ((P$.PdbxSugarPhosphateGeometry$lambda74||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSugarPhosphateGeometry$lambda74", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSugarPhosphateGeometry$lambda74.$init$, [this, null]))) : this.getBinaryColumn$S("c1_n1_9_c6_8"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
