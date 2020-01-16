(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),I$=[[0,'org.apache.logging.log4j.util.Strings','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructuredDataId", null, null, ['java.io.Serializable', 'org.apache.logging.log4j.util.StringBuilderFormattable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.TIME_QUALITY=Clazz.new_(C$.c$$S$SA$SA,["timeQuality", null, Clazz.array(String, -1, ["tzKnown", "isSynced", "syncAccuracy"])]);
C$.ORIGIN=Clazz.new_(C$.c$$S$SA$SA,["origin", null, Clazz.array(String, -1, ["ip", "enterpriseId", "software", "swVersion"])]);
C$.META=Clazz.new_(C$.c$$S$SA$SA,["meta", null, Clazz.array(String, -1, ["sequenceId", "sysUpTime", "language"])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['enterpriseNumber'],'S',['name'],'O',['required','String[]','+optional']]
,['I',['RESERVED','MAX_LENGTH'],'L',['serialVersionUID'],'S',['AT_SIGN'],'O',['TIME_QUALITY','org.apache.logging.log4j.message.StructuredDataId','+ORIGIN','+META']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.c$$S$SA$SA$I.apply(this, [name, null, null, 32]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (name, maxLength) {
C$.c$$S$SA$SA$I.apply(this, [name, null, null, maxLength]);
}, 1);

Clazz.newMeth(C$, 'c$$S$SA$SA', function (name, required, optional) {
C$.c$$S$SA$SA$I.apply(this, [name, required, optional, 32]);
}, 1);

Clazz.newMeth(C$, 'c$$S$SA$SA$I', function (name, required, optional, maxLength) {
;C$.$init$.apply(this);
var index=-1;
if (name != null ) {
if (maxLength <= 0) {
maxLength=32;
}if (name.length$() > maxLength) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[String.format$S$OA("Length of id %s exceeds maximum of %d characters", [name, new Integer(maxLength)])]);
}index=name.indexOf$S("@");
}if (index > 0) {
this.name=name.substring$I$I(0, index);
this.enterpriseNumber=Integer.parseInt$S(name.substring$I(index + 1));
} else {
this.name=name;
this.enterpriseNumber=-1;
}this.required=required;
this.optional=optional;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$SA$SA', function (name, enterpriseNumber, required, optional) {
C$.c$$S$I$SA$SA$I.apply(this, [name, enterpriseNumber, required, optional, 32]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$SA$SA$I', function (name, enterpriseNumber, required, optional, maxLength) {
;C$.$init$.apply(this);
if (name == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No structured id name was supplied"]);
}if (name.contains$CharSequence("@")) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Structured id name cannot contain an " + $I$(1).quote$S("@")]);
}if (enterpriseNumber <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No enterprise number was supplied"]);
}this.name=name;
this.enterpriseNumber=enterpriseNumber;
var id=name + "@" + enterpriseNumber ;
if (maxLength > 0 && id.length$() > maxLength ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of id exceeds maximum of " + maxLength + " characters: " + id ]);
}this.required=required;
this.optional=optional;
}, 1);

Clazz.newMeth(C$, 'makeId$org_apache_logging_log4j_message_StructuredDataId', function (id) {
if (id == null ) {
return this;
}return this.makeId$S$I(id.getName$(), id.getEnterpriseNumber$());
});

Clazz.newMeth(C$, 'makeId$S$I', function (defaultId, anEnterpriseNumber) {
var id;
var req;
var opt;
if (anEnterpriseNumber <= 0) {
return this;
}if (this.name != null ) {
id=this.name;
req=this.required;
opt=this.optional;
} else {
id=defaultId;
req=null;
opt=null;
}return Clazz.new_(C$.c$$S$I$SA$SA,[id, anEnterpriseNumber, req, opt]);
});

Clazz.newMeth(C$, 'getRequired$', function () {
return this.required;
});

Clazz.newMeth(C$, 'getOptional$', function () {
return this.optional;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getEnterpriseNumber$', function () {
return this.enterpriseNumber;
});

Clazz.newMeth(C$, 'isReserved$', function () {
return this.enterpriseNumber <= 0;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(2,1).c$$I,[this.name.length$() + 10]);
this.formatTo$StringBuilder(sb);
return sb.toString();
});

Clazz.newMeth(C$, ['formatTo$StringBuilder','formatTo$'], function (buffer) {
if (this.isReserved$()) {
buffer.append$S(this.name);
} else {
buffer.append$S(this.name).append$S("@").append$I(this.enterpriseNumber);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
