function UsedBracketsIndexFind(WordIndex = -1, BracketIndex = -1){
    result = 0;
    if (BracketIndex == -1)
    {
        for (let i = 0; i < WordIndex + 1; i++)
        {
            if (OpenBrackets.includes(WordsTable[i]))
            {
                result++;
            }

        }
    }
    else if (WordIndex == -1)
    {
        for (let i = 0; i < WordIndex + 1; i++)
        {
            if (OpenBrackets.includes(WordsTable[i]))
            {
                result++;
            }
            if (result == BracketIndex)
            {
                result = i;
                break;
            }
        }
    }
    return result;
}

function SearchSecretCombinations(StartSearchWordIndex){
    let result = {Key:StartSearchWordIndex, Value:StartSearchWordIndex}
    let UsedBracketIndex = UsedBracketsIndexFind(StartSearchWordIndex);
    let used = false;
    UsedBracketsIndex.forEach(index => {
        if (index == UsedBracketIndex)
            {
                //console.log(result);
                used = true;
                return result;
            }
    });
    if (used) {
        used = false;
        return result;
    }
    
    let OpenBracketType = OpenBrackets.indexOf(WordsTable[StartSearchWordIndex]);
    for (let i = StartSearchWordIndex; i < (((StartSearchWordIndex + DumpWidth) >= WordsTable.length) ? WordsTable.length : StartSearchWordIndex + DumpWidth); i++)
    {
        if (WordsTable[i].length > 1)
        {
            result = {Key: StartSearchWordIndex, Value: StartSearchWordIndex};
            break;
        }
        if (WordsTable[i] == (CloseBrackets[OpenBracketType]))
        {
            result = {Key: StartSearchWordIndex, Value: i};
            break;
        }
    }

    if (Math.floor(WordsTableRanges[result.Key].Key / DumpWidth) != Math.floor(WordsTableRanges[result.Value].Key / DumpWidth))
    {
        result = {Key: StartSearchWordIndex, Value: StartSearchWordIndex};
    }

    return result;
}