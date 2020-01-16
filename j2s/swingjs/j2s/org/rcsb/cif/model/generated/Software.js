(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Software", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCitationId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("citation_id", ((P$.Software$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("citation_id"));
});

Clazz.newMeth(C$, 'getClassification$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("classification", ((P$.Software$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("classification"));
});

Clazz.newMeth(C$, 'getCompilerName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("compiler_name", ((P$.Software$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("compiler_name"));
});

Clazz.newMeth(C$, 'getCompilerVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("compiler_version", ((P$.Software$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("compiler_version"));
});

Clazz.newMeth(C$, 'getContactAuthor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contact_author", ((P$.Software$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("contact_author"));
});

Clazz.newMeth(C$, 'getContactAuthorEmail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contact_author_email", ((P$.Software$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("contact_author_email"));
});

Clazz.newMeth(C$, 'getDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date", ((P$.Software$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("date"));
});

Clazz.newMeth(C$, 'getDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("description", ((P$.Software$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("description"));
});

Clazz.newMeth(C$, 'getDependencies$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dependencies", ((P$.Software$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("dependencies"));
});

Clazz.newMeth(C$, 'getHardware$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("hardware", ((P$.Software$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("hardware"));
});

Clazz.newMeth(C$, 'getLanguage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("language", ((P$.Software$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("language"));
});

Clazz.newMeth(C$, 'getLocation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("location", ((P$.Software$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("location"));
});

Clazz.newMeth(C$, 'getMods$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mods", ((P$.Software$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("mods"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.Software$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getOs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("os", ((P$.Software$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("os"));
});

Clazz.newMeth(C$, 'getOsVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("os_version", ((P$.Software$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("os_version"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.Software$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("version", ((P$.Software$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("version"));
});

Clazz.newMeth(C$, 'getPdbxOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ordinal", ((P$.Software$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Software$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Software$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ordinal"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
