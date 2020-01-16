(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxDatabasePDBMaster$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getNumRemark$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_remark", ((P$.PdbxDatabasePDBMaster$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("num_remark"));
});

Clazz.newMeth(C$, 'getNumFtnote$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_ftnote", ((P$.PdbxDatabasePDBMaster$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("num_ftnote"));
});

Clazz.newMeth(C$, 'getNumHet$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_het", ((P$.PdbxDatabasePDBMaster$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("num_het"));
});

Clazz.newMeth(C$, 'getNumHelix$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_helix", ((P$.PdbxDatabasePDBMaster$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("num_helix"));
});

Clazz.newMeth(C$, 'getNumSheet$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_sheet", ((P$.PdbxDatabasePDBMaster$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("num_sheet"));
});

Clazz.newMeth(C$, 'getNumTurn$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_turn", ((P$.PdbxDatabasePDBMaster$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("num_turn"));
});

Clazz.newMeth(C$, 'getNumSite$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_site", ((P$.PdbxDatabasePDBMaster$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("num_site"));
});

Clazz.newMeth(C$, 'getNumTrans$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_trans", ((P$.PdbxDatabasePDBMaster$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("num_trans"));
});

Clazz.newMeth(C$, 'getNumCoord$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_coord", ((P$.PdbxDatabasePDBMaster$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("num_coord"));
});

Clazz.newMeth(C$, 'getNumTer$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_ter", ((P$.PdbxDatabasePDBMaster$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("num_ter"));
});

Clazz.newMeth(C$, 'getNumConect$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_conect", ((P$.PdbxDatabasePDBMaster$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("num_conect"));
});

Clazz.newMeth(C$, 'getNumSeqres$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_seqres", ((P$.PdbxDatabasePDBMaster$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabasePDBMaster$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabasePDBMaster$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("num_seqres"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
