(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getPrdId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("prd_id", ((P$.PdbxReferenceMolecule$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("prd_id"));
});

Clazz.newMeth(C$, 'getFormulaWeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formula_weight", ((P$.PdbxReferenceMolecule$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("formula_weight"));
});

Clazz.newMeth(C$, 'getFormula$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formula", ((P$.PdbxReferenceMolecule$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("formula"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxReferenceMolecule$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getTypeEvidenceCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type_evidence_code", ((P$.PdbxReferenceMolecule$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("type_evidence_code"));
});

Clazz.newMeth(C$, 'getClazz$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("class", ((P$.PdbxReferenceMolecule$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("class"));
});

Clazz.newMeth(C$, 'getClassEvidenceCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("class_evidence_code", ((P$.PdbxReferenceMolecule$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("class_evidence_code"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.PdbxReferenceMolecule$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getRepresentAs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("represent_as", ((P$.PdbxReferenceMolecule$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("represent_as"));
});

Clazz.newMeth(C$, 'getChemCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_comp_id", ((P$.PdbxReferenceMolecule$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("chem_comp_id"));
});

Clazz.newMeth(C$, 'getCompoundDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("compound_details", ((P$.PdbxReferenceMolecule$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("compound_details"));
});

Clazz.newMeth(C$, 'getDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("description", ((P$.PdbxReferenceMolecule$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("description"));
});

Clazz.newMeth(C$, 'getRepresentativePDBIdCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("representative_PDB_id_code", ((P$.PdbxReferenceMolecule$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("representative_PDB_id_code"));
});

Clazz.newMeth(C$, 'getReleaseStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("release_status", ((P$.PdbxReferenceMolecule$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("release_status"));
});

Clazz.newMeth(C$, 'getReplaces$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("replaces", ((P$.PdbxReferenceMolecule$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("replaces"));
});

Clazz.newMeth(C$, 'getReplacedBy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("replaced_by", ((P$.PdbxReferenceMolecule$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceMolecule$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceMolecule$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("replaced_by"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
