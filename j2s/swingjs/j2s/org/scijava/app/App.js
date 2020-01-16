(function(){var P$=Clazz.newPackage("org.scijava.app"),I$=[[0,'Runtime','StringBuilder','org.scijava.util.AppUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "App", null, null, ['org.scijava.plugin.RichPlugin', 'org.scijava.plugin.SingletonPlugin']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getTitle$', function () {
return this.getInfo$().getName$();
});

Clazz.newMeth(C$, 'getInfo$Z', function (mem) {
var appTitle=this.getTitle$();
var appVersion=this.getVersion$();
var javaVersion=System.getProperty$S("java.version");
var osArch=System.getProperty$S("os.arch");
var maxMem=$I$(1).getRuntime$().maxMemory$();
var totalMem=$I$(1).getRuntime$().totalMemory$();
var freeMem=$I$(1).getRuntime$().freeMemory$();
var usedMem=totalMem - freeMem;
var usedMB=(usedMem/1048576|0);
var maxMB=(maxMem/1048576|0);
var sb=Clazz.new_($I$(2,1));
sb.append$S(appTitle + " " + appVersion );
sb.append$S("; Java " + javaVersion + " [" + osArch + "]" );
if (mem) sb.append$S("; " + usedMB + "MB of " + maxMB + "MB" );
return sb.toString();
});

Clazz.newMeth(C$, 'getSystemProperty$', function () {
return this.getInfo$().getName$().toLowerCase$() + ".dir";
});

Clazz.newMeth(C$, 'getBaseDirectory$', function () {
return $I$(3).getBaseDirectory$S$Class$S(this.getSystemProperty$(), this.getClass$(), null);
});

Clazz.newMeth(C$, 'prefs$', function () {
});

Clazz.newMeth(C$, 'quit$', function () {
this.getContext$().dispose$();
});

Clazz.newMeth(C$, 'getVersion$', function () {
{
return "Unknown(SwingJS)";
}
return "Unknown";
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
