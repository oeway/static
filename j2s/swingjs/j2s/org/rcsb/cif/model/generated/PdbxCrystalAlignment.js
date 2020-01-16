(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCrystalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_id", ((P$.PdbxCrystalAlignment$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_id"));
});

Clazz.newMeth(C$, 'getOscillationRange$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("oscillation_range", ((P$.PdbxCrystalAlignment$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("oscillation_range"));
});

Clazz.newMeth(C$, 'getOscillationStart$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("oscillation_start", ((P$.PdbxCrystalAlignment$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("oscillation_start"));
});

Clazz.newMeth(C$, 'getOscillationEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("oscillation_end", ((P$.PdbxCrystalAlignment$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("oscillation_end"));
});

Clazz.newMeth(C$, 'getXbeam$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("xbeam", ((P$.PdbxCrystalAlignment$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("xbeam"));
});

Clazz.newMeth(C$, 'getXbeamEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("xbeam_esd", ((P$.PdbxCrystalAlignment$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("xbeam_esd"));
});

Clazz.newMeth(C$, 'getYbeam$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ybeam", ((P$.PdbxCrystalAlignment$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ybeam"));
});

Clazz.newMeth(C$, 'getYbeamEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ybeam_esd", ((P$.PdbxCrystalAlignment$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("ybeam_esd"));
});

Clazz.newMeth(C$, 'getCrysxSpindle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crysx_spindle", ((P$.PdbxCrystalAlignment$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("crysx_spindle"));
});

Clazz.newMeth(C$, 'getCrysxSpindleEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crysx_spindle_esd", ((P$.PdbxCrystalAlignment$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("crysx_spindle_esd"));
});

Clazz.newMeth(C$, 'getCrysyVertical$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crysy_vertical", ((P$.PdbxCrystalAlignment$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("crysy_vertical"));
});

Clazz.newMeth(C$, 'getCrysyVerticalEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crysy_vertical_esd", ((P$.PdbxCrystalAlignment$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("crysy_vertical_esd"));
});

Clazz.newMeth(C$, 'getCryszBeam$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crysz_beam", ((P$.PdbxCrystalAlignment$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("crysz_beam"));
});

Clazz.newMeth(C$, 'getCryszBeamEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crysz_beam_esd", ((P$.PdbxCrystalAlignment$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("crysz_beam_esd"));
});

Clazz.newMeth(C$, 'getCrystalToDetectorDistance$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_to_detector_distance", ((P$.PdbxCrystalAlignment$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_to_detector_distance"));
});

Clazz.newMeth(C$, 'getCrystalToDetectorDistanceEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_to_detector_distance_esd", ((P$.PdbxCrystalAlignment$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_to_detector_distance_esd"));
});

Clazz.newMeth(C$, 'getCrossfireX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crossfire_x", ((P$.PdbxCrystalAlignment$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("crossfire_x"));
});

Clazz.newMeth(C$, 'getCrossfireXEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crossfire_x_esd", ((P$.PdbxCrystalAlignment$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("crossfire_x_esd"));
});

Clazz.newMeth(C$, 'getCrossfireY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crossfire_y", ((P$.PdbxCrystalAlignment$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("crossfire_y"));
});

Clazz.newMeth(C$, 'getCrossfireYEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crossfire_y_esd", ((P$.PdbxCrystalAlignment$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("crossfire_y_esd"));
});

Clazz.newMeth(C$, 'getCrossfireXy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crossfire_xy", ((P$.PdbxCrystalAlignment$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("crossfire_xy"));
});

Clazz.newMeth(C$, 'getCrossfireXyEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crossfire_xy_esd", ((P$.PdbxCrystalAlignment$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxCrystalAlignment$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxCrystalAlignment$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("crossfire_xy_esd"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:42 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
