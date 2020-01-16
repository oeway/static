(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getOrdinalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal_id", ((P$.IhmGaussianObjSite$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.IhmGaussianObjSite$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getSeqIdBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_begin", ((P$.IhmGaussianObjSite$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_begin"));
});

Clazz.newMeth(C$, 'getSeqIdEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_end", ((P$.IhmGaussianObjSite$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_end"));
});

Clazz.newMeth(C$, 'getAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id", ((P$.IhmGaussianObjSite$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id"));
});

Clazz.newMeth(C$, 'getMeanCartnX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_Cartn_x", ((P$.IhmGaussianObjSite$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("mean_Cartn_x"));
});

Clazz.newMeth(C$, 'getMeanCartnY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_Cartn_y", ((P$.IhmGaussianObjSite$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("mean_Cartn_y"));
});

Clazz.newMeth(C$, 'getMeanCartnZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_Cartn_z", ((P$.IhmGaussianObjSite$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("mean_Cartn_z"));
});

Clazz.newMeth(C$, 'getWeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weight", ((P$.IhmGaussianObjSite$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("weight"));
});

Clazz.newMeth(C$, 'getCovarianceMatrix11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covariance_matrix[1][1]", ((P$.IhmGaussianObjSite$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("covariance_matrix[1][1]"));
});

Clazz.newMeth(C$, 'getCovarianceMatrix12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covariance_matrix[1][2]", ((P$.IhmGaussianObjSite$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("covariance_matrix[1][2]"));
});

Clazz.newMeth(C$, 'getCovarianceMatrix13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covariance_matrix[1][3]", ((P$.IhmGaussianObjSite$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("covariance_matrix[1][3]"));
});

Clazz.newMeth(C$, 'getCovarianceMatrix21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covariance_matrix[2][1]", ((P$.IhmGaussianObjSite$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("covariance_matrix[2][1]"));
});

Clazz.newMeth(C$, 'getCovarianceMatrix22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covariance_matrix[2][2]", ((P$.IhmGaussianObjSite$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("covariance_matrix[2][2]"));
});

Clazz.newMeth(C$, 'getCovarianceMatrix23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covariance_matrix[2][3]", ((P$.IhmGaussianObjSite$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("covariance_matrix[2][3]"));
});

Clazz.newMeth(C$, 'getCovarianceMatrix31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covariance_matrix[3][1]", ((P$.IhmGaussianObjSite$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("covariance_matrix[3][1]"));
});

Clazz.newMeth(C$, 'getCovarianceMatrix32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covariance_matrix[3][2]", ((P$.IhmGaussianObjSite$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("covariance_matrix[3][2]"));
});

Clazz.newMeth(C$, 'getCovarianceMatrix33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covariance_matrix[3][3]", ((P$.IhmGaussianObjSite$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("covariance_matrix[3][3]"));
});

Clazz.newMeth(C$, 'getModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_id", ((P$.IhmGaussianObjSite$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGaussianObjSite$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGaussianObjSite$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("model_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
