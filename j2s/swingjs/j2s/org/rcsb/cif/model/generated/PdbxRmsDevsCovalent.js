(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxRmsDevsCovalent$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getRmsBonds$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_bonds", ((P$.PdbxRmsDevsCovalent$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("rms_bonds"));
});

Clazz.newMeth(C$, 'getNumBonds$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_bonds", ((P$.PdbxRmsDevsCovalent$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("num_bonds"));
});

Clazz.newMeth(C$, 'getRmsBondsBase$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_bonds_base", ((P$.PdbxRmsDevsCovalent$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("rms_bonds_base"));
});

Clazz.newMeth(C$, 'getNumBondsBase$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_bonds_base", ((P$.PdbxRmsDevsCovalent$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("num_bonds_base"));
});

Clazz.newMeth(C$, 'getRmsBondsSugar$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_bonds_sugar", ((P$.PdbxRmsDevsCovalent$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("rms_bonds_sugar"));
});

Clazz.newMeth(C$, 'getNumBondsSugar$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_bonds_sugar", ((P$.PdbxRmsDevsCovalent$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("num_bonds_sugar"));
});

Clazz.newMeth(C$, 'getRmsBondsPhosphate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_bonds_phosphate", ((P$.PdbxRmsDevsCovalent$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("rms_bonds_phosphate"));
});

Clazz.newMeth(C$, 'getNumBondsPhosphate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_bonds_phosphate", ((P$.PdbxRmsDevsCovalent$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("num_bonds_phosphate"));
});

Clazz.newMeth(C$, 'getRmsAngles$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_angles", ((P$.PdbxRmsDevsCovalent$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("rms_angles"));
});

Clazz.newMeth(C$, 'getNumAngles$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_angles", ((P$.PdbxRmsDevsCovalent$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("num_angles"));
});

Clazz.newMeth(C$, 'getRmsAnglesBase$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_angles_base", ((P$.PdbxRmsDevsCovalent$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("rms_angles_base"));
});

Clazz.newMeth(C$, 'getNumAnglesBase$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_angles_base", ((P$.PdbxRmsDevsCovalent$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("num_angles_base"));
});

Clazz.newMeth(C$, 'getRmsAnglesSugar$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_angles_sugar", ((P$.PdbxRmsDevsCovalent$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("rms_angles_sugar"));
});

Clazz.newMeth(C$, 'getNumAnglesSugar$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_angles_sugar", ((P$.PdbxRmsDevsCovalent$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("num_angles_sugar"));
});

Clazz.newMeth(C$, 'getRmsAnglesPhosphate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_angles_phosphate", ((P$.PdbxRmsDevsCovalent$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("rms_angles_phosphate"));
});

Clazz.newMeth(C$, 'getNumAnglesPhosphate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_angles_phosphate", ((P$.PdbxRmsDevsCovalent$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRmsDevsCovalent$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRmsDevsCovalent$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("num_angles_phosphate"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
