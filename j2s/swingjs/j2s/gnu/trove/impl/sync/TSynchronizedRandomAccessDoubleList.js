(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.TSynchronizedDoubleList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedRandomAccessDoubleList", null, 'gnu.trove.impl.sync.TSynchronizedDoubleList', 'java.util.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_list_TDoubleList', function (list) {
;C$.superclazz.c$$gnu_trove_list_TDoubleList.apply(this,[list]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_list_TDoubleList$O', function (list, mutex) {
;C$.superclazz.c$$gnu_trove_list_TDoubleList$O.apply(this,[list, mutex]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
{
return Clazz.new_(C$.c$$gnu_trove_list_TDoubleList$O,[this.list.subList$I$I(fromIndex, toIndex), this.mutex]);
}});

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(1,1).c$$gnu_trove_list_TDoubleList,[this.list]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
