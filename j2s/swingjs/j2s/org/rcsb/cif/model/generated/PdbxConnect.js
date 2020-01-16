(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxConnect", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getResName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("res_name", ((P$.PdbxConnect$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("res_name"));
});

Clazz.newMeth(C$, 'getHetgroupName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("hetgroup_name", ((P$.PdbxConnect$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("hetgroup_name"));
});

Clazz.newMeth(C$, 'getFormul$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formul", ((P$.PdbxConnect$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("formul"));
});

Clazz.newMeth(C$, 'getHetgroupChemicalName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("hetgroup_chemical_name", ((P$.PdbxConnect$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("hetgroup_chemical_name"));
});

Clazz.newMeth(C$, 'getParentResidue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("parent_residue", ((P$.PdbxConnect$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("parent_residue"));
});

Clazz.newMeth(C$, 'getFormalCharge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formal_charge", ((P$.PdbxConnect$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("formal_charge"));
});

Clazz.newMeth(C$, 'getClass1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("class_1", ((P$.PdbxConnect$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("class_1"));
});

Clazz.newMeth(C$, 'getClass2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("class_2", ((P$.PdbxConnect$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("class_2"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxConnect$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("status", ((P$.PdbxConnect$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("status"));
});

Clazz.newMeth(C$, 'getDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date", ((P$.PdbxConnect$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("date"));
});

Clazz.newMeth(C$, 'getModifiedDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("modified_date", ((P$.PdbxConnect$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnect$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnect$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("modified_date"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:42 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
