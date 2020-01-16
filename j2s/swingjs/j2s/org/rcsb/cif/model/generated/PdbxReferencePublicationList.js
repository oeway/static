(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReferencePublicationList", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getPublicationAbbrev$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("publication_abbrev", ((P$.PdbxReferencePublicationList$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferencePublicationList$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferencePublicationList$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("publication_abbrev"));
});

Clazz.newMeth(C$, 'getASTMCodeType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ASTM_code_type", ((P$.PdbxReferencePublicationList$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferencePublicationList$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferencePublicationList$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("ASTM_code_type"));
});

Clazz.newMeth(C$, 'getASTMCodeValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ASTM_code_value", ((P$.PdbxReferencePublicationList$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferencePublicationList$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferencePublicationList$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("ASTM_code_value"));
});

Clazz.newMeth(C$, 'getISSNCodeType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ISSN_code_type", ((P$.PdbxReferencePublicationList$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferencePublicationList$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferencePublicationList$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("ISSN_code_type"));
});

Clazz.newMeth(C$, 'getISSNCodeValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ISSN_code_value", ((P$.PdbxReferencePublicationList$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferencePublicationList$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferencePublicationList$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ISSN_code_value"));
});

Clazz.newMeth(C$, 'getCountry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("country", ((P$.PdbxReferencePublicationList$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferencePublicationList$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferencePublicationList$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("country"));
});

Clazz.newMeth(C$, 'getStartYear$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("start_year", ((P$.PdbxReferencePublicationList$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferencePublicationList$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferencePublicationList$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("start_year"));
});

Clazz.newMeth(C$, 'getEndYear$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_year", ((P$.PdbxReferencePublicationList$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferencePublicationList$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferencePublicationList$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("end_year"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
