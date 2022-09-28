#include <iostream>
using namespace std;

int main()
{
	int arr[] = {0, 1, 2, -3, 4, 5, -6};
	int n = sizeof(arr) / sizeof(int);

	int maxSum = 0;

	for (int i = 0; i < n; i++)
	{
		for (int j = i; j < n; j++)
		{
			int sum = 0;
			for (int k = i; k <= j; k++)
			{
				sum += arr[k];
			}

			if (sum > maxSum)
				maxSum = sum;
		}
	}

	cout << maxSum;

	return maxSum;
}