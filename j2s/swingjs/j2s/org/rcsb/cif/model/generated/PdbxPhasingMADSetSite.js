(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxPhasingMADSetSite$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getAtomTypeSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_type_symbol", ((P$.PdbxPhasingMADSetSite$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_type_symbol"));
});

Clazz.newMeth(C$, 'getCartnX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_x", ((P$.PdbxPhasingMADSetSite$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_x"));
});

Clazz.newMeth(C$, 'getCartnY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_y", ((P$.PdbxPhasingMADSetSite$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_y"));
});

Clazz.newMeth(C$, 'getCartnZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_z", ((P$.PdbxPhasingMADSetSite$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_z"));
});

Clazz.newMeth(C$, 'getCartnXEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_x_esd", ((P$.PdbxPhasingMADSetSite$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_x_esd"));
});

Clazz.newMeth(C$, 'getCartnYEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_y_esd", ((P$.PdbxPhasingMADSetSite$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_y_esd"));
});

Clazz.newMeth(C$, 'getCartnZEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_z_esd", ((P$.PdbxPhasingMADSetSite$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_z_esd"));
});

Clazz.newMeth(C$, 'getFractX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_x", ((P$.PdbxPhasingMADSetSite$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("fract_x"));
});

Clazz.newMeth(C$, 'getFractY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_y", ((P$.PdbxPhasingMADSetSite$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("fract_y"));
});

Clazz.newMeth(C$, 'getFractZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_z", ((P$.PdbxPhasingMADSetSite$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("fract_z"));
});

Clazz.newMeth(C$, 'getFractXEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_x_esd", ((P$.PdbxPhasingMADSetSite$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("fract_x_esd"));
});

Clazz.newMeth(C$, 'getFractYEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_y_esd", ((P$.PdbxPhasingMADSetSite$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("fract_y_esd"));
});

Clazz.newMeth(C$, 'getFractZEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_z_esd", ((P$.PdbxPhasingMADSetSite$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("fract_z_esd"));
});

Clazz.newMeth(C$, 'getBIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("b_iso", ((P$.PdbxPhasingMADSetSite$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("b_iso"));
});

Clazz.newMeth(C$, 'getBIsoEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("b_iso_esd", ((P$.PdbxPhasingMADSetSite$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("b_iso_esd"));
});

Clazz.newMeth(C$, 'getOccupancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy", ((P$.PdbxPhasingMADSetSite$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy"));
});

Clazz.newMeth(C$, 'getOccupancyEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_esd", ((P$.PdbxPhasingMADSetSite$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_esd"));
});

Clazz.newMeth(C$, 'getSetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("set_id", ((P$.PdbxPhasingMADSetSite$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("set_id"));
});

Clazz.newMeth(C$, 'getOccupancyIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_iso", ((P$.PdbxPhasingMADSetSite$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADSetSite$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADSetSite$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_iso"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
