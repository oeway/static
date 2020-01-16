(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.message"),I$=[[0,'org.apache.logging.log4j.message.LocalizedMessage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LocalizedMessageFactory", null, 'org.apache.logging.log4j.message.AbstractMessageFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['baseName'],'O',['resourceBundle','java.util.ResourceBundle']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$java_util_ResourceBundle', function (resourceBundle) {
Clazz.super_(C$, this);
this.resourceBundle=resourceBundle;
this.baseName=null;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (baseName) {
Clazz.super_(C$, this);
this.resourceBundle=null;
this.baseName=baseName;
}, 1);

Clazz.newMeth(C$, 'getBaseName$', function () {
return this.baseName;
});

Clazz.newMeth(C$, 'getResourceBundle$', function () {
return this.resourceBundle;
});

Clazz.newMeth(C$, 'newMessage$S', function (key) {
if (this.resourceBundle == null ) {
return Clazz.new_($I$(1,1).c$$S$O,[this.baseName, key]);
}return Clazz.new_($I$(1,1).c$$java_util_ResourceBundle$S,[this.resourceBundle, key]);
});

Clazz.newMeth(C$, 'newMessage$S$OA', function (key, params) {
if (this.resourceBundle == null ) {
return Clazz.new_($I$(1,1).c$$S$S$OA,[this.baseName, key, params]);
}return Clazz.new_($I$(1,1).c$$java_util_ResourceBundle$S$OA,[this.resourceBundle, key, params]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
