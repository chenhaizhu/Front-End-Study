// 在 21 点游戏中，玩家可以通过计算牌桌上已经发放的卡牌的高低值来让自己在游戏中保持优势。 这被称为卡片计数。
// 牌桌上的大值的卡牌更多，对玩家有利。 根据下面的表格，每张卡牌都被分配了一个值。 如果卡牌的值大于 0，那么玩家应该追加赌注。
// 如果卡牌的值为 0 或负数，玩家应该追加少许赌注甚至不追加赌注。

/*
计数	 卡牌
+1	 2, 3, 4, 5, 6
0	 7, 8, 9
-1	 10, 'J', 'Q', 'K', 'A'
*/

// 请写一个函数实现 21 点算法。 它根据参数 card 的值（见表格，可能是数字或者字符串）来递增或递减全局变量 count。
// 然后函数返回一个由当前 count（计数）和 Bet（当 count > 0 时）或 Hold（当 count <= 0 时) 拼接的字符串。
// 注意 count（计数）和玩家的决定（Bet 或 Hold）之间应该有空格。

// 示例输出：-3 Hold 或者 5 Bet

// 当卡牌为 7、8、9 时，不要把 count 值重置为 0。 不要返回一个数组。
// 输出结果中不要包含单引号或双引号。

let count = 0;

function cc(card) {
    // 只修改这一行下面的代码
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
    // 只修改这一行上面的代码
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

