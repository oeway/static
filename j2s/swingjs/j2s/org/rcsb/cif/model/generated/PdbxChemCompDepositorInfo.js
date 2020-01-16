(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal", ((P$.PdbxChemCompDepositorInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal"));
});

Clazz.newMeth(C$, 'getCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id", ((P$.PdbxChemCompDepositorInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id"));
});

Clazz.newMeth(C$, 'getAltCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("alt_comp_id", ((P$.PdbxChemCompDepositorInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("alt_comp_id"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.PdbxChemCompDepositorInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getFormula$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formula", ((P$.PdbxChemCompDepositorInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("formula"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxChemCompDepositorInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getDescriptor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("descriptor", ((P$.PdbxChemCompDepositorInfo$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("descriptor"));
});

Clazz.newMeth(C$, 'getDescriptorType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("descriptor_type", ((P$.PdbxChemCompDepositorInfo$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("descriptor_type"));
});

Clazz.newMeth(C$, 'getInDictionaryFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("in_dictionary_flag", ((P$.PdbxChemCompDepositorInfo$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("in_dictionary_flag"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxChemCompDepositorInfo$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompDepositorInfo$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompDepositorInfo$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:42 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
