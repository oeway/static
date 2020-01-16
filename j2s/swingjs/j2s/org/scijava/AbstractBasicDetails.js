(function(){var P$=Clazz.newPackage("org.scijava"),I$=[[0,'java.util.HashMap','org.scijava.util.StringMaker']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractBasicDetails", null, null, 'org.scijava.BasicDetails');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.values=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
}, 1);

C$.$fields$=[['S',['name','label','description'],'O',['values','java.util.Map']]]

Clazz.newMeth(C$, 'toString', function () {
var sm=Clazz.new_($I$(2,1));
sm.append$S$O("name", this.name);
sm.append$S$O("label", this.label);
sm.append$S$O("description", this.description);
for (var key, $key = this.values.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
sm.append$S$O(key, this.values.get$O(key));
}
return sm.toString();
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'is$S', function (key) {
return this.values.containsKey$O(key);
});

Clazz.newMeth(C$, 'get$S', function (key) {
return this.values.get$O(key);
});

Clazz.newMeth(C$, 'setLabel$S', function (label) {
this.label=label;
});

Clazz.newMeth(C$, 'setDescription$S', function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'set$S$S', function (key, value) {
this.values.put$TK$TV(key, value);
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
