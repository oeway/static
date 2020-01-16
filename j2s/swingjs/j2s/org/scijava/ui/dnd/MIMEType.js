(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd"),I$=[[0,'java.util.StringTokenizer','java.util.ArrayList','java.util.HashMap','java.util.Collections','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MIMEType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['base'],'O',['paramNames','java.util.List','params','java.util.Map']]]

Clazz.newMeth(C$, 'c$$S', function (mimeType) {
C$.c$$S$Class.apply(this, [mimeType, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Class', function (mimeType, javaType) {
;C$.$init$.apply(this);
var st=Clazz.new_($I$(1,1).c$$S$S,[mimeType, ";"]);
this.base=st.nextToken$().trim$();
var names=Clazz.new_(1,{E:"String"},$I$(2,1));
var map=Clazz.new_(1,{K:"String",V:"String"},$I$(3,1));
while (st.hasMoreTokens$()){
var param=st.nextToken$();
var equals=param.indexOf$S("=");
if (equals < 0) continue;
var name=param.substring$I$I(0, equals).trim$();
var value=param.substring$I(equals + 1).trim$();
names.add$TE(name);
map.put$TK$TV(name, value);
}
if (javaType != null ) {
var mimeClassName=map.get$O("class");
var javaClassName=javaType.getName$();
if (mimeClassName == null ) {
map.put$TK$TV("class", javaClassName);
} else if (!mimeClassName.equals$O(javaClassName)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["MIME class (" + mimeClassName + ") and Java class (" + javaClassName + ") do not match" ]);
}}this.paramNames=$I$(4).unmodifiableList$java_util_List(names);
this.params=$I$(4).unmodifiableMap$java_util_Map(map);
}, 1);

Clazz.newMeth(C$, 'getBase$', function () {
return this.base;
});

Clazz.newMeth(C$, 'getParameter$S', function (name) {
return this.params.get$O(name);
});

Clazz.newMeth(C$, 'getParameters$', function () {
return this.paramNames;
});

Clazz.newMeth(C$, 'isCompatible$org_scijava_ui_dnd_MIMEType', function (mimeType) {
if (!this.getBase$().equals$O(mimeType.getBase$())) return false;
for (var name, $name = this.getParameters$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (!this.getParameter$S(name).equals$O(mimeType.getParameter$S(name))) return false;
}
return true;
});

Clazz.newMeth(C$, 'isCompatible$Class', function (javaType) {
return javaType.getName$().equals$O(this.getParameter$S("class"));
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.toString().hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "org.scijava.ui.dnd.MIMEType"))) return false;
var mimeType=o;
return this.isCompatible$org_scijava_ui_dnd_MIMEType(mimeType) && mimeType.isCompatible$org_scijava_ui_dnd_MIMEType(this) ;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(5,1).c$$S,[this.getBase$()]);
for (var name, $name = this.getParameters$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
sb.append$S("; ");
sb.append$S(name);
sb.append$S("=");
sb.append$S(this.getParameter$S(name));
}
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
