(function(){var P$=Clazz.newPackage("java.net"),I$=[[0,'sun.net.www.MessageHeader','java.util.Collections','java.util.Date']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "URLConnection");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.defaultAllowUserInteraction=false;
C$.defaultUseCaches=true;
C$.fileNameMapLoaded=false;
}

Clazz.newMeth(C$, '$init$', function () {
this.doInput=true;
this.doOutput=false;
this.connected=false;
this.allowUserInteraction=C$.defaultAllowUserInteraction;
this.useCaches=C$.defaultUseCaches;
this.ifModifiedSince=0;
}, 1);

C$.$fields$=[['Z',['doInput','doOutput','connected','allowUserInteraction','useCaches'],'I',['connectTimeout','readTimeout'],'L',['ifModifiedSince'],'O',['url','java.net.URL','requests','sun.net.www.MessageHeader']]
,['Z',['defaultAllowUserInteraction','defaultUseCaches','fileNameMapLoaded'],'O',['fileNameMap','java.net.FileNameMap']]]

Clazz.newMeth(C$, 'setDoInput$Z', function (doinput) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.doInput=doinput;
});

Clazz.newMeth(C$, 'getDoInput$', function () {
return this.doInput;
});

Clazz.newMeth(C$, 'setDoOutput$Z', function (dooutput) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.doOutput=dooutput;
});

Clazz.newMeth(C$, 'getDoOutput$', function () {
return this.doOutput;
});

Clazz.newMeth(C$, 'c$$java_net_URL', function (url) {
;C$.$init$.apply(this);
this.url=url;
}, 1);

Clazz.newMeth(C$, 'getURL$', function () {
return this.url;
});

Clazz.newMeth(C$, 'getInputStream$', function () {
throw Clazz.new_(Clazz.load('java.net.UnknownServiceException').c$$S,["protocol doesn\'t support input"]);
});

Clazz.newMeth(C$, 'getOutputStream$', function () {
throw Clazz.new_(Clazz.load('java.net.UnknownServiceException').c$$S,["protocol doesn\'t support output"]);
});

Clazz.newMeth(C$, 'setRequestProperty$S$S', function (key, value) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["key is null"]);
if (this.requests == null ) this.requests=Clazz.new_($I$(1,1));
this.requests.set$S$S(key, value);
});

Clazz.newMeth(C$, 'setAllowUserInteraction$Z', function (allowuserinteraction) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.allowUserInteraction=allowuserinteraction;
});

Clazz.newMeth(C$, 'getAllowUserInteraction$', function () {
return this.allowUserInteraction;
});

Clazz.newMeth(C$, 'setDefaultAllowUserInteraction$Z', function (defaultallowuserinteraction) {
C$.defaultAllowUserInteraction=defaultallowuserinteraction;
}, 1);

Clazz.newMeth(C$, 'getDefaultAllowUserInteraction$', function () {
return C$.defaultAllowUserInteraction;
}, 1);

Clazz.newMeth(C$, 'setUseCaches$Z', function (usecaches) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.useCaches=usecaches;
});

Clazz.newMeth(C$, 'getUseCaches$', function () {
return this.useCaches;
});

Clazz.newMeth(C$, 'setIfModifiedSince$J', function (ifmodifiedsince) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.ifModifiedSince=ifmodifiedsince;
});

Clazz.newMeth(C$, 'getIfModifiedSince$', function () {
return this.ifModifiedSince;
});

Clazz.newMeth(C$, 'getDefaultUseCaches$', function () {
return C$.defaultUseCaches;
});

Clazz.newMeth(C$, 'setDefaultUseCaches$Z', function (defaultusecaches) {
C$.defaultUseCaches=defaultusecaches;
});

Clazz.newMeth(C$, 'addRequestProperty$S$S', function (key, value) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["key is null"]);
if (this.requests == null ) this.requests=Clazz.new_($I$(1,1));
this.requests.add$S$S(key, value);
});

Clazz.newMeth(C$, 'getRequestProperty$S', function (key) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
if (this.requests == null ) return null;
return this.requests.findValue$S(key);
});

Clazz.newMeth(C$, 'getRequestProperties$', function () {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
if (this.requests == null ) return $I$(2).EMPTY_MAP;
return this.requests.getHeaders$SA(null);
});

Clazz.newMeth(C$, 'setDefaultRequestProperty$S$S', function (key, value) {
}, 1);

Clazz.newMeth(C$, 'getDefaultRequestProperty$S', function (key) {
return null;
}, 1);

Clazz.newMeth(C$, 'setConnectTimeout$I', function (timeout) {
if (timeout < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["timeout can not be negative"]);
}this.connectTimeout=timeout;
});

Clazz.newMeth(C$, 'getConnectTimeout$', function () {
return this.connectTimeout;
});

Clazz.newMeth(C$, 'setReadTimeout$I', function (timeout) {
if (timeout < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["timeout can not be negative"]);
}this.readTimeout=timeout;
});

Clazz.newMeth(C$, 'getReadTimeout$', function () {
return this.readTimeout;
});

Clazz.newMeth(C$, 'getContentLength$', function () {
return this.getHeaderFieldInt$S$I("content-length", -1);
});

Clazz.newMeth(C$, 'getContentType$', function () {
return this.getHeaderField$S("content-type");
});

Clazz.newMeth(C$, 'getContentEncoding$', function () {
return this.getHeaderField$S("content-encoding");
});

Clazz.newMeth(C$, 'getExpiration$', function () {
return this.getHeaderFieldDate$S$J("expires", 0);
});

Clazz.newMeth(C$, 'getDate$', function () {
return this.getHeaderFieldDate$S$J("date", 0);
});

Clazz.newMeth(C$, 'getLastModified$', function () {
return this.getHeaderFieldDate$S$J("last-modified", 0);
});

Clazz.newMeth(C$, 'getHeaderField$S', function (name) {
return null;
});

Clazz.newMeth(C$, 'getHeaderFields$', function () {
return $I$(2).EMPTY_MAP;
});

Clazz.newMeth(C$, 'getHeaderFieldInt$S$I', function (name, Default) {
var value=this.getHeaderField$S(name);
try {
return Integer.parseInt$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return Default;
});

Clazz.newMeth(C$, 'getHeaderFieldDate$S$J', function (name, Default) {
var value=this.getHeaderField$S(name);
try {
return $I$(3).parse$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return Default;
});

Clazz.newMeth(C$, 'getHeaderFieldKey$I', function (n) {
return null;
});

Clazz.newMeth(C$, 'getHeaderField$I', function (n) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
