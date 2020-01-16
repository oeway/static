(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Partition");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$BA', function (i, j, values) {
var pivotIndex=j;
var pivot=($b$[0] = values[j--], $b$[0]);
 A : while (true){
while (i <= j){
var ti=($b$[0] = values[i], $b$[0]);
if (ti >= pivot) break;
++i;
}
if (i > j) break;
while (true){
var tj=($b$[0] = values[j], $b$[0]);
if (tj < pivot) {
var tmp=($b$[0] = values[i], $b$[0]);
values[i]=(values[j]|0);
values[j]=(tmp|0);
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values[pivotIndex]=(values[i]|0);
values[i]=(pivot|0);
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$HA', function (i, j, values) {
var pivotIndex=j;
var pivot=values[j--];
 A : while (true){
while (i <= j){
var ti=values[i];
if (ti >= pivot) break;
++i;
}
if (i > j) break;
while (true){
var tj=values[j];
if (tj < pivot) {
var tmp=values[i];
values[i]=values[j];
values[j]=tmp;
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values[pivotIndex]=values[i];
values[i]=pivot;
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$IA', function (i, j, values) {
var pivotIndex=j;
var pivot=values[j--];
 A : while (true){
while (i <= j){
var ti=values[i];
if (ti >= pivot) break;
++i;
}
if (i > j) break;
while (true){
var tj=values[j];
if (tj < pivot) {
var tmp=values[i];
values[i]=values[j];
values[j]=tmp;
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values[pivotIndex]=values[i];
values[i]=pivot;
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$JA', function (i, j, values) {
var pivotIndex=j;
var pivot=values[j--];
 A : while (true){
while (i <= j){
var ti=values[i];
if (ti >= pivot) break;
++i;
}
if (i > j) break;
while (true){
var tj=values[j];
if (tj < pivot) {
var tmp=values[i];
values[i]=values[j];
values[j]=tmp;
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values[pivotIndex]=values[i];
values[i]=pivot;
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$FA', function (i, j, values) {
var pivotIndex=j;
var pivot=values[j--];
 A : while (true){
while (i <= j){
var ti=values[i];
if (ti >= pivot ) break;
++i;
}
if (i > j) break;
while (true){
var tj=values[j];
if (tj < pivot ) {
var tmp=values[i];
values[i]=values[j];
values[j]=tmp;
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values[pivotIndex]=values[i];
values[i]=pivot;
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$DA', function (i, j, values) {
var pivotIndex=j;
var pivot=values[j--];
 A : while (true){
while (i <= j){
var ti=values[i];
if (ti >= pivot ) break;
++i;
}
if (i > j) break;
while (true){
var tj=values[j];
if (tj < pivot ) {
var tmp=values[i];
values[i]=values[j];
values[j]=tmp;
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values[pivotIndex]=values[i];
values[i]=pivot;
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$CA', function (i, j, values) {
var pivotIndex=j;
var pivot=values[j--];
 A : while (true){
while (i <= j){
var ti=values[i];
if (ti >= pivot) break;
++i;
}
if (i > j) break;
while (true){
var tj=values[j];
if (tj < pivot) {
var tmp=values[i];
values[i]=values[j];
values[j]=tmp;
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values[pivotIndex]=values[i];
values[i]=pivot;
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$java_util_List$java_util_Comparator', function (i, j, values, compare) {
var pivotIndex=j;
var pivot=values.get$I(j--);
 A : while (true){
while (i <= j){
var ti=values.get$I(i);
if (compare.compare$(ti, pivot) >= 0) break;
++i;
}
if (i > j) break;
while (true){
var tj=values.get$I(j);
if (compare.compare$(tj, pivot) < 0) {
var tmp=values.get$I(i);
values.set$I$TE(i, values.get$I(j));
values.set$I$TE(j, tmp);
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values.set$I$TE(pivotIndex, values.get$I(i));
values.set$I$TE(i, pivot);
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$java_util_List', function (i, j, values) {
var pivotIndex=j;
var pivot=values.get$I(j--);
 A : while (true){
while (i <= j){
var ti=values.get$I(i);
if (ti.compareTo$(pivot) >= 0) break;
++i;
}
if (i > j) break;
while (true){
var tj=values.get$I(j);
if (tj.compareTo$(pivot) < 0) {
var tmp=values.get$I(i);
values.set$I$TE(i, values.get$I(j));
values.set$I$TE(j, tmp);
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values.set$I$TE(pivotIndex, values.get$I(i));
values.set$I$TE(i, pivot);
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$java_util_ListIterator$java_util_ListIterator$java_util_Comparator', function (i, j, compare) {
var pivotIndex=j.previousIndex$();
var pivot=j.previous$();
 A : while (true){
while (i.nextIndex$() - 1 <= j.previousIndex$()){
var ti=i.next$();
if (compare.compare$(ti, pivot) >= 0) {
i.previous$();
break;
}}
if (i.nextIndex$() > j.previousIndex$()) break;
while (true){
var tj=j.previous$();
if (compare.compare$(tj, pivot) < 0) {
var ti=i.next$();
i.set$TE(tj);
j.set$TE(ti);
break;
} else if (j.previousIndex$() == i.nextIndex$() - 1) {
break A;
}}
}
if (i.nextIndex$() - 1 != pivotIndex) {
for (var c=pivotIndex - j.nextIndex$() + 1; c > 0; --c) j.next$();

j.set$TE(i.next$());
i.set$TE(pivot);
}return;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$java_util_ListIterator$java_util_ListIterator', function (i, j) {
var pivotIndex=j.previousIndex$();
var pivot=j.previous$();
 A : while (true){
while (i.nextIndex$() - 1 <= j.previousIndex$()){
var ti=i.next$();
if (ti.compareTo$(pivot) >= 0) {
i.previous$();
break;
}}
if (i.nextIndex$() > j.previousIndex$()) break;
while (true){
var tj=j.previous$();
if (tj.compareTo$(pivot) < 0) {
var ti=i.next$();
i.set$TE(tj);
j.set$TE(ti);
break;
} else if (j.previousIndex$() == i.nextIndex$() - 1) {
break A;
}}
}
if (i.nextIndex$() - 1 != pivotIndex) {
for (var c=pivotIndex - j.nextIndex$() + 1; c > 0; --c) j.next$();

j.set$TE(i.next$());
i.set$TE(pivot);
}return;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$java_util_List$IA$java_util_Comparator', function (i, j, values, permutation, compare) {
var pivotIndex=j;
var permutationPivot=permutation[j];
var pivot=values.get$I(j--);
 A : while (true){
while (i <= j){
var ti=values.get$I(i);
if (compare.compare$(ti, pivot) >= 0) break;
++i;
}
if (i > j) break;
while (true){
var tj=values.get$I(j);
if (compare.compare$(tj, pivot) < 0) {
var indicesTmp=permutation[i];
permutation[i]=permutation[j];
permutation[j]=indicesTmp;
var tmp=values.get$I(i);
values.set$I$TE(i, values.get$I(j));
values.set$I$TE(j, tmp);
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values.set$I$TE(pivotIndex, values.get$I(i));
values.set$I$TE(i, pivot);
permutation[pivotIndex]=permutation[i];
permutation[i]=permutationPivot;
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$I$I$java_util_List$IA', function (i, j, values, permutation) {
var pivotIndex=j;
var permutationPivot=permutation[j];
var pivot=values.get$I(j--);
 A : while (true){
while (i <= j){
var ti=values.get$I(i);
if (ti.compareTo$(pivot) >= 0) break;
++i;
}
if (i > j) break;
while (true){
var tj=values.get$I(j);
if (tj.compareTo$(pivot) < 0) {
var indicesTmp=permutation[i];
permutation[i]=permutation[j];
permutation[j]=indicesTmp;
var tmp=values.get$I(i);
values.set$I$TE(i, values.get$I(j));
values.set$I$TE(j, tmp);
++i;
--j;
break;
} else if (j == i) {
break A;
}--j;
}
}
if (i != pivotIndex) {
values.set$I$TE(pivotIndex, values.get$I(i));
values.set$I$TE(i, pivot);
permutation[pivotIndex]=permutation[i];
permutation[i]=permutationPivot;
}return i;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$java_util_ListIterator$java_util_ListIterator$IA$java_util_Comparator', function (i, j, permutation, compare) {
var pivotIndex=j.previousIndex$();
var permutationPivot=permutation[pivotIndex];
var pivot=j.previous$();
 A : while (true){
while (i.nextIndex$() - 1 <= j.previousIndex$()){
var ti=i.next$();
if (compare.compare$(ti, pivot) >= 0) {
i.previous$();
break;
}}
if (i.nextIndex$() > j.previousIndex$()) break;
while (true){
var tj=j.previous$();
if (compare.compare$(tj, pivot) < 0) {
var iIndex=i.nextIndex$();
var jIndex=j.nextIndex$();
var indicesTmp=permutation[iIndex];
permutation[iIndex]=permutation[jIndex];
permutation[jIndex]=indicesTmp;
var ti=i.next$();
i.set$TE(tj);
j.set$TE(ti);
break;
} else if (j.previousIndex$() == i.nextIndex$() - 1) {
break A;
}}
}
if (i.nextIndex$() - 1 != pivotIndex) {
for (var c=pivotIndex - j.nextIndex$() + 1; c > 0; --c) j.next$();

var iIndex=i.nextIndex$();
j.set$TE(i.next$());
i.set$TE(pivot);
permutation[pivotIndex]=permutation[iIndex];
permutation[iIndex]=permutationPivot;
}return;
}, 1);

Clazz.newMeth(C$, 'partitionSubList$java_util_ListIterator$java_util_ListIterator$IA', function (i, j, permutation) {
var pivotIndex=j.previousIndex$();
var permutationPivot=permutation[pivotIndex];
var pivot=j.previous$();
 A : while (true){
while (i.nextIndex$() - 1 <= j.previousIndex$()){
var ti=i.next$();
if (ti.compareTo$(pivot) >= 0) {
i.previous$();
break;
}}
if (i.nextIndex$() > j.previousIndex$()) break;
while (true){
var tj=j.previous$();
if (tj.compareTo$(pivot) < 0) {
var iIndex=i.nextIndex$();
var jIndex=j.nextIndex$();
var indicesTmp=permutation[iIndex];
permutation[iIndex]=permutation[jIndex];
permutation[jIndex]=indicesTmp;
var ti=i.next$();
i.set$TE(tj);
j.set$TE(ti);
break;
} else if (j.previousIndex$() == i.nextIndex$() - 1) {
break A;
}}
}
if (i.nextIndex$() - 1 != pivotIndex) {
for (var c=pivotIndex - j.nextIndex$() + 1; c > 0; --c) j.next$();

var iIndex=i.nextIndex$();
j.set$TE(i.next$());
i.set$TE(pivot);
permutation[pivotIndex]=permutation[iIndex];
permutation[iIndex]=permutationPivot;
}return;
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
