# from ast import List


# def maximum_white_tiles(tiles, carpet_len) -> int:
#     tiles.sort()
#     print(tiles)
#     # j: window index
#     j = cover = res = 0
#     for i in range(len(tiles)):
#         # slide the window as far as we can to cover fully the intervals with the carpet
#         while j < len(tiles) and tiles[j][1]-tiles[i][0] + 1 <= carpet_len:
#             cover += tiles[j][1]-tiles[j][0] + 1
#             j += 1
#             # process the remnant, that is, when the tiles[j] is covered by the carpet partially(not fully)
#         if j < len(tiles) and tiles[j][0]-tiles[i][0] + 1 <= carpet_len:
#             res = max(res, cover + carpet_len-(tiles[j][0]-tiles[i][0]))
#         else:
#             res = max(res, cover)
#         # when the tiles[j] is covered partially, the interval is not added to the variable cover
#             if i != j:
#                 cover -= tiles[i][1]-tiles[i][0]+1
#             j = max(j, i+1)
#     return res


# maximum_white_tiles([[10, 11], [1, 5],  [12, 18], [20, 25], [30, 32]], 10)

def max_sum_hg(arr):

    # This function will return the sum of the hourglass
    def sum_hg(x, y):
        sum_hg = arr[x][y] + arr[x][y+1] + arr[x][y+2]
        sum_hg = sum_hg + arr[x+1][y+1]
        sum_hg = sum_hg + arr[x+2][y]+arr[x+2][y+1]+arr[x+2][y+2]
        return sum_hg

    size = len(arr)
    max_sum = -63

    for x in range(0, (size-2)):
        for y in range(0, (size-2)):
            k = sum_hg(x, y)
            if k > max_sum:
                max_sum = k

    return max_sum
    # print("The largest sum of the HourGlass is ", sum)


# print(max_sum_hg([[520626, 685427, 788912, 800638, 717251, 683428], [
#       23602, 608915, 697585, 957500, 154778, 209236], [287585, 588801, 818234, 73530, 939116, 252369]]))

def getMinSum(arr):
    n = len(arr)
    MAX = 25
    bits_count = [0] * MAX
    max_bit = 0
    sum = 0
    ans = 0

    # To store the frequency
    # of bit in every element
    for d in range(n):
        e = arr[d]
        f = 0
        while (e > 0):
            rem = e % 2
            e = e // 2
            if (rem == 1):
                bits_count[f] += rem

            f += 1

        max_bit = max(max_bit, f)

    # Finding element X
    for d in range(max_bit):
        temp = pow(2, d)

        if (bits_count[d] > n // 2):
            ans = ans + temp

    # Taking XOR of elements and finding sum
    for d in range(n):
        arr[d] = arr[d] ^ ans
        sum = sum + arr[d]

    return sum


print(getMinSum([3, 5, 7, 11, 15]))
