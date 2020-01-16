(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomSites", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.AtomSites$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getCartnTransfMatrix11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_matrix[1][1]", ((P$.AtomSites$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_matrix[1][1]"));
});

Clazz.newMeth(C$, 'getCartnTransfMatrix12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_matrix[1][2]", ((P$.AtomSites$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_matrix[1][2]"));
});

Clazz.newMeth(C$, 'getCartnTransfMatrix13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_matrix[1][3]", ((P$.AtomSites$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_matrix[1][3]"));
});

Clazz.newMeth(C$, 'getCartnTransfMatrix21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_matrix[2][1]", ((P$.AtomSites$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_matrix[2][1]"));
});

Clazz.newMeth(C$, 'getCartnTransfMatrix22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_matrix[2][2]", ((P$.AtomSites$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_matrix[2][2]"));
});

Clazz.newMeth(C$, 'getCartnTransfMatrix23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_matrix[2][3]", ((P$.AtomSites$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_matrix[2][3]"));
});

Clazz.newMeth(C$, 'getCartnTransfMatrix31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_matrix[3][1]", ((P$.AtomSites$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_matrix[3][1]"));
});

Clazz.newMeth(C$, 'getCartnTransfMatrix32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_matrix[3][2]", ((P$.AtomSites$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_matrix[3][2]"));
});

Clazz.newMeth(C$, 'getCartnTransfMatrix33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_matrix[3][3]", ((P$.AtomSites$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_matrix[3][3]"));
});

Clazz.newMeth(C$, 'getCartnTransfVector1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_vector[1]", ((P$.AtomSites$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_vector[1]"));
});

Clazz.newMeth(C$, 'getCartnTransfVector2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_vector[2]", ((P$.AtomSites$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_vector[2]"));
});

Clazz.newMeth(C$, 'getCartnTransfVector3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transf_vector[3]", ((P$.AtomSites$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transf_vector[3]"));
});

Clazz.newMeth(C$, 'getCartnTransformAxes$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_transform_axes", ((P$.AtomSites$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_transform_axes"));
});

Clazz.newMeth(C$, 'getFractTransfMatrix11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_matrix[1][1]", ((P$.AtomSites$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_matrix[1][1]"));
});

Clazz.newMeth(C$, 'getFractTransfMatrix12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_matrix[1][2]", ((P$.AtomSites$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_matrix[1][2]"));
});

Clazz.newMeth(C$, 'getFractTransfMatrix13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_matrix[1][3]", ((P$.AtomSites$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_matrix[1][3]"));
});

Clazz.newMeth(C$, 'getFractTransfMatrix21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_matrix[2][1]", ((P$.AtomSites$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_matrix[2][1]"));
});

Clazz.newMeth(C$, 'getFractTransfMatrix22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_matrix[2][2]", ((P$.AtomSites$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_matrix[2][2]"));
});

Clazz.newMeth(C$, 'getFractTransfMatrix23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_matrix[2][3]", ((P$.AtomSites$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_matrix[2][3]"));
});

Clazz.newMeth(C$, 'getFractTransfMatrix31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_matrix[3][1]", ((P$.AtomSites$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_matrix[3][1]"));
});

Clazz.newMeth(C$, 'getFractTransfMatrix32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_matrix[3][2]", ((P$.AtomSites$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_matrix[3][2]"));
});

Clazz.newMeth(C$, 'getFractTransfMatrix33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_matrix[3][3]", ((P$.AtomSites$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_matrix[3][3]"));
});

Clazz.newMeth(C$, 'getFractTransfVector1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_vector[1]", ((P$.AtomSites$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_vector[1]"));
});

Clazz.newMeth(C$, 'getFractTransfVector2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_vector[2]", ((P$.AtomSites$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_vector[2]"));
});

Clazz.newMeth(C$, 'getFractTransfVector3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_transf_vector[3]", ((P$.AtomSites$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("fract_transf_vector[3]"));
});

Clazz.newMeth(C$, 'getSolutionPrimary$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("solution_primary", ((P$.AtomSites$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("solution_primary"));
});

Clazz.newMeth(C$, 'getSolutionSecondary$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("solution_secondary", ((P$.AtomSites$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("solution_secondary"));
});

Clazz.newMeth(C$, 'getSolutionHydrogens$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("solution_hydrogens", ((P$.AtomSites$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("solution_hydrogens"));
});

Clazz.newMeth(C$, 'getSpecialDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("special_details", ((P$.AtomSites$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSites$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSites$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("special_details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:34 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
