(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxDataProcessingCell$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("a", ((P$.PdbxDataProcessingCell$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("a"));
});

Clazz.newMeth(C$, 'getATolerance$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("a_tolerance", ((P$.PdbxDataProcessingCell$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("a_tolerance"));
});

Clazz.newMeth(C$, 'getB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("b", ((P$.PdbxDataProcessingCell$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("b"));
});

Clazz.newMeth(C$, 'getBTolerance$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("b_tolerance", ((P$.PdbxDataProcessingCell$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("b_tolerance"));
});

Clazz.newMeth(C$, 'getC$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c", ((P$.PdbxDataProcessingCell$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("c"));
});

Clazz.newMeth(C$, 'getCTolerance$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c_tolerance", ((P$.PdbxDataProcessingCell$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("c_tolerance"));
});

Clazz.newMeth(C$, 'getAlpha$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("alpha", ((P$.PdbxDataProcessingCell$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("alpha"));
});

Clazz.newMeth(C$, 'getAlphaTolerance$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("alpha_tolerance", ((P$.PdbxDataProcessingCell$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("alpha_tolerance"));
});

Clazz.newMeth(C$, 'getBeta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beta", ((P$.PdbxDataProcessingCell$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("beta"));
});

Clazz.newMeth(C$, 'getBetaTolerance$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beta_tolerance", ((P$.PdbxDataProcessingCell$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("beta_tolerance"));
});

Clazz.newMeth(C$, 'getGamma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gamma", ((P$.PdbxDataProcessingCell$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("gamma"));
});

Clazz.newMeth(C$, 'getGammaTolerance$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gamma_tolerance", ((P$.PdbxDataProcessingCell$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("gamma_tolerance"));
});

Clazz.newMeth(C$, 'getVolume$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("volume", ((P$.PdbxDataProcessingCell$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("volume"));
});

Clazz.newMeth(C$, 'getMosaicity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mosaicity", ((P$.PdbxDataProcessingCell$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("mosaicity"));
});

Clazz.newMeth(C$, 'getResolutionRange$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("resolution_range", ((P$.PdbxDataProcessingCell$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("resolution_range"));
});

Clazz.newMeth(C$, 'getSpaceGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("space_group", ((P$.PdbxDataProcessingCell$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingCell$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingCell$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("space_group"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:42 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
