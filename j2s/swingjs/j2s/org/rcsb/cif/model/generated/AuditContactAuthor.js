(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AuditContactAuthor", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAddress$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("address", ((P$.AuditContactAuthor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AuditContactAuthor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AuditContactAuthor$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("address"));
});

Clazz.newMeth(C$, 'getEmail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("email", ((P$.AuditContactAuthor$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AuditContactAuthor$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AuditContactAuthor$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("email"));
});

Clazz.newMeth(C$, 'getFax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fax", ((P$.AuditContactAuthor$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "AuditContactAuthor$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AuditContactAuthor$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("fax"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.AuditContactAuthor$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "AuditContactAuthor$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AuditContactAuthor$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getPhone$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phone", ((P$.AuditContactAuthor$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "AuditContactAuthor$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AuditContactAuthor$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("phone"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:34 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
