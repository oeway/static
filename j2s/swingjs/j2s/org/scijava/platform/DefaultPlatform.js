(function(){var P$=Clazz.newPackage("org.scijava.platform"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultPlatform", null, 'org.scijava.platform.AbstractPlatform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'open$java_net_URL', function (url) {
var browsers=Clazz.array(String, -1, ["xdg-open", "netscape", "firefox", "konqueror", "mozilla", "opera", "epiphany", "lynx"]);
for (var browser, $browser = 0, $$browser = browsers; $browser<$$browser.length&&((browser=($$browser[$browser])),1);$browser++) {
try {
var exitCode=this.getPlatformService$().exec$SA([browser, url.toString()]);
if (exitCode == 0) return;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Could not open " + url]);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.platform.DefaultPlatform',null,['org.scijava.plugin.Plugin']],['type="org.scijava.platform.Platform.class" name="Default" priority="-10000.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
