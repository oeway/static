(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DatabasePDBRev", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAuthorName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("author_name", ((P$.DatabasePDBRev$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("author_name"));
});

Clazz.newMeth(C$, 'getDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date", ((P$.DatabasePDBRev$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("date"));
});

Clazz.newMeth(C$, 'getDateOriginal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_original", ((P$.DatabasePDBRev$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("date_original"));
});

Clazz.newMeth(C$, 'getModType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mod_type", ((P$.DatabasePDBRev$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("mod_type"));
});

Clazz.newMeth(C$, 'getNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num", ((P$.DatabasePDBRev$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("num"));
});

Clazz.newMeth(C$, 'getReplacedBy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("replaced_by", ((P$.DatabasePDBRev$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("replaced_by"));
});

Clazz.newMeth(C$, 'getReplaces$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("replaces", ((P$.DatabasePDBRev$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("replaces"));
});

Clazz.newMeth(C$, 'getStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("status", ((P$.DatabasePDBRev$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("status"));
});

Clazz.newMeth(C$, 'getPdbxRecordRevised1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_record_revised_1", ((P$.DatabasePDBRev$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_record_revised_1"));
});

Clazz.newMeth(C$, 'getPdbxRecordRevised2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_record_revised_2", ((P$.DatabasePDBRev$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_record_revised_2"));
});

Clazz.newMeth(C$, 'getPdbxRecordRevised3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_record_revised_3", ((P$.DatabasePDBRev$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_record_revised_3"));
});

Clazz.newMeth(C$, 'getPdbxRecordRevised4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_record_revised_4", ((P$.DatabasePDBRev$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "DatabasePDBRev$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DatabasePDBRev$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_record_revised_4"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
