(function(){var P$=Clazz.newPackage("org.scijava.io.location"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "URLLocation", null, 'org.scijava.io.location.AbstractLocation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['url','java.net.URL']]]

Clazz.newMeth(C$, 'c$$java_net_URL', function (url) {
Clazz.super_(C$, this);
this.url=url;
}, 1);

Clazz.newMeth(C$, 'getURL$', function () {
return this.url;
});

Clazz.newMeth(C$, 'getURI$', function () {
try {
return this.getURL$().toURI$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.URISyntaxException")){
return null;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
