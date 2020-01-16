(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxDatabaseMessage$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getMessageId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("message_id", ((P$.PdbxDatabaseMessage$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("message_id"));
});

Clazz.newMeth(C$, 'getDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date", ((P$.PdbxDatabaseMessage$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("date"));
});

Clazz.newMeth(C$, 'getContentType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("content_type", ((P$.PdbxDatabaseMessage$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("content_type"));
});

Clazz.newMeth(C$, 'getMessageType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("message_type", ((P$.PdbxDatabaseMessage$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("message_type"));
});

Clazz.newMeth(C$, 'getSender$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sender", ((P$.PdbxDatabaseMessage$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("sender"));
});

Clazz.newMeth(C$, 'getSenderAddressFax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sender_address_fax", ((P$.PdbxDatabaseMessage$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("sender_address_fax"));
});

Clazz.newMeth(C$, 'getSenderAddressPhone$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sender_address_phone", ((P$.PdbxDatabaseMessage$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("sender_address_phone"));
});

Clazz.newMeth(C$, 'getSenderAddressEmail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sender_address_email", ((P$.PdbxDatabaseMessage$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("sender_address_email"));
});

Clazz.newMeth(C$, 'getSenderAddressMail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sender_address_mail", ((P$.PdbxDatabaseMessage$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("sender_address_mail"));
});

Clazz.newMeth(C$, 'getReceiver$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("receiver", ((P$.PdbxDatabaseMessage$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("receiver"));
});

Clazz.newMeth(C$, 'getReceiverAddressFax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("receiver_address_fax", ((P$.PdbxDatabaseMessage$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("receiver_address_fax"));
});

Clazz.newMeth(C$, 'getReceiverAddressPhone$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("receiver_address_phone", ((P$.PdbxDatabaseMessage$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("receiver_address_phone"));
});

Clazz.newMeth(C$, 'getReceiverAddressEmail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("receiver_address_email", ((P$.PdbxDatabaseMessage$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("receiver_address_email"));
});

Clazz.newMeth(C$, 'getReceiverAddressMail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("receiver_address_mail", ((P$.PdbxDatabaseMessage$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("receiver_address_mail"));
});

Clazz.newMeth(C$, 'getMessage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("message", ((P$.PdbxDatabaseMessage$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseMessage$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseMessage$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("message"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
