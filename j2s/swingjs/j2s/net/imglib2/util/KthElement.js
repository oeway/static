(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "KthElement");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$BA', function (i, j, k, values) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$BA(i, j, values);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$BA', function (k, values) {
C$.kthElement$I$I$I$BA(0, values.length - 1, k, values);
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$HA', function (i, j, k, values) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$HA(i, j, values);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$HA', function (k, values) {
C$.kthElement$I$I$I$HA(0, values.length - 1, k, values);
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$IA', function (i, j, k, values) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$IA(i, j, values);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$IA', function (k, values) {
C$.kthElement$I$I$I$IA(0, values.length - 1, k, values);
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$JA', function (i, j, k, values) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$JA(i, j, values);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$JA', function (k, values) {
C$.kthElement$I$I$I$JA(0, values.length - 1, k, values);
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$FA', function (i, j, k, values) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$FA(i, j, values);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$FA', function (k, values) {
C$.kthElement$I$I$I$FA(0, values.length - 1, k, values);
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$DA', function (i, j, k, values) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$DA(i, j, values);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$DA', function (k, values) {
C$.kthElement$I$I$I$DA(0, values.length - 1, k, values);
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$CA', function (i, j, k, values) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$CA(i, j, values);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$CA', function (k, values) {
C$.kthElement$I$I$I$CA(0, values.length - 1, k, values);
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$java_util_List$java_util_Comparator', function (i, j, k, values, comparator) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$java_util_List$java_util_Comparator(i, j, values, comparator);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$java_util_List$java_util_Comparator', function (k, values, comparator) {
C$.kthElement$I$I$I$java_util_List$java_util_Comparator(0, values.size$() - 1, k, values, comparator);
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$java_util_List', function (i, j, k, values) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$java_util_List(i, j, values);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$java_util_List', function (k, values) {
C$.kthElement$I$I$I$java_util_List(0, values.size$() - 1, k, values);
}, 1);

Clazz.newMeth(C$, 'kthElement$java_util_ListIterator$java_util_ListIterator$I$java_util_Comparator', function (i, j, k, comparator) {
while (true){
var iPos=i.nextIndex$();
var jPos=j.previousIndex$();
P$.Partition.partitionSubList$java_util_ListIterator$java_util_ListIterator$java_util_Comparator(i, j, comparator);
var pivotpos=i.nextIndex$() - 1;
if (pivotpos > k) {
for (var c=i.nextIndex$() - iPos; c > 0; --c) i.previous$();

for (var c=j.previousIndex$() - (pivotpos - 1); c > 0; --c) j.previous$();

} else if (pivotpos < k) {
for (var c=i.nextIndex$() - (pivotpos + 1); c > 0; --c) i.previous$();

for (var c=j.previousIndex$() - jPos; c > 0; --c) j.previous$();

} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$java_util_ListIterator$java_util_ListIterator$I', function (i, j, k) {
while (true){
var iPos=i.nextIndex$();
var jPos=j.previousIndex$();
P$.Partition.partitionSubList$java_util_ListIterator$java_util_ListIterator(i, j);
var pivotpos=i.nextIndex$() - 1;
if (pivotpos > k) {
for (var c=i.nextIndex$() - iPos; c > 0; --c) i.previous$();

for (var c=j.previousIndex$() - (pivotpos - 1); c > 0; --c) j.previous$();

} else if (pivotpos < k) {
for (var c=i.nextIndex$() - (pivotpos + 1); c > 0; --c) i.previous$();

for (var c=j.previousIndex$() - jPos; c > 0; --c) j.previous$();

} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$java_util_List$IA$java_util_Comparator', function (i, j, k, values, permutation, comparator) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$java_util_List$IA$java_util_Comparator(i, j, values, permutation, comparator);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$java_util_List$IA$java_util_Comparator', function (k, values, permutation, comparator) {
C$.kthElement$I$I$I$java_util_List$IA$java_util_Comparator(0, values.size$() - 1, k, values, permutation, comparator);
}, 1);

Clazz.newMeth(C$, 'kthElement$I$I$I$java_util_List$IA', function (i, j, k, values, permutation) {
while (true){
var pivotpos=P$.Partition.partitionSubList$I$I$java_util_List$IA(i, j, values, permutation);
if (pivotpos > k) {
j=pivotpos - 1;
} else if (pivotpos < k) {
i=pivotpos + 1;
} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$I$java_util_List$IA', function (k, values, permutation) {
C$.kthElement$I$I$I$java_util_List$IA(0, values.size$() - 1, k, values, permutation);
}, 1);

Clazz.newMeth(C$, 'kthElement$java_util_ListIterator$java_util_ListIterator$I$IA$java_util_Comparator', function (i, j, k, permutation, comparator) {
while (true){
var iPos=i.nextIndex$();
var jPos=j.previousIndex$();
P$.Partition.partitionSubList$java_util_ListIterator$java_util_ListIterator$IA$java_util_Comparator(i, j, permutation, comparator);
var pivotpos=i.nextIndex$() - 1;
if (pivotpos > k) {
for (var c=i.nextIndex$() - iPos; c > 0; --c) i.previous$();

for (var c=j.previousIndex$() - (pivotpos - 1); c > 0; --c) j.previous$();

} else if (pivotpos < k) {
for (var c=i.nextIndex$() - (pivotpos + 1); c > 0; --c) i.previous$();

for (var c=j.previousIndex$() - jPos; c > 0; --c) j.previous$();

} else return;
}
}, 1);

Clazz.newMeth(C$, 'kthElement$java_util_ListIterator$java_util_ListIterator$I$IA', function (i, j, k, permutation) {
while (true){
var iPos=i.nextIndex$();
var jPos=j.previousIndex$();
P$.Partition.partitionSubList$java_util_ListIterator$java_util_ListIterator$IA(i, j, permutation);
var pivotpos=i.nextIndex$() - 1;
if (pivotpos > k) {
for (var c=i.nextIndex$() - iPos; c > 0; --c) i.previous$();

for (var c=j.previousIndex$() - (pivotpos - 1); c > 0; --c) j.previous$();

} else if (pivotpos < k) {
for (var c=i.nextIndex$() - (pivotpos + 1); c > 0; --c) i.previous$();

for (var c=j.previousIndex$() - jPos; c > 0; --c) j.previous$();

} else return;
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
