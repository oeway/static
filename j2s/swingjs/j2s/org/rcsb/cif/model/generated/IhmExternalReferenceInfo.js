(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmExternalReferenceInfo", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getReferenceId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reference_id", ((P$.IhmExternalReferenceInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalReferenceInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalReferenceInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("reference_id"));
});

Clazz.newMeth(C$, 'getReferenceProvider$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reference_provider", ((P$.IhmExternalReferenceInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalReferenceInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalReferenceInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("reference_provider"));
});

Clazz.newMeth(C$, 'getReferenceType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reference_type", ((P$.IhmExternalReferenceInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalReferenceInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalReferenceInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("reference_type"));
});

Clazz.newMeth(C$, 'getReference$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reference", ((P$.IhmExternalReferenceInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalReferenceInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalReferenceInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("reference"));
});

Clazz.newMeth(C$, 'getRefersTo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("refers_to", ((P$.IhmExternalReferenceInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalReferenceInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalReferenceInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("refers_to"));
});

Clazz.newMeth(C$, 'getAssociatedUrl$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("associated_url", ((P$.IhmExternalReferenceInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalReferenceInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalReferenceInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("associated_url"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
