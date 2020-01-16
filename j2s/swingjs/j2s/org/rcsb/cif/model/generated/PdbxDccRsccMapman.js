(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxDccRsccMapman$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_id", ((P$.PdbxDccRsccMapman$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("model_id"));
});

Clazz.newMeth(C$, 'getPdbId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_id", ((P$.PdbxDccRsccMapman$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_id"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.PdbxDccRsccMapman$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id", ((P$.PdbxDccRsccMapman$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.PdbxDccRsccMapman$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id", ((P$.PdbxDccRsccMapman$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id"));
});

Clazz.newMeth(C$, 'getLabelInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_ins_code", ((P$.PdbxDccRsccMapman$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("label_ins_code"));
});

Clazz.newMeth(C$, 'getCorrelation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correlation", ((P$.PdbxDccRsccMapman$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("correlation"));
});

Clazz.newMeth(C$, 'getRealSpaceR$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("real_space_R", ((P$.PdbxDccRsccMapman$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("real_space_R"));
});

Clazz.newMeth(C$, 'getWeightedRealSpaceR$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weighted_real_space_R", ((P$.PdbxDccRsccMapman$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("weighted_real_space_R"));
});

Clazz.newMeth(C$, 'getRealSpaceZscore$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("real_space_Zscore", ((P$.PdbxDccRsccMapman$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("real_space_Zscore"));
});

Clazz.newMeth(C$, 'getBisoMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Biso_mean", ((P$.PdbxDccRsccMapman$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("Biso_mean"));
});

Clazz.newMeth(C$, 'getOccupancyMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_mean", ((P$.PdbxDccRsccMapman$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_mean"));
});

Clazz.newMeth(C$, 'getFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("flag", ((P$.PdbxDccRsccMapman$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccRsccMapman$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccRsccMapman$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("flag"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
