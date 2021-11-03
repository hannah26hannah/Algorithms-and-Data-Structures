#include <stdio.h>

void BubbleSort(int DataSet[], int Length)
{
    int i = 0;
    int j = 0;
    int temp = 0;

    for (i = 0; i < Length-1; i++)
    {
        // 내부에 있는 for 루프는 바깥 for 루프가 한 번 실행될 때마다 그 반복 횟수가 줄어든다. 한 번 실행 시 정렬 대상으로 삼는 데이터 집합의 크기가 줄어들기 때문이다.
        for (j = 0; j < Length-(i+1); j++)
        {
            if (DataSet[j] > DataSet[j+1])
            {
                temp = DataSet[j+1];
                DataSet[j+1] = DataSet[j];
                DataSet[j] = temp;
            } 
            else 
            {
                continue;
            }
        }
    }
};

int main( void )
{
    int DataSet[] = { 6, 4, 2, 3, 1, 5};
    int Length = sizeof DataSet / sizeof DataSet[0]; // sizeof 연산자를 통해 배열의 길이를 구한 뒤 Length를 초기화한다. 
    int i = 0;

    BubbleSort(DataSet, Length);

    for (i = 0; i < Length; i++)
    {
        printf("%d ", DataSet[i]); // 정렬 후의 데이터 집합을 출력한다.
    }

    printf("\n");

    return 0;

}