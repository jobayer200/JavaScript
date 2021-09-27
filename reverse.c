#include <stdio.h>

int main() {
    char a[15]="JavaScript";
    int i=0, temp=0;
    while(a[i] != '\0'){
    i++;
}
int len = i;
// printf("%d",i);
    for (i=0 ; i<len; i++){
    temp = a[i];
    a[i] = a[len-1];
    a[len-1] = temp;
    len--;
}
printf("%s",a);
    
    return 0;
}