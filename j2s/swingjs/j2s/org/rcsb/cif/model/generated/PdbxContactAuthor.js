(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxContactAuthor", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxContactAuthor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getAddress1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("address_1", ((P$.PdbxContactAuthor$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("address_1"));
});

Clazz.newMeth(C$, 'getAddress2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("address_2", ((P$.PdbxContactAuthor$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("address_2"));
});

Clazz.newMeth(C$, 'getAddress3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("address_3", ((P$.PdbxContactAuthor$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("address_3"));
});

Clazz.newMeth(C$, 'getLegacyAddress$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("legacy_address", ((P$.PdbxContactAuthor$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("legacy_address"));
});

Clazz.newMeth(C$, 'getCity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("city", ((P$.PdbxContactAuthor$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("city"));
});

Clazz.newMeth(C$, 'getStateProvince$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("state_province", ((P$.PdbxContactAuthor$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("state_province"));
});

Clazz.newMeth(C$, 'getPostalCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("postal_code", ((P$.PdbxContactAuthor$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("postal_code"));
});

Clazz.newMeth(C$, 'getEmail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("email", ((P$.PdbxContactAuthor$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("email"));
});

Clazz.newMeth(C$, 'getFax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fax", ((P$.PdbxContactAuthor$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("fax"));
});

Clazz.newMeth(C$, 'getNameFirst$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_first", ((P$.PdbxContactAuthor$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("name_first"));
});

Clazz.newMeth(C$, 'getNameLast$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_last", ((P$.PdbxContactAuthor$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("name_last"));
});

Clazz.newMeth(C$, 'getNameMi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_mi", ((P$.PdbxContactAuthor$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("name_mi"));
});

Clazz.newMeth(C$, 'getNameSalutation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_salutation", ((P$.PdbxContactAuthor$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("name_salutation"));
});

Clazz.newMeth(C$, 'getCountry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("country", ((P$.PdbxContactAuthor$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("country"));
});

Clazz.newMeth(C$, 'getContinent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("continent", ((P$.PdbxContactAuthor$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("continent"));
});

Clazz.newMeth(C$, 'getPhone$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phone", ((P$.PdbxContactAuthor$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("phone"));
});

Clazz.newMeth(C$, 'getRole$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("role", ((P$.PdbxContactAuthor$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("role"));
});

Clazz.newMeth(C$, 'getOrganizationType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("organization_type", ((P$.PdbxContactAuthor$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("organization_type"));
});

Clazz.newMeth(C$, 'getIdentifierORCID$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("identifier_ORCID", ((P$.PdbxContactAuthor$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxContactAuthor$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxContactAuthor$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("identifier_ORCID"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:42 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
