(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getFeatureId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_id", ((P$.PdbxStructRefSeqFeatureProp$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeatureProp$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("feature_id"));
});

Clazz.newMeth(C$, 'getPropertyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("property_id", ((P$.PdbxStructRefSeqFeatureProp$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeatureProp$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("property_id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxStructRefSeqFeatureProp$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeatureProp$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value", ((P$.PdbxStructRefSeqFeatureProp$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeatureProp$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("value"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxStructRefSeqFeatureProp$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeatureProp$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getBegDbMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_db_mon_id", ((P$.PdbxStructRefSeqFeatureProp$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeatureProp$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("beg_db_mon_id"));
});

Clazz.newMeth(C$, 'getEndDbMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_db_mon_id", ((P$.PdbxStructRefSeqFeatureProp$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeatureProp$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("end_db_mon_id"));
});

Clazz.newMeth(C$, 'getBegDbSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_db_seq_id", ((P$.PdbxStructRefSeqFeatureProp$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeatureProp$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("beg_db_seq_id"));
});

Clazz.newMeth(C$, 'getEndDbSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_db_seq_id", ((P$.PdbxStructRefSeqFeatureProp$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeatureProp$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeatureProp$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("end_db_seq_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
