"""
A calculator based on https://en.wikipedia.org/wiki/Reverse_Polish_notation
"""

from __future__ import print_function


def calc(s):
    input1 = 0
    input2 = 0
    num = ""
    inputs = []
    # inputs are read is char and put into array to be made into float
    i = 0
    j = 0
    result = 0

    while i < len(s):
        if(s[i] == " "):
            break
        if(s[i].isdigit()):
            num += s[i]
        i += 1
    #store first number    
    input1 = float(num)
    num = ""
    i += 1
    while i < len(s):
        if(s[i] == " "):
            break
        if(s[i].isdigit()):
            num += s[i]
        i += 1
    input2 = float(num)
    result = input1 + input2

    return result
    

if __name__ == '__main__':
    ss = [
        "1 6", # -8.5
        "1 4", # 11
        "10 4", # 9
        "10 4", # 11
        "10 2", # 11
        "5 6", # 5
        "1 3", # 7
        "4 2", # 262144
        "4 2", # 0.015625
        "4 3", # 0.015625
    ]
    for s in ss:
        res = calc(s)
        print('{} = {}'.format(res, s))
    