(function(){var P$=Clazz.newPackage("org.scijava.io.location"),I$=[[0,'java.net.URI']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractLocationResolver", null, 'org.scijava.plugin.AbstractHandlerPlugin', 'org.scijava.io.location.LocationResolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['schemes','String[]']]]

Clazz.newMeth(C$, 'c$$SA', function (schemes) {
Clazz.super_(C$, this);
Clazz.assert(C$, this, function(){return schemes.length > 0});
this.schemes=schemes;
}, 1);

Clazz.newMeth(C$, ['supports$java_net_URI','supports$TT','supports$TD'], function (uri) {
var supports=false;
for (var scheme, $scheme = 0, $$scheme = this.schemes; $scheme<$$scheme.length&&((scheme=($$scheme[$scheme])),1);$scheme++) {
supports=supports || scheme.equals$O(uri.getScheme$()) ;
}
return supports;
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(1));
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
