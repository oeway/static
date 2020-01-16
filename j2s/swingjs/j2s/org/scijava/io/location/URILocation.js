(function(){var P$=Clazz.newPackage("org.scijava.io.location"),p$1={},I$=[[0,'java.net.URI','java.util.LinkedHashMap','java.net.URLDecoder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "URILocation", null, 'org.scijava.io.location.AbstractLocation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','uri','java.net.URI']]]

Clazz.newMeth(C$, 'c$$java_net_URI', function (uri) {
Clazz.super_(C$, this);
this.uri=uri;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (uriPath) {
C$.c$$java_net_URI.apply(this, [Clazz.new_($I$(1,1).c$$S,[uriPath])]);
}, 1);

Clazz.newMeth(C$, 'getQueryMap$', function () {
return p$1.decodeQuery$S.apply(this, [this.getURI$().getRawQuery$()]);
});

Clazz.newMeth(C$, 'getQueryValue$S', function (key) {
return this.getQueryMap$().get$O(key);
});

Clazz.newMeth(C$, 'getURI$', function () {
return this.uri;
});

Clazz.newMeth(C$, 'decodeQuery$S', function (query) {
var map=Clazz.new_(1,{K:"String",V:"String"},$I$(2,1));
if (query == null ) return map;
for (var param, $param = 0, $$param = query.split$S("&"); $param<$$param.length&&((param=($$param[$param])),1);$param++) {
var equals=param.indexOf$S("=");
if (equals < 0) {
map.put$TK$TV(p$1.decode$S.apply(this, [param]), "true");
} else {
var key=p$1.decode$S.apply(this, [param.substring$I$I(0, equals)]);
var value=p$1.decode$S.apply(this, [param.substring$I(equals + 1)]);
map.put$TK$TV(key, value);
}}
return map;
}, p$1);

Clazz.newMeth(C$, 'decode$S', function (s) {
try {
return $I$(3).decode$S$S(s.replace$CharSequence$CharSequence("+", "%2B"), "UTF-8");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.UnsupportedEncodingException")){
return null;
} else {
throw exc;
}
}
}, p$1);
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
