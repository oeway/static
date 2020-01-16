(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsProxy", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.proxyServer="";
this.port=8080;
this.useSystemProxy=false;
}, 1);

C$.$fields$=[['Z',['useSystemProxy'],'I',['port'],'S',['proxyServer']]]

Clazz.newMeth(C$, 'getProxyServer$', function () {
return this.proxyServer;
});

Clazz.newMeth(C$, 'getPort$', function () {
return this.port;
});

Clazz.newMeth(C$, 'isUseSystemProxy$', function () {
return this.useSystemProxy;
});

Clazz.newMeth(C$, 'setProxyServer$S', function (proxyServer) {
this.proxyServer=proxyServer;
});

Clazz.newMeth(C$, 'setPort$I', function (port) {
this.port=port;
});

Clazz.newMeth(C$, 'setUseSystemProxy$Z', function (useSystemProxy) {
this.useSystemProxy=useSystemProxy;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsProxy',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Proxy Settings..., weight = 13)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['proxyServer','String',null,['org.scijava.plugin.Parameter']],['label="Proxy Server" ']],
  [['port','int',null,['org.scijava.plugin.Parameter']],['label="Port" ']],
  [['useSystemProxy','boolean',null,['org.scijava.plugin.Parameter']],['label="Or, use system proxy settings" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
