(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),I$=[[0,'java.util.ArrayList','org.rcsb.cif.model.ModelFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseBlock", null, null, 'org.rcsb.cif.generic.CifBlock');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.categories=null;
this.saveFrames=null;
this.header=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map$S', function (categories, header) {
C$.c$$java_util_Map$S$java_util_List.apply(this, [categories, header, Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map$S$java_util_List', function (categories, header, saveFrames) {
;C$.$init$.apply(this);
this.categories=categories;
this.saveFrames=saveFrames;
this.header=header;
}, 1);

Clazz.newMeth(C$, 'getCategory$S', function (name) {
return this.categories.computeIfAbsent$TK$java_util_function_Function(name, /*addLambdaReuse org.rcsb.cif.generic.BaseBlock$lambda1*/(P$.BaseBlock$lambda1$||(P$.BaseBlock$lambda1$=((function($$){((P$.BaseBlock$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BaseBlock$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget true classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName org.rcsb.cif.model.ModelFactory*/$$.createEmptyCategory$S.apply(null,[t])});
})()
)); return Clazz.new_(P$.BaseBlock$lambda1.$init$, [this, null])})($I$(2))))));
});

Clazz.newMeth(C$, 'getSaveFrames$', function () {
return this.saveFrames;
});

Clazz.newMeth(C$, 'getBlockHeader$', function () {
return this.header;
});

Clazz.newMeth(C$, 'getCategoryNames$', function () {
return Clazz.new_($I$(1,1).c$$java_util_Collection,[this.categories.keySet$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:28 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
