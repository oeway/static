(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmAdmin", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCurrentStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("current_status", ((P$.EmAdmin$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("current_status"));
});

Clazz.newMeth(C$, 'getDepositionDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("deposition_date", ((P$.EmAdmin$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("deposition_date"));
});

Clazz.newMeth(C$, 'getDepositionSite$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("deposition_site", ((P$.EmAdmin$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("deposition_site"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmAdmin$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.EmAdmin$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getLastUpdate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("last_update", ((P$.EmAdmin$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("last_update"));
});

Clazz.newMeth(C$, 'getMapReleaseDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("map_release_date", ((P$.EmAdmin$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("map_release_date"));
});

Clazz.newMeth(C$, 'getMapHoldDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("map_hold_date", ((P$.EmAdmin$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("map_hold_date"));
});

Clazz.newMeth(C$, 'getHeaderReleaseDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("header_release_date", ((P$.EmAdmin$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("header_release_date"));
});

Clazz.newMeth(C$, 'getObsoletedDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("obsoleted_date", ((P$.EmAdmin$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("obsoleted_date"));
});

Clazz.newMeth(C$, 'getReplaceExistingEntryFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("replace_existing_entry_flag", ((P$.EmAdmin$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("replace_existing_entry_flag"));
});

Clazz.newMeth(C$, 'getTitle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("title", ((P$.EmAdmin$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAdmin$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAdmin$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("title"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
