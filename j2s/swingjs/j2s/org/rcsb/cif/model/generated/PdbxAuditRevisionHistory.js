(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxAuditRevisionHistory", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal", ((P$.PdbxAuditRevisionHistory$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAuditRevisionHistory$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAuditRevisionHistory$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal"));
});

Clazz.newMeth(C$, 'getDataContentType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_content_type", ((P$.PdbxAuditRevisionHistory$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAuditRevisionHistory$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAuditRevisionHistory$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("data_content_type"));
});

Clazz.newMeth(C$, 'getMajorRevision$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("major_revision", ((P$.PdbxAuditRevisionHistory$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAuditRevisionHistory$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAuditRevisionHistory$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("major_revision"));
});

Clazz.newMeth(C$, 'getMinorRevision$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("minor_revision", ((P$.PdbxAuditRevisionHistory$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAuditRevisionHistory$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAuditRevisionHistory$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("minor_revision"));
});

Clazz.newMeth(C$, 'getRevisionDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("revision_date", ((P$.PdbxAuditRevisionHistory$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAuditRevisionHistory$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAuditRevisionHistory$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("revision_date"));
});

Clazz.newMeth(C$, 'getInternalVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("internal_version", ((P$.PdbxAuditRevisionHistory$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAuditRevisionHistory$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAuditRevisionHistory$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("internal_version"));
});

Clazz.newMeth(C$, 'getInternalDepositionId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("internal_deposition_id", ((P$.PdbxAuditRevisionHistory$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAuditRevisionHistory$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAuditRevisionHistory$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("internal_deposition_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:41 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
