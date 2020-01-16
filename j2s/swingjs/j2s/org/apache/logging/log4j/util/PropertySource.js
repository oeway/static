(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'java.util.Objects','java.util.regex.Pattern','java.util.concurrent.ConcurrentHashMap','java.util.ArrayList','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "PropertySource", function(){
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PropertySource, "Comparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Comparator', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, ['compare$org_apache_logging_log4j_util_PropertySource$org_apache_logging_log4j_util_PropertySource','compare$','compare$TT$TT'], function (o1, o2) {
return Integer.compare$I$I($I$(1).requireNonNull$TT(o1).getPriority$(), $I$(1).requireNonNull$TT(o2).getPriority$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PropertySource, "Util", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.PROPERTY_TOKENIZER=$I$(2).compile$S("(?i:^log4j2?[-._/]?|^org\\.apache\\.logging\\.log4j\\.)?([A-Z]*[a-z0-9]+|[A-Z0-9]+)[-._/]?");
C$.CACHE=Clazz.new_(1,{V:"CharSequence",K:"java.util.List"},$I$(3,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['PREFIXES'],'O',['PROPERTY_TOKENIZER','java.util.regex.Pattern','CACHE','java.util.Map']]]

Clazz.newMeth(C$, 'tokenize$CharSequence', function (value) {
if (C$.CACHE.containsKey$O(value)) {
return C$.CACHE.get$O(value);
}var tokens=Clazz.new_(1,{E:"CharSequence"},$I$(4,1));
var matcher=C$.PROPERTY_TOKENIZER.matcher$CharSequence(value);
while (matcher.find$()){
tokens.add$TE(matcher.group$I(1).toLowerCase$());
}
C$.CACHE.put$TK$TV(value, tokens);
return tokens;
}, 1);

Clazz.newMeth(C$, 'joinAsCamelCase$Iterable', function (tokens) {
var sb=Clazz.new_($I$(5,1));
var first=true;
for (var token, $token = tokens.iterator$(); $token.hasNext$()&&((token=($token.next$())),1);) {
if (first) {
sb.append$CharSequence(token);
} else {
sb.append$C(Character.toUpperCase$C(token.charAt$I(0)));
if (token.length$() > 1) {
sb.append$CharSequence(token.subSequence$I$I(1, token.length$()));
}}first=false;
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PropertySource, "Comparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Comparator', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, ['compare$org_apache_logging_log4j_util_PropertySource$org_apache_logging_log4j_util_PropertySource','compare$','compare$TT$TT'], function (o1, o2) {
return Integer.compare$I$I($I$(1).requireNonNull$TT(o1).getPriority$(), $I$(1).requireNonNull$TT(o2).getPriority$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PropertySource, "Util", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.PROPERTY_TOKENIZER=$I$(2).compile$S("(?i:^log4j2?[-._/]?|^org\\.apache\\.logging\\.log4j\\.)?([A-Z]*[a-z0-9]+|[A-Z0-9]+)[-._/]?");
C$.CACHE=Clazz.new_(1,{V:"CharSequence",K:"java.util.List"},$I$(3,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['PREFIXES'],'O',['PROPERTY_TOKENIZER','java.util.regex.Pattern','CACHE','java.util.Map']]]

Clazz.newMeth(C$, 'tokenize$CharSequence', function (value) {
if (C$.CACHE.containsKey$O(value)) {
return C$.CACHE.get$O(value);
}var tokens=Clazz.new_(1,{E:"CharSequence"},$I$(4,1));
var matcher=C$.PROPERTY_TOKENIZER.matcher$CharSequence(value);
while (matcher.find$()){
tokens.add$TE(matcher.group$I(1).toLowerCase$());
}
C$.CACHE.put$TK$TV(value, tokens);
return tokens;
}, 1);

Clazz.newMeth(C$, 'joinAsCamelCase$Iterable', function (tokens) {
var sb=Clazz.new_($I$(5,1));
var first=true;
for (var token, $token = tokens.iterator$(); $token.hasNext$()&&((token=($token.next$())),1);) {
if (first) {
sb.append$CharSequence(token);
} else {
sb.append$C(Character.toUpperCase$C(token.charAt$I(0)));
if (token.length$() > 1) {
sb.append$CharSequence(token.subSequence$I$I(1, token.length$()));
}}first=false;
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
