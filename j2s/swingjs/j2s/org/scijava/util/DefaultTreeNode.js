(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultTreeNode", null, null, 'org.scijava.util.TreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['parent','org.scijava.util.TreeNode','children','java.util.List','data','<T>']]]

Clazz.newMeth(C$, ['c$$TT$org_scijava_util_TreeNode'], function (data, parent) {
;C$.$init$.apply(this);
this.data=data;
this.parent=parent;
this.children=Clazz.new_(1,{E:"org.scijava.util.TreeNode"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'data$', function () {
return this.data;
});

Clazz.newMeth(C$, 'parent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'setParent$org_scijava_util_TreeNode', function (parent) {
this.parent=parent;
});

Clazz.newMeth(C$, 'children$', function () {
return this.children;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
