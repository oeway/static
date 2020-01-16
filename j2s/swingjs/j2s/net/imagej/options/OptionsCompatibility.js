(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[[0,'java.net.URL']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OptionsCompatibility", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.invertMode="Legacy";
}, 1);

C$.$fields$=[['S',['invertMode'],'O',['platformService','org.scijava.platform.PlatformService','log','org.scijava.log.LogService','openWebPage','org.scijava.widget.Button']]]

Clazz.newMeth(C$, 'isInvertModeLegacy$', function () {
return this.invertMode.equals$O("Legacy");
});

Clazz.newMeth(C$, 'isInvertModeModern$', function () {
return this.invertMode.equals$O("Modern");
});

Clazz.newMeth(C$, 'setInvertModeLegacy$', function () {
this.invertMode="Legacy";
});

Clazz.newMeth(C$, 'setInvertModeModern$', function () {
this.invertMode="Modern";
});

Clazz.newMeth(C$, 'openWebPage$', function () {
try {
var urlString="http://wiki.imagej.net/ImageJ2/Documentation/Edit/Options/Compatibility";
var url=Clazz.new_($I$(1,1).c$$S,["http://wiki.imagej.net/ImageJ2/Documentation/Edit/Options/Compatibility"]);
if (this.platformService == null ) {
this.log.error$O("Could not open URL http://wiki.imagej.net/ImageJ2/Documentation/Edit/Options/Compatibility");
} else {
this.platformService.open$java_net_URL(url);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsCompatibility',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Compatibility..., weight = 16)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['platformService','org.scijava.platform.PlatformService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['openWebPage','org.scijava.widget.Button',null,['org.scijava.plugin.Parameter']],['label="Notes" description="View a web page detailing the commands on this dialog" callback="openWebPage" persist="false" ']],
  [['invertMode','String',null,['org.scijava.plugin.Parameter']],['label="Invert command" choices={"Legacy"  "Modern"  } ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
